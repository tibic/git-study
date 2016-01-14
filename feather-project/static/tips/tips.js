require.async([
    "common:jquery",
    "common:bootstrap",
    "common:tips"
], function($,bootstrap,Tips) {

	$('#start').click(function(){
		Tips.loading("content", false, 1000, 'classname');
	});
   	
});
