import {connect} from 'react-redux'
import {setVisibilityFilter} from '../../store/actions.js'
import Link from '../components/Link.js'

const mapStateToProps = (state, ownProp) => ({
	active: ownProp.filter === state.visibilityFilter
})

const mapDispatchToProps = (dispatch, ownProp) => ({
	onClick:() => {
		console.log(ownProp.filter)
		dispatch(setVisibilityFilter(ownProp.filter))
	}
})

export default connect(mapStateToProps, mapDispatchToProps)(Link)

