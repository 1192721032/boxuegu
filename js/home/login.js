define(['jquery'], function($) {

    //监听表单提交事件并阻止，转而实现ajax请求
	$('#login-form').on('submit',function(){
        
        //this是form原生对象，对form进行包装，才能调用jq的方法
        console.log($(this).serialize()); 
        console.log($(this).serializeArray());
                
        $.ajax({
            url:'/v6/login',
            type:'POST',
            data:$(this).serialize(),
            success:function(data){
                if(data.code == 200){
                    location.href='/';                
                }
            },
            error:function(){
               alert(arguments[2]);
            }
        })
        return false;
    })
});
