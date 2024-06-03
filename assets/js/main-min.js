function onDocReady() {
	
	
    verticalNav(), stackedTables(), navLevelThree(), filterPop(), popUps(), productCat(), productPage(), thisYear(), $(".description__tabs").easyResponsiveTabs({
        type: "default",
        width: "auto",
        fit: !0,
        closed: "accordion",
        tabidentify: "hor_1",
        activate: function (t) {
            var e = $(this),
                i = $("#nested-tabInfo"),
                a = $("span", i);
            a.text(e.text()), i.show()
        }
    })
	cookieCheck();
	try{BindPopup();}catch(e){console.log(e);}
}

function onWinResize() {
    navLevelThree()
}

function stackedTables() {
    var t = [],
        e = document.querySelectorAll(".stacked th"),
        i = (document.querySelectorAll(".stacked th"), document.querySelector(".stacked tbody"));
    if ($("table.stacked").length) {
        for (var a = 0; a < e.length; a++) {
            var o = e[a];
            t.push(o.textContent.replace(/\r?\n|\r/, ""))
        }
        for (var s, a = 0; s = i.rows[a]; a++)
            for (var n, l = 0; n = s.cells[l]; l++) n.setAttribute("data-th", t[l])
    }
}

function productCat() {
    $(".listing-controls__layout a").click(function (t) {
        function e() {
            $(a).animate({
                opacity: 0
            }, function () {
                $(".grid__item").removeClass("compact grid list"), $(".grid__item").addClass(i), $(a).stop().animate({
                    opacity: 1
                })
            })
        }
        t.preventDefault(), $(".listing-controls__layout a").removeClass("active"), $(this).addClass("active");
        var i = $(this).attr("title"),
            a = $("body").find(".js-sortable");
        switch (i) {
            case "compact":
                e();
                break;
            case "grid":
                e();
                break;
            case "list":
                e()
        }
    })
}

function productPage() {
    function t() {
        function t() {
            if (!$(this).parent().hasClass("active")) {
                var t = $(this).attr("name");
                if ("A" == this.tagName) var e = $(this).attr("data-val");
                else var e = $(this).val();
                $("#" + t).val(e);
                var i = $(this).attr("data-image");
                $(".js-main-image").attr("src", i), DoVarUpdate()
            }
        }
        var e = $('div[class^="product__mod--"] select').add($('div[class^="product__mod--"] input'));
        modOther = $('div[class^="product__mod--"] li a'), $(e).change(t), $(modOther).click(t), $(".tooltip").tooltip(), $('div[class^="product__mod--"] li a').each(function () {
            $(this).on("click", function (t) {
                if (t.preventDefault(), modLabel = $(this).attr("title"), modClass = $(this).closest("div").attr("class"), $(this).parent().hasClass("active")) {
                    var e = $(this).attr("name");
                    $("#" + e).val("0"), $(this).parent().removeClass("active"), DoVarUpdate()
                } else $(this).parent().siblings("li").removeClass("active"), $(this).parent().toggleClass("active"), DoVarUpdate()
            })
        })
    }
    if ($(".product-details").length) {
        $(".js-zoom-show:not(.js-zoom-hide)").click(function () {
            var t = $(".product__images");
            t.find(".js-main-image").panzoom({
                $zoomIn: t.find(".js-zoom-in"),
                $zoomOut: t.find(".js-zoom-out"),
                $reset: t.find(".js-reset"),
                increment: .5,
                minScale: 1,
                contain: "invert"
            }).panzoom("zoom")
        }), $(".js-zoom-show").click(function () {
            $(this).toggleClass("js-zoom-hide"), $(this).siblings().fadeToggle("fast", "linear"), $(this).hasClass("js-zoom-hide") || ($(".js-main-image").panzoom("reset"), $(".js-main-image").panzoom("destroy"), $(".js-main-image").on("mousewheel.focal", function (t) {
                return !0
            }))
        }), $(".images__thumbs > div").on("click", function () {
            $(this).hasClass("js-spin") || ($(this).siblings().removeClass("active"), $(".js-main-image").panzoom("reset"), imgLocation = $(this).find("img").attr("src"), $(".js-main-image").attr("src", imgLocation), $(this).addClass("active"))
        }), t();
        $(".images__thumbs").children().length
    }
}

