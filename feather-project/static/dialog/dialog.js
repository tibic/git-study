require.async([
    "common:jquery",
    "common:dialog"
], function($, Dialog) {

	/*$('#dialog').dialog({
	    customWraper: false,
	    autoOpen: true,
	    handle: '#abc'
	});*/
	console.log(
		$('#dialog').dialog({
		    customWraper: false,
		    autoOpen: false,
		    //handle: '#abc'
		}));
	
	$('#abc').click(function(){
		$('#dialog').dialog('instance').open();
	})
});
