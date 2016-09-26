function showNumAni(i, j, number) {
	var num = $("#num-" + i + "-" + j);
	num.css("background-color", getBgcolor(number));
	num.css("color", getNumColor(number));
	num.text(number);

	num.animate({
		width: "100px",
		height: "100px",
		top: getPosTop(i, j),
		left: getPosLeft(i, j),
	}, 50);	
}

function showMoveAni(fromX, fromY, toX, toY) {
	var num = $("#num-" + fromX + "-" + fromY);
	num.animate({
		top: getPosTop(toX, toY),
		left: getPosLeft(toX, toY),
	}, 200);	
}

function updateScore(score) {
	$("#score").text(score);
}