function DoVarUpdate() {
    var t = $("#ID").val(),
        e = "/skus/?ID=" + t + "&CK=" + Math.random() * Math.random(),
        i = $("#SF1").val(),
        a = $("#SF2").val(),
        o = $("#SF3").val(),
        s = $("#SF4").val(),
        n = $("#SF5").val();
    $.ajax({
        url: e,
        type: "GET",
        data: {
            F1: i,
            F2: a,
            F3: o,
            F4: s,
            F5: n
        },
        cache: !1,
        dataType: "text",
        success: function (t) {
            $("#BuyBoxArea").html(t), productMod()
        },
        error: function (t) { }
    })
}

function productMod() {
    function t() {
        if (!$(this).parent().hasClass("active")) {
            var t = $(this).attr("name");
            if ("A" == this.tagName) var e = $(this).attr("data-val");
            else var e = $(this).val();
            $("#" + t).val(e);
            var i = $(this).attr("data-image");
            $(".js-main-image").attr("src", i), DoVarUpdate()
        }
    }
    var e = $('div[class^="product__mod--"] select').add($('div[class^="product__mod--"] input'));
    modOther = $('div[class^="product__mod--"] li a'), $(e).change(t), $(modOther).click(t), $(".tooltip").tooltip(), $('div[class^="product__mod--"] li a').each(function () {
        $(this).on("click", function (t) {
            if (t.preventDefault(), modLabel = $(this).attr("title"), modClass = $(this).closest("div").attr("class"), $(this).parent().hasClass("active")) {
                var e = $(this).attr("name");
                $("#" + e).val("0"), $(this).parent().removeClass("active"), DoVarUpdate()
            } else $(this).parent().siblings("li").removeClass("active"), $(this).parent().toggleClass("active"), console.log("test"), DoVarUpdate()
        })
    }), $("input[type=radio]").click(function () {
        if (this.previous) {
            var t = $(this).attr("name");
            $("#" + t).val(""), this.checked = !1, DoVarUpdate()
        }
        this.previous = this.checked
    })
}

function viewportWidth() {
    return "undefined" != typeof window.innerWidth ? window.innerWidth : "undefined" != typeof document.documentElement && "undefined" != typeof document.documentElement.clientWidth && 0 != document.documentElement.clientWidth ? document.documentElement.clientWidth : viewportwidth = document.getElementsByTagName("body")[0].clientWidth
}

function navLevelThree() {
    WinW = viewportWidth(), $("header nav > ul > li").each(function () {
        var t = $(this).offset().left,
            e = 2 * $(this).width(),
            i = $(this).find("> ul > li > ul");
        e + t > WinW ? $(i).addClass("build-left") : $(i).removeClass("build-left")
    })
}

function thisYear() {
    var t = (new Date).getFullYear();
    $(".js-thisYear").html(t)
}

function verticalNav() {
    $(".nav--main.vertical-list ul").hide(), $(".nav--main.vertical-list > li").each(function () {
        0 != $(this).find("ul").length && $(this).prepend('<span class="nav-section"></span>')
    }), $(".nav-section").on("click", function (t) {
        $(this).parent("li").find("ul").slideToggle(), $(this).parent("li").toggleClass("section--expanded"), t.preventDefault()
    })
}

function filterHide() {
    $(".filters").hide(), $(".filter-toggle").on("click", function () {
        $(".filters").slideToggle()
    })
}

