import React from "react";
import reactDom from "react-dom";
// import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import { HashRouter as Router, Switch, Route,Link} from 'react-router-dom'
// 导航目录
// import Root from "./Root";
// 主页面
import Main from "./main";

// 鼓组件
import Drum from "./components/drum/drum.js";
// 时钟组件
import Clock from "./components/clock/clock";


class App extends React.Component {
    render() {
        return (
            <Router>
                <div>
                    {/* <h1>主页</h1> */}
                    <Link to='/'></Link>
                    <Link to='/main'></Link>
                    <Link to='/drum'></Link>
                    <Link to='/clock'></Link>
                    <Switch>
                        <Route path='/' exact>
                            {/* <Root></Root> */}
                            <Main></Main>
                        </Route>
                        <Route path='/main' exact>
                            <Main></Main>
                        </Route>
                        <Route path='/drum' exact>
                            <Drum></Drum>
                        </Route>
                        <Route path='/clock' exact>
                            <Clock></Clock>
                        </Route>
                    </Switch>

                    {/* <Route path='/main' exact component={ Main }></Route> */}
                </div>
            </Router>
        )
    }
}

reactDom.render(<App></App>,document.querySelector('#root'))