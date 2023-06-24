const svg = d3.select('svg');
const width  = +svg.attr('width');
const height  = +svg.attr('height');

const xvlaue = d => d.marks;
const yvalue = d => d.name;

//margin conventions
 const margin  = {top : 40 , left : 200 , right : 10 , bottom :90}
 const paddingwidth = 960 - margin.left - margin.right ;
 const paddingheight = 500 - margin.top - margin.bottom ;
 
 console.log(margin.top)
 //making group
  const g =  svg.append('g')
   .attr('transform' , `translate(${margin.left},${margin.top})`);

    //creating a rectangle for data row
    const access = data =>
    { 
     //using linear and band scale
      const xscale = d3.scaleLinear()
      .domain([0,d3.max(data ,xvlaue)])
      .range([0 ,paddingwidth]);

      const yscale = d3.scaleBand()
       .domain(data.map(yvalue))
       .range([0,paddingheight])
       .padding(0.1)

       const  format = number => 
       d3.format('.1s')(number)
       .replace('k','M')
      

       g.append('g')
       .call(d3.axisLeft(yscale))
       .selectAll('.domain')
       .remove();

       g.append('g').call(d3.axisBottom(xscale).tickFormat(format))
       .attr('transform' , `translate(0,${paddingheight})`)
  
       

    
         

      console.log(yscale.domain());
    
      g.selectAll('rect').data(data)
      .enter()
      .append('rect')
      .attr('y', d => yscale(yvalue(d)))
      .attr('width', d => xscale(xvlaue(d)))
      .attr('height', d => yscale.bandwidth())
    }


    //representing a data table in js
    d3.csv('marks.csv')
     .then(data =>{
       data.forEach(d =>{
        d.name = d.name;
        d.marks = +d.marks;
        
     })
     access(data);
    });
    
    g.append('text')
     .text('Score of Students')
     .attr('x',width/3)

     g.append('text')
     .text('Marks')
     .attr('y', paddingheight /2 + 250)
     .attr('x',width/3)

     g.append('text')
     .text('Student')
     .attr('x', -210)
     .attr('transform' ,`rotate(-90)`)
     .attr('y',-150)
    



