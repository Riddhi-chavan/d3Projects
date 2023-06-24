   const svg = d3.select('svg');

   const  width =  2000;
   const height  = 1300;
   

   const margin = { top: 10, right: 10, bottom: 10, left: 100 };
   const innerWidth = width - margin.left- margin.right;
   const innerHeight = height - margin.top - margin.bottom;

   const treelay = d3.tree().size([innerWidth, innerHeight]);

   d3.json('worlds.json')
   .then(
      data => {
         const root = d3.hierarchy(data);
         const linked = treelay(root).links();
         const linkpath =  d3.linkHorizontal()
         .x( d => d.y)
         .y(d => d.x);

         console.log(root);

         
         const zoomg =  svg.attr('width', 10000)
         .attr('height',  2000)
         .append('g')
         



         const g = zoomg.append('g')
         .attr('transform', `translate(${margin.left},${margin.top})`);
         
         g.selectAll('path')
         .data(linked)
         .enter()
         .append('path')
         .attr('class','path')
         .attr('d', linkpath)

         const dx = 10; // Adjust this value to increase/decrease the horizontal spacing between nodes
         const dy = width / (root.height );
         g.selectAll('g.node')
            .attr('transform', d => `translate(${d.y * dx},${d.x * dy})`);

         g.selectAll('text')
         .data(root.descendants())
         .enter()
         .append('text')
         .attr('x', d => d.y)  
         .attr('y', d => d.x)
         .attr('dy',  '0.32em')
         .attr('font-size', d => 3.4 - d.depth + 'em')
         .attr('class','text')
         .attr('text-anchor', d => d.children ? 'middle' : 'start')
         .text(d => d.data.data.id) 


      }
   )


