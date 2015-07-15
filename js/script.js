var button = document.querySelector(".btn-mail");
var form = document.querySelector(".modal-form-write");
var exit = document.querySelector(".btn-close");
var login = form.querySelector("[name=name]");
var slidecontrols = document.querySelectorAll(".slider-controls i");
var slide = document.querySelectorAll(".slide");
/*slidecontrols.addEventListener("click", function(event){
	event.preventDefault();
	slidecontrols[0]
}*/
slidecontrols[0].addEventListener("click", function(event){
	event.preventDefault();
	if(slidecontrols[1].classList.contains("active")){
		slidecontrols[1].classList.toggle("active");
	}
	if(slidecontrols[2].classList.contains("active")){
		slidecontrols[2].classList.toggle("active");
	}
	if(slide[2].classList.contains("slide-show")){
		slide[2].classList.toggle("slide-show");
	}
	if(slide[1].classList.contains("slide-show")){
		slide[1].classList.toggle("slide-show");
	}
	slidecontrols[0].classList.add("active");
	slide[0].classList.add("slide-show");
	
	
});


slidecontrols[1].addEventListener("click", function(event){
		
	event.preventDefault();
	if(slidecontrols[2].classList.contains("active")){
		slidecontrols[2].classList.toggle("active");
	}
	if(slidecontrols[0].classList.contains("active")){
		slidecontrols[0].classList.toggle("active");
	}
	if(slide[0].classList.contains("slide-show")){
		slide[0].classList.toggle("slide-show");
	}
	if(slide[2].classList.contains("slide-show")){
		slide[2].classList.toggle("slide-show");
	}
	slidecontrols[1].classList.add("active");
	slide[1].classList.add("slide-show");
	
});

slidecontrols[2].addEventListener("click", function(event){
	event.preventDefault();
	if(slidecontrols[1].classList.contains("active")){
		slidecontrols[1].classList.toggle("active");
	}
	if(slidecontrols[0].classList.contains("active")){
		slidecontrols[0].classList.toggle("active");
	}
	if(slide[0].classList.contains("slide-show")){
		slide[0].classList.toggle("slide-show");
	}
	if(slide[1].classList.contains("slide-show")){
		slide[1].classList.toggle("slide-show");
	}
	slidecontrols[2].classList.add("active");
	slide[2].classList.add("slide-show");
});
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