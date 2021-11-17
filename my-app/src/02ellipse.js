import React from 'react';
import * as d3 from 'd3'

class Elipse extends React.Component{
    state={
        width:300,
        height:300
    }
    componentDidMount(){
        const width = this.state.width
        const height = this.state.height
        // 创建基础svg画布 
        let svg = d3.select('.ellipse')
                    .append('svg')
                    .attr('height',height)
                    .attr('width',width)
        svg.append('ellipse')
            .attr('cx',150)
            .attr('cy',150)
            .attr('rx',140)
            .attr('ry',100)
            .style('fill','red')
            .style('stroke','green')
            .style('stroke-width',4)
    }

    render(){
        return(
            <div className='ellipse' style={{
                float:'left',
                // backgroundColor:'pink',
                }}>

            </div>
        )
    }
}
export default Elipse