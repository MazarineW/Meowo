var board = new Array();
var score = 0;

$(document).ready(function () {
	newgame();
})

function newgame() {
	//初始化棋盘
	init();
	//随机生成两个数字
	generateOneNum();
	generateOneNum();
}

function init() {
	for (var i = 0; i < 4; i++) {
		for (var j = 0; j < 4; j++) {
			var cell = $("cell-" + i + "-" + j);
			cell.css("top", getPosTop(i, j));
			cell.css("left", getPosLeft(i, j));
		}

	}
	for (var i = 0; i < 4; i++) {
		board[i] = new Array;
		for (var j = 0; j < 4; j++) {
			board[i][j] = 0;
		}
	}

	updateBoardView();
}

function updateBoardView() {
	$("num").remove();
	for (var i = 0; i < 4; i++) {
		for (var j = 0; j < 4; j++) {
			$("container").append("<div class='num' id='num-"+ i + "-"+ j + "'></div>");
			var theNum = $("#num-"+i+"-"+j);

			if (board[i][j] == 0) {
				theNum.css("width", "0px");
				theNum.css("height", "0px");
				theNum.css("top", getPosTop(i,j)+50);
				theNum.css("height", getPosLeft(i,j)+50);
			} else {
				theNum.css("width", "100px");
				theNum.css("height", "100px");
				theNum.css("top", getPosTop(i,j));
				theNum.css("height", getPosLeft(i,j));
				theNum.css("background-color", getBgcolor(board[i][j]));
				theNum.css("background-color", getNumColor(board[i][j]));
				theNum.text(board[i][j]);
			}
		}
	}
}

function generateOneNum() {
	if (nospace(board) == true) {
		return false;
	}
	//随机一个位置
	var ranx = Math.floor(Math.random()*4);
	var rany = Math.floor(Math.random()*4);
	while (true) {
		if (board[ranx][rany] == 0) {
			break;
		}
		var ranx = Math.floor(Math.random()*4);
		var rany = Math.floor(Math.random()*4);
	}

	//随机生成2或4
	var ranNum = Math.random() < 0.5 ? 2 : 4;

	//在随机位置上显示随机数字
	board[ranx][rany] = ranNum;
	showNumAni(ranx, rany, ranNum);

	return true;

}
