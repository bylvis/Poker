import React from 'react';
import * as d3 from 'd3'

class Polyline extends React.Component {
    state = {
        width: 300,
        height: 300
    }
    componentDidMount() {
        const width = this.state.width
        const height = this.state.height
        const data = ['0,0','0,20','20,20', '20,40', '40,40']
        // 创建基础svg画布 
        let svg = d3.select('.polyline')
            .append('svg')
            .attr('width', width)
            .attr('height', height)

        svg.append('polyline')
        .attr('points',data)
        .style('fill','transparent')
        .style('stroke','black')
        .style('stroke-width',2)

    }

    render() {
        return (
            <div className='polyline' style={{
                float:'left',
                
            }}>

            </div>
        )
    }
}
export default Polyline