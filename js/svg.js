;(function(d3){

	var width=300,
		 height=300,
		 svg=d3.select('#visualization').append('svg'),
		 data=[250,210,170,130,90];

	svg.attr({
		'width':width,
		'height':height
	});

	var canvasWithData=svg.selectAll('rect').data(data).enter(),
		 rectHeight=27;
	canvasWithData.append('rect').attr({
		'x':0,
		'y':function(d,i){
			return i*rectHeight;
		},
		'width':function(d){
			return d;
		},
		'height':rectHeight-2,
		'fill':'blue'
	});

})(d3);
