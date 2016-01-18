require.async([
    "common:jquery",
    "common:bootstrap",
    "common:template"
], function($, bootstrap, Template) {


	//例子1
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

	// 例子2
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

	// 例子3
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

});
