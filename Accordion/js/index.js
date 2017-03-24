$(document).ready(function(){

	var $li = $("#wrap ul li");//获取手风琴盒子

	var $bgbox = $(".bgbox");//获取背景图片

	$bgbox.eq($bgbox.length-1).css('opacity','1');

	$li.hover(function(){

		var index = $(this).index(); //通过index方法获取到当前移入的下标
		
		$(this).stop().animate({'width':'789px'},500).siblings().stop().animate({'width':'100px'},500);

		$bgbox.eq(index).stop().animate({'opacity':'1'},500).siblings('.bgbox').stop().animate({'opacity':'0'},500);
	});
})