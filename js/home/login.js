define(['jquery','jqueryCookie','nprogress'], function ($,undefined,nprogress) {

    // 登录校验
    (function(){
        // 如果有PHPSESSID这个cookie，证明登陆过，转到首页
        if($.cookie('PHPSESSID')){
            location.href = '/';
        }        
    })();

    // 表单提交
    (function () {
        $('#login-form').on('submit', function () {

            //this是form原生对象，对form进行包装，才能调用jq的方法
            // console.log($(this).serialize());
            // console.log($(this).serializeArray());

            // 发送ajax请求，页面不用刷新
            $.ajax({
                url: '/v6/login',
                type: 'POST',
                data: $(this).serialize(),
                // 请求成功跳转到首页
                success: function (data) {
                    if (data.code == 200) {

                        // 把返回的用户信息保存到cookie中，供其他页面使用
                        //注意设置path属性，不然默认为当前路径，其他页面无法使用
                        $.cookie('userInfo',JSON.stringify(data.result),{path:'/'});
                        location.href = '/';
                    }
                },
                // 请求失败给出错误提示
                error: function () {
                    alert(arguments[2]);
                }
            });
            // 阻止表单默认的提交，防止页面刷新跳转
            return false;
        });
    })();
    // 页面所有代码执行完毕，进度条结束
    nprogress.done();
});
