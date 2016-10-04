var can1 = document.getElementById("canvas1");
var ctx1 = can1.getContext("2d");
var can2 = document.getElementById("canvas2");
var ctx2 = can2.getContext("2d");

var canWidth = can1.width;
var canHeight = can1.height;

var lastTime;
var deltaTime;
var bgPic = new Image;

document.body.onload = gameStart;
function gameStart() {
	init();
	lastTime = Date.now();
	deltaTime = 0;
	gameLoop();
	bgPic.src = "../images/9904/background.jpg";
}

function init() {
	drawBackground();
}
function drawBackground() {
	ctx2.drawImage(bgPic, 0, 0, canWidth, canHeight);
}
function gameLoop() {
	//根据机器性能确定帧间隔
	window.requestAnimationFrame(gameLoop);
	var now = Date.now();
	deltaTime = now - lastTime;
	lastTime = now;
	drawBackground();
}