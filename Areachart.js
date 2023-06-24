d3.csv('Areachart.csv')
  .then(data => {
        data.forEach(d =>{
          d.population =  parseFloat(d.population);
          d.year = new Date(d.year);
          
        });
        console.log(data);
  
    const margin = {top:60 ,right:20,left: 200, bottom: 10 };
    const innerwidth = 960 -  margin.left - margin.right ;
    const innerhight = 300- margin.top - margin.bottom; 

         

  
    const svg = d3.select('svg');
    const xvalue = d => d.population;
    const yvalue = d => d.year;

    const xscale = d3.scaleTime()
    .domain(d3.extent(data, xvalue))
    .range([0, innerwidth]);


 

   const g= svg.append('g')
     .attr('transform',`translate(${margin.left},${margin.top})`)

     const yscale = d3.scaleLinear()
                  .domain(d3.extent([0,d3.max(data, yvalue)]))
                  .range([innerhight,0]);
   
     const areagenerator = d3.area()
            .y1(d => yscale(yvalue(d)))
            .y0(innerhight)
            .x(d => xscale(xvalue(d)));

            g.append('path')
            .attr('class', 'line-path')
            .attr('d' ,areagenerator(data));

   
       
     const xAxis = d3.axisBottom(xscale)
                .tickSize(-innerhight);

           const yAxisformat = number => 
                 d3.format('.2s')(number)
                  .replace('T','B')
                  .replace('G','B');

                  

             
        const yAxis =  d3.axisLeft(yscale)
              .ticks(10)
              .tickFormat(yAxisformat)
               .tickSize(-innerwidth);
                      

         g.append('g').call(yAxis)
             .selectAll('.domain ')
             .remove();


         const xAxisG =  g.append('g')
                  .call(xAxis)
                   .attr('transform',`translate(0,${innerhight})`);

            xAxisG.select('.domain ').remove();

             xAxisG.append('text')
               .text('Time  ')
               .attr('class', 'lable')
               .attr('fill', 'black')
                .attr('y',40)
                .attr('x',innerwidth/2);

    
                 
       
           
        
      g.append('text')
             
      .text('World Population')
      .attr('y',-15)
      .attr('x',500/2);


      g.append('text')
      .attr('transform',`rotate(-90)`)
      .attr('x',-165)
      .attr('y',-50)
      .text('Population')
         
    });



  
 