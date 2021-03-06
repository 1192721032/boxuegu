define(['jquery', 'common', 'header', 'aside', 'nprogress', 'loading', 'template'],
    function ($, undefined, undefined, undefined, nprogress, loading, template) {

        //课程分类列表渲染
       $.get('/v6/category', function(data){
		if(data.code == 200) {
			$('#course-category-table').append(template('course-category-tpl', data));
		}
	});

        // 页面所有代码执行完毕，进度条结束
        nprogress.done();
    });
