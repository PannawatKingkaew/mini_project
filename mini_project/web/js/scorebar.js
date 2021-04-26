var margin =
{
    top: 20,
    right: 149.50,
    bottom: 30,
    left: 149.50
};

var width = 1510 - margin.left - margin.right;
var height = 500 - margin.top - margin.bottom;

var svg = d3.select("body").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

var x = d3.scaleLinear()
      .range([0, width]);

var y = d3.scaleBand()
    .range([height, 0]);


var yAxis = d3.axisLeft(y);


d3.json("/material/json/score.json", function(error, data) {
    data.forEach(function(d) {
        d.name = d.name;
        d.point = +d.point;
      });
  data.sort(function(a, b)
  {
    return a.point - b.point;
  });

  x.domain([0, d3.max(data, function(d) { return d.point; })]);

  y.domain(data.map(function(d) { return d.name; }))
    .paddingInner(0.1);


  svg.selectAll(".bar")
      .data(data)
      .enter()
      .append("rect")
      .attr("class", "bar")
      .attr("x", 0)
      .attr("height", y.bandwidth())
      .attr("y", function(d) { return y(d.name); })
      .attr("width", function(d) { return x(d.point); });

  svg.selectAll("text")
			.data(data)
			.enter()
			.append("text")
			.attr("class", function(d) {return "label " + d.name;})
			.attr("x", 20)
			.attr("y", function(d) {return y(d.name) + 65;})
			.text( function(d) {return d.name + " : " + d.point ;})
			.attr("font-size", "60px")


});

function type(d)
{
  d.point = +d.point;
  return d;
}
