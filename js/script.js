var button = document.querySelector(".btn-mail");
var form = document.querySelector(".modal-form-write");

button.addEventListener("click", function(event){
	event.preventDefault();
	form.classList.add("modal-form-write-show");
});