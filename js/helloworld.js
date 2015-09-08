;(function(d3){

	var div=d3.select('body').select('div');

	for(var i=0,ilen=3;i<ilen;i+=1){
		div.append('p');
	}

	var p=div.selectAll('p');
	p.text('Hello d3.js!');

	p.style({
		'color':'red',
		'font-size':'20px'
	});

	console.log(p,p[0]);

})(d3);
