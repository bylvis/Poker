import React from "react"
// import './drumPC.css'
// import { BrowserRouter as Router, Route, Link} from 'react-router-dom'
import { HashRouter as Router, Switch, Route,Link} from 'react-router-dom'
class Drum extends React.Component {
    componentWillMount(){
        if((navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|wOSBrowser|BrowserNG|WebOS)/i))) {
            // document.write('<link href="shouji.css" rel="stylesheet" type="text/css" media="screen" />');
            require('./drumMobile.css');
            console.log('mobile');
        }
            else {
            // document.write('<link href="pc.css" rel="stylesheet" type="text/css" media="screen" />');
            console.log('pc');
            require('./drumPC.css')
        }
            
    }
    componentDidMount() {
        /*
    1.点击按键 触发声音
  */        function playSound(e) {
            // 选中当前的div
            const div = document.querySelector(`div[data-key="${e.keyCode}"]`)
            const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
            // 当前音频 时间归0 不然 重复点击 会有bug
            if(!audio) return
            audio.currentTime = 0
            audio.play()
            
            // 给当前div添加样式
            div.classList.add('playing')

        }
        function playSound1(e) {
            // 选中当前的div
            const div = e.target
            const key = e.target.getAttribute('data-key');
            const audio = document.querySelector(`audio[data-key="${key}"]`)
            if(!audio) return
            // 当前音频 时间归0 不然 重复点击 会有bug
            audio.currentTime = 0
            audio.play()
            div.classList.add('playing')
        }
        const keys = document.querySelectorAll('.key')
        // 给每个按键 添加事件 渐变完成 去除类
        keys.forEach(key => key.addEventListener('transitionend', () => key.classList.remove('playing')))
        // keys.forEach(key=>key.addEventListener(''))
        window.addEventListener('keydown', playSound)
        window.addEventListener('click', playSound1)
    }
    render() {
        return (
            
                <div className="keys">
                    <div data-key="65"className="key">
                        <kbd data-key="65">A</kbd>
                        <span  data-key="65" className="sound">clap</span>
                    </div>
                    <div data-key="83" className="key">
                        <kbd data-key="83">S</kbd>
                        <span data-key="83" className="sound">hihat</span>
                    </div>
                    <div data-key="68" className="key">
                        <kbd data-key="68">D</kbd>
                        <span data-key="68" className="sound">kick</span>
                    </div>
                    <div data-key="70" className="key">
                        <kbd data-key="70">F</kbd>
                        <span data-key="70" className="sound">hat</span>
                    </div>
                    <div data-key="71" className="key">
                        <kbd data-key="71">G</kbd>
                        <span data-key="71" className="sound">boom</span>
                    </div>
                    <div data-key="72" className="key">
                        <kbd data-key="72">H</kbd>
                        <span data-key="72" className="sound">ride</span>
                    </div>
                    <div data-key="74" className="key">
                        <kbd data-key="74" >J</kbd>
                        <span data-key="74"  className="sound">snare</span>
                    </div>
                    <div data-key="75" className="key">
                        <kbd  data-key="75">K</kbd>
                        <span  data-key="75" className="sound">tom</span>
                    </div>
                    <div data-key="76" className="key">
                        <kbd data-key="76">L</kbd>
                        <span data-key="76" className="sound">tink</span>
                    </div>
                
                <Link to='/main' className='drumLink'></Link>
                <audio data-key="65" src="sounds/clap.wav"></audio>
                <audio data-key="83" src="sounds/hihat.wav"></audio>
                <audio data-key="68" src="sounds/kick.wav"></audio>
                <audio data-key="70" src="sounds/openhat.wav"></audio>
                <audio data-key="71" src="sounds/boom.wav"></audio>
                <audio data-key="72" src="sounds/ride.wav"></audio>
                <audio data-key="74" src="sounds/snare.wav"></audio>
                <audio data-key="75" src="sounds/tom.wav"></audio>
                <audio data-key="76" src="sounds/tink.wav"></audio>
            </div>
        )
    }
}
export default Drum