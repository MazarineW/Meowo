
//gallery自动播放
var gallery = document.getElementById("main-gallery");
var imgs = gallery.getElementsByTagName("img");
var index = 0;
function showNextPic() {
	for( var i = 0; i < imgs.length; i++) {
		imgs[i].className = "";
	}
	imgs[index].className = "show";
	index = (index + 1 < imgs.length ? index + 1 : 0);
}
setInterval(showNextPic,2000);