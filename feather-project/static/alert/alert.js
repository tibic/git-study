require.async([
    "common:jquery",
    "common:bootstrap",
    "common:alert"
], function($, bootstrap, Alert) {
    // 例1
  	$('#start').click(function(){
  		Alert.alert('确定么？',function(){
	  		console.log('点击了确定按钮');
	  	});
  	});
  	Alert.getButton('确定').click(function(){
         console.log('直接在jquery上绑定的click事件触发了');
	});
});
