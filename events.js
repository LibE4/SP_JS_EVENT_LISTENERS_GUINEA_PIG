var sectionEmt = document.getElementsByTagName("section");
var outputEmt = document.getElementById("output-target");
for (var i = 0; i < sectionEmt.length; i++){
	sectionEmt[i].addEventListener("click", function(){
		outputEmt.innerHTML = this.innerHTML; 
	})
}
var h1Emt =  document.getElementById("page-title");
h1Emt.addEventListener("mouseover", function(){
	outputEmt.innerHTML = "You moved your mouse over the header";
})
h1Emt.addEventListener("mouseleave",function(){
	outputEmt.innerHTML = "You left me!!";
})
var textEmt = document.getElementById("keypress-input");
textEmt.addEventListener("keypress", function(){
	outputEmt.innerHTML = textEmt.value;
})
var guineaPig = document.getElementById("guinea-pig");
var btnColor = document.getElementById("add-color");
var btnLarge = document.getElementById("make-large");
var btnBorder = document.getElementById("add-border");
var btnRounding = document.getElementById("add-rounding");
btnColor.addEventListener("click", function(){
	guineaPig.style.color = "blue";
})
btnLarge.addEventListener("click", function(){
	guineaPig.style.fontSize = "xx-large";
})
btnBorder.addEventListener("click", function(){
	guineaPig.style.border = "1px solid black";
})
btnRounding.addEventListener("click", function(){
	guineaPig.style.borderRadius = "5px";
})
