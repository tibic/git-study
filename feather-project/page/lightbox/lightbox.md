Lightbox相册组件
=====================

###Options

* dom: 实现相册的父元素
* selecter：加入相册的元素选择器，默认为 > img
* srcAttr：获取大图片地址的属性，默认为 data-lightbox-url

###Api
* refresh：重新获取所有的元素，并生成相册
* open：打开
* close：关闭
* destroy：删除对象

###Example

```html
    <button class="btn" id="start">开始</button>
    <div id="img_cont">
        <img data-lightbox-url="http://www.microfotos.com/images/testimg/1-1.jpg" alt="">
        <img data-lightbox-url="http://www.microfotos.com/images/testimg/1-2.jpg" alt="">
    </div>
```

```js
    $('#start').click(function(){
        new Lightbox({
            dom: $('#img_cont'),
            selecter: '> img',
            srcAttr: 'data-lightbox-url'
        }).open();
    });
```
