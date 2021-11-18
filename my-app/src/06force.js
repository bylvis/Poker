import React from 'react';
import * as d3 from 'd3'

class Force extends React.Component {
    state = {
        width: 300,
        height: 300
    }
    creatForce(){
        const width = this.state.width;
        const height = this.state.height;
        var node = [
            { name: 'byl1' },
            { name: 'byl' },
            { name: 'byl' },]
        var svg = d3.select('.force')
            .append('svg')
            .attr('wdith', width)
            .attr('height', height)
            .style('background-color', 'skyblue')
        // 颜色比例尺
        var scaleColor = d3.scaleOrdinal()
            .domain(d3.range(node))
            .range(d3.schemeCategory10)
        // 构建力导向图
        var force = d3.forceSimulation()
            .force("link", d3.forceLink()) //
            // 节点碰撞力
            .force('collision', d3.forceCollide(1).strength(0.1))
            .force("charge", d3.forceManyBody().strength(-20))
            .force("center", d3.forceCenter(width / 2, height / 2))
        
        // 设置稳定系数 越大越不稳定
        force.alphaDecay(0.05)
        // force.force('charge').strength(-50)
        // force.force('center').x(width/2).y(height/2)
        force.nodes(node)
        var nodesList = svg.selectAll('.circle')
            .data(node)
            .enter()
            .append('g')
            .attr('transform', (data, index) => {
                console.log(data.x);
                return 'translate(' + data.x + ',' + data.y + ')'
            })

        // 绘制节点
        nodesList.append('circle')
            .attr('r', 20)
            .attr('fill', (data, index) => {
                return scaleColor(index)
            }).call(d3.drag()
            .on('start', started)
            .on('drag', dragged)
            .on('end', ended)
        )

        // 设置拖拽事件
        function started(d) {
            if (!d3.event.active) {
                force.alphaTarget(0.2).restart()
            }
            d.fx = d.x
            // fx fy 表示下次节点被固定的位置
            // 每次tick结束node.x都会被设置为node.fx，node.vx设置为0
            d.fy = d.y
        }
        function dragged(d) {
            d.fx = d3.event.x
            d.fy = d3.event.y
        }

        function ended(d) {
            if (!d3.event.active) {
                // 设置为0直接停止，如果大于alphaMin则会逐渐停止
                force.alphaTarget(0)
            }
            d.fx = null
            d.fy = null
        }
        // 设置tick事件 更新节点位置
        force.on('tick', () => {
            // 更新节点坐标
            nodesList.attr('transform', (d) => {
                // console.log(d.x,d.y);
              return d && 'translate(' + d.x + ',' + d.y + ')';
            });
          });
        
        
    }

    componentDidMount() {
        this.creatForce()
    }

    render() {
        return (
            <div className='force' style={{
                float:'left'}}>

            </div>
        )
    }
}
export default Force