var windowWidth = 1024;
var windowHeight = 768;
var radius = 8;
var marginTop = 60;
var marginLeft = 30;

const endTime = new Date(2016, 8, 23, 18, 47, 52)
var curShowTimeSeconds = 0;

window.onload = function() {
	var canvas = document.getElementById("canvas");
	var context = canvas.getContext("2d");

	canvas.width = windowWidth;
	canvas.height = windowHeight;

	curShowTimeSeconds = getCurShowTimeSeconds();
	setInterval(function() {
		render(context);
		update();
	}, 50)
}

function getCurShowTimeSeconds() {
	var curTime = new Date();
	var ret = endTime.getTime() - curTime.getTime();
	ret = Math.round(ret/1000);
	return ret >= 0 ? ret : 0;
}

function update() {
	var nextShowTimeSeconds = getCurShowTimeSeconds();

	var nextHours = parseInt(nextShowTimeSeconds/3600);
	var nextMinutes = parseInt((nextShowTimeSeconds - nextHours*3600)/60);
	var nextSeconds = nextShowTimeSeconds%60;

	var curHours = parseInt(curShowTimeSeconds/3600);
	var curMinutes = parseInt((curShowTimeSeconds - curHours*3600)/60);
	var curSeconds = curShowTimeSeconds%60;

	if (nextSeconds != curSeconds) {
		curShowTimeSeconds = nextShowTimeSeconds;
	}
}

function render(cxt) {
	cxt.clearRect(0, 0, windowWidth, windowHeight);

	var hours = parseInt(curShowTimeSeconds/3600);
	var minutes = parseInt((curShowTimeSeconds - hours*3600)/60);
	var seconds = curShowTimeSeconds%60;

	//小时
	renderDigit(marginLeft, marginTop, parseInt(hours/10), cxt);
	renderDigit(marginLeft+15*(radius+1), marginTop, parseInt(hours%10), cxt);
	//冒号
	renderDigit(marginLeft+30*(radius+1), marginTop, 10, cxt);
	//分钟
	renderDigit(marginLeft+39*(radius+1), marginTop, parseInt(minutes/10), cxt);
	renderDigit(marginLeft+54*(radius+1), marginTop, parseInt(minutes%10), cxt);
	//冒号
	renderDigit(marginLeft+69*(radius+1), marginTop, 10, cxt);
	//秒钟
	renderDigit(marginLeft+78*(radius+1), marginTop, parseInt(seconds/10), cxt);
	renderDigit(marginLeft+93*(radius+1), marginTop, parseInt(seconds%10), cxt);
}

function renderDigit(x, y, num, cxt) {
	cxt.fillStyle = "rgb(0, 102, 153)";

	for (var i = 0; i < digit[num].length; i++) {
		for (var j = 0; j < digit[num][i].length; j++) {
			if (digit[num][i][j] == 1) {
				cxt.beginPath();
				cxt.arc(x+j*2*(radius+1)+(radius+1), y+i*2*(radius+1)+(radius+1), radius, 0, 2*Math.PI);
				cxt.closePath();
				cxt.fill();
			}
		}
	}
}