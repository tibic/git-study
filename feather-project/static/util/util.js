require.async([
    "common:jquery",
    "common:bootstrap",
    "common:util"
], function($,bootstrap,Util) {

	// 例子1
	$('#start').text(Util.number.format(1111));
	$('#start2').text(Util.number.toInt(1.3));
	$('#start3').text(Util.string.toPad('s', 'e', 3));

	$('#start4').text(Util.string.nl2br('a\r\nb'));

   	
	$('#start5').text(Util.date.time());
	$('#start6').text(Util.date.date('Y-m-d H:i:s'));


	$('#start7').text(Util.object.get({
	    a: {
	        b: {
	            c: {
	                d: 1
	            }
	        }
	    }
	}, 'a.b.c.d'));

});
