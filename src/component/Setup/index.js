import React, { Component } from 'react';
import Canvas from './canvas.js';

export default class Setup extends Component {
    render(){
        return(
        <div className="stretch">
          <Canvas ref="myCanvas"></Canvas>
        </div>)
      }
}
