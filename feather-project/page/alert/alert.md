Alert组件
=============================

###Options

*	content: 显示内容
*   callback：点击确认按钮后，执行的回调函数
*   unclose：点击确认后，是否关闭，默认为false，即关闭
*   opt: 同dialog组件

###Event 同dialog组件（有空再补）

###Api 同dialog组件（有空再补）
 
###Example

#####例1：基本的alert

```html
	<button type="button" id="start" class="btn btn-default">点击开始</button>
```
```js
	$('#start').click(function(){
        var alert1 = Alert.alert('确定删除该微博么？',function(){
            console.log('点击了确定按钮');
        },false);
        alert1.getButton('确定').click(function(){
            console.log('直接在jquery上绑定的click事件出发了');
        });
        alert1.on('close', function(){console.log('alert关闭了')});
    });
```

#####例2：另一种基本的alert

```html
	<button type="button" id="start2" class="btn btn-default">点击开始</button>
```
```js
	var alert2 = Alert.alert('确定删除该微博么？',function(){
        console.log('点击了确定按钮');
    },false).getButton('确定').click(function(){
        console.log('直接在jquery上绑定的click事件触发了');
    });
```

#####例3：静态方法confirm,alert,warn,error,success

```html
	<button type="button" id="start3" class="btn btn-default">点击开始</button>
```
```js
	$('#start3').click(function(){
        var alert2 = Alert.confirm('确定删除该微博么？confirm',function(){
			//...
        },false);
    });
```
