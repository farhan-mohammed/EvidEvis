import { map } from './map.png';
import React from 'react';

class DataTable extends React.Component {
	constructor(props) {
		super(props);
		this.states = {
			elements: []
		}
	}

	componentDidMount() {
	}

	update(list){
		this.states.elements = []
		for(let item of list){
//			var reactNodeLi = React.createElement('li', {id:'li'}, item);
			console.log(item)
			var li = React.createElement('li',{},
				[React.createElement('a', {href:item.props.name}, item.props.name)])
			this.states.elements.push(li);
		}
		this.forceUpdate();
	}
	render() {
		const elements = this.states.elements
		return(
			<ul className='table-container'>
				<li className='box btn-dark table-head'>Locations</li>
				<li className='box btn-light table-entry'>API Wifi</li>
				<li className='box btn-light table-entry'>dasdsa</li>
				<li className='box btn-light table-entry'>dasdsa</li>
				{elements}
			</ul>
		)
	}
}
export default DataTable;
