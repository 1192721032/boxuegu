define(['jquery'], function ($) {
  $.post('v6/login', {
    tc_name: '前端学院',
    tc_pass: '123456'
  }, function (data) {
    console.log(data);
  })
});
