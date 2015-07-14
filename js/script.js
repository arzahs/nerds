var button = document.querySelector(".btn-mail");
var form = document.querySelector(".modal-form-write");
var exit = document.querySelector(".btn-close");
var login = form.querySelector("[name=name]");
var slidecontrols = document.querySelectorAll(".slider-controls i");

/*slidecontrols.addEventListener("click", function(event){
	event.preventDefault();
	slidecontrols[0]
}*/
button.addEventListener("click", function(event){
	event.preventDefault();
	form.classList.add("modal-form-write-show");
	login.focus();
});

exit.addEventListener("click", function(event){
	event.preventDefault();
	form.classList.remove("modal-form-write-show");
});
window.addEventListener("keydown", function(event){
	if(event.keyCode == 27){
		if(form.classList.contains("modal-form-write-show")){
			form.classList.remove("modal-form-write-show");
		}
	}
});

/*var slideShow = function(event){
	event.preventDefault();
}*/