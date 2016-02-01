Template
================

超轻量级的前端模版引擎

###Api

* parse(content:String, data:Object)：执行一个字符串
* fetch(id:String, data:Object)：通过id提取出一个dom元素内的内容，并执行，dom元素通常为一个script标签，如果是input或者textarea，则直接取value属性

###Example

#####例1：基本的tpl

```html
    <button type="button" id="start" class="btn btn-default">点击开始</button>
    <div id="tpl_one"></div>
```

```js
    var config = {
            queryUrl: '/page/tpl/query'
        },
        tpl = __inline('./tpl.tpl');

    $('#start').click(function(){
        $.ajax({
            type: 'post',
            url: config.queryUrl,
            data: {},
            dataType: 'json',
            success: function(res){
                if(res.code == 0){
                    $('#tpl_one').html(Template.parse(tpl, {
                        list: res.data
                    }));
                } else {
                    alert(res.msg);
                }
            }
        });
    });
```

#####例2：另一种模板用法

```html
    <button type="button" id="start2" class="btn btn-default">点击开始</button>
    <div id="tpl_two"></div>
```

```js
    $('#start2').click(function(){
        $('#tpl_two').html(Template.parse("<table class='table table-bordered'>"+
            "<%for(var i in list){%><tr><td><%=list[i].name%></td>"+
            "<td><%=list[i].school%></td></tr><%}%>",{
                list:{
                    "1":{
                        "name":"hahhah",
                        "school":"heiheihei"
                    },
                    "2":{
                        "name":"hahhah22222",
                        "school":"heiheihei2222"
                    }
                }
        }));
    });
```

#####例3：还有一种用法

```html
    <button type="button" id="start3" class="btn btn-default">点击开始</button>
    <div id="tpl_three_cont"></div>
    <script type="text/html" id="tpl_three">
        <%list.forEach(function(item){%>
        <p><%=item.name%></p>
        <%});%>
    </script>
```

```js
    $('#start3').click(function(){
        Template.fetch("tpl_three", {
          list: [
            {
              name: '123'
            },
            {
              name: '123'
            }
          ]
        });
    });
```

模板：
```js
    <table class="table table-bordered">
    <tbody>
        <%for(var i in list){%>
            <tr>
                <td><%=list[i].name%></td>
                <td><%=list[i].school%></td>
            </tr>       
        <%}%>
        </tbody>
    </table>
```
