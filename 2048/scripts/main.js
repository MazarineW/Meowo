var board = new Array();
var score = 0;
//记录当前位置是否已经发生一次合并
var hasConflicted = new Array();


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
	//初始化格子背景
	for (var i = 0; i < 4; i++) {
		for (var j = 0; j < 4; j++) {
			var cell = $("#cell-" + i + "-" + j);
			cell.css("top", getPosTop(i, j));
			cell.css("left", getPosLeft(i, j));
		}
	}
	//初始化board
	for (var i = 0; i < 4; i++) {
		board[i] = new Array;
		hasConflicted[i] = new Array;
		for (var j = 0; j < 4; j++) {
			board[i][j] = 0;
			hasConflicted[i][j] = false;
		}
	}
	//更新显示
	updateBoardView();
	score = 0;
}

function updateBoardView() {
	//移除所有数字
	$(".num").remove();
	//根据board填充数字，0不显示
	for (var i = 0; i < 4; i++) {
		for (var j = 0; j < 4; j++) {
			$("#container").append("<div class='num' id='num-"+ i + "-"+ j + "'></div>");
			var theNum = $("#num-"+ i + "-" + j);

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
			hasConflicted[i][j] = false;
		}
	}
}
//随机生成一个数字
function generateOneNum() {
	if (nospace(board) == true) {
		return false;
	}
	//随机一个位置
	var ranx = Math.floor(Math.random()*4);
	var rany = Math.floor(Math.random()*4);
	//如果当前位置没有数字，结束循环，否则重新选取随机位置
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

$(document).keydown(function(event) {
	switch(event.keyCode) {
		case 37: //left
			if (moveLeft()) {
				setTimeout("generateOneNum()", 210);
				setTimeout("isgameover()", 300);
			}
			break;
		case 38: //up
			if (moveTop()) {
				setTimeout("generateOneNum()", 210);
				setTimeout("isgameover()", 300);
			}
			break;
		case 39: //right
			if (moveRight()) {
				setTimeout("generateOneNum()", 210);
				setTimeout("isgameover()", 300);
			}
			break;
		case 40: //down
			if (moveDown()) {
				setTimeout("generateOneNum()", 210);
				setTimeout("isgameover()", 300);
			}
			break;
		default:
			break;
	}
})

function isgameover() {
	//如果没有空位并且不能移动，游戏结束
	if (nospace(board) && nomove(board)) {
		gameover();
	}
}

function gameover() {
	alert("Game Over!")
}

function moveLeft() {
	if (!canMoveLeft()) {
		return false;
	}
	for (var i = 0; i < 4; i++) {
		for (var j = 1; j < 4; j++) {
			if (board[i][j] != 0) {
				for (var k = 0; k < j; k++) {
					if (board[i][k] == 0 && noBlockHori(i, k, j, board)) {
						//move
						showMoveAni(i, j, i,k);
						board[i][k] = board[i][j];
						board[i][j] = 0;

						continue;
					} else if (board[i][k] == board[i][j] && noBlockHori(i, k, j, board) && !hasConflicted[i][k]) {
						//move
						showMoveAni(i, j, i,k);
						//add
						board[i][k] += board[i][j];
						board[i][j] = 0;
						score += board[i][k];
						updateScore(score);
						hasConflicted[i][k] = true;

						continue;
					}
				}
			}
		}
	}
	setTimeout("updateBoardView()", 200)
	return true;
}
function moveTop() {
	if (!canMoveTop()) {
		return false;
	}
	for (var i = 1; i < 4; i++) {
		for (var j = 0; j < 4; j++) {
			if (board[i][j] != 0) {
				for (var k = 0; k < i; k++) {
					if (board[k][j] == 0 && noBlockVert(j, k, i, board)) {
						//move
						showMoveAni(i, j, k, j);
						board[k][j] = board[i][j];
						board[i][j] = 0;

						continue;
					} else if (board[k][j] == board[i][j] && noBlockVert(j, k, i, board) && hasConflicted[k][j]) {
						//move
						showMoveAni(i, j, k, j);
						//add
						board[k][j] += board[i][j];
						board[i][j] = 0;
						score += board[k][j];
						updateScore(score);
						hasConflicted[k][j] = true;

						continue;
					}
				}
			}
		}
	}
	setTimeout("updateBoardView()", 200)
	return true;
}
function moveRight() {
	if (!canMoveRight()) {
		return false;
	}
	for (var i = 0; i < 4; i++) {
		for (var j = 0; j < 3; j++) {
			if (board[i][j] != 0) {
				for (var k = 1; k < 4; k++) {
					if (board[i][k] == 0 && noBlockHori(i, j, k, board)) {
						//move
						showMoveAni(i, j, i, k);
						board[i][k] = board[i][j];
						board[i][j] = 0;

						continue;
					} else if (board[i][k] == board[i][j] && noBlockHori(i, j, k, board) && hasConflicted[i][k]) {
						//move
						showMoveAni(i, j, i, k);
						//add
						board[i][k] += board[i][j];
						board[i][j] = 0;
						score += board[i][k];
						updateScore(score);
						hasConflicted[i][k] = true;

						continue;
					}
				}
			}
		}
	}
	setTimeout("updateBoardView()", 200)
	return true;
}
function moveDown() {
	if (!canMoveDown()) {
		return false;
	}
	for (var i = 0; i < 3; i++) {
		for (var j = 0; j < 4; j++) {
			if (board[i][j] != 0) {
				for (var k = i; k < 4; k++) {
					if (board[k][j] == 0 && noBlockVert(j, i, k, board)) {
						//move
						showMoveAni(i, j, k, j);
						board[k][j] = board[i][j];
						board[i][j] = 0;

						continue;
					} else if (board[k][j] == board[i][j] && noBlockVert(j, i, k, board) && hasConflicted[k][j]) {
						//move
						showMoveAni(i, j, k, j);
						//add
						board[k][j] += board[i][j];
						board[i][j] = 0;
						score += board[k][j];
						updateScore(score);
						hasConflicted[k][j] = true;

						continue;
					}
				}
			}
		}
	}
	setTimeout("updateBoardView()", 200)
	return true;
}