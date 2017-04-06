// define([], function(){
//     /**
//      * 判断用户有没有登录
//      * 没有的话就跳转登录页面
//      */
//     var cookieArr = document.cookie.split(';');
//     var isLogin = false;
//     //必须是所有的cookie,都没有PHPSESSID，才算没登录。那么打回登录
//     for(var i = 0;i<cookieArr.length;i++){

//         //存在证明登陆过,for循环结束
//         //不全等于零，表示没有登录过，打回登录页面      
//         if(cookieArr[i].indexOf('PHPSESSID=') === 0){
//             isLogin = true;
//             break;
//         }
//     }
//     // 如果没有登陆过，打到登陆页面
//     !isLogin && (location.href = '/html/home/login.html');    
// });

//jqueryCookie是define定义的模块，但是像这样的jquery插件
// 他们提供给的功能都放置到了jquery原型或者自己身上，并没有返回东西，所有引入他们得到的返回值是undefine，
// 要使用他们提供的功能，必须要借助与jquery。
define(['jquery','jqueryCookie'], function($,undefined) {  
    // 如果没有PHPSESSID这个cookie，证明没有登陆过，跳转到登陆页面
    if(!$.cookie('PHPSESSID')){
        location.href = '/html/home/login.html';
    }   
});
