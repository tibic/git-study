FormValid组件
================================

###Options

* dom: 检验的dom对象
* rules：规则object
* showSucesssStatus：是否显示成功状态，默认为false
* showErrorStatus：是否显示失败状态，默认为true
* errorStop：碰到失败时立即停止检查，默认为false
* skipHidden：跳过隐藏元素，默认为false

###Events

* error(event, name, errorTxt)：错误时触发
* success(event, name, successTxt)：成功时触发

###Api

* setRules(rules)： 重新设置所有的rules
* check([name])：检查指定元素，或者所有元素并返回状态值
* error(name[, text])：手动触发一个错误
* success(name[, text, showSuccessStatus])：手动触发成功
* reset(name[, _default])：重置一个元素的状态，可设置一个默认文本
* addRule(name[, rule])：新增一个规则，name可为object
* removeRule(name)：移除一个元素的规则

###Example

#####例1：基本的验证

```html
    <form action="" id="formvalid_1">
        <div>
            <input type="text" name="testName" data-formvalid-default="请输入姓名">
        </div><br/>
        <div>
            <input type="text" name="testCard" data-formvalid-default="请输入银行卡号">
        </div><br/>
        <div>
        <input type="text" name="testNumber" data-formvalid-default="请输入手机号码">
        </div><br/>
        <button id="submit" type="submit" class="btn">提交</button>
    </form>
```

```js
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
```


#####例2：另外一种写法

```html
    <form action="" id="formvalid-test">
            <div>
                <input type="text" name="testName_2" data-formvalid-default="请输入姓名">
            </div><br/>
            <div>
                <input type="text" name="testCard_2" data-formvalid-default="请输入银行卡号">
            </div><br/>
            <div>
            <input type="text" name="testNumber_2" data-formvalid-default="请输入手机号码">
            </div><br/>
            <button id="submit_2" class="btn">提交</button>
        </form>
```

```js
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
```

#####例3：API使用实例(reset不会使用)

```html
    <form action="" id="formvalid-test-3">
            <div>
                <input type="text" name="testName_3" data-formvalid-default="请输入姓名">
            </div><br/>
            <div>
                <input type="text" name="testCard_3" data-formvalid-default="请输入银行卡号">
            </div><br/>
            <div>
            <input type="text" name="testNumber_3" data-formvalid-default="请输入手机号码"
            data-formvalid-number data-formvalid-length="11" data-formvalid-length-error="手机号码必须为11数字" data-formvalid-length-success="手机号码正确">
            </div><br/>
            <button id="submit_3" class="btn">提交</button>
        </form>
```

```js
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
```