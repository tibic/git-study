require.async([
    "common:jquery",
    "common:bootstrap",
    "common:uploader"
], function($,bootstrap,Uploader) {

	// 例子1
	$('#start').uploader({
		dom: '#start',
		fixedCookie: false,
		debug: false,
		width: 100,
		height: 50,
		buttonText: '点击上传',
		buttonClass: 'but_class',
		buttonImage: '',
		uploader: '',
		auto: false,
		formData: '',
		queueId: '',
		queueSizeLimit: '1',
		uploaderLimit: 1,
		fileTypeExts: '.jpg'
	});



});
