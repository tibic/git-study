require.async([
    "common:jquery",
    "common:bootstrap",
    "common:slider"
], function($,bootstrap,Slider) {

	// 例子1
	var slider = new Slider({
	    time: 1000, //滑动时长
	    dom: '#slide-test-easing',  //某一个元素滑动，滑动内的元素则为该元素的直接子元素
	    cps: 1, //每次滑动几个子元素
	    noGap: false,//是否无缝滑动
	    easing: null,   //提供jquery 的easing运动函数
	    mode: 'vertical', //上下滑动还是水平滑动，默认为水平滑动
	    after: function(){
	    	this.toNext();
	    }
	});

	$('#slide-test-easing-container').hover(function(){
		slide.pause();
	},function(){
		slide.resume();
	});


});
