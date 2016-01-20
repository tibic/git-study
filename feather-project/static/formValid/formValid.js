require.async([
    "common:jquery",
    "common:bootstrap",
    "common:formValid"
], function($,bootstrap,formValid) {

	// 例子1
	$('#formvalid_1').formValid({
		showSuccessStatus: true,
		rules: {
			testName: [
				{
					rule: function(value) {return !!value},
					errorText:'不能为空'
				},
				{
					required: true,
					length: '1,6',
					errorText: '限制1-6个字符'
				}
			],
			testCard: {
				rule: /^\d{16,19}$/,
				errorText:'16到19位数字'
			},
			testNumber: {
				rule: /^1[3|4|5|8][0-9]\d{4,8}$/,
				errorText: '请输入正确的手机号'
			}
		}
	}).on('formValid:error', function(event, name, text){
	    console.log(name, text);
	});

	$('#formvalid_1').formValid('instance').addRule('testName',[
		{
			rule: /^[\u4e00-\u9FA5]{2,10}$/,
			errorText:'必须输入汉字'
		}
	]);

	$('#submit').click(function(){
		$('#formvalid_1').formValid('instance').check();
		return false;
	});

	
	// 例子2
	var fv = new formValid({
		dom: $('#formvalid-test'),
		showSuccessStatus: true,
		rules: {
			testName_2: [
				{
					rule: function(value) {return !!value},
					errorText:'不能为空'
				},
				{
					required: true,
					length: '1,6',
					errorText: '限制1-6个字符'
				},
				{
					rule: /^[\u4e00-\u9FA5]{2,10}$/,
					errorText:'必须输入汉字'
				}
			],
			testCard_2: {
				rule: /^\d{16,19}$/,
				errorText:'16到19位数字'
			},
			testNumber_2: {
				rule: /^1[3|4|5|8][0-9]\d{4,8}$/,
				errorText: '请输入正确的手机号'
			}
		}
	});

	$('#submit_2').click(function(){
		if(fv.check()){
			//do
		}else{

		}
		return false;
	});

	// 例子3
	$('#formvalid-test-3').formValid({
		showSuccessStatus: true,
		rules: {
			testName_3: [
				{
					rule: function(value) {return !!value},
					errorText:'不能为空'
				},
				{
					required: true,
					length: '1,6',
					errorText: '限制1-6个字符'
				}
			],
			testCard_3: {
				rule: /^\d{16,19}$/,
				errorText:'16到19位数字'
			}
		}
	});


	$('#submit_3').click(function(){
		$('#formvalid-test-3').formValid('instance').check();
		return false;
	});


});
