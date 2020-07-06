$(".nav>ul>li").mouseover(function(){
	$(this).children(".menu_box").stop().slideDown();
})
$(".nav>ul>li").mouseleave(function(){
	$(this).children(".menu_box").stop().slideUp();
})

start();
var imgs=3;
var now=0;

function start(){
	$(".imgs>img").eq(0).siblings().css({"margin-left":"-1600px"});
	setInterval(function(){slide();},3000);
}

function slide(){
	now=now==imgs?0:now+=1;
	$(".imgs>img").eq(now-1).css({"margin-left":"-1600px"});
	$(".imgs>img").eq(now).css({"margin-left":"0px"});
}
