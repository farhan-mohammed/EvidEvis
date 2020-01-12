import { map } from './map.png';
import React from 'react';
import Location from './Location.js';
import DataTable from './DataTable.js';
class Canvas extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			points: [],
			pic: undefined
		};
		this.handleBackgroundChange = this.handleBackgroundChange.bind(this);
	}

	update = (x, y) => {
		var t = this.state.points;
		const canvas = this.refs.canvas;
		var rect = canvas.getBoundingClientRect();
		x = x - rect.left;
		y = y - rect.top;
		const input = this.refs.name;

		var hit = undefined;
		for (let point of this.state.points) {
			hit = point.checkPressed(x, y);
			if (hit !== undefined) {break;}
		}

    const nametaker = this.refs.nametaker;
		if (hit !== undefined) {
			alert('Selected ' + hit);
		} else if (input.value == '') {
      nametaker.classList.remove('hidden');
		} else {
			const _location = new Location({ name: input.value, x: x, y: y });
			input.value = '';
			t.push(_location);
			this.setState({ points: t });

      const table1 = this.refs.table1;
      table1.update(this.state.points)
			this.updateCanvas();
		}
	};
  submitname(){

  }
	handleBackgroundChange(e) {
		const reader = new FileReader();
		const file = e.target.files[0];
		const canvas = this.refs.bgcanvas;
		const ctx = canvas.getContext('2d');
    const choose_image = this.refs.map;
    choose_image.classList.add('hidden')
		var img = new Image();
		img.onload = function() {
			ctx.drawImage(img, 20, 20);
      //canvas.backgroundImage = img;
		};
		img.src = URL.createObjectURL(e.target.files[0]);
	}

	updateCanvas = () => {
		const canvas = this.refs.canvas;
		const ctx = canvas.getContext('2d');
		ctx.clearRect(0, 0, canvas.width, canvas.height);
		for (let point of this.state.points) {
			point.draw(ctx, canvas);
			//point.draw(ctx, canvas);
		}
	};
	componentDidMount() {
		const canvas = this.refs.canvas;
		const ctx = canvas.getContext('2d');
		const img = this.refs.image;
	}

	render() {
		const cnvsWidth = '800px';
		const cnvsHeight = '700px';
		const stretchO = { width: cnvsWidth, height: cnvsHeight };
		return (
			<div className="stretch">
        <div className="table-container btn-dark mid" ref="map">
          <p class="box btn-dark table-head">Submit a picture</p>
          <div class="flex-container">
            <div class="pf"></div>
            <div class='flex-item box btn-light table-entry fileupload' id="upload">
              <input onChange={this.handleBackgroundChange} type="file" title=" " accept="image/*" />Upload picture here
            </div>
            <div class="pf"></div>
          </div>
        </div>
        <ul className="table-container btn-dark mid hidden" ref='nametaker'>
          <li className='box btn-dark table-head nmu'>Name of location</li>
          <li className='box btn-dark nmu'><input className='box btn-light flex-item' tabletype="text" ref="name"/></li>
          <li className="box btn-dark"><a className="fn-light"href="#" onclick="submitname">Submit</a></li>
        </ul>
        <div style={{ position: 'relative', ...stretchO }} className="stretch flex-container">
					<canvas
						ref="bgcanvas"
						height={cnvsHeight}
						width={cnvsWidth}
						className="cnvs flex-item"
						disabled={!this.state.myTurn}
						style={{...stretchO }}
					/>
					<canvas
						ref="canvas"
						height={cnvsHeight}
						width={cnvsWidth}
						className="cnvs flex-item"
						style={stretchO}
						onClick={(e) => {
							this.update(e.clientX, e.clientY);
						}}
					/>
          <img ref="image" style={stretchO} position="absolute" src={map} className="hidden tt" id="im"/>
          <div className='flex-item'>
          <DataTable className="mleft" ref="table1"/>
          </div>


				</div>
			</div>
		);
	}
}
export default Canvas;
