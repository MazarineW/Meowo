window.onload = function() {
	var obtn = document.getElementById("btn");
	obtn.onclick = function() {
		var timer = setInterval(function(){
			var osTop = document.documentElement.scrollTop || document.body.scrollTop;
			var ispeed = osTop / 5;
			document.documentElement.scrollTop = document.body.scrollTop = osTop-ispeed;	
			if (osTop == 0) {
				clearInterval(timer);
			}
		},30)
		
	}
	window.onscroll = function() {
		var clientHeight = document.documentElement.clientHeight;

		var osTop = document.documentElement.scrollTop || document.body.scrollTop;
		if(osTop >= clientHeight) {
			obtn.style.display = "block";
		} else {
			obtn.style.display = "none";
		}
	}
	
}