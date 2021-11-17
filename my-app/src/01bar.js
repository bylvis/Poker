import React from 'react';
import * as d3 from 'd3'

class Bar extends React.Component{
    state = {
        width:300,
        height:300
    }
  componentDidMount(){
    // 设置宽高常量
    const width =this.state.width,height = this.state.height
    // 设置值
    const dataset = [ 34,23,54,73,87,4]
    // 设置间隙也就是每根柱子的宽度
    const rectWidth = width / dataset.length
    // 创建基本画布
    let svg = d3.select('.Bar')
              .append('svg')
              .attr('width',width)
              .attr('height',height)

    // 创建y轴线性比例尺
    let yScale = d3.scaleLinear()
        .range([height,0])
        .domain([0,d3.max(dataset)])
    
    svg.selectAll('rect')
        .data(dataset)
        .enter()
        .append('rect')
        .attr('x',(d,i)=>rectWidth*i)
        .attr('y',d=>yScale(d))
        .attr('width',rectWidth/2)
        .attr('height',d=>{
          return height -yScale(d)
        })
  }

  render (){
    return (
      <div className='Bar' style={{
          width:this.state.width,
          float:'left',
          }}>
        
      </div>
    )
  }
}
export default Bar