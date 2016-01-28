require.async([
    "common:jquery",
    "common:bootstrap",
    "common:calendar"
], function($,bootstrap,Calendar) {

	// 例子1
	new Calendar({
		// container: '.calendar_cont',
		dom: '#start',
		maxDate: '2016-06-06',
		minDate: '2016-01-01',
		yearRange: '2010:2050',
        dateFormat: 'Y-m-d',
		selectedClassName: '.test'
	});


	$('#start').calendar().on('calendar:select', function(event, date){
  		console.log(date);
	});


});
