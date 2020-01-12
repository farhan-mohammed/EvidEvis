import React from 'react'

class Location extends React.Component {
  constructor(props){
    super(props)
    this.state={}
  }
  componentDidMount(){this.setState()}

  draw(ctx, canvas){
    ctx.beginPath();
    ctx.arc(this.props.x, this.props.y, 15, 0, 2 * Math.PI, false);
    ctx.textAlign = "center";
    ctx.fillStyle = '#34495e';
    ctx.fillText(this.props.name, this.props.x, this.props.y+30)
    ctx.fill();
    ctx.lineWidth = 4;
    ctx.strokeStyle = 'black';
    ctx.stroke();
  }

  checkPressed(x2,y2){
    let x1 = this.props.x;
    let y1 = this.props.y;
    console.log(x1,x2, y1,y2, (Math.sqrt(Math.pow(x1-x2,2)+Math.pow(y1-y2,2))))
    console.log(Math.sqrt(Math.pow(x1-x2,2)+Math.pow(y1-y2,2) <= 1600))
    if(Math.sqrt(Math.pow(x1-x2,2)+Math.pow(y1-y2,2)<=1600)){
      return this.props.name
    }
    return undefined
  }
}

export default Location
