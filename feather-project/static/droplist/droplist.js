require.async([
    "common:jquery",
    "common:bootstrap",
    "common:droplist"
], function($, bootstrap,Droplist) {
    
    // 例1
    new Droplist({
        dom:'#start',
        container: '#cont',
        list: {
            "北京":"1",
            "上海":"2",
            "深圳":"3"
        }
    });


});
