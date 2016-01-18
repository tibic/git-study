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
        selecter: '> a',
        targetAttr: 'data-target2',
        event: 'click'
    });

    //例子3
    $('#box').tabs({
        dom:'#tab-btns3',
        selecter: '> a',
        targetAttr: 'data-target3',
        currentClass: 'active',
        currentIndex: '2',
        event: 'mouseover'
    });

    $('#box').on('tabs:switch', function(index){
        console.log("切一下");
    });

    // $('#tab-btns3').tabs('to', 2);

});
