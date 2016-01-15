require.async([
    "common:jquery",
    "common:bootstrap",
    "common:alert"
], function($, bootstrap, Alert) {
    // 例1
    $('#start').click(function(){
        var alert1 = Alert.alert('确定删除该微博么？',function(){
            console.log('点击了确定按钮');
        },false);
        alert1.getButton('确定').click(function(){
            console.log('直接在jquery上绑定的click事件出发了');
        });
        alert1.on('close', function(){console.log('alert关闭了')});
    });

    // 例子2
    $('#start2').click(function(){
        var alert2 = Alert.alert('确定删除该微博么？',function(){
            console.log('点击了确定按钮');
        },false).getButton('确定').click(function(){
            console.log('直接在jquery上绑定的click事件触发了');
        });
    });

    // 例子3

    $('#start3').click(function(){
        var alert2 = Alert.confirm('确定删除该微博么？confirm',function(){

        },false);
    });

});
