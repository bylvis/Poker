import React from 'react';
import * as d3 from 'd3'

class Line extends React.Component{
    state= {
        width:300,
        height:300
    }
    componentDidMount(){
        const width = this.state.width
        const height = this.state.height
        // 创建基础svg画布 
        let svg = d3.select('.line')
        .append('svg')
        .attr('width',width)
        .attr('height',height)
        
        svg.append('line')
        .attr('x1',0)
        .attr('y1',0)
        .attr('x2',300)
        .attr('y2',300)
        .style('stroke','black')
        .style('stroke-width',2)

        svg.append('line')
        .attr('x1',300)
        .attr('y1',0)
        .attr('x2',0)
        .attr('y2',300)
        .style('stroke','black')
        .style('stroke-width',2)
    }

    render(){
        return(
            <div className='line' style={{
                float:'left',
            }}>

            </div>
        )
    }
}
export default Line