import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {
	setSelect, 
	getBooksIsNeed, 
	invalidateBooks
} from '../../store/actions.js'

import Picker from '../components/Picker.js'
import Books from '../components/Books.js'

class AsyncBooks extends React.Component {
	constructor(props) {
		super(props)
		this.handleChange = this.handleChange.bind(this)
		this.refreshPage = this.refreshPage.bind(this)
	}

	handleChange (nextSelect) {
		const {dispatch} = this.props
		dispatch(setSelect(nextSelect))
	}

	refreshPage (e) {
		e.preventDefault();
		const {dispatch, currentSelect} = this.props;
		dispatch(invalidateBooks(currentSelect))
		dispatch(getBooksIsNeed(currentSelect))
	}

	componentWillReceiveProps(nextProps) {
		console.log(nextProps)
		const {dispatch, currentSelect} = nextProps
		if(currentSelect !== this.props.currentSelect) {
			dispatch(getBooksIsNeed(currentSelect))
		}
	}

	componentDidMount() {
		const {currentSelect, dispatch} = this.props
		dispatch(getBooksIsNeed(currentSelect))
	}

	render() {
		const {currentSelect, isLoading, lastUpdate, bookList} = this.props
		return (
			<div>
				<Picker selected={currentSelect} onChange={this.handleChange} options={[{value: 'letter', name: '文学'}, {value: 'tech', name: '科技'}]}/>
				<p>
					{
						lastUpdate && <span>最后更新于：{new Date(lastUpdate).toLocaleTimeString()}.{'  '}</span>
					}
					{
						<a href="#" onClick={this.refreshPage}>刷新</a>
					}
				</p>
				
				{isLoading ? <p>数据加载中，请稍等.....</p> : ''}

				<Books books={bookList} />
			</div>
			
		)
	}
}

function mapStateToProps(state) {
	const {currentSelect, booksBySelect} = state
	const books = booksBySelect[currentSelect] || {isLoading: true, data: []}
	return {
		currentSelect,
		isLoading: books.isLoading,
		bookList: books.data,
		lastUpdate: books.lastUpdate
	}
}

export default connect(mapStateToProps)(AsyncBooks)
