import React, {Component} from 'react';

export default class Forms extends Component {
	constructor(props) {
		super(props);
		this.state = {
			inputValue: '',
			textareaValue: '',
			radioValue: 'nan',
			ckValues: [],
			area: '',
			areas: ['beijing', 'chengdu']
		}
		this.handleInputChange = this.handleInputChange.bind(this);
		this.handleTextareaChange = this.handleTextareaChange.bind(this);
		this.handleRadioChange = this.handleRadioChange.bind(this);
		this.handleCheckboxChange = this.handleCheckboxChange.bind(this);
		this.handleSelectChange = this.handleSelectChange.bind(this);
		this.handleMulSelectChange = this.handleMulSelectChange.bind(this);
	}

	handleInputChange(e) {
		this.setState({
			inputValue: e.target.value
		})
	}

	handleTextareaChange(e) {
		this.setState({
			textareaValue: e.target.value
		})
	}

	handleRadioChange(e) {
		this.setState({
			radioValue: e.target.value
		})
	}

	handleCheckboxChange(e) {
		const {checked, value} = e.target;
		let {ckValues} = this.state;
		if(ckValues.indexOf(value) === -1) {
			ckValues.push(value);
		} else {
			ckValues = ckValues.filter(v => v !== value)
		}
		this.setState({
			ckValues
		})
	}

	handleSelectChange(e) {
		this.setState({
			area: e.target.value
		})
	}

	handleMulSelectChange(e) {
		const {options} = e.target;
		const areas = Object.keys(options)
			.filter(i => options[i].selected ===true)
			.map(v => options[v].value)
		this.setState({
			areas
		})
	}

	render() {
		const {inputValue, textareaValue, radioValue, ckValues, area, areas} = this.state;
		return (
			<div>
				<p> 单行输入框：
					<input type="text" value={inputValue} onChange={this.handleInputChange} />
					{inputValue}
				</p>
				<p>
					多行输入框：
					<textarea value={textareaValue} onChange={this.handleTextareaChange}/>
					{textareaValue}
				</p> 
				<p>
					单选：
					<label>
						男：
						<input 
							type="radio" 
							value="nan" 
							checked={radioValue === 'nan'} 
							onChange={this.handleRadioChange}/>
					</label>
					<br/>
					<label>
						女：
						<input 
							type="radio" 
							value="nv" 
							checked={radioValue === 'nv'} 
							onChange={this.handleRadioChange}/>
					</label>
					<br/>
					{radioValue === 'nan'? '---男' : '---女'}
				</p>
				<p>
					复选：
					<br/>
					<label>
						<input 
							type="checkbox" 
							value="daqiu"
							checked={ckValues.indexOf('daqiu') !== -1}
							onChange={this.handleCheckboxChange}/>
						打球
					</label>
					<br/>
					<label>
						<input 
							type="checkbox" 
							value="kdy"
							checked={ckValues.indexOf('kdy') !== -1}
							onChange={this.handleCheckboxChange}/>
						看电影
					</label>
					<br/>
					{ckValues.join(',')}
				</p>
				<p>
					下拉单选:
					<br/>
					<select value={area} onChange={this.handleSelectChange} >
						<option value="beijing">北京</option>
						<option value="shanghai">上海</option>
						<option value="chengdu">成都</option>
					</select>
					{area}
				</p>
				<p>
					下拉单选:
					<br/>
					<select value={areas} multiple={true} onChange={this.handleMulSelectChange} >
						<option value="beijing">北京</option>
						<option value="shanghai">上海</option>
						<option value="chengdu">成都</option>
					</select>
					{areas.join('.')}
				</p>
			</div>
		)
	}
}