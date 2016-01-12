# 学习feather前端模块化组件库2.0

#### 关于feather-ui2.0

* feather-ui基于jquery/zepto。
* feather-ui兼容模块化和传统方式引入使用，非模块下需要按需前加载依赖。
* 和dom相关的组件被绑定至$.fn上,可以使用这样的方式调用组件：

```
$('#droplist').droplist({
    //初始化参数
});

```


#### 什么是fn？
```
jQuery.fn = jQuery.prototype ={ 
　　init: function( selector, context ){//....　 
　　//...... 
};
```

jQuery便是一个封装得非常好的类，比如我们用语句 $("#btn1") 会生成一个jQuery类的实例。
$.fn是指jquery的命名空间，加上fn上的方法及属性，会对jquery实例每一个有效。 


#### jQuery为开发插件提拱了两个方法，分别是：

* jQuery.extend(object);为扩展jQuery类本身，为类添加新的方法，之后便可以在引入jQuery的地方，使用这个方法了。 
	如:

```   
	$.extend({ 
	　　add:function(a,b){returna+b;} 
		}); 
	$.add(3,4); //return 7 
```


* jQuery.fn.extend(object);给jQuery对象添加方法，就是为jQuery类添加“成员函数”。jQuery类的实例可以使用这个“成员函数”。
	如：    
    
```
    $.fn.extend({ 
    	alertWhileClick:function(){ 
    		$(this).click(function(){ 
    			alert($(this).val()); 
    		}); 
    	}
    }); 
    
	$("#test").alertWhileClick(); //页面上为：<input id="test" type="text"/>
```

#### 注意

* 同一个插件调用多次时，不会重复实例化，如果已绑定了插件，则直接返回之前绑定的插件，如未绑定，则直接实例化，如果需重新绑定，部分组件提供了destroy功能，可执行。也可以定义不同的实例化，便于自己引用。如：

```
    var dialog = new Dialog({//..});
    var dialog2 = new Dialog({//..});
```

* 如果想调用组件自身的方法时，只需要调用组件名，第一个参数为执行的方法名，后续参数传入即可，如:

```
    $('#droplist').droplist('open')  // => jquery object
    $('#droplist').droplist('on', 'select', function(event, value){
        console.log(value);
    });
```

* 也可以直接通过instance魔术方法，获取组件实例化对象

```
    $('#droplist').droplist('instance')/* => DropList Object*/.getValue(); 		// => 123
```

* 实例化对象可以通过widget方法，获取绑定的jquery对象

```
    $('#droplist').droplist('instance').widget().droplist('open') //=> jquery object
```

* 和dom相关的组件都支持事件功能，以往使用options传递回调函数的方式也变成了事件的方式，比如：

```
    //预先绑定一个事件
    $('#droplist').on('droplist:sayHello', function(event, iSay){
        console.log('i say:' + iSay);
    });

    //触发事件,实例化对象
    var instance = $('#droplist').droplist('instance');
    instance.on('sayHello', function(event, instanceSay){
        console.log('instance say: ' + instanceSay);
    });
    instance.trigger('sayHello', 'hello, world'); //instace say: hello, world \r\n i say: hello, world;
```

这些插件都继承于预定义类Event，更多使用方法可查看[Event](https://github.com/feather-team/feather-ui2.0/tree/master/class)


##### 感谢开发组件库feather-ui2.0贡献者。[原文地址](http://feather-team.github.io/)

