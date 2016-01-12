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

##### 注:

###### 什么是fn？
```
jQuery.fn = jQuery.prototype ={ 
　　init: function( selector, context ){//....　 
　　//...... 
};
```

jQuery便是一个封装得非常好的类，比如我们用语句 $("#btn1") 会生成一个jQuery类的实例。
$.fn是指jquery的命名空间，加上fn上的方法及属性，会对jquery实例每一个有效。 


###### jQuery为开发插件提拱了两个方法，分别是：

1、jQuery.extend(object);为扩展jQuery类本身，为类添加新的方法，之后便可以在引入jQuery的地方，使用这个方法了。 
	如:  
    
	$.extend({ 
	　　add:function(a,b){returna+b;} 
		}); 
	$.add(3,4); //return 7 

2、jQuery.fn.extend(object);给jQuery对象添加方法，就是为jQuery类添加“成员函数”。jQuery类的实例可以使用这个“成员函数”。
	如：    
    
    
    $.fn.extend({ 
    	alertWhileClick:function(){ 
    		$(this).click(function(){ 
    			alert($(this).val()); 
    		}); 
    	}
    }); 
    
	$("#test").alertWhileClick(); //页面上为：<input id="test" type="text"/>






##### 感谢开发组件库feather-ui2.0贡献者
[原文地址](http://feather-team.github.io/)

