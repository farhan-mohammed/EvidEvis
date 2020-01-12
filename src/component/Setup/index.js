import React, { Component } from 'react';
import Canvas from './canvas.js';

export default class Setup extends Component {
    render(){
        return(
        <div style={{width:'100%'}}>
          <Canvas ref="myCanvas"></Canvas>
        </div>)
      }
}
