// var map; //地图类对象
// var snake; //蛇类对象
// var food; //食物类对象
// var timer; //定时器对象
// var sum=0; //分数

var mapTable = document.createElement("table");
var mapTrs = new Array;
var mapTds = new Array;
var food;
var bodyLen = 3;
var body = new Array;


//初始化地图 20 x 20
function initializeMap() {
	
	for (var i = 0; i < 20; i++) {
		mapTrs[i] = document.createElement("tr");
		for (var j = 0; j < 20; j++) {
			mapTds[j] = document.createElement("td");
			mapTrs[i].appendChild(mapTds[j]);
		}
		mapTable.appendChild(mapTrs[i]);
	}
	mapTable.id = "map";
	document.body.appendChild(mapTable);
}

//初始化食物
function initializeFood() {
	var x = Math.floor(Math.random()*20);
	var y = Math.floor(Math.random()*20);
	var X = x*20;
	var Y = y*20 + y + 1;
	food = document.createElement("div");
	mapTable.appendChild(food);
	food.style.left = X + "px";
	food.style.top = Y + "px";
	food.id = "food";
}
//初始化蛇
function initializeSnake() {
	var x = Math.floor(Math.random()*20);
	var y = Math.floor(Math.random()*20);
	var X = x*20;
	var Y = y*20 + y + 1;
	for (var l = 0; l < bodyLen; l++) {
		body[l] = document.createElement("div");
		mapTable.appendChild(body[l]);
		body[l].className = "body";
		body[l].style.width = 19 + "px";
		body[l].style.height = 20 + "px";
		body[l].style.left = X + l*20 + "px";
		body[l].style.top = Y + "px";	
	}
}	
	//长度 x节加(x-1)个1px的边
	var direction;
	direct = function(key) {
		switch(key) {
			case 37:
			direction = "left";
			break;
			case 38:
			direction = "up";
			break;
			case 39:
			direction = "right";
			break;
			case 40:
			direction = "down";
			break;

		}
		switch(direction) {
			case "left":
			body[l] = body[l-1];
			break;
			case "right":
			body[l] = body[l+1];
			case "top":
			body[l].style.top = body[l-1].style.top - 21;
			case "top":
			body[l].style.top = body[l-1].style.top + 21;
		}
	}
//蛇的移动
function move() {
	for (var m = 1; m < bodyLen+1; m++) {
		body[m] = body[m-1];
	}
}

//计时器 移动速度
var timer = setInterval(move,500);
        
//         //判断蛇吃到食物
//         if(this.body[0][0]==food.x&&this.body[0][1]==food.y)
//         {
//             var x=this.body[length][0];
//             var y=this.body[length][1];
//             sum++;
//             document.title='分数:'+sum+'分';
//             this.body.push([x,y,'#89e089',null]);
//             food.show();
//         }
        
//         //判断撞墙死
//         if(this.body[0][0]<0 || this.body[0][0]>19 ||this.body[0][1]<0 ||this.body[0][1]>19)
//         {
//             alert('撞墙死');
//             clearTimeout(timer);
//             return;
//         }
        
//         //吃到自己死
//         for(var i=1;i<this.body.length;i++)
//         {
//             if(this.body[0][0]==this.body[i][0]&&this.body[0][1]==this.body[i][1])
//             {
//                 alert('吃到自己死');
//                 clearTimeout(timer);
//                 return;
//             }
//         }
 ;
    
//     document.onkeydown = function()
//     {
//         var code;
//         if(window.event)
//         {
//             code=window.event.keyCode;
//         }else
//         {
//             code = event.keyCode;
//         }
//         snake.setDirect(code);
//     };






//加载时调用函数
addLoadEvent(initializeMap);
addLoadEvent(initializeFood);
addLoadEvent(initializeSnake);
addLoadEvent(move);

function addLoadEvent(func) {
	var oldonload = window.onload;
	if (typeof window.onload != "function") {
		window.onload = func;
	} else {
		window.onload = function() {
			oldonload();
			func();
		}
	}
}