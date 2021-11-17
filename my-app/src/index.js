import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Force from './06force';
import * as d3 from 'd3'

class App extends React.Component{
    render(){
        return(
            <div className='todolist'>
                todolist
                <Force></Force>
            </div>
        )
    }
}

ReactDOM.render(<App></App>,document.querySelector('#root'))