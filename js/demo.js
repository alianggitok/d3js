;(function(d3){
	var data=[
			{year:2007,balance:200},
			{year:2008,balance:250},
			{year:2009,balance:300}
		 ],
		 selection=d3.select('#visualization').selectAll('div'),
		 visualization=selection.data(data,function(data){
			return data.year;
		 }),
		 children=visualization.enter().append('p');

	children.text(function(data){
		return data.balance;
	});
	children.style('width',function(data){
		return data.balance+'px';
	});

	visualization.exit().remove();

})(d3);
