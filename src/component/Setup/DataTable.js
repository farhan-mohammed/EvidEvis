import { map } from './map.png';
import React from 'react';
import DataList from './DataList.js'
import ListQuery from '../apis/basic.js'
class DataTable extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			resp:{}
		}
	}
	renderElements=()=>{
		return (this.props.elements.map((x)=>{return <li class="box btn-light table-entry" key={x} onClick={()=>{    this.searchDeviceID(x)  }}     >{x}</li>}))
	}
	searchDeviceID = async (devID) => {
          const apiResponse = await ListQuery.get(`/events?device-id=${devID.toString()}`);
          this.setState({ resp:apiResponse.data});
      };
	render() {
		console.log(this.props)
		return(
			<span>
			<ul className='table-container'>
				<li className='box btn-dark table-head'>Locations</li>
				{this.renderElements()}
			</ul>
			<DataList dataResponse = {this.state.resp}/>
			</span>
		)
	}
}
export default DataTable;
