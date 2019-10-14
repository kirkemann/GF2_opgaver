
function burger() {
  var x = document.getElementById("a_koldingdesignindex-nav");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function scroolup(){
	"use strict";
	window.scrollTo(0, 0);
}
function openSlideMenu(){
	"use strict";
  var menu = document.getElementById('a_koldingdesignindex-nav');
  if (menu.style.height === '0%'){
    menu.style.height ="100%";
  	menu.style.display = 'block';
		document.getElementById("a_koldingdesignindex-nav").style.top="auto";
		document.getElementById("a_koldingdesignindex-nav").style.transition="all 0.9s ease .9s;";
  //  document.getElementById('content').style.marginLeft = '300px';
  }else {
    menu.style.height ='0%';
		menu.style.display = 'none';
		document.getElementById("a_koldingdesignindex-nav").style.top="auto";
		document.getElementById("a_koldingdesignindex-nav").style.transition="all 0.9s ease .9s;";
  //  document.getElementById('burger').style.backgroundColor = 'inherit';
  //  document.getElementById('content').style.marginLeft = 'auto';
  }
}


window.onscroll = function(){
	"use strict";
	if(window.pageYOffset > 10){
		document.getElementById("a_koldingdesignindex-nav").style.position="fixed";
		document.getElementById("a_koldingdesignindex-nav").style.top="0px";
	   }else{
		document.getElementById("a_koldingdesignindex-nav").style.position="auto";
		document.getElementById("a_koldingdesignindex-nav").style.top="auto";
	   }
	if(window.pageYOffset > 200){
	   	document.getElementById("a_koldingdesignup").style.padding="0px";
		document.getElementById("a_koldingdesignup").style.height="61px";
		document.getElementById("a_koldingdesignup").style.color="#3AAA35";
		document.getElementById("a_koldingdesignup").style.fontSize="60px";
	   }else{
		document.getElementById("a_koldingdesignup").style.padding="0px";
		document.getElementById("a_koldingdesignup").style.height="0px";
		document.getElementById("a_koldingdesignup").style.color="#00000014";
		document.getElementById("a_koldingdesignup").style.border="none";
		document.getElementById("a_koldingdesignup").style.fontSize="0px";
	   }
}

$(".burger").click(function() {
    $(this).toggleClass('active');
    $("ul.menu li").slideToggle('fast');
})

$(window).resize(function() {
    if ($(window).width() > 650) {
        $('ul.menu li').removeAttr('style');
    }
})

