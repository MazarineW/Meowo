(function() {
	var Sidebar = function(eId, closeId) {
		this.state = "opened";
		this.el = document.getElementById(eId || "sidebar");
		this.closeEl = document.getElementById(closeId || "close")
		var self = this;
		this.el.addEventListener("click", function(event) {
			if (event.target !== self.el) {
				self.triggerSwitch();
			}
		});
	};
	Sidebar.prototype.close = function() {
		this.state = "closed";
	};
	Sidebar.prototype.open = function() {
		this.state = "opened";
	};
	Sidebar.prototype.triggerSwitch = function() {
		if (this.state === "opened") {
			this.close();
		} else {
			this.open();
		}
	};
	var sidebar = new Sidebar();
})();