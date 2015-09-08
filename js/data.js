;(function(d3){
	//datum
	var str='china',
		 datumDom=d3.select('#datum').selectAll('p'),
		 datumParse=function(d,i){
			 return '第'+(i+1)+'个元素绑定的数据是'+d;
		 };

	datumDom.datum(str);
	datumDom.text(datumParse);

	//data
	var data=[
			'I like dogs.',
			'I like cats.',
			'I like snakes'
		 ],
		 dataDom=d3.select('#data').selectAll('p'),
		 dataParse=function(d,i){
			 return i+1+'. '+d;
		 };

	dataDom.data(data);
	dataDom.text(dataParse);

})(d3);
