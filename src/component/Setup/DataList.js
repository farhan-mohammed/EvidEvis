import React from 'react'
import DataTable from './DataTable.js'
import ListQuery from '../apis/basic.js'

export default class extends React.Component{
constructor(props){
  super(props)
  this.state={
    resp:{}
  }
}
epochcon(utcSeconds){
  var d = new Date(0); // The 0 there is the key, which sets the date to the epoch
  d.setUTCSeconds(utcSeconds);
  var hour = d.getHours(),
      minute = '' + d.getMinutes(),
      seconds = d.getSeconds();

  return [hour, minute, seconds].join(':');
  return(d)
}
searchTime = async(devID) =>{
    const apiResponse = await ListQuery.get(`/events?id=${devID.toString()}`);
    this.setState({ resp:apiResponse.data[0]});
    console.log('I am the api call!!')
    console.log(this.state.resp)
    const _info = this.refs.info
    _info.classList.remove('hidden')
    this.state.text1 = this.state.resp['event']
    this.state.text2 = this.state.resp['device-id']
    this.state.text3 = this.state.resp['guest-id'] || ""
    this.state.text4 = this.epochcon(this.state.resp['id'])
    this.forceUpdate();
};

renderList = () => this.props.dataResponse.map(item=><p className="box btn-light table-snippet"><a href="#" onClick={()=>{this.searchTime(item.id)}}>{this.epochcon(item.id)}</a></p>)
  render(){
      if (Object.getOwnPropertyNames(this.props.dataResponse).length === 0){
      return <div></div>
    }

    console.log(' i am rendering list now')
    console.log(this.props.dataResponse)
    return(
      <span>
      <div className="box btn-dark">Events</div>
      <div className='table-container table-snippet-container'>
				{this.renderList()}
      </div>
      <ul className="table-container btn-dark mid2 hidden" onClick={()=>{this.refs.info.classList.add('hidden')}} ref='info'>
        <li className='box btn-dark table-head'>Name of location</li>
        <li className='box btn-light'>{this.state.text1} @ {this.state.text2}</li>
        <li className='box btn-light'>{this.state.text3} {this.state.text4}</li>
      </ul>
      </span>
    )
  }
}
