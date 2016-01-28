require.async([
    "common:jquery",
    "common:bootstrap",
    "common:tooltip"
], function($, bootstrap,Tooltip) {
    
    // 例1
    $('#start_hover').tooltip({
        theme: 'red',
        pos: 'top',
        offset: 5,
        hover: true,
        content: '这是一个例子'
    });

    // $('#start_hover').mouseover(function(){
    //     $(this).tooltip('show');
    // });

    // $('#start_hover').tooltip('instance').setContent('test');

});
