var data = [
	{img:1,h1}
	]

//通用函数
var g = function(id) {
	if( id.substr(0,1) == ".") {
		return document.getElementByClassName(id.substr(1));
	}
	return document.getElementById(id);
}

//添加幻灯片
function addSliders() {

}



window.onload = function() {
	addSliders();
}