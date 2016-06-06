window.onload = function() {
	var box = document.getElementById("container");
	var imgs = box.getElementsByTagName("img");
	var imgwidth = imgs[0].offsetWidth;
	var exposewidth = 160;
	var boxwidth = imgwidth + (imgs.length - 1) * exposewidth;
	box.style.width = boxwidth + "px";

	function setImgsPos(){
		for (var i = 1, len = imgs.length; i < len; i++) {
			imgs[i].style.left = imgwidth + exposewidth * (i - 1) + "px";
		}
	}
	setImgsPos();
	var translate = imgwidth - exposewidth;

	for (var i = 0, len = imgs.length; i < len; i++) {
		(function(i) {
			imgs[i].onmouseover = function() {
				setImgsPos();
				for (var j = 1; j <= i; j++) {
					imgs[j].style.left = parseInt(imgs[j].style.left, 10) - translate + "px";
				}

			};
		})(i);

	}

};