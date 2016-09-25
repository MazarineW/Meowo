function getPosition(node) {
	var left = node.offsetLeft;
	var top = node.offsetTop;
	var parent = node.offsetParent;
	while (parent != null) {
		left += parent.offsetLeft;
		top += parent.offsetTop;
		parent = parent.offsetParent;
	}
	return {"left": left, "top": top};
}
	