const dataSimple = [5, 10, 15, 20, 25];

const svgSimple = d3.select("#chart")
    .append("svg")
    .attr("width", 400)
    .attr("height", 300);

svgSimple.selectAll("rect")
    .data(dataSimple)
    .enter()
    .append("rect")
    .attr("x", (d, i) => i * 50)
    .attr("y", (d) => 300 - d * 10)
    .attr("width", 40)
    .attr("height", (d) => d * 10)
    .attr("fill", "steelblue");
