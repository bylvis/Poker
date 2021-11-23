import React from "react"
import './clock.css'
// import { BrowserRouter as Router, Route, Link} from 'react-router-dom'
import { HashRouter as Router, Switch, Route,Link} from 'react-router-dom'
class Clock extends React.Component {
    componentDidMount() {
        // 选择时 分 秒 的针
        const secondHand = document.querySelector('.second-hand');
        const minsHand = document.querySelector('.min-hand');
        const hourHand = document.querySelector('.hour-hand');


        function setDate() {
            // 获取当前时间
            const now = new Date();
            // 获取当前秒
            const seconds = now.getSeconds();
            // 秒/60 *360 等于当前 秒对应的在一个圆中的刻度
            const secondsDegrees = ((seconds / 60) * 360) + 90;
            // 添加动画 转动
            secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

            const mins = now.getMinutes();
            const minsDegrees = ((mins / 60) * 360) + ((seconds / 60) * 6) + 90;
            minsHand.style.transform = `rotate(${minsDegrees}deg)`;

            const hour = now.getHours();
            const hourDegrees = ((hour / 12) * 360) + ((mins / 60) * 30) + 90;
            hourHand.style.transform = `rotate(${hourDegrees}deg)`;
        }
        // 函数执行时间 1000ms
        setInterval(setDate, 1000);
        // 执行
        setDate();
    }
    render() {
        return (
            <div>
            <Link to='/main' class='clockLink'></Link>
            <div class="clock">
                
                <div class="clock-face">
                    <div class="hand hour-hand"></div>
                    <div class="hand min-hand"></div>
                    <div class="hand second-hand"></div>
                </div>
            </div>
            </div>
        )
    }
}
export default Clock