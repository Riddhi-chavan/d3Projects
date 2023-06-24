const svg = d3.select('svg');

const width = +svg.attr('width');
const height = +svg.attr('height');

console.log(svg);

const xvlaue = d =>d.population ;
const yvalue = d =>  d.year;



//margin conventions
const margin = { top: 20, left: 200, right: 10, bottom: 30 }
const paddingwidth = 960 - margin.left - margin.right;
const paddingheight = 500 - margin.top - margin.bottom;


//making group
const g = svg.append('g')
  .attr('transform', `translate(${margin.left},${margin.top})`);

//creating a rectangle for data row
const access = data => {
  //using linear and band scale
  const xscale = d3.scaleLinear()
    .domain([0, d3.max(data, xvlaue)])
    .range([0, paddingwidth - 20])
    .nice();

  const yscale = d3.scalePoint()
    .domain(data.map(yvalue))
    .range([0, paddingheight])
    .padding(1)

  const format = number => d3.format('.2s')(number)
    .replace('k', 'M')




  g.append('g').call(d3.axisLeft(yscale).tickSize(-paddingwidth + 18))
    .select('.domain')
    .remove();
  g.append('g').call(d3.axisBottom(xscale).tickFormat(format).tickSize(-paddingheight + 38))
    .attr('transform', `translate(0,${paddingheight})`)
    .select('.domain')
    .remove();


  console.log(yscale.domain());

  g.selectAll('circle').data(data)
    .enter()
    .append('circle')
    .attr('cx', d => xscale(xvlaue(d)))
    .attr('cy', d => yscale(yvalue(d)))
    .attr('r', 20)

  console.log();
}

  

//representing a data table in js
d3.csv('dotgrapg.csv')
  .then(data => {
    data.forEach(d => {
     d.year = +d.year
     d.population = +d.population
     })
    access(data);
    console.log(data)
   
  });



g.append('text')
  .text('Score of Students')
  .attr('x', width / 3)
  .attr('class', 'title')

g.append('text')
  .text('Marks')
  .attr('y', paddingheight / 2 + 250)
  .attr('x', width / 3)

g.append('text')
  .text('Student')
  .attr('x', -200)
  .attr('transform', `rotate(-90)`)
  .attr('y', -100)

