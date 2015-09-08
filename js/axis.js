;(function(d3){

	var width=400,
		 height=300,
		 svg=d3.select('#visualization').append('svg'),
		 data=[2.5,2.1,1.7,1.3,0.9],
		 linear=d3.scale.linear(),
		 axis=d3.svg.axis();

	linear.domain([0, d3.max(data)]).range([0,300]);
	axis.scale(linear).orient('bottom').ticks(5);

	svg.attr({
		'width':width,
		'height':height
	});

	svg.append('g').attr({
		'class':'axis',
		'transform':'translate(15,135)'
	}).call(axis);


	var svgWithData=svg.selectAll('rect').data(data).enter(),
		 rectHeight=27;

	svgWithData.append('rect').attr({
		'x':15,
		'y':function(d,i){
			return i*rectHeight;
		},
		'width':function(d){
			return linear(d);
		},
		'height':rectHeight-2,
		'fill':'blue'
	});


})(d3);
