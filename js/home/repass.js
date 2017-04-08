define(['jquery', 'common', 'header', 'aside', 'nprogress', 'loading', 'jqueryForm'],
 function($, undefined, undefined, undefined, nprogress, loading, jqueryForm) {
     
    //  修改密码，成功退出登录
    $('#repass-form').ajaxForm(function(data){
        if(data.code == 200){
            $('#logout').trigger('click');
        }
    });
    nprogress.done();
	
});
