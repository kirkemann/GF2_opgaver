// JavaScript Document
function validateForm(){
var navn = document.forms["kontaktForm"]["navn"].value;
var dato = document.forms["kontaktForm"]["dato"].value;
besked = "";
var tlfNummer = document.forms["kontaktForm"]["tlfNummer"].value;
	if (navn == ""){
		document.getElementById("fejl").innerHTML = "<img src='image/fejl.gif'>"
	}
	if (dato == ""){
		document.getElementById("fejl").innerHTML = "<img src='image/fejl.gif'>"
	}
	if (tlfNummer == ""){
		document.getElementById("fejl").innerHTML = "<img src='image/fejl.gif'>"
	}
	else{
		document.getElementById("sucess").innerHTML = "<img src='image/sucess.gif'>";
	}
}
var menu = document.getElementById("menu"),
	tilTop = document.getElementById("tilTop");
window.onscroll = function()
{
	if(window.pageYOffset > 10){
		menu.style.top="0";
		tilTop.style.display="block";
	}
	else{
		menu.style.top="220px";
		tilTop.style.display="none";
	}
}
function tilTopFun(){
	document.documentElement.style.scrollBehavior = "smooth";
}
function information(){
	var info = document.getElementById("information"),
	anmeldelser = document.getElementById("anmeldelser"),
	beskrivelse = document.getElementById("beskrivelse"),		
	beskrivLi = document.getElementById("beskriv"),
	anmeldLi = document.getElementById("anmeld"),
	infoLi = document.getElementById("info"),
	anmeldA = document.getElementById("anmeldA"),
	beskrivA = document.getElementById("beskrivA"),
	infoA = document.getElementById("infoA");
	
	
	info.style.display="block";
	anmeldelser.style.display="none";
	beskrivelse.style.display="none";
	infoLi.style.backgroundColor="#707070";
	beskrivLi.style.backgroundColor="transparent";
	anmeldLi.style.backgroundColor="transparent";
	infoA.style.color="#ffffff";
	anmeldA.style.color="#b4b4b4";
	beskrivA.style.color="#b4b4b4";
	
}
function anmeldelser(){
	var info = document.getElementById("information"),
	anmeldelser = document.getElementById("anmeldelser"),
	beskrivelse = document.getElementById("beskrivelse"),
	anmeldLi = document.getElementById("anmeld"),
	infoLi = document.getElementById("info"),
	beskrivLi = document.getElementById("beskriv"),
	anmeldA = document.getElementById("anmeldA"),
	beskrivA = document.getElementById("beskrivA"),
	infoA = document.getElementById("infoA");
	
	info.style.display="none";
	anmeldelser.style.display="block";
	beskrivelse.style.display="none";
	anmeldLi.style.backgroundColor="#707070";
	beskrivLi.style.backgroundColor="transparent";
	infoLi.style.backgroundColor="transparent";
	anmeldA.style.color="#ffffff";
	infoA.style.color="#b4b4b4";
	beskrivA.style.color="#b4b4b4";

}
function beskrivelse(){
	var info = document.getElementById("information"),
	anmeldelser = document.getElementById("anmeldelser"),
	beskrivelse = document.getElementById("beskrivelse"),
	anmeldLi = document.getElementById("anmeld"),
	infoLi = document.getElementById("info"),
	beskrivLi = document.getElementById("beskriv"),
	anmeldA = document.getElementById("anmeldA"),
	beskrivA = document.getElementById("beskrivA"),
	infoA = document.getElementById("infoA");
	
	
	info.style.display="none";
	anmeldelser.style.display="none";
	beskrivelse.style.display="block";
	beskrivLi.style.backgroundColor="#707070";
	infoLi.style.backgroundColor="transparent";
	anmeldLi.style.backgroundColor="transparent";
	beskrivA.style.color="#ffffff";
	infoA.style.color="#b4b4b4";
	anmeldA.style.color="#b4b4b4";
}
function kurv(){
	var kurv = document.getElementById("kurv");
	document.documentElement.style.scrollBehavior = "smooth";
	kurv.style.display="block";
}