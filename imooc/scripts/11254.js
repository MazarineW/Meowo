var canvas = document.getElementById("clock");
var context = canvas.getContext("2d");
var width = context.canvas.width;
var height = context.canvas.height;
var r = width / 2;
var rem = width / 200;

//绘制表盘
function drawBackground() {
	context.save();
	context.translate(r, r);
	context.beginPath();
	context.lineWidth = 10 * rem;
	context.arc(0, 0, r - context.lineWidth / 2, 0, 2 * Math.PI, false);
	context.stroke();

	var hourNums = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 1, 2];
	context.font = 20 * rem + "px";
	context.textAlign = "center";
	context.textBaseline = "middle";
	//小时数字
	for (var i = 0; i < hourNums.length; i++) {
		var rad = 2 * Math.PI / 12 * i;
		var x = Math.cos(rad) * (r - 30 * rem);
		var y = Math.sin(rad) * (r - 30 * rem);
		context.fillText(hourNums[i], x, y);
	}
	//秒针点
	for (var i = 0; i < 60; i++) {
		var rad = 2 * Math.PI / 60 * i;
		var x = Math.cos(rad) * (r - 18 * rem);
		var y = Math.sin(rad) * (r - 18 * rem);
		context.beginPath();
		if (i%5 ===0) {
			context.fillStyle = "#000";
			context.arc(x, y, 2 * rem, 0, 2 * Math.PI, false);
		} else {
			context.fillStyle = "#ccc";
			context.arc(x, y, 2 * rem, 0, 2 * Math.PI, false);
		}
		context.fill();
	}
}
//绘制时针
function drawHour(hour, minute) {
	context.save();
	context.beginPath();
	var rad = 2 * Math.PI / 12 * hour;
	var mrad = 2 * Math.PI / 12 /60 * minute;
	context.rotate(rad + mrad);
	context.lineWidth =5 * rem;
	context.lineCap = "round";
	context.moveTo(0, 10 * rem);
	context.lineTo(0, -r / 2);
	context.stroke();
	context.restore();
}
//绘制分针
function drawMinute(minute) {
	context.save();
	context.beginPath();
	var rad = 2 * Math.PI / 60 * minute;
	context.rotate(rad);
	context.lineWidth =3 * rem;
	context.lineCap = "round";
	context.moveTo(0, 10 * rem);
	context.lineTo(0, -r + 30 * rem);
	context.stroke();
	context.restore();
}
//绘制秒针
function drawSecond(second) {
	context.save();
	context.beginPath();
	var rad = 2 * Math.PI / 60 * second;
	context.rotate(rad);
	context.lineWidth =2;
	context.fillStyle = "#DE7A7A";
	context.moveTo(-2 * rem, 15 * rem);
	context.lineTo(2 * rem, 15 * rem);
	context.lineTo(1, -r + 18 * rem);
	context.lineTo(-1, -r + 18 * rem);
	context.fill();
	context.restore();
}
//绘制中心点
function drawDot() {
	context.beginPath();
	context.fillStyle = "#fff";
	context.arc(0, 0, 3 * rem, 0, 2  *Math.PI, false);
	context.fill();
}

var time = document.getElementById("time");
function draw() {
	context.clearRect(0, 0, width, width);

	var now = new Date();
	var hour = now.getHours();
	var minute = now.getMinutes();
	var second = now.getSeconds();
	
	drawBackground();
	drawHour(hour, minute);
	drawMinute(minute);
	drawSecond(second);
	drawDot();
	context.restore();
	time.innerHTML = "当前时间：" + hour + "时" + minute + "分" + second + "秒";
}
setInterval(draw, 1000);