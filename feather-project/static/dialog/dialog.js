require.async([
    "common:jquery",
    "common:bootstrap",
    "common:dialog"
], function($, bootstrap, Dialog) {

    // 例1：基本的dialog
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


    // 例2:
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


	// 例3:
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

	// 例子4
	$('#dialog4').dialog({
        title: '标题1',
        // url: '/static/dialog/dialog.css',
		handle: '#button4'
	});

	$('#dialog4').dialog('instance').load('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9InllcyI/PjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iMTQwIiBoZWlnaHQ9IjE0MCIgdmlld0JveD0iMCAwIDE0MCAxNDAiIHByZXNlcnZlQXNwZWN0UmF0aW89Im5vbmUiPjwhLS0KU291cmNlIFVSTDogaG9sZGVyLmpzLzE0MHgxNDAKQ3JlYXRlZCB3aXRoIEhvbGRlci5qcyAyLjYuMC4KTGVhcm4gbW9yZSBhdCBodHRwOi8vaG9sZGVyanMuY29tCihjKSAyMDEyLTIwMTUgSXZhbiBNYWxvcGluc2t5IC0gaHR0cDovL2ltc2t5LmNvCi0tPjxkZWZzPjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+PCFbQ0RBVEFbI2hvbGRlcl8xNTIzOWMzYTE5MCB0ZXh0IHsgZmlsbDojQUFBQUFBO2ZvbnQtd2VpZ2h0OmJvbGQ7Zm9udC1mYW1pbHk6QXJpYWwsIEhlbHZldGljYSwgT3BlbiBTYW5zLCBzYW5zLXNlcmlmLCBtb25vc3BhY2U7Zm9udC1zaXplOjEwcHQgfSBdXT48L3N0eWxlPjwvZGVmcz48ZyBpZD0iaG9sZGVyXzE1MjM5YzNhMTkwIj48cmVjdCB3aWR0aD0iMTQwIiBoZWlnaHQ9IjE0MCIgZmlsbD0iI0VFRUVFRSIvPjxnPjx0ZXh0IHg9IjQ1LjUiIHk9Ijc0LjUiPjE0MHgxNDA8L3RleHQ+PC9nPjwvZz48L3N2Zz4=');


});
