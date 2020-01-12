import React from 'react'
export default class extends React.Component{
renderList = () => this.props.dataResponse.map(item=><div class='box btn-light table-snippet'key={item.id}>{item.id}</div>)
  render(){
      if (Object.getOwnPropertyNames(this.props.dataResponse).length === 0){
      return <div></div>
    }

    console.log(' i am rendering list now')
    console.log(this.props.dataResponse)
    return(
      <ul className='table-container'>
				<li className='box btn-dark table-head'>Events</li>
				{this.renderList()}
			</ul>
    )
  }
}
