PlaceHolder
================================

为不兼容HTML5的浏览器实现Plcaceholder属性

###Options

* dom：绑定placeholder的元素
* text：placeholder的文字，可不设置，自动读取placeholder属性和data-placeholder属性

###Api:

* setPlaceHolder([text])：设置placeholder，如果为空，则自动读取placeholder和data-placeholder属性
* destroy: 摧毁对象

###Example

#####例1：(它的api-destroy不会用)

```html
    <input type="text" id="username1" name="username"/>
```

```js
    new PlaceHolder({
        dom: '#username1',
        text: '请输入用户名'
    });
```

#####例2

```html
    <input type="text" id="username2" name="username"/>
```

```js
    new PlaceHolder({
        dom: '#username2'
    }).setPlaceHolder(["texttexttexttext"]);
```
