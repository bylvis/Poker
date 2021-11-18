import React from 'react';
import * as d3 from 'd3'
import './index.css'
class Forcelink extends React.Component {

    state = {
        width: 300,
        height: 300,
        nodes: [//节点集
            { name: "湖南邵阳" },
            { name: "山东莱州" },
            { name: "广东阳江" },
            { name: "山东枣庄" },
            { name: "赵丽泽" },
            { name: "王恒" },
            { name: "张欣鑫" },
            { name: "赵明山" },
            { name: "班长" }
        ],
        links: [//边集
            { source: 0, target: 4, relation: "籍贯", value: 0.3 },
            { source: 4, target: 5, relation: "舍友", value: 0.3 },
            { source: 4, target: 6, relation: "舍友", value: 0.3 },
            { source: 4, target: 7, relation: "舍友", value: 0.3 },
            { source: 1, target: 6, relation: "籍贯", value: 0.3 },
            { source: 2, target: 5, relation: "籍贯", value: 0.3 },
            { source: 3, target: 7, relation: "籍贯", value: 0.3 },
            { source: 5, target: 6, relation: "同学", value: 0.3 },
            { source: 6, target: 7, relation: "朋友", value: 0.3 },
            { source: 6, target: 8, relation: "职责", value: 0.3 }
        ]
    }
    creatForce() {


    }
    componentDidMount() {
        const nodes = this.state.nodes
        const links = this.state.links
        const width = this.state.width
        const height = this.state.height

        var colorScale = d3.scaleOrdinal()
            .domain(d3.range(nodes.length))
            .range(d3.schemeCategory10);
        // 创建svg画布
        const svg = d3.select('.forcelink')
            .append('svg')
            .attr('width', width)
            .attr('height', height)

        // 初始化力导向图
        const forceChat = d3.forceSimulation(nodes).on('tick', ticked)
            .force('link', d3.forceLink(links).distance(100))
            .force('center', d3.forceCenter(width / 2, height / 2))
            .force('charge', d3.forceManyBody().strength(-50).distanceMax(500))




        // 绘制线
        const lines = svg.append('g')
            .selectAll('line')
            .data(links)
            .enter()
            .append('line')
            .attr('stroke', (data, index) => {
                return 'black'
            })
            .attr('stroke-width', 2)
            .attr('class', (data, index) => {
                return 'show' + index
            }).on('mouseover', function (data, index) {
                d3.select(this).style('stroke-width', 8)
                document.querySelector(`.showNode${index}`).style.visibility = 'visible'
            }).on('mouseout', function (data, index) {
                // console.log(1);
                d3.select(this).style('stroke-width', 2)
                document.querySelector(`.showNode${index}`).style.visibility = 'hidden'
            })
        // 绘制线上文字
        const lineText = svg.append('g')
            .selectAll('text')
            .data(links)
            .enter()
            .append('text')
            .text(d => {
                return d.relation
            }).attr('fill', (data, index) => {
                // console.log(colorScale[index]);
                return colorScale(index)
            })
            .attr('class', (data, index) => {
                return 'showNode' + index
            }).on('mouseover', function () {
                console.log(1);
                // d3.select(this).style('visibility','hidden')
            })
        // 绘制点
        const nodesList = svg.append('g')
            .selectAll('.circle')
            .data(nodes)
            .enter()
            .append('circle')
            .attr('r', 10)
            .attr('fill', (data, index) => {
                // console.log(colorScale[index]);
                return 'red'
            })
            .call(d3.drag()
                .on('start', started)
                .on('drag', dragged)
                .on('end', ended))
            .on('mouseover', () => {
                console.log(1);
            })
        // 绘制点上文字
        const nodeText = svg.append('g')
            .selectAll('text')
            .data(nodes)
            .enter()
            .append('text')
            // 点上禁止 鼠标
            .style('pointer-events', 'none')
            // 设置居中
            .attr('text-anchor', 'middle')
            .text(d => {
                return d.name
            })
        function ticked() {
            // 更新线坐标
            lines
                .attr("x1", function (d) { return d.source.x; })
                .attr("y1", function (d) { return d.source.y; })
                .attr("x2", function (d) { return d.target.x; })
                .attr("y2", function (d) { return d.target.y; });
            // 更新文字节点坐标
            nodeText.attr('transform', (d) => {
                return 'translate(' + (d.x) + ',' + d.y + ')';
            });
            //   更新节点坐标
            nodesList
                .attr("transform", function (d) { return "translate(" + d.x + "," + d.y + ")"; });

            lineText.attr('x', (d) => {
                return (d.source.x + d.target.x) / 2;
            })
                .attr("y", function (d) {
                    return (d.source.y + d.target.y) / 2;
                });;
        }

        function started(d) {
            if (!d3.event.active) {
                forceChat.alphaTarget(0.8).restart();
            }
            d.fx = d.x;
            d.fy = d.y;
        }
        function dragged(d) {
            d.fx = d3.event.x;
            d.fy = d3.event.y;
        }
        function ended(d) {
            if (!d3.event.active) {
                forceChat.alphaTarget(0);
            }
            d.fx = null;
            d.fy = null;
        }
    }

    render() {
        return (
            <div className='forcelink' style={{
                float: 'left'
            }}>

            </div>
        )
    }
}
export default Forcelink