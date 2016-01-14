require.async([
    "common:jquery",
    "common:bootstrap",
    "common:tips"
], function($,bootstrap,Tips) {

	// 例子1
	$('#start').click(function(){
		Tips.loading("玩命加载中...");
		// Tips.show("出来了...");
		// Tips.warn("提示...");
		// Tips.error("错误...");
	});
   	$('#end').click(function(){
		Tips.destroy();
	});

   	// 例子2
   	$('#start2').click(function(){
		Tips.loading("玩命加载中...", 1000, true);
   	});

   	// 例子3
   	$('#start3').click(function(){
		// Tips.error("玩命加载中...", 5000, true, 'test123');   //不显示类名
		// Tips.warn("玩命加载中...", 5000, true, 'test123');  //不显示类名
		Tips.show("玩命加载中...", 5000, true, 'test123');  
		// Tips.loading("玩命加载中...", 5000, true, 'test123');   //  不显示类名
   	});

});
