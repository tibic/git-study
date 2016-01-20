require.async([
    "common:jquery",
    "common:bootstrap",
    "common:pager"
], function($,bootstrap,Pager) {

	// 例子1
	$('#start').pager({
	    pageTotal: 100,
	    perPage: 10,
	    currentPage: 10,
	    showFirst: false
	}).on('pager:switch', function(event, index){
	    alert('选择跳转至第' + index + '页');
	});

	// 例子2
	$('#start2').pager({
		url:'http://example.com/service?[otherparameter=123&]page=',
	    pageTotal: 100,
	    perPage: 10,
	    currentPage: 10,
	    showFirst: false
	}).on('pager:switch', function(event, index){
	    alert('选择跳转至第' + index + '页');
	});

});
