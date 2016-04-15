Dialog组件
=======================

###Options

*   title: 标题，如果为false，则整个头部都不会显示
*   container: 约束的容器
*   dom：指定将某一个dom放置在dialog中
*   content: 指定dialog中的内容
*   url: 加载一个url显示在dialog中
*   width: dialog宽度
*   height：dialog高度，默认为false，自适应高度
*   esc：是否按下ESC键关闭，默认false
*   mask：是否背景遮罩，默认true
*   autoOpen：是否创建后自动打开，默认false
*   className: 为dialog指定一个className
*   handle：触发打开dialog的元素
*   buttons：dialog按钮组
*   customWraper: 是否自定义dialog的wraper，默认为false，如果为true，传入dom时，dom则自动变成dialog的整体，如果需要使用dialog的部分api时，则需和原dialog结构保持一致。


###Events

*   open：打开dialog时触发
*   close： 关闭dialog时触发
*   firstOpen：第一次打开时触发
 

###Api

*   setContent(html): 设置dialog的html格式内容
*   setDom(dom): 将一个dom放置于dialog中
*   load(url)：加载这个url的内容
*   resetPosition(): 位置发生异常时，可执行，窗口大小改变和滚动页面时，会自动执行该方法
*   setTitle(title): 设置title，同options.title
*　 open: 打开
*   close: 关闭
*   destroy: 删除对象，如果dialog中的内容为一个dom，则此dom会自动释放于document.body中
*   setButtons(buttonsObject): 设置dialog的按钮组，同options.buttons
*   getButton(buttonName|buttonIndex): 获取到按钮组成员的jQuery对象


###Example

##### 例1：基本的dialog：使用handle触发dialog，弹框放在约束的容器里

```html
	<button type="button" id="button1" class="btn btn-default">点我弹窗</button>
    <div id="dialog1"></div>
    <div class="text" id="text1">
        我是html设置的内容
    </div>
```
```js
	$('#dialog1').dialog({
        title: '标题1',
        container: '#example_1',
        dom: '#text1',
        // content: '我是js设置的内容',
        url: '',
        // width: 300,
        // height: 200,
        esc: true,
        mask: false,
        autoOpen: false,
        className: 'test_dialog',
        handle: '#button1',
        buttons: {
            '确定': function() {
                this.close();
            },
            '取消': {
                className: 'cancel_button',
                events: {
                    click: function() {
                        this.close();
                    }
                }
            }
        },
        customWraper: false
    });
```

##### 例2：自定义的dialog：通过绑定事件触发dialog，同时可以自定义dialog

```html
	<button type="button" id="button2" class="btn btn-default">点我弹窗</button>
    <div id="dialog2" class="ui2-dialog-wraper dialog2">
        <strong class="ui2-dialog-header">
	        <a href="javascript:void(0);" class="ui2-dialog-close">&times;</a>
	        <h5 class="ui2-dialog-title dialog2_title">例子2标题</h5>
	    </strong>
        <div class="ui2-dialog-content dialog2_cont">这里是自定义的内容区</div>
        <div class="ui2-dialog-buttons dialog2_footer">
        	<button class="btn btn-default" id="dialog_close">关闭</button>
        </div>
    </div>
```

```js
	$('#dialog2').dialog({
        mask: false,
	    customWraper: true
	});

	$('#button2').click(function(){
		$('#dialog2').dialog('instance').open();
	});

	$('#dialog_close').click(function(){
		$('#dialog2').dialog('instance').close();
	});

```


##### 例3：介绍dialog相关api的用法

```html
	<button id="button3" class="btn btn-default">点我弹窗</button>
    <div id="dialog3"></div>
```

```js
	$('#dialog3').dialog();

	$('#button3').click(function(){

		$('#dialog3').dialog().on('dialog:open', function(){
		    console.log(123);
		});

		$('#dialog3').dialog('instance').setTitle("title");

		$('#dialog3').dialog('instance').setContent("setContent");

		$('#dialog3').dialog('instance').setButtons({
		    '确定': function(){
	            this.close();
		    },
		    '取消': {
		        className: 'cancel',
		        events: {
		            click: function(){
		                this.close();
		            }
		        }
		    }
		});

		$('#dialog3').dialog('instance').getButton(0).click(function(){
		    alert('为确定绑定click事件')
		});

		$('#dialog3').dialog('instance').getButton('取消').click(function(){
		    alert('可以在此绑定取消click事件')
		});


		$('#dialog3').dialog('instance').open();

	});
```

##### 例4：介绍dialog的url用法，当配置参数url时却不显示

```html
	<button id="button4" class="btn btn-default">点我弹窗</button>
    <div id="dialog4"></div>
```

```js
$('#dialog4').dialog({
        title: '标题1',
        // url: 'url',
		handle: '#button4'
	});

	$('#dialog4').dialog('instance').load('url');
```
