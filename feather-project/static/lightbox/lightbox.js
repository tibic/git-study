require.async([
    "common:jquery",
    "common:bootstrap",
    "common:lightbox"
], function($,bootstrap,Lightbox) {

	// 例子1
	
	$('#start').click(function(){
		new Lightbox({
			dom: $('#img_cont'),
			selecter: '> img',
			srcAttr: 'data-lightbox-url'
		}).open();
	});
	
});
