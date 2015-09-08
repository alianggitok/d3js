;(function(d3){

//	var data=[1.2,2.3,0.9,1.5,3.3],
//		 min=d3.min(data),
//		 max=d3.max(data),
//		 linear=d3.scale.linear();
//
//	linear.domain([min,max]).range([0,300]);
//
//	linear(0.9);
//	linear(2.3);
//	linear(3.3);

//	var index=[0,1,2,3,4],
//		 color=['red','blue','green','yellow','black'],
//		 ordinal=d3.scale.ordinal();
//	ordinal.domain(index).range(color);
//
//	ordinal(0);
//	ordinal(2);
//	ordinal(4);

	var width=200,
		 height=300,
		 svg=d3.select('#visualization').append('svg'),
		 data=[2.5,2.1,1.7,1.3,0.9],
		 linear=d3.scale.linear();

	linear.domain([0, d3.max(data)]).range([0,width]);

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
			return linear(d);
		},
		'height':rectHeight-2,
		'fill':'blue'
	});

})(d3);
