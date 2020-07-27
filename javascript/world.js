$(".nav>ul>li").mouseover(function(){
	$(this).children(".menu_box").stop().slideDown();
})
$(".nav>ul>li").mouseleave(function(){
	$(this).children(".menu_box").stop().slideUp();
})

$(document).ready(function(){
			$(window).on("scroll",function(){
				var scroll = window.pageYOffset;	// 스크롤 초기값 좌표 설정
				var cH = (scroll-732);	// 년도 표시 화살표 위치 계산
				var scrMove = 1250*cH/7700; // 년도 표시 화살표 움직이는 폭 계산
				console.log(cH);
				if (scroll>724){	// 스크롤 값이 724보다 크면 화살표 움직임 +9
					$("#ct-scroll p").css("margin-left",scrMove+9);
				} else{	// 그게 아니면 왼쪽 마진 9
					$("#ct-scroll p").css("margin-left",9);
				}
				console.log(scroll);
				if (scroll>750){	// 750이상 스크롤되면 년도 바 상단 고정
					$("#ct-scroll").css("position","fixed");
					$("#seiko-h").css("margin-top","145px");
				} else {	// 그게 아니면 기본 상태
					$("#ct-scroll").css("position","static");
					$("#seiko-h").css("margin-top",0);
				};
			});
		});

		function fnMove(num){	// 년도 클릭 시 스크롤 이동 기능
			var $offset = $(".y-" + num).offset().top-134;
			$('html,body').animate({scrollTop: $offset},1000);
		};