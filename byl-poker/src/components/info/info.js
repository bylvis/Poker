import react from "react";
import reactDom from "react-dom";
import './info.css'
import { HashRouter as Router, Switch, Route, Link } from 'react-router-dom'
class Info extends react.Component{
    componentDidMount(){
        const arrow_left = document.querySelector('.arrow_left')
        const arrow_right = document.querySelector('.arrow_right')
        const info = document.querySelector('#info')
        arrow_left.addEventListener('click',function(){
            console.log('left');
            info.classList.add('info_hide')
            arrow_right.classList.add('arrow_block')
        })
        arrow_right.addEventListener('click',function(){
            console.log('right');
            info.classList.remove('info_hide')
            arrow_right.classList.add('arrow_none')
            arrow_right.classList.remove('arrow_block')
        })
    }
    render(){
        return(
            <div id='info'>
                <div className='arrow arrow_right'></div>
                <div className='contact'>
                    <Link className='contact_son' to='/'></Link>
                </div>
                <div className='contact'>
                    <Link className='contact_son' to='/'></Link>
                </div>
                <div className='contact'>
                    <Link className='contact_son' to='/'></Link>
                </div>
                <div className='contact'>
                    <Link className='contact_son' to='/'></Link>
                </div>
                <div className='contact'>
                    <Link className='contact_son' to='/'></Link>
                </div>
                <div className='back'>
                    <div className='arrow arrow_left'></div>
                </div>
            </div>
        )
    }
}
export default Info