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
var imgEnModalPersona = document.getElementById("imgEnModalPersona");
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

var imgpersona = document.getElementById('qrcarttoink');
var imgEnModalPersona = document.getElementById("imgEnModalPersona");
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