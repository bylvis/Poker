/* eslint no-undef: "off"*/
/* global jQuery, padding */
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as d3 from 'd3'


import Bar from './01bar';
import Ellipse from './02ellipse';
import Line from './03line'
import Polygon from './04polygon';
import Polyline from './05polyline';
class App extends React.Component{
  render(){
    return(
      <div className='App'>
        <Bar></Bar>
        <Ellipse></Ellipse>
        <Line></Line>
        <Polygon></Polygon>
        <Polyline></Polyline>
      </div>
    )
  }
}


ReactDOM.render(<App></App>,document.querySelector('#root'))