function filterPop() {
    function t(t) {
        $.each(t, function (t, e) {
            $("<li />", {
                text: e
            }).appendTo(o)
        })
    }
    var e = $(".filters"),
        i = viewportWidth(),
        a = [];
    e.find("ul li h4").each(function () {
        a.push($(this).text())
    });
    var o = $('<ul class="vertical-list filter__nav" />');
    t(a), (e.parents(".content").length || 850 > i) && (e.hide(), $(".listing-controls__layout").append('<span class="filter-toggle button"><span>Filter</span></span>'), $(".filter-toggle").on("click", function () {
        e.addClass("popup").wrap('<div class="pop-wrapper"></div>'), $(".popup").append('<div class="popup--close button"></div>'), $(".popup--close").on("click", function () {
            $(".filter__nav").remove(), $(e).unwrap().hide(), $(this).closest(".pop-wrapper").hide()
        }), $(o).insertAfter(e.find("h2")), $(".filter__nav li").on("click", function () {
            $(this).siblings().removeClass("active");
            var t = $(this).index(),
                e = $(".filters.popup > ul:last-of-type");
            e.children("li").hide(), e.children("li:eq(" + t + ")").show(), $(this).addClass("active")
        }), e.toggle()
    }))
}

function popUps() {
    var t = $(".popup");
    $(".popup--close").on("click", function () {
        alert("test"), $(this).parent(".popup").hide()
    }), $(t).each(function () {
        $(this).hide().append('<span class="popup--close"></span>').wrap('<div class="pop-wrapper"></div>'), $(this).closest(".pop--show").on("click", function () {
            $(this).show()
        })
    })
}
$(document).ready(function () {
    onDocReady(), $(window).resize(function () {
        onWinResize()
    }), $(".tooltip").tooltip(), $(".ShipSelect").click(function () {
        $("#ShipSelectFrm").submit()
    }), $("#ShipRegion").change(function () {
        $("#RegionSelectFrm").submit()
    }), $(window).load(productCat)
}), $(".add-to-basket").click(function (t) {
    t.preventDefault();
    var e = $(this).attr("data-rel"),
        i = $(this),
        a = parseInt($("#BasketItems").text()) + 1,
        o = [a, null, "1 Added to Basket"];
    $.post("/Add2Basket/?AJ=T" + e, $("#Add2basket" + e).serialize(), function (t) {
        $("#BasketItems").html(o[0]), $(i).prop("title", o[2]), $(i).tooltip().mouseleave(function (t) {
            if ($(this).is(":focus") && "Add to Basket" != $(this).attr("title")) {
                $(this).attr("title");
                t.stopImmediatePropagation(), $(this).tooltip().tooltip("open")
            }
        }).focusout(function () {
            $(this).tooltip().tooltip("close").tooltip("destroy")
        }), $(i).tooltip("open"), $("#BasketItems").fadeOut("fast").delay(25).fadeIn("fast"), $("#BasketTotal").fadeOut("fast").delay(25).fadeIn("fast"), setTimeout(function () {
            $(i).tooltip().tooltip("close"), $(i).prop("title", "Add to Basket"), $(i).tooltip().tooltip("destroy")
        }, 2500)
    })
}), $("body").on("submit", "#Add2basket", function (t) {
    t.preventDefault(), $.post("/Add2Basket/?AJ=T", $("#Add2basket").serialize(), function (t) {
        var e = t.split("|");
        $("#BasketItems").html(e[0]), $("#BasketTotal").html(e[1]), $("#add-to-basket").prop("title", e[2]), $("#add-to-basket").tooltip().mouseleave(function (t) {
            if ($(this).is(":focus") && "Add to Basket" != $(this).attr("title")) {
                $(this).attr("title");
                t.stopImmediatePropagation(), $(this).tooltip().tooltip("open")
            }
        }).focusout(function () {
            $(this).tooltip().tooltip("close").tooltip("destroy")
        }), $("#add-to-basket").tooltip("open"), $("#BasketItems").fadeOut("fast").delay(25).fadeIn("fast"), $("#BasketTotal").fadeOut("fast").delay(25).fadeIn("fast"), setTimeout(function () {
            $("#add-to-basket").tooltip().tooltip("close"), $("#add-to-basket").prop("title", "Add to Basket"), $("#add-to-basket").tooltip().tooltip("destroy")
        }, 2500)
    })
});

