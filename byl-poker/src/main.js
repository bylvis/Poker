import React from "react"
import './index.css'
import Boxs from "./components/box/box"
class Main extends React.Component {
    componentDidMount() {
        const panels = document.querySelectorAll('.panel')
        panels.forEach(panel => panel.addEventListener('click', this.toggleOpen))
        panels.forEach(panel => panel.addEventListener('transitionend', this.toggleActive))
    }
    toggleOpen(e) {
        // console.log(1);
        this.classList.toggle('open')
    }
    toggleActive(e) {
        // console.log(1);
        if (e.propertyName.includes('flex')) {
            this.classList.toggle('open-active');
        }
    }
    render() {
        return (
            <div>
                <div className="panels">
                    <div className="panel panel1">
                        <Boxs className='1-1'></Boxs>
                        <p>JS Challenge</p>
                        <Boxs className='1-2'></Boxs>
                    </div>
                    <div className="panel panel2">
                        <Boxs></Boxs>
                        <p>WebGl</p>
                        <Boxs></Boxs>
                    </div>
                    <div className="panel panel3">
                        <Boxs></Boxs>
                        <p>Vis</p>
                        <Boxs></Boxs>
                    </div>
                    <div className="panel panel4">
                        <Boxs></Boxs>
                        <p>Blog</p>
                        <Boxs></Boxs>
                    </div>
                    <div className="panel panel5">
                        <Boxs></Boxs>
                        <p>Algorithm</p>
                        <Boxs></Boxs>
                    </div>
                </div>
                <div className='fotter'>
                    <a href="https://beian.miit.gov.cn/" target="_blank">
                        蜀ICP备2021028064号-1
                    </a>
                </div>
            </div>
        )
    }
}
export default Main
// reactDom.render(<Main></Main>, document.querySelector('#root'))