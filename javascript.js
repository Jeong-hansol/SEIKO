$(".nav>ul>li").mouseover(function(){
	$(this).children(".menu_box").stop().slideDown();
})
$(".nav>ul>li").mouseleave(function(){
	$(this).children(".menu_box").stop().slideUp();
})


