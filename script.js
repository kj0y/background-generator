var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var myButton = document.getElementById("randomColor");

function generateRandomColor() {
	var letters = '0123456789ABCDEF';
	var color3 = '#';
	var color4 = '#';
	for (var i = 0; i < 6; i++) {
		color3 += letters[Math.floor(Math.random() * 16)];
	}
	for (var i = 0; i < 6; i++) {
		color4 += letters[Math.floor(Math.random() * 16)];
	}
	color1.value = color3;
	color2.value = color4;
	console.log(color1.value);
	console.log(color2.value);
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";
	css.textContent = body.style.background + ";";
}

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);

myButton.onclick = function(){generateRandomColor()};

function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";
	css.textContent = body.style.background + ";";
}




