require.async([
    "common:jquery",
    "common:bootstrap",
    "common:class"
], function($,bootstrap,Class) {


	// var A = Class.extend('Event',{
	// 	initialize: function(){
	// 		this.data = {};
	// 	},
	// 	set: function(name,value){
	// 		this.data[name] = value;
	// 		this.trigger('change',name,value);
	// 	}
	// });
	// A.on('change',function(event,name,value){
	// 	console.log(name+'is'+value+'now!');
	// });

	// 例子1:创建一个类
	// var A = Class.create({
	// 	initialize: function(){
	// 		console.log('init例子1');
	// 	},
	// 	name: 'aaaa',
	// 	getName: function(){
	// 		return this.name;
	// 	}
	// });
	// var a = new A;
	// alert(a.getName());

	// 例子2
	// var B = Class.create({
	// 	options: {
	// 		name: 'aaa',
	// 		age: 22,
	// 		favs: ['a','b','c']
	// 	},
	// 	initialize: function(opts){
	// 		this.setOptions(opts);
	// 	},
	// 	getFavs: function(){
	// 		return JSON.stringify(this.options.favs);
	// 	}
	// });

	// var b = new B({
	// 	favs: ['xx']
	// });

	// alert(b.getFavs());

	// var C = Class.extend('B',{
	// 	getFavs: function(){
	// 		return 'i am b,my favs:'+JSON.stringify(this.options.favs);
	// 	}
	// });

	// var c = new C({
	// 	favs: ['c','d']
	// });
	// alert(c.getFavs());

});
