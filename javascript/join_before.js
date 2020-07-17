$(".nav>ul>li").mouseover(function(){
	$(this).children(".menu_box").stop().slideDown();
})
$(".nav>ul>li").mouseleave(function(){
	$(this).children(".menu_box").stop().slideUp();
})


var chk = document.getElementsByName('chk'); 

function join(){ 
  for(i=0; i<chk.length-1; i++) { 
    if(chk[i].checked == false) { 
      alert('세이코 이용약관에 동의해주세요.'); 
      return false; 
   } 
} 

location.href = "http://www.jeonghansol.pe.kr/seiko/join.html"; 
}

function f_link(){
        location.href = "http://www.jeonghansol.pe.kr/seiko";
}

