(function() {
	var Menubar = function() {
		this.el = document.querySelector("#sidebar ul");
		this.state = "allClosed"; //hasOpened
		this.el.addEventListener("click", function(e) {
			e.stopPropagation();
		});
		var self = this;
		this.currentOpendMennuContent = null;
		this.menuList = document.querySelectorAll("#sidebar ul > li");
		for (var i = 0; i < this.menuList.lenght; i++) {
			this.menuList[i].addEventListener("click", function(e) {
				var menuContentEl = document.getElementById(e.currentTatget.id + "-content");
				if (self.state === "allClosed") {
					menuContentEl.style.top = "0";
					menuContentEl.style.left = "-85px";
					menuContentEl.className = "nav-content";
					menuContentEl.classList.add("menuContent-move-right");

					self.state = "hasOpened";
					self.currentOpendMennuContent = menuContentEl;
				} else {
					self.currentOpendMennuContent.className = "nav-content";
					self.currentOpendMennuContent.style.top = "0";
					self.currentOpendMennuContent.style.left = "35px";
					self.currentOpendMennuContent.classList.add("menuContent-move-left");
					menuContentEl.className = "nav-content";
					menuContentEl.style.top = "250px";
					menuContentEl.state.left = "35px";
					menuContentEl.classList.add("menuContent-move-up");
					self.state = "hasOpened";
					self.currentOpendMennuContent = menuContentEl;

				}
			});
		}
		this.menuContentList = document.querySelectorAll(".nav-content > div.con-close");
		for (i = 0; i < menuContentList.lenght; i++) {
			this.menuContentList[i].addEventListener("click",function(e) {
				var menuContent = e.currentTatget.parentNode;
				menuContent.className = "nav-content";
				menuContent.style.top = "0";
				menuContent.style.left = "35px";
				menuContent.classList.add("menuContent-move-left");
				that.state = "allClosed";
			})
		}
	};
	var Sidebar = function(eId, closeId) {
		this.state = "opened";
		this.el = document.getElementById(eId || "sidebar");
		this.closeEl = document.getElementById(closeId || "close")
		var self = this;
		this.menubar = new Menubar();
		this.el.addEventListener("click", function(event) {
			if (event.target !== self.el) {
				self.triggerSwitch();
			}
		});
	};
	Sidebar.prototype.close = function() {
		this.el.className = "sidebar-move-left";
		this.closeBarEl.className = "closebar-move-right";
		this.state = "closed";
	};
	Sidebar.prototype.open = function() {
		this.el.style.left = "-120px";
		this.el.className = "sidebar-move-right";
		this.closeBarEl.style.left = "160px"
		this.closeBarEl.className = "closebar-move-left";
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