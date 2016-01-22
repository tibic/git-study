require.async([
    "common:jquery",
    "common:bootstrap",
    "common:cookie"
], function($,bootstrap,Cookie) {

	// 例子1
	Cookie.set('hello', 123123,{
		expires: 60,
		path: '/page/cookie',
	  	secure: false
	});

	console.log(Cookie.get('name','cookie没有值'));
	// Cookie.remove('name');

});
