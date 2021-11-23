import React from "react"
import './box.css'
// import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import { HashRouter as Router, Switch, Route, Link } from 'react-router-dom'
class Boxs extends React.Component {
    state = {
        // 存储的是列表的路由数据
        JsList1: ['/drum', '/clock'],
        JsList2: ['/', '/'],
        WebglList1: ['/', '/'],
        WebglList2: ['/', '/'],
        VisList1: ['/', '/'],
        VisList2: ['/', '/'],
        BlogList1: ['/', '/'],
        BlogList2: ['', '/'],
        AIList1: ['', '/'],
        AIList2: ['', '/'],
    }
    componentDidMount() {
        const smallBoxs = document.querySelectorAll('.smallBox')
        smallBoxs.forEach((smallBox => smallBox.addEventListener('click', e => {
            e.target.style.backgroundColor = 'black';
            e.stopPropagation()
        })))

        // console.log(this.state['JsList'+this.props.className][0]);
        // console.log(1,this.state[this.props.list][0]);
        // console.log(2,this.state['JsList1'][0]);
    }

    render() {
        return (
            <div className='bigBox'>
                {/* 因为box要渲染十次 所以它的props会一直变 
                    传来一个props标记 对应这里state里的一个数组 数组里面十个标记字符串
                    传十个标记 就有100个对应的标识了
                    因为组件的渲染是异步的 所以任何一个组件里没找到下标都 会报错 因此要给出所有正确下标
                */}
                <Link className={'smallBox' + this.props.className} to={this.state[this.props.list][0]} title='网页鼓'></Link>
                <Link className={'smallBox' + this.props.className} to={this.state[this.props.list][1]} title='网页时钟'></Link>
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