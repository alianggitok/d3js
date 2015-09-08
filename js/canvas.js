;(function(d3){

	var canvas=d3.select('#canvas');
	var svg=canvas.append('svg:svg');

	svg.attr({
		'width':500,
		'height':280
	});

	var g=svg.append('g');
	g.attr('transform','translate(50,30)');

	var path=g.append('path'),
		 data=[10,30,35,7,80,4,300,70],
		 lineGenerator=d3.svg.line();
	lineGenerator.x(function(d,i){
		return i;
	});
	lineGenerator.y(
		function(d){
			return d;
		}
	);
	path.attr('d', lineGenerator(data));

})(d3);
