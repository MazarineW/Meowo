
//header-gallery自动播放
var headergallery = document.getElementById("header-gallery");
var imgs = headergallery.getElementsByTagName("img");
var index = 0;
function showNextPic() {
	for( var i = 0; i < imgs.length; i++) {
		imgs[i].className = "";
	}
	imgs[index].className = "show";
	index = (index + 1 < imgs.length ? index + 1 : 0);
}
setInterval(showNextPic,1000);


//body-gallery 自动播放
var bodygallery = document.getElementById("body-gallery");
var imglist = document.getElementById("imglist")
var prevbtn = document.getElementById("prev");
var nextbtn = document.getElementById("next");

var timer;

function play() {
	timer = setInterval(function() {
		nextbtn.onclick();
	},1000);
}

function stop() {
	clearInterval(timer);
}

nextbtn.onclick = function() {
	var oldleft = parseInt(imglist.style.left);
	if (oldleft == -1800) {
		imglist.style.left = -300 + "px";
	} else {
		imglist.style.left = oldleft - 300 + "px";
	}
}
prevbtn.onclick = function() {
	var oldleft = parseInt(imglist.style.left);
	if (oldleft == -300) {
		imglist.style.left = -1800 + "px";
	} else {
		imglist.style.left = oldleft + 300 + "px";
	}
}

bodygallery.onmouseover = stop;
bodygallery.onmouseout = play;
window.onload = function() {
	play();
};
