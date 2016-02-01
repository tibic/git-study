Tips
=========

###Options

* content: 显示内容
* timeout：消失时间，默认为3000ms，设置为false时，则不会消失，必须手动destroy
* mask: 是否背景遮罩，默认为false

###Api

* destroy：摧毁对象

###静态方法

* show(content[, mask, timeout, classname])：创建一个简单的tips，并显示

* warn(content[, mask, timeout, classname])：创建一个Warn类型的tips，并显示

* error(content[, mask, timeout, classname])：创建一个error类型的tips，并显示

* success(content[, mask, timeout, classname])：创建一个success类型的tips，并显示

* loading(content[, mask, timeout, classname])：创建一个loading类型的tips，并显示

###Example

#####例1

```html
    <button type="button" id="start" class="btn btn-default">点击开始</button>
```

```js
    $('#start').click(function(){
        Tips.loading("玩命加载中...");
        //Tips.loading("玩命加载中...", 1000, true);
        //Tips.show("玩命加载中...", 5000, true, 'test123');  
        // Tips.show("出来了...");
        // Tips.warn("提示...");
        // Tips.error("错误...");
    });
    $('#end').click(function(){
        Tips.destroy();
    });
```
