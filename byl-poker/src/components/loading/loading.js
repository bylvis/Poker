import React from "react"
import './loading.css'
class Loading extends React.Component {
    render() {
        return (
            <div className='heartBg'>
                <div className="heart">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        )
    }
}
export default Loading