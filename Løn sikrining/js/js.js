// JavaScript Document


window.onscroll = function() {scrollFunction()};

var btn = document.getElementById("btn");
		
		btn.onclick = function(){
			"use strict";
			window.scrollTo(0, 0);
		};
		
		window.onscroll = function(){
			"use strict";
			if(window.pageYOffset > 250){
				btn.style.display = "block";
				 document.getElementById("headerpic").style.width = "20%";
	  			document.getElementById("myHeader").style.height = "120px";
			}else{
				btn.style.display = "none";
				 document.getElementById("headerpic").style.width = "30%";
				document.getElementById("myHeader").style.height = "180px";
			}
		};

function dashboard() {
  var x = document.getElementById("slider1"),
	  c = document.getElementById("slider2");
      z = document.getElementById("circle2")
	  w = document.getElementById("circle1")
	x.style.display = "none";
    c.style.display = "grid";
	z.style.backgroundColor = 'white';
	w.style.backgroundColor = 'transparent';
	}
function dashboards() {
  var x = document.getElementById("slider1"),
	  c = document.getElementById("slider2");
 	  z = document.getElementById("circle2")
	  w = document.getElementById("circle1")
	c.style.display = "none";
    x.style.display = "grid";
	z.style.backgroundColor = 'transparent';
	w.style.backgroundColor = 'white';
	}