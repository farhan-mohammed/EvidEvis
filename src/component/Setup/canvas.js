import { map } from './map.png';
import React from 'react';
import Location from './Location.js';

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
			console.log(hit);
			if (hit !== undefined) {
				break;
			}
		}

		if (hit !== undefined) {
			alert('Selected ' + hit);
		} else if (input.value === '') {
			alert('No location name inputted');
		} else {
			const _location = new Location({ name: input.value, x: x, y: y });
			input.value = '';
			t.push(_location);
			this.setState({ points: t });
			this.updateCanvas();
		}
	};

	handleBackgroundChange(e) {
		const reader = new FileReader();
		const file = e.target.files[0];
		const canvas = this.refs.bgcanvas;
		const ctx = canvas.getContext('2d');
		var img = new Image();
		img.onload = function() {
			ctx.drawImage(img, 20, 20);
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
		const cnvsWidth = 700;
		const cnvsHeight = 500;
		const stretchO = { width: cnvsWidth, height: cnvsHeight };
		return (
			<div className="stretch">
				<input onChange={this.handleBackgroundChange} type="file" accept="image/*" />
				<br />
				<input type="text" ref="name" />
				<div style={{ position: 'relative', ...stretchO }} className="stretch">
					<canvas
						ref="bgcanvas"
						height={cnvsHeight}
						width={cnvsWidth}
						className="cnvs"
						disabled={!this.state.myTurn}
						style={{ position: 'absolute', ...stretchO }}
					/>
					<canvas
						ref="canvas"
						height={cnvsHeight}
						width={cnvsWidth}
						className="cnvs"
						style={stretchO}
						onClick={(e) => {
							this.update(e.clientX, e.clientY);
						}}
					/>

					<img ref="image" style={stretchO} position="absolute" src={map} className="hidden tt" />
				</div>
			</div>
		);
	}
}
export default Canvas;
