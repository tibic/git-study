mask组件
====================

###Options
* dom: mask的容器，默认为document.body
* autoOpen：是否自动打开
* color：背景色，默认#000
* opacity：透明度，默认0.6

###Events
* open：打开mask时触发
* close： 关闭mask时触发

###Api
* open: 打开
* close: 关闭
* destroy：删除对象
* resetPosition：重新调整位置

###Example

#####例1：基本的mask

```html
    <button type="button" id="start" class="btn btn-default">点击开始</button>
    <button type="button" id="end" class="btn btn-default">点击关闭</button>
    <div class="mask"></div>
```

```js
    var mask = new Mask({
        dom: '.mask',
        autoOpen: false,
        color: '',
        opacity: ''
    });
    
    $('#start').click(function(){
        mask.open();
    });
    $('#end').click(function(){
        mask.close();
    });
```

#####例2：配置参数的mask

```html
    <button type="button" id="start2" class="btn btn-default">点击开始</button>
    <button type="button" id="end2" class="btn btn-default">点击关闭</button>
    <div class="mask2"></div>
```

```js
    var mask2 = new Mask({
        dom: '.mask2',
        autoOpen: false,
        color: 'red',
        opacity: '0.2'
    });
    
    $('#start2').click(function(){
        mask2.open();
    });
    $('#end2').click(function(){
        mask2.close();
    });
```
