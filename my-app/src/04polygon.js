import React from 'react';
import * as d3 from 'd3'

class Polygon extends React.Component{
    state= {
        width:300,
        height:300
    }
    componentDidMount(){
        const width = this.state.width
        const height = this.state.height
        // 创建基础svg画布 
        let svg = d3.select('.polygon')
        .append('svg')
        .attr('width',width)
        .attr('height',height)

        // 添加多边形
        svg.append('polygon')
        .attr('points','200,100 300,210 170,250')
        .style('fill','pink')
        .style('stroke','black')
        .style('stroke-width',4)
    }

    render(){
        return(
            <div className='polygon' style={{
                float:'left',
            }}>

            </div>
        )
    }
}
export default Polygon