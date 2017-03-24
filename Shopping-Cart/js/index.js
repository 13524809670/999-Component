$(document).ready(function(){

	var offon = true;//true打开开关,false关闭开关
	// 购物车点击事件
	$('.btn').click(function(){
		if(offon){
			$('.car').animate({'right':'0'},500);
			offon = false;
		}
		else{
			$('.car').animate({'right':'-220px'},500);
			offon = true;
		};
	});

	// 加入购物车事件
	$('.add-btn').click(function(e){
		var imgsrc = $(this).siblings('img').attr('src');//attrs获取标签属性
		var txt = $(this).siblings('.title').html();	//相邻兄弟元素的  类名
		var money = $(this).siblings('.money').html();	//相邻兄弟元素的  类名
		$('.right').append('<dl><dt><img src="'+imgsrc+'" alt=""></dt><dd>'+txt+'</dd><dd>'+money+'</dd></dl>');//现在html里写好，再拿过来拼接修改


		//落脚点
		var last_l = $('.btn').offset().left,//offest偏移值
			last_t = $('.btn').offset().top;

		//起始点
		var x = e.clientX,//鼠标距离浏览器左边的值
			y = e.clientY;//鼠标距离浏览器顶部的值

		// 创建对象
		var fl = $('<img src="'+imgsrc+'" class="fly">');

		// 抛物线方法
		fl.fly({
			start:{
				left:x,
				top:y
			},end:{
				left:last_l,
				top:last_t,
				width:20,
				height:20
			},onEnd:function(){
				fl.fadeOut('slow',function(){
					$(this).remove();//清除对象
				})
			}
		})
	});
})