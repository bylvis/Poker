import React from "react"
import './box.css'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
class Boxs extends React.Component{
    componentDidMount(){
        const smallBoxs = document.querySelectorAll('.smallBox')
        smallBoxs.forEach((smallBox=>smallBox.addEventListener('click',e=>{
            e.target.style.backgroundColor = 'black';
            e.stopPropagation()
        })))
    }
    render(){
        return(
            <div className='bigBox'>
                    <Link className={'smallBox'+this.props.className} to='/drum' title='网页鼓'></Link>
                    <Link className={'smallBox'+this.props.className} to='/clock' title='网页时钟'></Link>
                    <div className='smallBox'>link</div>
                    <div className='smallBox'>link</div>
                    <div className='smallBox'>link</div>
                    <div className='smallBox'>link</div>
                    <div className='smallBox'>link</div>
                    <div className='smallBox'>link</div>
                    <div className='smallBox'>link</div>
                    <div className='smallBox'>link</div>
            </div>
        )
    }
}
export default Boxs