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

$(".us_1").click(function(){
	$("#modal").addClass("active");
})
$("#modal button").click(function(){
	$("#modal").removeClass("active");
})

$(".us_2").click(function(){
	$("#modal_2").addClass("active");
})
$("#modal_2 button").click(function(){
	$("#modal_2").removeClass("active");
})

$(".us_3").click(function(){
	$("#modal_3").addClass("active");
})
$("#modal_3 button").click(function(){
	$("#modal_3").removeClass("active");
})

$(".us_4").click(function(){
	$("#modal_4").addClass("active");
})
$("#modal_4 button").click(function(){
	$("#modal_4").removeClass("active");
})

