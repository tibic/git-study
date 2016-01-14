require.async([
    "common:jquery",
    "common:bootstrap",
    "common:mask"
], function($,bootstrap,Mask) {

	// 例子1
	var mask = new Mask({
		dom: '.mask',
		autoOpen: false,
		color: '',
		opacity: ''
	});
	
	$('#start').click(function(){
		mask.open();
	});
	$('#end').click(function(){
		mask.close();
	});

	// 例子2
	var mask2 = new Mask({
		dom: '.mask2',
		autoOpen: false,
		color: 'red',
		opacity: '0.2'
	});
	
	$('#start2').click(function(){
		mask2.open();
	});
	$('#end2').click(function(){
		mask2.close();
	});


});