function mobileNavCustom() {
    $('<div class="mobile-nav"></div>').prependTo("body"), $('<a class="m-nav-btn" href="#"></a>').prependTo(".header-wrapper header"), $("body").on("click", ".mobile-nav-wrap", function () {
        console.log("test"), $(".mobile-nav-wrap").hide(), $("body").toggleClass("ovrf-hide"), $("html").toggleClass("ovrf-hide")
    }), $(".m-nav-btn").on("click", function () {
        $(".mobile-nav-wrap").stop(!0, !0).animate({
            width: "toggle"
        }), $("body").toggleClass("ovrf-hide"), $("html").toggleClass("ovrf-hide")
    }), $(".mobile-nav").click(function (e) {
        e.stopPropagation()
    }), $("body").on("focus", "#search-input-mob", function () {
        $(".mobile-nav").addClass("nav--search")
    }), $("body").on("click", ".mob-search--close", function () {
        console.info("test close search"), $(".mobile-nav").removeClass("nav--search")
    });
    var e = '<form method="post" id="mob-search-form" action="/search/"><div class="input-box"><input type="search" name="Query" id="search-input-mob" class="input-text" placeholder="Search entire store here..." autocomplete="off"></div><button type="button" class="mob-search--close">Close</button></form>';
    $('<div class="head">Search</div>').appendTo(".mobile-nav"), $(e).appendTo(".mobile-nav"), $('<div class="head">Navigation</div>').appendTo(".mobile-nav"), $("ul.main-nav").clone().appendTo(".mobile-nav"), $('<div class="head">More Links</div>').appendTo(".mobile-nav"), $("ul.links__acc").clone().appendTo(".mobile-nav"),$('<div class="mob-social"><span><a href="http://www.facebook.com/minifigurehq" class="mob-fb">Facebook</a></span><span><a href="https://www.instagram.com/minifigurehq" class="mob-inst">Instagram</a></span><span><a href="https://www.youtube.com/channel/UC9vvT7QEKElMtq1IkkgKQIQ" class="mob-yt">YouTube</a></span><span><a href="http://www.twitter.com/MinifigureHQ" class="mob-tw">twitter</a></span></div>').appendTo('.mobile-nav'),$('<ul class="links__acc horizontal-list"><li><a href="/contact-us.htm">Contact Us</a></li>').appendTo('.mobile-nav'),$(".mobile-nav").wrap('<div class="mobile-nav-wrap"></div>')
}

function heroSlider() {
    function e() {
        var e = $(".header-wrapper").height() + $(".carousel-wrapper").height() + 200;
        $(".carousel__background").height(e)
    }
    $("#hero-slider").length && ($(".header-wrapper").next().andSelf().wrapAll('<div class="home-head" />'), e(), $(window).resize(e))
}

function sliderScroll() {
    function e(e) {
        function t() {
            WinW <= 749 && i.reloadSlider({
                slideWidth: 5e3,
                minSlides: 1,
                maxSlides: 1,
                slideMargin: 10,
                pager: !1,
                controls: !0
            }), WinW >= 750 && i.reloadSlider({
                slideWidth: 5e3,
                minSlides: 3,
                maxSlides: 3,
                slideMargin: 10,
                pager: !1,
                controls: !0
            })
        }
        var i = $(e).bxSlider({
            slideWidth: 5e3,
            minSlides: 3,
            maxSlides: 3,
            slideMargin: 10,
            pager: !1,
            controls: !1
        });
        $(function () {
            t(), $(window).resize(function () {
                t()
            })
        })
    }
    $(".js-scroll").length && (WinW = viewportWidth(), $(".js-scroll").each(function () {
        e(this)
    }))
}

