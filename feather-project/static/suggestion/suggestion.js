require.async([
    "common:jquery",
    "common:bootstrap",
    "common:suggestion"
], function($, bootstrap, Suggestion) {
    
    // 例1
    $('#start').suggestion({
        dom: '',
        width: false,
        max: 10,
        caching: true,
        url: '',
        data: ['123', '1111', '1234']
    });

    // 例2

    $('#start2').suggestion({
        data: {
            status: 1,
            data: {
                userList: [
                    {
                        uid: 1,
                        name: "张三"
                    },

                    {
                        uid: 2,
                        name: "张2"
                    }
                ]
            }
        },
        dataField: 'data.userList',
        matchKwField: 'name',
        delay: 300,
        empty2close: true,
        emptyNoCache: false,
        requestParams: {}
    });
    $('#start2').suggestion('instance').setHeader("123");



    // 例3
    //规范对象数组格式
    $('#start3').suggestion({
        data: {
            status: 1,
            data: {
                userList: [{
                        uid: 1,
                        name: "张三"
                    }, {
                        uid: 2,
                        name: "张wu666"
                    }, {
                        uid: 3,
                        name: "张wu000000"
                    }]
                    //其他数据
            }
        },
        dataField: 'data.userList',
        matchKwField: 'name',
        //自定义匹配规则
        match: function(data, kw) {
            var result = [];

            data.forEach(function(item) {
                if (item.name.indexOf(kw)) {
                    result.push(item);
                }
            });

            return result;
            console.log(result);
        },

        //返回一个自定义的候选项字符串
        format: function(item, kw) {
            return item.name.replace(kw, '<strong>' + kw + '</strong>');
        }
    }).on('suggestion:switch', function(event, value, obj) {
        console.log(value); //张三
        console.log(obj); //{uid: 1, name: "张三"}
    });


});
