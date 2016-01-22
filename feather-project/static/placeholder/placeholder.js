require.async([
    "common:jquery",
    "common:bootstrap",
    "common:placeholder"
], function($,bootstrap,PlaceHolder) {

	// 例子1
	new PlaceHolder({
	    dom: '#username1',
	    text: '请输入用户名'
	});

	// 例子2
	new PlaceHolder({
	    dom: '#username2'
	}).setPlaceHolder(["texttexttexttext"]);

});