function scrolled() {
    $(window).scroll(function () {
        var e = $(".scroll:not(.scroll--scrolled)"),
            t = $(window).scrollTop(),
            i = $(e).offset().top,
            a = $(e).outerHeight();
        t > i + a && !e.hasClass("header--scroll") ? $(".scroll").addClass("scroll--scrolled") : $(".scroll").removeClass("scroll--scrolled")
    })
}

function scrollShow() {
    $(window).scroll(function (e) {
        var t = $(document).scrollTop(),
            i = {
                "#mini-figure-1": 200,
                "#mini-figure-2": 0,
                "#mini-figure-3": 1600,
                "#mini-figure-4": 650
            };
        for (var a in i) {
            var o = i[a];
            $("body").hasClass("cms-index-index") && (o += 430), t > o ? $(a).addClass("active") : $(a).removeClass("active")
        }
    })
}
$(document).ready(function () {
    mobileNavCustom(), heroSlider(), sliderScroll(), $("img.lazy").unveil()
}),
    function (e) {
        e.extend({
            site: function () {
                function t() {
                    var e = window,
                        t = "inner";
                    return "innerWidth" in window || (t = "client", e = document.documentElement || document.body), {
                        width: e[t + "Width"],
                        height: e[t + "Height"]
                    }
                }

                function i(e, t) {
                    var i = null;
                    return function () {
                        var a = this,
                            o = arguments;
                        clearTimeout(i), i = setTimeout(function () {
                            e.apply(a, o)
                        }, t)
                    }
                }

                function a(e, t) {
                    var i = e.width(),
                        a = Math.floor(i / t);
                    return 1 > a && (a = 1), a
                }
                return this.carousel = function (o) {
                    function s(t) {
                        e(".carousel .swiper-slide").removeClass("swiper-slide-current swiper-slide-prev-prev swiper-slide-prev swiper-slide-next swiper-slide-next-next"), e(c.getSlide(t - 2)).addClass("swiper-slide-current swiper-slide-prev-prev"), e(c.getSlide(t - 1)).addClass("swiper-slide-current swiper-slide-prev"), e(c.getSlide(t)).addClass("swiper-slide-current"), e(c.getSlide(t + 1)).addClass("swiper-slide-current swiper-slide-next"), e(c.getSlide(t + 2)).addClass("swiper-slide-current swiper-slide-next-next"), 0 != e(c.getSlide(t - 1)).length ? e(".prev", o).removeClass("hidden") : e(".prev", o).addClass("hidden"), 0 != e(c.getSlide(t + 1)).length ? e(".next", o).removeClass("hidden") : e(".next", o).addClass("hidden")
                    }

                    function n() {
                        r = t().width < 480 ? 110 : 165
                    }

                    function l() {
                        var t = o.data("swiper"),
                            i = t.params.slidesPerView,
                            s = a(o, r);
                        i != s && (1 == s && (s = 2), t.params.slidesPerView = s), t.reInit(), t.resizeFix();
                        var n = 0;
                        e(".swiper-slide", o).each(function () {
                            var t = e(this).children().eq(0);
                            n = n > t.outerHeight() ? n : t.outerHeight()
                        }), e(".swiper-wrapper, .swiper-slide", o).css("height", n)
                    }
                    var r, d = e(o).attr("id"),
                        o = e("#" + d);
                    n();
                    var c = o.swiper({
                        slidesPerView: a(o, r),
                        updateOnImagesReady: !0,
                        calculateHeight: !0,
                        watchActiveIndex: !0,
                        centeredSlides: !0,
                        simulateTouch: !1,
                        pagination: ".swiper-pagination",
                        paginationClickable: !0,
                        speed: 200,
                        mode: "horizontal",
                        onSlideChangeStart: function (e) {
                            s(e.activeIndex)
                        },
                        onSlideClick: function (e) {
                            e.clickedSlideLoopIndex != e.activeLoopIndex && (c.swipeTo(e.clickedSlideLoopIndex), s(e.clickedSlideIndex))
                        },
                        onTouchMove: function (e) {
                            s(e.activeIndex)
                        },
                        onTouchEnd: function (e) {
                            s(e.activeIndex)
                        }
                    });
                    e(".prev", o).on("click", function (e) {
                        e.preventDefault(), c.swipePrev()
                    }), e(".next", o).on("click", function (e) {
                        e.preventDefault(), c.swipeNext()
                    }), c.swipeTo(2), s(2), e(".carousel__product a", o).on("click", function (t) {
                        return e(this).closest(".swiper-slide").hasClass("swiper-slide-active") || t.preventDefault(), !0
                    }), e(window).bind("resize", i(function () {
                        n(), l()
                    }, 300))
                }, this
            }
        })
    }(jQuery), $('.basket__product input[name="Qty"]').change(function () {
        $(this).parent().find(".js-bskUp").removeClass("hidden")
    });
	
