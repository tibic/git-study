require.async([
    "common:jquery",
    "common:bootstrap",
    "common:class"
], function($,bootstrap,Class) {

	// 例子1
	var A = Class.create({
		//构造函数，初始化时，自动执行
		initialize: function(){
			console.log('init');
		}
	});

	new A;



});
