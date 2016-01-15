require.async([
    "common:jquery",
    "common:bootstrap",
    "common:tabs"
], function($, bootstrap, Tabs) {
    // 例1
    $('#tab-btns').tabs({
        selecter: '> a',
        event: 'mouseover'
    });
    $('#tab-btns').on('tabs:switch', function(index){
        // console.log(index);
    });

    //例子2
    $('#tab-btns2').tabs({
        // dom:'',
        selecter: '> a',
        targetAttr: 'data-target2',
        // currentClass: '',
        // currentIndex: '',
        event: 'click'
    });


});
