// import { select} from 'd3';

const svg= d3.select('svg');
  const circle = svg.append('circle')
   .attr('r',200)
   .attr('cx',960/2)
   .attr('cy',500/2)
   .attr('fill','yellow')
   .attr('stroke','black');

   const lefteye= svg.append('circle')
   .attr('r',20)
   .attr('cx',960/2-100)
   .attr('cy',500/2-70)
   .attr('fill','black')
   .attr('stroke','black')
    .transition().duration(2000)
      .attr('cx',960/2 -120)
      .transition().duration(2000)
      .attr('cx',960/2 -100)
   ;

   const righteye= svg.append('circle')
   .attr('r',20)
   .attr('cx',960/2+100)
   .attr('cy',500/2-70)
   .attr('fill','black')
   .attr('stroke','black')
   .transition().duration(2000)
      .attr('cx',960/2 +60)
      .transition().duration(2000)
      .attr('cx',960/2 +100)
   ;

   const g=svg.append('g')
     .attr('transform',`translate(${960/2}, ${500/2})`);
  const mouth =g.append('path')
  .attr('d', d3.arc()({
    innerRadius: 150,
    outerRadius: 130,
    startAngle:  Math.PI /2,
    endAngle: Math.PI *3/2 
  }))


const rectangle = svg.append('rect')
  .attr('x', 960 / 2 - 140) // x-coordinate of the top-left corner
  .attr('y', 500 / 2 - 120) // y-coordinate of the top-left corner
  .attr('width', 80) // width of the rectangle
  .attr('height', 17) // height of the rectangle
  .attr('fill', 'black') // fill color of the rectangle
  .attr('stroke', 'black')
  .transition().duration(2000)
    .attr('y',70 +30)
  .transition().duration(2000)
    .attr('y',500 / 2 - 120)
  
const rightbrows = svg.append('rect')
.attr('x', 960 / 2 + 65) // x-coordinate of the top-left corner
.attr('y', 500 / 2 - 120) // y-coordinate of the top-left corner
.attr('width', 80) // width of the rectangle
.attr('height', 17) // height of the rectangle
.attr('fill', 'black') // fill color of the rectangle
.attr('stroke', 'black')
.transition().duration(2000)
    .attr('y',70 +30)
  .transition().duration(2000)
    .attr('y',500 / 2 - 120)

; // stroke color of the rectangle
 
  
 