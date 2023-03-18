// Set up data
const dataFruit = [
    { label: 'Apples', value: 20 },
    { label: 'Oranges', value: 25 },
    { label: 'Bananas', value: 15 },
    { label: 'Grapes', value: 10 },
    { label: 'Pears', value: 30 }
];

// Set up dimensions
const width = 500;
const height = 500;
const radius = Math.min(width, height) / 2;

// Set up color scale
const color = d3.scaleOrdinal()
    .range(['#98abc5', '#8a89a6', '#7b6888', '#6b486b', '#a05d56']);

// Create SVG element
const svgPie = d3.select('body')
    .append('svg')
    .attr('width', width)
    .attr('height', height)
    .append('g')
    .attr('transform', `translate(${width / 2},${height / 2})`);

// Set up pie layout
const pie = d3.pie()
    .value(d => d.value);

// Generate arc shapes
const arc = d3.arc()
    .outerRadius(radius - 10)
    .innerRadius(0);

// Generate pie chart
const path = svgPie.selectAll('path')
    .data(pie(dataFruit))
    .enter()
    .append('path')
    .attr('d', arc)
    .attr('fill', d => color(d.data.label))
    .on('mouseover', function(d) {
        d3.select(this)
            .attr('opacity', 0.7);
    })
    .on('mouseout', function(d) {
        d3.select(this)
            .attr('opacity', 1);
    });

// Add text labels
const text = svgPie.selectAll('text')
    .data(pie(dataFruit))
    .enter()
    .append('text')
    .attr('transform', d => `translate(${arc.centroid(d)})`)
    .attr('dy', '.35em')
    .text(d => d.data.label)
    .style('text-anchor', 'middle')
    .style('fill', 'white')
    .style('font-size', '12px');
