require.async([
    "common:jquery",
    "common:bootstrap",
    "common:draggable"
], function($, bootstrap,Draggable) {
    
    // 例1
    $('#draggable').draggable({
       handle: '#start',
       axis: 'y'
    }).on('draggable:start', function(event, x, y, mouseEvent){
       console.log(x, y, mouseEvent.pageX, mouseEvent.pageY);
    });

});
