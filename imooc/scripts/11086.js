// var canvasWidth = window.innerWidth;
// var canvasHeight = window.innerHeight;
var canvasWidth = 800;
var canvasHeight = 600;

var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");

canvas.width = canvasWidth;
canvas.height = canvasHeight;

var image = new Image();
var radius = 50;
var clippingRegion = {x:400, y:200, r:50};

var theAnimation = null;

image.src = "images/11086/image.jpg";
image.onload = function() {
	// document.getElementById("blur-div").width = canvasWidth + "px";
	// document.getElementById("blur-div").height = canvasHeight + "px";

	// document.getElementById("blur-image").width = image.width + "px";
	// document.getElementById("blur-image").height = image.height + "px";

	initCanvas();
}

function initCanvas() {
	clearInterval(theAnimation);
	clippingRegion = {x:Math.random()*(canvas.width-2*radius)+radius,
					  y:Math.random()*(canvas.height-2*radius)+radius,
					  r:radius};
	draw(image, clippingRegion);
}

function setClippingRegion(clippingRegion) {
	context.beginPath();
	context.arc(clippingRegion.x, clippingRegion.y, clippingRegion.r, 0, Math.PI*2, false)
	context.clip();
}

function draw(image, clippingRegion) {
	context.clearRect(0, 0, canvas.width, canvas.height);
	context.save();
	setClippingRegion(clippingRegion);
	context.drawImage(image, 0, 0);
	context.restore();
}

function reset() {	
	initCanvas();
}

function show() {

	theAnimation = setInterval(function() {
		clippingRegion.r += 20;
		if (clippingRegion.r > canvas.width+canvas.height) {
			clearInterval(theAnimation);
		}
		draw(image, clippingRegion);
	}, 30);
}