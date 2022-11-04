window.onscroll = function(){

	//console.log(document.documentElement.scrollTop);
	if (document.documentElement.scrollTop > 100) {

		document.querySelector('.regresa_menu_container')
		.classList.add('show');
	}
	else{
		document.querySelector('.regresa_menu_container')
		.classList.remove('show');
	}	
}

document.querySelector('.regresa_menu_container')
.addEventListener('click',()=>{

		window.scrollTo({
		top:0,
		behavior:'smooth'
		})
});

// Zoom en imagen portafolio al dar click
var modal = document.getElementById('popUp');

var imgpersona = document.getElementById('imgpersona');
var imgEnModalPersona = document.getElementById("imgEnModal");
var descripcion = document.getElementById("descripcion");

imgpersona.onclick = function () {
	modal.style.display = "block";
	imgEnModalPersona.src = this.src;
	descripcion.innerHTML = this.alt;
}

var span = document.getElementsByClassName("close")[0];

span.onclick = function () {
	modal.style.display = "none";
}


// Zoom en qr cartoink al dar click
var modal = document.getElementById('popUp');

var qrcarttoink = document.getElementById('qrcarttoink');
var imgEnModalPersona = document.getElementById("imgEnModal");
var descripcion = document.getElementById("descripcion");

qrcarttoink.onclick = function () {
	modal.style.display = "block";
	imgEnModalPersona.src = this.src;
	descripcion.innerHTML = this.alt;
}

var span = document.getElementsByClassName("close")[0];

span.onclick = function () {
	modal.style.display = "none";
}



// Zoom en qr omerta al dar click
var modal = document.getElementById('popUp');

var qromerta = document.getElementById('qromerta');
var imgEnModalPersona = document.getElementById("imgEnModal");
var descripcion = document.getElementById("descripcion");

qromerta.onclick = function () {
	modal.style.display = "block";
	imgEnModalPersona.src = this.src;
	descripcion.innerHTML = this.alt;
}

var span = document.getElementsByClassName("close")[0];

span.onclick = function () {
	modal.style.display = "none";
}



// Zoom en qr makeorganic al dar click
var modal = document.getElementById('popUp');

var qrmakeorganic = document.getElementById('qrmakeorganic');
var imgEnModalPersona = document.getElementById("imgEnModal");
var descripcion = document.getElementById("descripcion");

qrmakeorganic.onclick = function () {
	modal.style.display = "block";
	imgEnModalPersona.src = this.src;
	descripcion.innerHTML = this.alt;
}

var span = document.getElementsByClassName("close")[0];

span.onclick = function () {
	modal.style.display = "none";
}

// Progress Barr After Effects
function transicionProgressBar()
{
	var iAfterProgressbar = document.getElementById('iAfterProgressbar');
	var iJSProgressbar = document.getElementById('iJSProgressbar'); 
	var iAnimateProgressbar = document.getElementById('iAnimateProgressbar');
	var iPhpProgressbar = document.getElementById('iPhpProgressbar');
	var iPhotoshopProgressbar = document.getElementById('iPhotoshopProgressbar'); 
	var iJQProgressbar = document.getElementById('iJQProgressbar'); 
	var iMySqlProgressbar = document.getElementById('iMySqlProgressbar'); 
	var iCSSProgressbar = document.getElementById('iCSSProgressbar'); 
	var iHTMLProgressbar = document.getElementById('iHTMLProgressbar'); 
	var iPremiereProgressbar = document.getElementById('iPremiereProgressbar'); 
	var iVBProgressbar = document.getElementById('iVBProgressbar');
	var iOfficeProgressbar = document.getElementById('iOfficeProgressbar'); 


	iAfterProgressbar.classList.toggle("FinalProgressBar45");
	iJSProgressbar.classList.toggle("FinalProgressBar55");
	iAnimateProgressbar.classList.toggle("FinalProgressBar65"); 
	iPhpProgressbar.classList.toggle("FinalProgressBar65"); 
	iPhotoshopProgressbar.classList.toggle("FinalProgressBar75");
	iJQProgressbar.classList.toggle("FinalProgressBar75");
	iMySqlProgressbar.classList.toggle("FinalProgressBar80");
	iCSSProgressbar.classList.toggle("FinalProgressBar85");
	iHTMLProgressbar.classList.toggle("FinalProgressBar90"); 
	iPremiereProgressbar.classList.toggle("FinalProgressBar95"); 
	iVBProgressbar.classList.toggle("FinalProgressBar95"); 
	iOfficeProgressbar.classList.toggle("FinalProgressBar100");
}