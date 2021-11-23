
// import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import { HashRouter as Router, Switch, Route,Link} from 'react-router-dom'
const Root = ()=>{
	return (
        <div>
            <h1>H2</h1>
            <Link to='/main'>主页面</Link>
            <Link to='/drum'>网页鼓</Link>
            <Link to='/clock'>网页时钟</Link>
        </div>  
    )
}
export default Root;