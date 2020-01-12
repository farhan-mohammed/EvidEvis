import React from 'react'
export default class extends React.Component{

epochcon(utcSeconds){
  var d = new Date(0); // The 0 there is the key, which sets the date to the epoch
  d.setUTCSeconds(utcSeconds);
  return(d)
}
renderList = () => this.props.dataResponse.map(item=><p className="box btn-light table-snippet"><a href="#" onClick={()=>{this.submitname()}}>{this.epochcon(item.id)}</a></p>)
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
      </span>
    )
  }
}
