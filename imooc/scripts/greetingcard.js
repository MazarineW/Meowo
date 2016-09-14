var play = document.getElementById("play");
var music = document.getElementsByTagName("audio")[0];
play.onclick = function() {
	if (play.className == "play") {
		play.className = "";
		music.pause();
	} else {
		play.className = "play";
		music.play();
	}
}

var page1 = document.getElementById("page1");
page1.onclick = function() {
	page1.style.display = "none";
	page2.style.display = "block";
	setTimeout(function() {
		page2.style.display = "none";
		page3.style.display = "block";
		page3.style.top = "0px";
	}, 2000);
}