function BindPopup() {

	var currentDate = new Date();
	var nextDay = new Date();
	nextDay.setDate(currentDate.getDate() + 1);

	console.log("nextDay:" + nextDay);
    if (_getCookie("popupshown") == "true") {
        $(".pop-wrapper").hide();
		$(".popup").hide();
    }
    else {
		document.cookie = "popupshown=true; expires="+nextDay+"; path=/";
        $(".pop-wrapper").show();
		$(".popup").show();
    }

    $(".popup__close").click(function (e) {
        e.preventDefault();
		document.cookie = "popupshown=true; expires="+nextDay+"; path=/";
        $(".pop-wrapper").hide();
		$(".popup").hide();
    });
	
	//$(".pop-wrapper").click(function (e) {
        //e.preventDefault();
		//document.cookie = "popupshown=Y; expires=Tue, 01 Jan 2099 00:00:00 UTC; path=/";
        //$(".pop-wrapper").hide();
		//$(".popup").hide();
    //});
}

function _getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1);
        if (c.indexOf(name) == 0) return c.substring(name.length, c.length);
    }
    return "";
}

function cookieCheck() {

    if (_getCookie("acceptcookie") == "true" || _getCookie("hidecookiemessage") == "true") {
        $("#pnlacceptcookie").hide();
    }
    else {
        $("#pnlacceptcookie").show();
    }

    $("#btnacceptcookie").click(function (e) {
        e.preventDefault();
        document.cookie = "acceptcookie=true; expires=Tue, 01 Jan 2099 00:00:00 UTC; path=/";
        $("#pnlacceptcookie").hide();
		
		
		try
		{
			var gaidStr = this.dataset.gaid;
			function gtag() { dataLayer.push(arguments); }

			gtag('consent', 'update', {
			  ad_user_data: 'granted',
			  ad_personalization: 'granted',
			  ad_storage: 'granted',
			  analytics_storage: 'granted'
			});

			// Load gtag.js script.
			var gtagScript = document.createElement('script');
			gtagScript.async = true;
			gtagScript.src = 'https://www.googletagmanager.com/gtag/js?id='+gaidStr;

			var firstScript = document.getElementsByTagName('script')[0];
			firstScript.parentNode.insertBefore(gtagScript,firstScript);
		}
		catch(e)
		{
			console.warn(e);
		}
		
		
		window.location = '/';
    });
}

window.addEventListener('DOMContentLoaded', function () {
	try
	{
		if (_getCookie("acceptcookie") == "true") {
			var gaidStr = document.getElementById("btnacceptcookie").dataset.gaid;
			
			function gtag() { dataLayer.push(arguments); }

			gtag('consent', 'update', {
			  ad_user_data: 'granted',
			  ad_personalization: 'granted',
			  ad_storage: 'granted',
			  analytics_storage: 'granted'
			});
			// Load gtag.js script.
			var gtagScript = document.createElement('script');
			gtagScript.async = true;
			gtagScript.src = 'https://www.googletagmanager.com/gtag/js?id=' + gaidStr;

			var firstScript = document.getElementsByTagName('script')[0];
			firstScript.parentNode.insertBefore(gtagScript,firstScript);
		}
	}
	catch(e)
	{
		console.warn(e);
	}		
});