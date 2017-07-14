var LineBlack = Klass.create();
LineBlack.extend(JqSprite), LineBlack.extend(
{
	init: function (t, i)
	{
		this.target = t, this.lines = this.target.find(".lines"), this.line = this.target.find(".lines").find("img"), this.auto = i, this.sleeptime = 5e3, this.set(), this.auto && this.start(this)
	},
	set: function ()
	{
		this.line.css(
		{
			opacity: 0
		}), this.numArr = [];
		for (var t = 0; t < this.line.length; t++) this.numArr.push(t)
	},
	start: function (t)
	{
		for (var i = 300, e = t.sleeptime, n = new Command, s = 0; s < t.line.length; s++) n.call(this, t.bright, [$(t.line[t.numArr[s]])], ""), n.sleep(i + (10 + s));
		n.sleep(e), n.callback(this, t.start, [t]), n.execute()
	},
	bright: function (t)
	{
		var i = 900,
			e = 300,
			n = new Command;
		n.call(this, function ()
		{
			t.stop().css(
			{
				opacity: 0
			}).animate(
			{
				opacity: .7
			}, i, "linear")
		}, [], ""), n.sleep(i), n.call(this, function ()
		{
			t.stop().animate(
			{
				opacity: 0
			}, e, "linear")
		}, [], ""), n.callback(this, function () {}, []), n.execute()
	},
	resize: function () {}
});
var LineWhite = Klass.create();
LineWhite.extend(JqSprite), LineWhite.extend(
{
	init: function (t, i)
	{
		this.target = t, this.line = this.target.find(".lines").find("img"), this.flare = this.target.find(".flare"), this.light = this.target.find(".light"), this.lightImg = this.target.find(".light").find("img"), this.auto = i, this.sleeptime = 5e3, this.set(), this.auto && this.start(this)
	},
	set: function ()
	{
		this.line.css(
		{
			opacity: 0
		}), this.numArr = [];
		for (var t = 0; t < this.line.length; t++) this.numArr.push(t)
	},
	start: function (t)
	{
		for (var i = 300, e = t.sleeptime, s = new Command, l = 0; l < t.line.length; l++) s.call(this, t.bright, [$(t.line[t.numArr[l]]), l], ""), s.sleep(i + (10 + l));
		s.sleep(e), s.callback(this, t.start, [t]), s.execute()
	},
	start_lotion: function (t, i)
	{
		var e = 1e3,
			s = (t.sleeptime, new Command);
		t.light.stop().css(
		{
			width: 0,
			height: 0
		}), t.lightImg.stop().css(
		{
			opacity: 0
		}), s.call(this, function ()
		{
			t.lightImg.animate(
			{
				opacity: 1
			}, e, "linear")
		}, [], ""), s.call(this, function ()
		{
			t.light.animate(
			{
				width: 3e3,
				height: 1e3
			}, e, "linear")
		}, [], ""), s.sleep(.8 * e), s.call(this, t.bright, [$(t.flare[0])], ""), s.sleep(.3 * e), s.call(this, t.bright, [$(t.flare[1])], ""), s.sleep(.1 * e), s.call(this, t.bright, [$(t.flare[2])], ""), s.sleep(.3 * e), s.call(this, function ()
		{
			t.lightImg.animate(
			{
				opacity: 0
			}, .3 * e, "linear")
		}, [], ""), s.sleep(1 * e), s.callback(this, t.start_lotion, [t]), s.execute()
	},
	bright: function (t, i)
	{
		var e = 900,
			s = 300,
			l = new Command;
		l.call(this, function ()
		{
			t.stop().css(
			{
				opacity: 0
			}).animate(
			{
				opacity: .8
			}, e, "linear")
		}, [], ""), l.sleep(2 * e), l.call(this, function ()
		{
			t.stop().animate(
			{
				opacity: 0
			}, s, "linear")
		}, [], ""), l.callback(this, function () {}, []), l.execute()
	},
	resize: function () {}
});
var Header = Klass.create();
Header.extend(
{
	init: function (e)
	{
		this.o = e, this.anim = !1, this.interval = 5e3, this.anim_time = 800, this.anim_ease_in = "easeInCubic", this.anim_ease_out = "easeOutCubic", this.anim_ease_bound = "easeOutBack", this.anim_ease_els = "easeOutElastic", this.timer = null, this.is_loop = !1, this.is_open = !1, this.scroll = null
	},
	set: function ()
	{
		this.setObject.apply(this, []), this.setState.apply(this, []), this.setEvent.apply(this, []), this.setScroll.apply(this, [])
	},
	setObject: function ()
	{
		this.menu_btn = $("#menu_btn"), this.list = this.o.find(".list"), this.slide = this.o.find(".slide"), this.slide_prod = $(this.o.find(".slide")[0]), this.slide_event = $(this.o.find(".slide")[1]), this.prod = this.list.find(".prod").find("a"), this.event = this.list.find(".event").find("a")
	},
	setParam: function () {},
	setState: function () {},
	setEvent: function ()
	{
		this.menu_btn.on("click", this.toggleMenu), this.prod.on("click", this.toggleSubMenu), this.event.on("click", this.toggleSubMenu)
	},
	setScroll: function ()
	{
		var e = {
			scrollbars: !0,
			mouseWheel: !0,
			tap: !0,
			interactiveScrollbars: !0,
			shrinkScrollbars: "scale",
			fadeScrollbars: !0,
			eventPassthrough: "horizontal",
			preventDefaultException:
			{
				tagName: /^(INPUT|TEXTAREA|BUTTON|SELECT|A|X-WIDGET)$/
			}
		};
		this.scroll = new IScroll("#menu_scroll", e)
	},
	setScrollSize: function ()
	{
		if (_manager.header.is_open)
		{
			var e = _manager.header,
				i = $(window).height() - e.o.find("h1").height() + 80;
			e.list.css(
			{
				height: i
			}), e.scroll.refresh()
		}
	},
	toggleMenu: function ()
	{
		if (!_manager.header.anim)
		{
			var e = new Command,
				i = _manager.header;
			e.call(i, function ()
			{
				this.anim = !0
			}, []), _manager.header.is_open ? (e.call(i, i.closeMenu, [], ""), e.sleep(i.anim_time / 2)) : (e.call(i, i.openMenu, [], ""), e.sleep(i.anim_time / 2 + 100), e.call(i, function ()
			{
				this.setScrollSize()
			}, []), ""), e.callback(i, function ()
			{
				this.anim = !1
			}, []), e.execute()
		}
	},
	openMenu: function ()
	{
		var e = _manager.header,
			i = $(window).height() - e.o.height() + 80;
		e.list.animate(
		{
			height: i
		}, e.anim_time / 2, e.anim_ease_out), e.menu_btn.addClass("on"), _manager.header.is_open = !0
	},
	closeMenu: function ()
	{
		var e = _manager.header;
		e.list.innerHeight();
		e.list.animate(
		{
			height: 0
		}, e.anim_time / 2, e.anim_ease_out), e.menu_btn.removeClass("on"), _manager.header.is_open = !1
	},
	toggleSubMenu: function (e)
	{
		if (!_manager.header.anim)
		{
			var i = $(e.currentTarget),
				n = ~~i.attr("data-no"),
				t = $(_manager.header.slide[n]),
				a = new Command,
				s = _manager.header;
			a.call(s, function ()
			{
				this.anim = !0
			}, []), t.height() <= 0 ? (a.call(s, s.openSubMenu, [i, n, t], ""), a.sleep(s.anim_time / 2), a.call(s, function ()
			{
				this.anim = !1
			}, [], "")) : (a.call(s, s.closeSubMenu, [i, n, t], ""), a.sleep(s.anim_time / 2), a.call(s, function ()
			{
				this.anim = !1
			}, [], "")), a.callback(s, function ()
			{
				this.setScrollSize()
			}, []), a.execute()
		}
	},
	openSubMenu: function (e, i, n)
	{
		var t = _manager.header,
			a = e.find("span"),
			s = n.find("ul").innerHeight();
		a.addClass("open"), n.animate(
		{
			height: s
		}, t.anim_time / 2, t.anim_ease_out)
	},
	closeSubMenu: function (e, i, n)
	{
		var t = _manager.header,
			a = e.find("span");
		a.removeClass("open"), n.animate(
		{
			height: 0
		}, t.anim_time / 2, t.anim_ease_out)
	},
	resize: function ()
	{
		_manager.header.o.css(
		{
			height: _manager.header.o.find("img").height()
		}), _manager.header.setScrollSize()
	}
});
var Float = Klass.create();
Float.extend(JqSprite), Float.extend(
{
	init: function (t, n, e, a)
	{
		this.container = t, this.target = this.container.find(".target"), this.bg = n, this.btn = e, this.closeBtn = t.find(".f_close"), this.movMode = a, this.floatAnim = !1, this.openFlg = !1, this.hasOpenEvent = !1, this.hasCloseEvent = !1, this.set()
	},
	set: function ()
	{
		this.movMode && (_manager.movtarget = this.target), this.setEvent()
	},
	setEvent: function ()
	{
		var t = this;
		t.btn.bind("click", function ()
		{
			t.show(t)
		}), t.closeBtn.bind("click", function ()
		{
			t.hide(t)
		}), t.bg.bind("click", function ()
		{
			t.hide(t)
		})
	},
	setOpenEvent: function (t, n)
	{
		t.fnOpen = n, t.hasOpenEvent = !0
	},
	setNextEvent: function (t, n)
	{
		t.fnNext = n, t.hasNextEvent = !0
	},
	setCloseEvent: function (t, n)
	{
		t.fnClose = n, t.hasCloseEvent = !0
	},
	show: function (t)
	{
		if (!t.floatAnim)
		{
			var n = 300;
			t.floatAnim = !0, t.openFlg = !0;
			var e = t.container.offset().top,
				a = new Command;
			t.movMode && (a.call(this, _manager.resetPlayer, [], ""), a.call(this, _manager.setPlayer, [t.btn.attr("data-id")], "")), a.call(this, function ()
			{
				t.bg.stop().css(
				{
					display: "block",
					opacity: 0
				}).animate(
				{
					opacity: 1
				}, n, "linear")
			}, [], ""), a.call(this, function ()
			{
				t.container.stop().css(
				{
					display: "block",
					position: "absolute",
					top: e + 50,
					opacity: 0
				}).animate(
				{
					opacity: 1
				}, n, "linear")
			}, [], ""), a.callback(this, function ()
			{
				t.floatAnim = !1, t.hasOpenEvent && t.fnOpen()
			}, []), a.execute()
		}
	},
	showNext: function (t, n)
	{
		if (!_manager.floatAnim)
		{
			var e = 500;
			_manager.floatAnim = !0, t.current = ~~n, t.current != t.dataLen - 1 || t.loop ? t.right.removeClass("passive") : t.right.addClass("passive"), 0 != t.current || t.loop ? t.left.removeClass("passive") : t.left.addClass("passive");
			var a = new Command;
			a.call(this, function ()
			{
				$(".target", t.content).stop().animate(
				{
					opacity: 0
				}, e, "linear", function () {})
			}, [], ""), a.sleep(e), a.call(this, t.setContent, [t, n], ""), a.call(this, function ()
			{
				t.emptyContent(t)
			}, []), a.callback(this, function ()
			{
				_manager.floatAnim = !1, $(".target", t.content).addClass("targetcurrent"), t.hasNextEvent && t.fnNext()
			}, []), a.execute()
		}
	},
	setContent: function (t, n)
	{
		var e = $("#target_" + t.name);
		if (t.techPage && t.data[~~n].tech)
		{
			var a = "#" + t.data[~~n].tech;
			return void $.tmpl($(a), t.data[~~n]).appendTo(e)
		}
		null != n ? $.tmpl($(t.tmpl), t.data[~~n]).appendTo(e) : $.tmpl($(t.tmpl),
		{}).appendTo(e)
	},
	hide: function (t)
	{
		if (!t.floatAnim)
		{
			var n = 500;
			t.floatAnim = !0;
			var e = new Command;
			t.movMode && (e.call(this, _manager.stopMovie, [], ""), e.call(this, function ()
			{
				t.container.find("iframe").animate(
				{
					opacity: 0
				}, n, "linear", function ()
				{
					t.container.find("iframe").css(
					{
						display: "none"
					})
				})
			}, [], "")), e.call(this, function ()
			{
				t.container.stop().animate(
				{
					opacity: 0
				}, n, "linear", function ()
				{
					t.container.css(
					{
						display: "none"
					})
				})
			}, [], ""), e.call(this, function ()
			{
				t.bg.stop().animate(
				{
					opacity: 0
				}, n, "linear", function ()
				{
					t.bg.css(
					{
						display: "none",
						opacity: 0
					})
				})
			}, [], ""), e.sleep(n), e.call(this, function ()
			{
				t.container.css(
				{
					position: "fixed"
				}), t.movMode && _manager.delPlayer(), t.hasCloseEvent && t.fnClose()
			}, [], ""), e.callback(this, function ()
			{
				t.floatAnim = !1, t.openFlg = !1
			}, []), e.execute()
		}
	},
	emptyContent: function (t)
	{
		$(".targetcurrent", t.content).remove()
	},
	resize: function () {}
});
var CmnManager = Klass.create();
CmnManager.extend(JqManager), CmnManager.extend(
{
	init: function ()
	{
		this.ua = getUA(), this.webkit = "chrome" == this.ua.ua && "safari" == this.ua.ua ? !0 : !1, this.html = {}, this.body = {}, this.anim_time = 800, this.anim_ease = "easeOutCubic", this.anim_ease2 = "easeOutExpo", this.event_move = "mousemove", this.event_down = "mousedown", this.event_up = "mouseup", this.is_down = !1, this.fps = 24, this.ie8 = !1, this.modern = !1, this.raf = null, this.timer = null
	},
	set: function ()
	{
		this.setCmnParam(), this.setCmnObject(), this.setLocal(), this.loader = $("#loader"), this.loaderBar = $("#loader").find(".bar"), this.loaded = !1, this.startLoader()
	},
	start: function ()
	{
		var t = new Command;
		this.start_command = t, t.call(this, this.setCmnState, [], ""), t.call(this, this.setCmnEvent, [], ""), t.async(this, this.startLocal, [], ""), t.sleep(this.anim_time), t.call(this, this.hideLoader, [], ""), t.call(this, this.showContents, [], ""), t.callback(this, function ()
		{
			_manager.start_command = null
		}, [], ""), t.execute()
	},
	setLocal: function ()
	{
		this.setParam(), this.setObject()
	},
	startLocal: function ()
	{
		var t = this.getAsyncCommand(arguments),
			e = new Command;
		e.call(this, this.setState, [], ""), e.call(this, this.setEvent, [], ""), e.callback(t, t.publish, []), e.execute()
	},
	setCmnParam: function ()
	{
		var t = ~~this.ua.ver;
		this.modern = !0, "ie" === _manager.ua.ua && 9 >= t && (this.modern = !1), _manager.ua.sp && (this.event_move = "touchmove", this.event_down = "touchstart", this.event_up = "touchend")
	},
	setCmnObject: function ()
	{
		this.loader = $("#loader"), this.header = Header.create($("#header")), this.header.set(), this.contents = $("#contents"), this.contentsarea = $("#contentsarea"), _manager.trial = $(".trial")
	},
	setCmnState: function ()
	{
		this.modern, $("#header").css(
		{
			position: "fixed"
		}), _manager.trial.css(
		{
			opacity: 0,
			display: "none"
		})
	},
	setParam: function () {},
	setObject: function () {},
	setState: function () {},
	setCmnEvent: function ()
	{
		this.setScroll(), this.setCmnResize(), this.setCmnWaypoint()
	},
	setCmnWaypoint: function ()
	{
		$("#wrapper").waypoint(function (t)
		{
			"up" === t ? _manager.trial.stop().css(
			{
				opacity: 1,
				display: "block"
			}).animate(
			{
				opacity: 0
			}, _manager.anim_time / 2, "linear", function ()
			{
				_manager.trial.css(
				{
					display: "none"
				})
			}) : _manager.trial.stop().css(
			{
				opacity: 0,
				display: "block"
			}).animate(
			{
				opacity: 1
			}, _manager.anim_time / 2, "linear")
		},
		{
			offset: -100
		})
	},
	setEvent: function () {},
	setScroll: function ()
	{
		$("a[href^=#]").on("click", function (t)
		{
			var e = $(t.currentTarget),
				a = e.attr("href"),
				n = e.attr("data-pos");
			return n = n ? ~~n : 0, _manager.gotoTop(a, n), !1
		})
	},
	setWayPoint: function ()
	{
		$("#top").waypoint(function (t) {},
		{
			offset: 300
		})
	},
	setCmnResize: function ()
	{
		$(window).bind("resize", this.resize)
	},
	setResize: function ()
	{
		$(window).bind("resize", this.resizeCmn)
	},
	resizeCmn: function (t)
	{
		var e = $(window);
		e.width(), e.height()
	},
	resize: function (t)
	{
		var e = $(window);
		e.width(), e.height()
	},
	hideLoader: function ()
	{
		var t = this.loader;
		_manager.loaded = !0, _manager.loader.animate(
		{
			opacity: 0
		}, this.anim_time, "linear", function ()
		{
			t.addClass("hide")
		})
	},
	showContents: function ()
	{
		_manager.contents.removeClass("hide"), _manager.contents.animate(
		{
			opacity: 1
		}, _manager.anim_time, _manager.anim_ease), _manager.contentsarea.animate(
		{
			opacity: 1
		}, _manager.anim_time, _manager.anim_ease)
	},
	preload: function ()
	{
		for (var t = this, e = this.getAsyncCommand(arguments), a = new createjs.LoadQueue(!0), n = [], i = $.url(), s = i.attr("host"), r = $("img"), c = $("object"), l = {}, h = r.length, m = 0; h > m; m++) o = {}, o.src = r[m].src, o.src && (o.id = r[m].src, o.type = createjs.PreloadJS.IMAGE, l = $.url(o.src), l.attr("file") && l.attr("host") === s && n.push(o));
		for (var u = c.length, m = 0; u > m; m++) o = {}, o.src = c[m].data, o.id = c[m].data, o.type = createjs.PreloadJS.SVG, l = $.url(o.src), l.attr("file") && l.attr("host") === s && n.push(o);
		for (var d = 5, f = 0; d > f; f++) o = {}, o.src = "./img/slide/" + (f + 1) + ".jpg", o.id = o.src, o.type = createjs.PreloadJS.IMAGE, l = $.url(o.src), l.attr("file") && l.attr("host") === s && n.push(o);
		a.on("fileload", function (t) {}, this), a.on("progress", function (e)
		{
			t.per_target = 100 * e.loaded >> 0
		}, this), a.on("complete", function (e)
		{
			e.target.onFileLoad = null, e.target.onComplete = null, e.target.onProgress = null, t.per_target = 100
		}, this), a.loadManifest(n), a.load(), this.progress_timer = setTimeout(function ()
		{
			t.updateProgress(t, e)
		}, 50)
	},
	updateProgress: function (t, e)
	{
		var a = t.per_target;
		a >= 100 ? (e.publish(), t.progress_timer = null) : t.progress_timer = setTimeout(function ()
		{
			t.updateProgress(t, e)
		}, 50)
	},
	gotoTop: function (t, e)
	{
		var a = 800;
		if (1 == _manager.ua.sp)
		{
			var n = function ()
				{
					var t = $("html"),
						e = t.scrollTop(),
						a = $("<div/>").height(1e4).prependTo("body");
					t.scrollTop(1e4);
					var n = !!t.scrollTop();
					return t.scrollTop(e), a.remove(), n
				}(),
				i = $(t);
			if (void 0 != i.attr("id"))
			{
				var s = i.offset().top;
				return $(n ? "html" : "body").animate(
				{
					scrollTop: s + e
				}, a, "easeOutCubic"), !1
			}
		}
		else
		{
			var o = $(t);
			if (o)
			{
				var r = o.offset().top;
				return "#top" === t ? void _manager.animTop() : ($("html,body").animate(
				{
					scrollTop: r + e
				}, a, "easeOutCubic"), !1)
			}
		}
	},
	setTop: function ()
	{
		scrollTo(0, 0)
	},
	opening_resize: function () {},
	passiveBody: function ()
	{
		$("body").css(
		{
			height: "",
			overflow: "hidden"
		})
	},
	activeBody: function ()
	{
		$("body").css(
		{
			height: "",
			overflow: "auto"
		})
	},
	startLoader: function ()
	{
		if (!_manager.loaded)
		{
			var t = 400,
				e = new Command;
			e.call(this, function ()
			{
				_manager.loaderBar.stop().css(
				{
					left: 0,
					right: "auto",
					width: "0%"
				}).animate(
				{
					width: "100%"
				}, t, "easeInQuad")
			}, [], ""), e.sleep(t), e.call(this, function ()
			{
				_manager.loaderBar.stop().css(
				{
					right: 0,
					left: "auto",
					width: "100%"
				}).animate(
				{
					width: "0%"
				}, t, "easeOutQuad")
			}, [], ""), e.sleep(t + 500), e.callback(this, function ()
			{
				_manager.startLoader()
			}, [], ""), e.execute()
		}
	}
});