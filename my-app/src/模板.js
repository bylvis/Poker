import React from 'react';
import * as d3 from 'd3'

class Chat extends React.Component {
    state = {
        width: 300,
        height: 300
    }
    componentDidMount() {
        const width = this.state.width
        const height = this.state.height
        // 创建基础svg画布 
        let svg = d3.select('.line')
            .append('svg')
            .attr('width', width)
            .attr('height', height)
    }

    render() {
        return (
            <div>

            </div>
        )
    }
}
export default Chat