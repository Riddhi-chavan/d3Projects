const svg = d3.select('svg')



const projection = d3.geoNaturalEarth1();
const pathGenerator = d3.geoPath().projection(projection); 

 const g = svg.append('g');
 
g.append('path')
.attr('class', 'Sphere')
.attr('d', pathGenerator({type : 'Sphere'}));

d3.json('https://cdn.jsdelivr.net/npm/world-atlas@2/countries-50m.json')
    .then(data => {
      const countries = topojson.feature(data, data.objects.countries);
       
       console.log()
    
 
  g.selectAll('path')
    .data(countries.features)
     .enter()
     .append('path')
     .attr('class', 'county')
     .attr('d' ,  pathGenerator)
     .text( d => console.log(d))
     .append('title')
     .text(d => d.properties.name);

   g.call(zoom().on('zoom', () =>{
    g.attr('transform', d3.event.transform);
   })) 
    }); 


