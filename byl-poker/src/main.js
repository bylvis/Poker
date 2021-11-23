import React from "react"
import './index.css'
import Boxs from "./components/box/box"
import Loading from "./components/loading/loading"
class Main extends React.Component {

    componentDidMount() {
        // console.log(this.state.listJS[0]);
        const panels = document.querySelectorAll('.panel')
        panels.forEach(panel => panel.addEventListener('click', this.toggleOpen))
        panels.forEach(panel => panel.addEventListener('transitionend', this.toggleActive))
        // console.log(1);
        const heartBg = document.querySelector('.heartBg')
        setTimeout(() => {
            heartBg.classList.add('heartBg1')
            // console.log(2);
            setTimeout(() => {
                heartBg.remove()
            }, 1000)
        }, 1200)

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
                <Loading></Loading>
                <div className="panels">
                    <div className="panel panel1">
                        {/* 这里是分别给继承类名 然后根据nth of child 给每个格子背景图片 */}
                        <Boxs className='1_1' list='JsList1'></Boxs>
                        <p>JS Challenge</p>
                        <Boxs list='JsList2'></Boxs>
                    </div>
                    <div className="panel panel2">
                        <Boxs className='' list='WebglList1'></Boxs>
                        <p>WebGl</p>
                        <Boxs className='' list='WebglList2'></Boxs>
                    </div>
                    <div className="panel panel3">
                        <Boxs list='VisList1'></Boxs>
                        <p>Vis</p>
                        <Boxs list='VisList2'></Boxs>
                    </div>
                    <div className="panel panel4">
                        <Boxs list='BlogList1'></Boxs>
                        <p>Blog</p>
                        <Boxs list='BlogList2'></Boxs>
                    </div>
                    <div className="panel panel5">
                        <Boxs list='AIList1'></Boxs>
                        <p>Algorithm</p>
                        <Boxs list='AIList2'></Boxs>
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