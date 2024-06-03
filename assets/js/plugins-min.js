function share() {
    function t(t, i) {
        var a = i.getAttribute("data-share-height"),
            r = i.getAttribute("data-share-width"),
            l = Math.max(0, (screen.height - a) / 2),
            d = Math.max(0, (screen.width - r) / 2),
            c = "height=" + a + ",width=" + r + ",top=" + l + ",left=" + d + ",status=0,toolbar=0,directories=0,location=0,menubar=0,resizable=1,scrollbars=1",
            u = "share-window-" + Math.random();
        switch (t) {
            case "facebook":
                var h = e("http://www.facebook.com/sharer.php", {
                    s: 100,
                    "p[url]": o,
                    "p[title]": n,
                    "p[summary]": i.getAttribute("data-share-summary"),
                    "p[images][0]": i.getAttribute("data-share-image")
                });
                i.onclick = function() {
                    window.open(h, u, c)
                };
                break;
            case "twitter":
                var h = e("http://twitter.com/intent/tweet", {
                    text: n + " " + o
                });
                i.onclick = function() {
                    window.open(h, u, c)
                };
                break;
            case "linkedin":
                var h = e("http://www.linkedin.com/shareArticle", {
                    mini: "true",
                    url: o,
                    title: n,
                    source: i.getAttribute("data-share-source"),
                    summary: s
                });
                i.onclick = function() {
                    window.open(h, u, c)
                };
                break;
            case "google-plus":
                var h = e(" https://plus.google.com/share", {
                    url: o
                });
                i.onclick = function() {
                    window.open(h, u, c)
                };
                break;
            case "pinterest":
                var h = e("http://www.pinterest.com/pin/create/button/", {
                    url: o,
                    description: s
                });
                i.onclick = function() {
                    window.open(h, u, c)
                };
                break;
            case "email":
                var h = e("mailto:", {
                    su: n,
                    subject: n,
                    body: o
                });
                i.setAttribute("href", h)
        }
    }

    function e(t, e) {
        var i = "";
        for (var n in e) {
            var o = e[n];
            o && (o = o.toString().split('"').join('"'), i += n + "=" + encodeURIComponent(o) + "&")
        }
        return i.length > 0 && (i = i.substring(0, i.length - 1), t = t + "?" + i), t
    }
    var i = document.getElementsByClassName("share__button"),
        n = document.getElementsByTagName("title")[0].innerHTML,
        o = window.location.href,
        s = $('meta[name="description"]').attr("content");
    $(".main-image").length ? pageImage = $(".js-main-image").attr("src") : pageImage = $(".header__logo img").attr("src");
    for (var a = 0; a < i.length; a++) {
        var r = i[a];
        if (!r.hasAttribute("data-share-isBinded")) {
            r.setAttribute("data-share-isBinded", "true");
            var l = r.getAttribute("data-share-network");
            t(l, r)
        }
    }
}! function() {
    for (var t, e = function() {}, i = ["assert", "clear", "count", "debug", "dir", "dirxml", "error", "exception", "group", "groupCollapsed", "groupEnd", "info", "log", "markTimeline", "profile", "profileEnd", "table", "time", "timeEnd", "timeStamp", "trace", "warn"], n = i.length, o = window.console = window.console || {}; n--;) t = i[n], o[t] || (o[t] = e)
}(),
function(t) {
    t.fn.extend({
        easyResponsiveTabs: function(e) {
            var i = {
                    type: "default",
                    width: "auto",
                    fit: !0,
                    closed: !1,
                    tabidentify: "",
                    activetab_bg: "white",
                    inactive_bg: "#F5F5F5",
                    active_border_color: "#c1c1c1",
                    active_content_border_color: "#c1c1c1",
                    activate: function() {}
                },
                e = t.extend(i, e),
                n = e,
                o = n.type,
                s = n.fit,
                a = n.width,
                r = "vertical",
                l = "accordion",
                d = window.location.hash,
                c = !(!window.history || !history.replaceState);
            t(this).bind("tabactivate", function(t, i) {
                "function" == typeof e.activate && e.activate.call(i, t)
            }), this.each(function() {
                function i() {
                    o == r && n.addClass("resp-vtabs").addClass(e.tabidentify), 1 == s && n.css({
                        width: "100%",
                        margin: "0px"
                    }), o == l && (n.addClass("resp-easy-accordion").addClass(e.tabidentify), n.find(".resp-tabs-list").css("display", "none"))
                }
                var n = t(this),
                    u = n.find("ul.resp-tabs-list." + e.tabidentify),
                    h = n.attr("id");
                n.find("ul.resp-tabs-list." + e.tabidentify + " li").addClass("resp-tab-item").addClass(e.tabidentify), n.css({
                    display: "block",
                    width: a
                }), "vertical" == e.type && u.css("margin-top", "3px"), n.find(".resp-tabs-container." + e.tabidentify).css("border-color", e.active_content_border_color), n.find(".resp-tabs-container." + e.tabidentify + " > div").addClass("resp-tab-content").addClass(e.tabidentify), i();
                var p;
                n.find(".resp-tab-content." + e.tabidentify).before("<h2 class='resp-accordion " + e.tabidentify + "' role='tab'><span class='resp-arrow'></span></h2>"), n.find(".resp-tab-content." + e.tabidentify).prev("h2").css({
                    "background-color": e.inactive_bg,
                    "border-color": e.active_border_color
                });
                var f = 0;
                n.find(".resp-accordion").each(function() {
                    p = t(this);
                    var i = n.find(".resp-tab-item:eq(" + f + ")"),
                        o = n.find(".resp-accordion:eq(" + f + ")");
                    o.append(i.html()), o.data(i.data()), p.attr("aria-controls", e.tabidentify + "_tab_item-" + f), f++
                });
                var g, v = 0;
                n.find(".resp-tab-item").each(function() {
                    $tabItem = t(this), $tabItem.attr("aria-controls", e.tabidentify + "_tab_item-" + v), $tabItem.attr("role", "tab"), $tabItem.css({
                        "background-color": e.inactive_bg,
                        "border-color": "none"
                    });
                    var i = 0;
                    n.find(".resp-tab-content." + e.tabidentify).each(function() {
                        g = t(this), g.attr("aria-labelledby", e.tabidentify + "_tab_item-" + i).css({
                            "border-color": e.active_border_color
                        }), i++
                    }), v++
                });
                var m = 0;
                if ("" != d) {
                    var b = d.match(new RegExp(h + "([0-9]+)"));
                    null !== b && 2 === b.length && (m = parseInt(b[1], 10) - 1, m > v && (m = 0))
                }
                t(n.find(".resp-tab-item." + e.tabidentify)[m]).addClass("resp-tab-active").css({
                    "background-color": e.activetab_bg,
                    "border-color": e.active_border_color
                }), e.closed === !0 || "accordion" === e.closed && !u.is(":visible") || "tabs" === e.closed && u.is(":visible") || (t(n.find(".resp-accordion." + e.tabidentify)[m]).addClass("resp-tab-active").css({
                    "background-color": e.activetab_bg + " !important",
                    "border-color": e.active_border_color,
                    background: "none"
                }), t(n.find(".resp-tab-content." + e.tabidentify)[m]).addClass("resp-tab-content-active").addClass(e.tabidentify).attr("style", "display:block")), n.find("[role=tab]").each(function() {
                    var i = t(this);
                    i.click(function() {
                        var i = t(this),
                            o = i.attr("aria-controls");
                        if (i.hasClass("resp-accordion") && i.hasClass("resp-tab-active")) return n.find(".resp-tab-content-active." + e.tabidentify).slideUp("", function() {
                            t(this).addClass("resp-accordion-closed")
                        }), i.removeClass("resp-tab-active").css({
                            "background-color": e.inactive_bg,
                            "border-color": "none"
                        }), !1;
                        if (!i.hasClass("resp-tab-active") && i.hasClass("resp-accordion") ? (n.find(".resp-tab-active." + e.tabidentify).removeClass("resp-tab-active").css({
                                "background-color": e.inactive_bg,
                                "border-color": "none"
                            }), n.find(".resp-tab-content-active." + e.tabidentify).slideUp().removeClass("resp-tab-content-active resp-accordion-closed"), n.find("[aria-controls=" + o + "]").addClass("resp-tab-active").css({
                                "background-color": e.activetab_bg,
                                "border-color": e.active_border_color
                            }), n.find(".resp-tab-content[aria-labelledby = " + o + "]." + e.tabidentify).slideDown().addClass("resp-tab-content-active")) : (console.log("here"), n.find(".resp-tab-active." + e.tabidentify).removeClass("resp-tab-active").css({
                                "background-color": e.inactive_bg,
                                "border-color": "none"
                            }), n.find(".resp-tab-content-active." + e.tabidentify).removeAttr("style").removeClass("resp-tab-content-active").removeClass("resp-accordion-closed"), n.find("[aria-controls=" + o + "]").addClass("resp-tab-active").css({
                                "background-color": e.activetab_bg,
                                "border-color": e.active_border_color
                            }), n.find(".resp-tab-content[aria-labelledby = " + o + "]." + e.tabidentify).addClass("resp-tab-content-active").attr("style", "display:block")), i.trigger("tabactivate", i), c) {
                            var s = window.location.hash,
                                a = o.split("tab_item-"),
                                r = h + (parseInt(a[1], 10) + 1).toString();
                            if ("" != s) {
                                var l = new RegExp(h + "[0-9]+");
                                r = null != s.match(l) ? s.replace(l, r) : s + "|" + r
                            } else r = "#" + r;
                            history.replaceState(null, null, r)
                        }
                    })
                }), t(window).resize(function() {
                    n.find(".resp-accordion-closed").removeAttr("style")
                })
            })
        }
    })
}(jQuery),
function(t, e, i) {
    t.fn.heroSlides = function(n) {
        var o = t.extend({
            auto: !0,
            speed: 500,
            timeout: 4e3,
            pager: !1,
            nav: !1,
            random: !1,
            pause: !1,
            pauseControls: !0,
            prevText: "Previous",
            nextText: "Next",
            maxwidth: "",
            navContainer: "",
            manualControls: "",
            namespace: "hero-slides",
            before: t.noop,
            after: t.noop
        }, n);
        return this.each(function() {
            i++;
            var s, a, r, l, d, c, u = t(this),
                h = 0,
                p = u.children(),
                f = p.size(),
                g = parseFloat(o.speed),
                v = parseFloat(o.timeout),
                m = parseFloat(o.maxwidth),
                b = o.namespace,
                x = b + i,
                w = b + "_nav " + x + "_nav",
                y = b + "_here",
                S = x + "_on",
                C = x + "_s",
                _ = t("<ul class='" + b + "_tabs " + x + "_tabs' />"),
                T = {
                    "float": "left",
                    position: "relative",
                    opacity: 1,
                    zIndex: 2
                },
                E = {
                    "float": "none",
                    position: "absolute",
                    opacity: 0,
                    zIndex: 1
                },
                k = function() {
                    var t = (document.body || document.documentElement).style,
                        e = "transition";
                    if ("string" == typeof t[e]) return !0;
                    s = ["Moz", "Webkit", "Khtml", "O", "ms"];
                    var i, e = e.charAt(0).toUpperCase() + e.substr(1);
                    for (i = 0; i < s.length; i++)
                        if ("string" == typeof t[s[i] + e]) return !0;
                    return !1
                }(),
                W = function(e) {
                    o.before(e), k ? (p.removeClass(S).css(E).eq(e).addClass(S).css(T), h = e, setTimeout(function() {
                        o.after(e)
                    }, g)) : p.stop().fadeOut(g, function() {
                        t(this).removeClass(S).css(E).css("opacity", 1)
                    }).eq(e).fadeIn(g, function() {
                        t(this).addClass(S).css(T), o.after(e), h = e
                    })
                };
            if (o.random && (p.sort(function() {
                    return Math.round(Math.random()) - .5
                }), u.empty().append(p)), p.each(function(t) {
                    this.id = C + t
                }), u.addClass(b + " " + x), n && n.maxwidth && u.css("max-width", m), p.hide().css(E).eq(0).addClass(S).css(T).show(), k && p.show().css({
                    "-webkit-transition": "opacity " + g + "ms ease-in-out",
                    "-moz-transition": "opacity " + g + "ms ease-in-out",
                    "-o-transition": "opacity " + g + "ms ease-in-out",
                    transition: "opacity " + g + "ms ease-in-out"
                }), 1 < p.size()) {
                if (g + 100 > v) return;
                if (o.pager && !o.manualControls) {
                    var P = [];
                    p.each(function(t) {
                        t += 1, P += "<li><a href='#' class='" + C + t + "'>" + t + "</a></li>"
                    }), _.append(P), n.navContainer ? t(o.navContainer).append(_) : u.after(_)
                }
                if (o.manualControls && (_ = t(o.manualControls), _.addClass(b + "_tabs " + x + "_tabs")), (o.pager || o.manualControls) && _.find("li").each(function(e) {
                        t(this).addClass(C + (e + 1))
                    }), (o.pager || o.manualControls) && (c = _.find("a"), a = function(t) {
                        c.closest("li").removeClass(y).eq(t).addClass(y)
                    }), o.auto && (r = function() {
                        d = setInterval(function() {
                            p.stop(!0, !0);
                            var t = f > h + 1 ? h + 1 : 0;
                            (o.pager || o.manualControls) && a(t), W(t)
                        }, v)
                    })(), l = function() {
                        o.auto && (clearInterval(d), r())
                    }, o.pause && u.hover(function() {
                        clearInterval(d)
                    }, function() {
                        l()
                    }), (o.pager || o.manualControls) && (c.bind("click", function(e) {
                        e.preventDefault(), o.pauseControls || l(), e = c.index(this), h === e || t("." + S).queue("fx").length || (a(e), W(e))
                    }).eq(0).closest("li").addClass(y), o.pauseControls && c.hover(function() {
                        clearInterval(d)
                    }, function() {
                        l()
                    })), o.nav) {
                    b = "<a href='#' class='" + w + " prev'>" + o.prevText + "</a><a href='#' class='" + w + " next'>" + o.nextText + "</a>", n.navContainer ? t(o.navContainer).append(b) : u.after(b);
                    var x = t("." + x + "_nav"),
                        I = x.filter(".prev");
                    x.bind("click", function(e) {
                        if (e.preventDefault(), e = t("." + S), !e.queue("fx").length) {
                            var i = p.index(e);
                            e = i - 1, i = f > i + 1 ? h + 1 : 0, W(t(this)[0] === I[0] ? e : i), (o.pager || o.manualControls) && a(t(this)[0] === I[0] ? e : i), o.pauseControls || l()
                        }
                    }), o.pauseControls && x.hover(function() {
                        clearInterval(d)
                    }, function() {
                        l()
                    })
                }
            }
            if ("undefined" == typeof document.body.style.maxWidth && n.maxwidth) {
                var A = function() {
                    u.css("width", "100%"), u.width() > m && u.css("width", m)
                };
                A(), t(e).bind("resize", function() {
                    A()
                })
            }
        })
    }
}(jQuery, this, 0),
function(t) {
    t.fn.unveil = function(e, i) {
        function n() {
            var e = d.filter(function() {
                var e = t(this);
                if (!e.is(":hidden")) {
                    var i = s.scrollTop(),
                        n = i + s.height(),
                        o = e.offset().top,
                        r = o + e.height();
                    return r >= i - a && n + a >= o
                }
            });
            o = e.trigger("unveil"), d = d.not(o)
        }
        var o, s = t(window),
            a = e || 0,
            r = window.devicePixelRatio > 1,
            l = r ? "data-src-retina" : "data-src",
            d = this;
        return this.one("unveil", function() {
            var t = this.getAttribute(l);
            t = t || this.getAttribute("data-src"), t && (this.setAttribute("src", t), "function" == typeof i && i.call(this))
        }), s.on("scroll.unveil resize.unveil lookup.unveil load.unveil", n), n(), this
    }
}(window.jQuery || window.Zepto), $("#BuyBoxArea").bind("DOMSubtreeModified", function() {
        $(".share__button").each(function() {
            share(this)
        })
    }), $(".share__button").each(function() {
        share(this)
    }), ! function(t) {
        var e = {},
            n = {
                mode: "horizontal",
                slideSelector: "",
                infiniteLoop: !0,
                hideControlOnEnd: !1,
                speed: 500,
                easing: null,
                slideMargin: 0,
                startSlide: 0,
                randomStart: !1,
                captions: !1,
                ticker: !1,
                tickerHover: !1,
                adaptiveHeight: !1,
                adaptiveHeightSpeed: 500,
                video: !1,
                useCSS: !0,
                preloadImages: "visible",
                responsive: !0,
                slideZIndex: 50,
                touchEnabled: !0,
                swipeThreshold: 50,
                oneToOneTouch: !0,
                preventDefaultSwipeX: !0,
                preventDefaultSwipeY: !1,
                pager: !0,
                pagerType: "full",
                pagerShortSeparator: " / ",
                pagerSelector: null,
                buildPager: null,
                pagerCustom: null,
                controls: !0,
                nextText: "Next",
                prevText: "Prev",
                nextSelector: null,
                prevSelector: null,
                autoControls: !1,
                startText: "Start",
                stopText: "Stop",
                autoControlsCombine: !1,
                autoControlsSelector: null,
                auto: !1,
                pause: 4e3,
                autoStart: !0,
                autoDirection: "next",
                autoHover: !1,
                autoDelay: 0,
                minSlides: 1,
                maxSlides: 1,
                moveSlides: 0,
                slideWidth: 0,
                onSliderLoad: function() {},
                onSlideBefore: function() {},
                onSlideAfter: function() {},
                onSlideNext: function() {},
                onSlidePrev: function() {},
                onSliderResize: function() {}
            };
        t.fn.bxSlider = function(o) {
            if (0 == this.length) return this;
            if (this.length > 1) return this.each(function() {
                t(this).bxSlider(o)
            }), this;
            var s = {},
                a = this;
            e.el = this;
            var r = t(window).width(),
                l = t(window).height(),
                d = function() {
                    s.settings = t.extend({}, n, o), s.settings.slideWidth = parseInt(s.settings.slideWidth), s.children = a.children(s.settings.slideSelector), s.children.length < s.settings.minSlides && (s.settings.minSlides = s.children.length), s.children.length < s.settings.maxSlides && (s.settings.maxSlides = s.children.length), s.settings.randomStart && (s.settings.startSlide = Math.floor(Math.random() * s.children.length)), s.active = {
                        index: s.settings.startSlide
                    }, s.carousel = s.settings.minSlides > 1 || s.settings.maxSlides > 1, s.carousel && (s.settings.preloadImages = "all"), s.minThreshold = s.settings.minSlides * s.settings.slideWidth + (s.settings.minSlides - 1) * s.settings.slideMargin, s.maxThreshold = s.settings.maxSlides * s.settings.slideWidth + (s.settings.maxSlides - 1) * s.settings.slideMargin, s.working = !1, s.controls = {}, s.interval = null, s.animProp = "vertical" == s.settings.mode ? "top" : "left", s.usingCSS = s.settings.useCSS && "fade" != s.settings.mode && function() {
                        var t = document.createElement("div"),
                            e = ["WebkitPerspective", "MozPerspective", "OPerspective", "msPerspective"];
                        for (var i in e)
                            if (void 0 !== t.style[e[i]]) return s.cssPrefix = e[i].replace("Perspective", "").toLowerCase(), s.animProp = "-" + s.cssPrefix + "-transform", !0;
                        return !1
                    }(), "vertical" == s.settings.mode && (s.settings.maxSlides = s.settings.minSlides), a.data("origStyle", a.attr("style")), a.children(s.settings.slideSelector).each(function() {
                        t(this).data("origStyle", t(this).attr("style"))
                    }), c()
                },
                c = function() {
                    a.wrap('<div class="bx-wrapper"><div class="bx-viewport"></div></div>'), s.viewport = a.parent(), s.loader = t('<div class="bx-loading" />'), s.viewport.prepend(s.loader), a.css({
                        width: "horizontal" == s.settings.mode ? 100 * s.children.length + 215 + "%" : "auto",
                        position: "relative"
                    }), s.usingCSS && s.settings.easing ? a.css("-" + s.cssPrefix + "-transition-timing-function", s.settings.easing) : s.settings.easing || (s.settings.easing = "swing"), v(), s.viewport.css({
                        width: "100%",
                        overflow: "hidden",
                        position: "relative"
                    }), s.viewport.parent().css({
                        maxWidth: f()
                    }), s.settings.pager || s.viewport.parent().css({
                        margin: "0 auto 0px"
                    }), s.children.css({
                        "float": "horizontal" == s.settings.mode ? "left" : "none",
                        listStyle: "none",
                        position: "relative"
                    }), s.children.css("width", g()), "horizontal" == s.settings.mode && s.settings.slideMargin > 0 && s.children.css("marginRight", s.settings.slideMargin), "vertical" == s.settings.mode && s.settings.slideMargin > 0 && s.children.css("marginBottom", s.settings.slideMargin), "fade" == s.settings.mode && (s.children.css({
                        position: "absolute",
                        zIndex: 0,
                        display: "none"
                    }), s.children.eq(s.settings.startSlide).css({
                        zIndex: s.settings.slideZIndex,
                        display: "block"
                    })), s.controls.el = t('<div class="bx-controls" />'), s.settings.captions && T(), s.active.last = s.settings.startSlide == m() - 1, s.settings.video && a.fitVids();
                    var e = s.children.eq(s.settings.startSlide);
                    "all" == s.settings.preloadImages && (e = s.children), s.settings.ticker ? s.settings.pager = !1 : (s.settings.pager && S(), s.settings.controls && C(), s.settings.auto && s.settings.autoControls && _(), (s.settings.controls || s.settings.autoControls || s.settings.pager) && s.viewport.after(s.controls.el)), u(e, h)
                },
                u = function(e, i) {
                    var n = e.find("img, iframe").length;
                    if (0 == n) return void i();
                    var o = 0;
                    e.find("img, iframe").each(function() {
                        t(this).one("load", function() {
                            ++o == n && i()
                        }).each(function() {
                            this.complete && t(this).load()
                        })
                    })
                },
                h = function() {
                    if (s.settings.infiniteLoop && "fade" != s.settings.mode && !s.settings.ticker) {
                        var e = "vertical" == s.settings.mode ? s.settings.minSlides : s.settings.maxSlides,
                            i = s.children.slice(0, e).clone().addClass("bx-clone"),
                            n = s.children.slice(-e).clone().addClass("bx-clone");
                        a.append(i).prepend(n)
                    }
                    s.loader.remove(), x(), "vertical" == s.settings.mode && (s.settings.adaptiveHeight = !0), s.viewport.height(p()), a.redrawSlider(), s.settings.onSliderLoad(s.active.index), s.initialized = !0, s.settings.responsive && t(window).bind("resize", j), s.settings.auto && s.settings.autoStart && N(), s.settings.ticker && M(), s.settings.pager && A(s.settings.startSlide), s.settings.controls && H(), s.settings.touchEnabled && !s.settings.ticker && L()
                },
                p = function() {
                    var e = 0,
                        n = t();
                    if ("vertical" == s.settings.mode || s.settings.adaptiveHeight)
                        if (s.carousel) {
                            var o = 1 == s.settings.moveSlides ? s.active.index : s.active.index * b();
                            for (n = s.children.eq(o), i = 1; i <= s.settings.maxSlides - 1; i++) n = n.add(o + i >= s.children.length ? s.children.eq(i - 1) : s.children.eq(o + i))
                        } else n = s.children.eq(s.active.index);
                    else n = s.children;
                    return "vertical" == s.settings.mode ? (n.each(function() {
                        e += t(this).outerHeight()
                    }), s.settings.slideMargin > 0 && (e += s.settings.slideMargin * (s.settings.minSlides - 1))) : e = Math.max.apply(Math, n.map(function() {
                        return t(this).outerHeight(!1)
                    }).get()), e
                },
                f = function() {
                    var t = "100%";
                    return s.settings.slideWidth > 0 && (t = "horizontal" == s.settings.mode ? s.settings.maxSlides * s.settings.slideWidth + (s.settings.maxSlides - 1) * s.settings.slideMargin : s.settings.slideWidth), t
                },
                g = function() {
                    var t = s.settings.slideWidth,
                        e = s.viewport.width();
                    return 0 == s.settings.slideWidth || s.settings.slideWidth > e && !s.carousel || "vertical" == s.settings.mode ? t = e : s.settings.maxSlides > 1 && "horizontal" == s.settings.mode && (e > s.maxThreshold || e < s.minThreshold && (t = (e - s.settings.slideMargin * (s.settings.minSlides - 1)) / s.settings.minSlides)), t
                },
                v = function() {
                    var t = 1;
                    if ("horizontal" == s.settings.mode && s.settings.slideWidth > 0)
                        if (s.viewport.width() < s.minThreshold) t = s.settings.minSlides;
                        else if (s.viewport.width() > s.maxThreshold) t = s.settings.maxSlides;
                    else {
                        var e = s.children.first().width();
                        t = Math.floor(s.viewport.width() / e)
                    } else "vertical" == s.settings.mode && (t = s.settings.minSlides);
                    return t
                },
                m = function() {
                    var t = 0;
                    if (s.settings.moveSlides > 0)
                        if (s.settings.infiniteLoop) t = s.children.length / b();
                        else
                            for (var e = 0, i = 0; e < s.children.length;) ++t, e = i + v(), i += s.settings.moveSlides <= v() ? s.settings.moveSlides : v();
                    else t = Math.ceil(s.children.length / v());
                    return t
                },
                b = function() {
                    return s.settings.moveSlides > 0 && s.settings.moveSlides <= v() ? s.settings.moveSlides : v()
                },
                x = function() {
                    if (s.children.length > s.settings.maxSlides && s.active.last && !s.settings.infiniteLoop) {
                        if ("horizontal" == s.settings.mode) {
                            var t = s.children.last(),
                                e = t.position();
                            w(-(e.left - (s.viewport.width() - t.width())), "reset", 0)
                        } else if ("vertical" == s.settings.mode) {
                            var i = s.children.length - s.settings.minSlides,
                                e = s.children.eq(i).position();
                            w(-e.top, "reset", 0)
                        }
                    } else {
                        var e = s.children.eq(s.active.index * b()).position();
                        s.active.index == m() - 1 && (s.active.last = !0), void 0 != e && ("horizontal" == s.settings.mode ? w(-e.left, "reset", 0) : "vertical" == s.settings.mode && w(-e.top, "reset", 0))
                    }
                },
                w = function(t, e, i, n) {
                    if (s.usingCSS) {
                        var o = "vertical" == s.settings.mode ? "translate3d(0, " + t + "px, 0)" : "translate3d(" + t + "px, 0, 0)";
                        a.css("-" + s.cssPrefix + "-transition-duration", i / 1e3 + "s"), "slide" == e ? (a.css(s.animProp, o), a.bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd", function() {
                            a.unbind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd"), D()
                        })) : "reset" == e ? a.css(s.animProp, o) : "ticker" == e && (a.css("-" + s.cssPrefix + "-transition-timing-function", "linear"), a.css(s.animProp, o), a.bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd", function() {
                            a.unbind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd"), w(n.resetValue, "reset", 0), q()
                        }))
                    } else {
                        var r = {};
                        r[s.animProp] = t, "slide" == e ? a.animate(r, i, s.settings.easing, function() {
                            D()
                        }) : "reset" == e ? a.css(s.animProp, t) : "ticker" == e && a.animate(r, speed, "linear", function() {
                            w(n.resetValue, "reset", 0), q()
                        })
                    }
                },
                y = function() {
                    for (var e = "", i = m(), n = 0; i > n; n++) {
                        var o = "";
                        s.settings.buildPager && t.isFunction(s.settings.buildPager) ? (o = s.settings.buildPager(n), s.pagerEl.addClass("bx-custom-pager")) : (o = n + 1, s.pagerEl.addClass("bx-default-pager")), e += '<div class="bx-pager-item"><a href="" data-slide-index="' + n + '" class="bx-pager-link">' + o + "</a></div>"
                    }
                    s.pagerEl.html(e)
                },
                S = function() {
                    s.settings.pagerCustom ? s.pagerEl = t(s.settings.pagerCustom) : (s.pagerEl = t('<div class="bx-pager" />'), s.settings.pagerSelector ? t(s.settings.pagerSelector).html(s.pagerEl) : s.controls.el.addClass("bx-has-pager").append(s.pagerEl), y()), s.pagerEl.on("click", "a", I)
                },
                C = function() {
                    s.controls.next = t('<a class="bx-next" href="">' + s.settings.nextText + "</a>"), s.controls.prev = t('<a class="bx-prev" href="">' + s.settings.prevText + "</a>"), s.controls.next.bind("click", E), s.controls.prev.bind("click", k), s.settings.nextSelector && t(s.settings.nextSelector).append(s.controls.next), s.settings.prevSelector && t(s.settings.prevSelector).append(s.controls.prev), s.settings.nextSelector || s.settings.prevSelector || (s.controls.directionEl = t('<div class="bx-controls-direction" />'), s.controls.directionEl.append(s.controls.prev).append(s.controls.next), s.controls.el.addClass("bx-has-controls-direction").append(s.controls.directionEl))
                },
                _ = function() {
                    s.controls.start = t('<div class="bx-controls-auto-item"><a class="bx-start" href="">' + s.settings.startText + "</a></div>"), s.controls.stop = t('<div class="bx-controls-auto-item"><a class="bx-stop" href="">' + s.settings.stopText + "</a></div>"), s.controls.autoEl = t('<div class="bx-controls-auto" />'), s.controls.autoEl.on("click", ".bx-start", W), s.controls.autoEl.on("click", ".bx-stop", P), s.settings.autoControlsCombine ? s.controls.autoEl.append(s.controls.start) : s.controls.autoEl.append(s.controls.start).append(s.controls.stop), s.settings.autoControlsSelector ? t(s.settings.autoControlsSelector).html(s.controls.autoEl) : s.controls.el.addClass("bx-has-controls-auto").append(s.controls.autoEl), z(s.settings.autoStart ? "stop" : "start")
                },
                T = function() {
                    s.children.each(function() {
                        var e = t(this).find("img:first").attr("title");
                        void 0 != e && ("" + e).length && t(this).append('<div class="bx-caption"><span>' + e + "</span></div>")
                    })
                },
                E = function(t) {
                    s.settings.auto && a.stopAuto(), a.goToNextSlide(), t.preventDefault()
                },
                k = function(t) {
                    s.settings.auto && a.stopAuto(), a.goToPrevSlide(), t.preventDefault()
                },
                W = function(t) {
                    a.startAuto(), t.preventDefault()
                },
                P = function(t) {
                    a.stopAuto(), t.preventDefault()
                },
                I = function(e) {
                    s.settings.auto && a.stopAuto();
                    var i = t(e.currentTarget),
                        n = parseInt(i.attr("data-slide-index"));
                    n != s.active.index && a.goToSlide(n), e.preventDefault()
                },
                A = function(e) {
                    var i = s.children.length;
                    return "short" == s.settings.pagerType ? (s.settings.maxSlides > 1 && (i = Math.ceil(s.children.length / s.settings.maxSlides)), void s.pagerEl.html(e + 1 + s.settings.pagerShortSeparator + i)) : (s.pagerEl.find("a").removeClass("active"), void s.pagerEl.each(function(i, n) {
                        t(n).find("a").eq(e).addClass("active")
                    }))
                },
                D = function() {
                    if (s.settings.infiniteLoop) {
                        var t = "";
                        0 == s.active.index ? t = s.children.eq(0).position() : s.active.index == m() - 1 && s.carousel ? t = s.children.eq((m() - 1) * b()).position() : s.active.index == s.children.length - 1 && (t = s.children.eq(s.children.length - 1).position()), t && ("horizontal" == s.settings.mode ? w(-t.left, "reset", 0) : "vertical" == s.settings.mode && w(-t.top, "reset", 0))
                    }
                    s.working = !1, s.settings.onSlideAfter(s.children.eq(s.active.index), s.oldIndex, s.active.index)
                },
                z = function(t) {
                    s.settings.autoControlsCombine ? s.controls.autoEl.html(s.controls[t]) : (s.controls.autoEl.find("a").removeClass("active"), s.controls.autoEl.find("a:not(.bx-" + t + ")").addClass("active"))
                },
                H = function() {
                    1 == m() ? (s.controls.prev.addClass("disabled"), s.controls.next.addClass("disabled")) : !s.settings.infiniteLoop && s.settings.hideControlOnEnd && (0 == s.active.index ? (s.controls.prev.addClass("disabled"), s.controls.next.removeClass("disabled")) : s.active.index == m() - 1 ? (s.controls.next.addClass("disabled"), s.controls.prev.removeClass("disabled")) : (s.controls.prev.removeClass("disabled"), s.controls.next.removeClass("disabled")))
                },
                N = function() {
                    s.settings.autoDelay > 0 ? setTimeout(a.startAuto, s.settings.autoDelay) : a.startAuto(), s.settings.autoHover && a.hover(function() {
                        s.interval && (a.stopAuto(!0), s.autoPaused = !0)
                    }, function() {
                        s.autoPaused && (a.startAuto(!0), s.autoPaused = null)
                    })
                },
                M = function() {
                    var e = 0;
                    if ("next" == s.settings.autoDirection) a.append(s.children.clone().addClass("bx-clone"));
                    else {
                        a.prepend(s.children.clone().addClass("bx-clone"));
                        var i = s.children.first().position();
                        e = "horizontal" == s.settings.mode ? -i.left : -i.top
                    }
                    w(e, "reset", 0), s.settings.pager = !1, s.settings.controls = !1, s.settings.autoControls = !1, s.settings.tickerHover && !s.usingCSS && s.viewport.hover(function() {
                        a.stop()
                    }, function() {
                        var e = 0;
                        s.children.each(function() {
                            e += "horizontal" == s.settings.mode ? t(this).outerWidth(!0) : t(this).outerHeight(!0)
                        });
                        var i = s.settings.speed / e,
                            n = "horizontal" == s.settings.mode ? "left" : "top",
                            o = i * (e - Math.abs(parseInt(a.css(n))));
                        q(o)
                    }), q()
                },
                q = function(t) {
                    speed = t ? t : s.settings.speed;
                    var e = {
                            left: 0,
                            top: 0
                        },
                        i = {
                            left: 0,
                            top: 0
                        };
                    "next" == s.settings.autoDirection ? e = a.find(".bx-clone").first().position() : i = s.children.first().position();
                    var n = "horizontal" == s.settings.mode ? -e.left : -e.top,
                        o = "horizontal" == s.settings.mode ? -i.left : -i.top,
                        r = {
                            resetValue: o
                        };
                    w(n, "ticker", speed, r)
                },
                L = function() {
                    s.touch = {
                        start: {
                            x: 0,
                            y: 0
                        },
                        end: {
                            x: 0,
                            y: 0
                        }
                    }, s.viewport.bind("touchstart", O)
                },
                O = function(t) {
                    if (s.working) t.preventDefault();
                    else {
                        s.touch.originalPos = a.position();
                        var e = t.originalEvent;
                        s.touch.start.x = e.changedTouches[0].pageX, s.touch.start.y = e.changedTouches[0].pageY, s.viewport.bind("touchmove", B), s.viewport.bind("touchend", F)
                    }
                },
                B = function(t) {
                    var e = t.originalEvent,
                        i = Math.abs(e.changedTouches[0].pageX - s.touch.start.x),
                        n = Math.abs(e.changedTouches[0].pageY - s.touch.start.y);
                    if (3 * i > n && s.settings.preventDefaultSwipeX ? t.preventDefault() : 3 * n > i && s.settings.preventDefaultSwipeY && t.preventDefault(), "fade" != s.settings.mode && s.settings.oneToOneTouch) {
                        var o = 0;
                        if ("horizontal" == s.settings.mode) {
                            var a = e.changedTouches[0].pageX - s.touch.start.x;
                            o = s.touch.originalPos.left + a
                        } else {
                            var a = e.changedTouches[0].pageY - s.touch.start.y;
                            o = s.touch.originalPos.top + a
                        }
                        w(o, "reset", 0)
                    }
                },
                F = function(t) {
                    s.viewport.unbind("touchmove", B);
                    var e = t.originalEvent,
                        i = 0;
                    if (s.touch.end.x = e.changedTouches[0].pageX, s.touch.end.y = e.changedTouches[0].pageY, "fade" == s.settings.mode) {
                        var n = Math.abs(s.touch.start.x - s.touch.end.x);
                        n >= s.settings.swipeThreshold && (s.touch.start.x > s.touch.end.x ? a.goToNextSlide() : a.goToPrevSlide(), a.stopAuto())
                    } else {
                        var n = 0;
                        "horizontal" == s.settings.mode ? (n = s.touch.end.x - s.touch.start.x, i = s.touch.originalPos.left) : (n = s.touch.end.y - s.touch.start.y, i = s.touch.originalPos.top), !s.settings.infiniteLoop && (0 == s.active.index && n > 0 || s.active.last && 0 > n) ? w(i, "reset", 200) : Math.abs(n) >= s.settings.swipeThreshold ? (0 > n ? a.goToNextSlide() : a.goToPrevSlide(), a.stopAuto()) : w(i, "reset", 200)
                    }
                    s.viewport.unbind("touchend", F)
                },
                j = function() {
                    var e = t(window).width(),
                        i = t(window).height();
                    (r != e || l != i) && (r = e, l = i, a.redrawSlider(), s.settings.onSliderResize.call(a, s.active.index))
                };
            return a.goToSlide = function(e, i) {
                if (!s.working && s.active.index != e)
                    if (s.working = !0, s.oldIndex = s.active.index, s.active.index = 0 > e ? m() - 1 : e >= m() ? 0 : e, s.settings.onSlideBefore(s.children.eq(s.active.index), s.oldIndex, s.active.index), "next" == i ? s.settings.onSlideNext(s.children.eq(s.active.index), s.oldIndex, s.active.index) : "prev" == i && s.settings.onSlidePrev(s.children.eq(s.active.index), s.oldIndex, s.active.index), s.active.last = s.active.index >= m() - 1, s.settings.pager && A(s.active.index), s.settings.controls && H(), "fade" == s.settings.mode) s.settings.adaptiveHeight && s.viewport.height() != p() && s.viewport.animate({
                        height: p()
                    }, s.settings.adaptiveHeightSpeed), s.children.filter(":visible").fadeOut(s.settings.speed).css({
                        zIndex: 0
                    }), s.children.eq(s.active.index).css("zIndex", s.settings.slideZIndex + 1).fadeIn(s.settings.speed, function() {
                        t(this).css("zIndex", s.settings.slideZIndex), D()
                    });
                    else {
                        s.settings.adaptiveHeight && s.viewport.height() != p() && s.viewport.animate({
                            height: p()
                        }, s.settings.adaptiveHeightSpeed);
                        var n = 0,
                            o = {
                                left: 0,
                                top: 0
                            };
                        if (!s.settings.infiniteLoop && s.carousel && s.active.last)
                            if ("horizontal" == s.settings.mode) {
                                var r = s.children.eq(s.children.length - 1);
                                o = r.position(), n = s.viewport.width() - r.outerWidth()
                            } else {
                                var l = s.children.length - s.settings.minSlides;
                                o = s.children.eq(l).position()
                            }
                        else if (s.carousel && s.active.last && "prev" == i) {
                            var d = 1 == s.settings.moveSlides ? s.settings.maxSlides - b() : (m() - 1) * b() - (s.children.length - s.settings.maxSlides),
                                r = a.children(".bx-clone").eq(d);
                            o = r.position()
                        } else if ("next" == i && 0 == s.active.index) o = a.find("> .bx-clone").eq(s.settings.maxSlides).position(), s.active.last = !1;
                        else if (e >= 0) {
                            var c = e * b();
                            o = s.children.eq(c).position()
                        }
                        if ("undefined" != typeof o) {
                            var u = "horizontal" == s.settings.mode ? -(o.left - n) : -o.top;
                            w(u, "slide", s.settings.speed)
                        }
                    }
            }, a.goToNextSlide = function() {
                if (s.settings.infiniteLoop || !s.active.last) {
                    var t = parseInt(s.active.index) + 1;
                    a.goToSlide(t, "next")
                }
            }, a.goToPrevSlide = function() {
                if (s.settings.infiniteLoop || 0 != s.active.index) {
                    var t = parseInt(s.active.index) - 1;
                    a.goToSlide(t, "prev")
                }
            }, a.startAuto = function(t) {
                s.interval || (s.interval = setInterval(function() {
                    "next" == s.settings.autoDirection ? a.goToNextSlide() : a.goToPrevSlide()
                }, s.settings.pause), s.settings.autoControls && 1 != t && z("stop"))
            }, a.stopAuto = function(t) {
                s.interval && (clearInterval(s.interval), s.interval = null, s.settings.autoControls && 1 != t && z("start"))
            }, a.getCurrentSlide = function() {
                return s.active.index
            }, a.getCurrentSlideElement = function() {
                return s.children.eq(s.active.index)
            }, a.getSlideCount = function() {
                return s.children.length
            }, a.redrawSlider = function() {
                s.children.add(a.find(".bx-clone")).outerWidth(g()), s.viewport.css("height", p()), s.settings.ticker || x(), s.active.last && (s.active.index = m() - 1), s.active.index >= m() && (s.active.last = !0), s.settings.pager && !s.settings.pagerCustom && (y(), A(s.active.index))
            }, a.destroySlider = function() {
                s.initialized && (s.initialized = !1, t(".bx-clone", this).remove(), s.children.each(function() {
                    void 0 != t(this).data("origStyle") ? t(this).attr("style", t(this).data("origStyle")) : t(this).removeAttr("style")
                }), void 0 != t(this).data("origStyle") ? this.attr("style", t(this).data("origStyle")) : t(this).removeAttr("style"), t(this).unwrap().unwrap(), s.controls.el && s.controls.el.remove(), s.controls.next && s.controls.next.remove(), s.controls.prev && s.controls.prev.remove(), s.pagerEl && s.settings.controls && s.pagerEl.remove(), t(".bx-caption", this).remove(), s.controls.autoEl && s.controls.autoEl.remove(), clearInterval(s.interval), s.settings.responsive && t(window).unbind("resize", j))
            }, a.reloadSlider = function(t) {
                void 0 != t && (o = t), a.destroySlider(), d()
            }, d(), this
        }
    }(jQuery),
    function(t) {
        "function" == typeof define && define.amd ? define(["jquery"], t) : t(jQuery)
    }(function(t) {
        function e(e, n) {
            var o, s, a, r = e.nodeName.toLowerCase();
            return "area" === r ? (o = e.parentNode, s = o.name, e.href && s && "map" === o.nodeName.toLowerCase() ? (a = t("img[usemap='#" + s + "']")[0], !!a && i(a)) : !1) : (/^(input|select|textarea|button|object)$/.test(r) ? !e.disabled : "a" === r ? e.href || n : n) && i(e)
        }

        function i(e) {
            return t.expr.filters.visible(e) && !t(e).parents().addBack().filter(function() {
                return "hidden" === t.css(this, "visibility")
            }).length
        }
        t.ui = t.ui || {}, t.extend(t.ui, {
            version: "1.11.4",
            keyCode: {
                BACKSPACE: 8,
                COMMA: 188,
                DELETE: 46,
                DOWN: 40,
                END: 35,
                ENTER: 13,
                ESCAPE: 27,
                HOME: 36,
                LEFT: 37,
                PAGE_DOWN: 34,
                PAGE_UP: 33,
                PERIOD: 190,
                RIGHT: 39,
                SPACE: 32,
                TAB: 9,
                UP: 38
            }
        }), t.fn.extend({
            scrollParent: function(e) {
                var i = this.css("position"),
                    n = "absolute" === i,
                    o = e ? /(auto|scroll|hidden)/ : /(auto|scroll)/,
                    s = this.parents().filter(function() {
                        var e = t(this);
                        return n && "static" === e.css("position") ? !1 : o.test(e.css("overflow") + e.css("overflow-y") + e.css("overflow-x"))
                    }).eq(0);
                return "fixed" !== i && s.length ? s : t(this[0].ownerDocument || document)
            },
            uniqueId: function() {
                var t = 0;
                return function() {
                    return this.each(function() {
                        this.id || (this.id = "ui-id-" + ++t)
                    })
                }
            }(),
            removeUniqueId: function() {
                return this.each(function() {
                    /^ui-id-\d+$/.test(this.id) && t(this).removeAttr("id")
                })
            }
        }), t.extend(t.expr[":"], {
            data: t.expr.createPseudo ? t.expr.createPseudo(function(e) {
                return function(i) {
                    return !!t.data(i, e)
                }
            }) : function(e, i, n) {
                return !!t.data(e, n[3])
            },
            focusable: function(i) {
                return e(i, !isNaN(t.attr(i, "tabindex")))
            },
            tabbable: function(i) {
                var n = t.attr(i, "tabindex"),
                    o = isNaN(n);
                return (o || n >= 0) && e(i, !o)
            }
        }), t("<a>").outerWidth(1).jquery || t.each(["Width", "Height"], function(e, i) {
            function n(e, i, n, s) {
                return t.each(o, function() {
                    i -= parseFloat(t.css(e, "padding" + this)) || 0, n && (i -= parseFloat(t.css(e, "border" + this + "Width")) || 0), s && (i -= parseFloat(t.css(e, "margin" + this)) || 0)
                }), i
            }
            var o = "Width" === i ? ["Left", "Right"] : ["Top", "Bottom"],
                s = i.toLowerCase(),
                a = {
                    innerWidth: t.fn.innerWidth,
                    innerHeight: t.fn.innerHeight,
                    outerWidth: t.fn.outerWidth,
                    outerHeight: t.fn.outerHeight
                };
            t.fn["inner" + i] = function(e) {
                return void 0 === e ? a["inner" + i].call(this) : this.each(function() {
                    t(this).css(s, n(this, e) + "px")
                })
            }, t.fn["outer" + i] = function(e, o) {
                return "number" != typeof e ? a["outer" + i].call(this, e) : this.each(function() {
                    t(this).css(s, n(this, e, !0, o) + "px")
                })
            }
        }), t.fn.addBack || (t.fn.addBack = function(t) {
            return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
        }), t("<a>").data("a-b", "a").removeData("a-b").data("a-b") && (t.fn.removeData = function(e) {
            return function(i) {
                return arguments.length ? e.call(this, t.camelCase(i)) : e.call(this)
            }
        }(t.fn.removeData)), t.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()), t.fn.extend({
            focus: function(e) {
                return function(i, n) {
                    return "number" == typeof i ? this.each(function() {
                        var e = this;
                        setTimeout(function() {
                            t(e).focus(), n && n.call(e)
                        }, i)
                    }) : e.apply(this, arguments)
                }
            }(t.fn.focus),
            disableSelection: function() {
                var t = "onselectstart" in document.createElement("div") ? "selectstart" : "mousedown";
                return function() {
                    return this.bind(t + ".ui-disableSelection", function(t) {
                        t.preventDefault()
                    })
                }
            }(),
            enableSelection: function() {
                return this.unbind(".ui-disableSelection")
            },
            zIndex: function(e) {
                if (void 0 !== e) return this.css("zIndex", e);
                if (this.length)
                    for (var i, n, o = t(this[0]); o.length && o[0] !== document;) {
                        if (i = o.css("position"), ("absolute" === i || "relative" === i || "fixed" === i) && (n = parseInt(o.css("zIndex"), 10), !isNaN(n) && 0 !== n)) return n;
                        o = o.parent()
                    }
                return 0
            }
        }), t.ui.plugin = {
            add: function(e, i, n) {
                var o, s = t.ui[e].prototype;
                for (o in n) s.plugins[o] = s.plugins[o] || [], s.plugins[o].push([i, n[o]])
            },
            call: function(t, e, i, n) {
                var o, s = t.plugins[e];
                if (s && (n || t.element[0].parentNode && 11 !== t.element[0].parentNode.nodeType))
                    for (o = 0; s.length > o; o++) t.options[s[o][0]] && s[o][1].apply(t.element, i)
            }
        };
        var n = 0,
            o = Array.prototype.slice;
        t.cleanData = function(e) {
                return function(i) {
                    var n, o, s;
                    for (s = 0; null != (o = i[s]); s++) try {
                        n = t._data(o, "events"), n && n.remove && t(o).triggerHandler("remove")
                    } catch (a) {}
                    e(i)
                }
            }(t.cleanData), t.widget = function(e, i, n) {
                var o, s, a, r, l = {},
                    d = e.split(".")[0];
                return e = e.split(".")[1], o = d + "-" + e, n || (n = i, i = t.Widget), t.expr[":"][o.toLowerCase()] = function(e) {
                    return !!t.data(e, o)
                }, t[d] = t[d] || {}, s = t[d][e], a = t[d][e] = function(t, e) {
                    return this._createWidget ? void(arguments.length && this._createWidget(t, e)) : new a(t, e)
                }, t.extend(a, s, {
                    version: n.version,
                    _proto: t.extend({}, n),
                    _childConstructors: []
                }), r = new i, r.options = t.widget.extend({}, r.options), t.each(n, function(e, n) {
                    return t.isFunction(n) ? void(l[e] = function() {
                        var t = function() {
                                return i.prototype[e].apply(this, arguments)
                            },
                            o = function(t) {
                                return i.prototype[e].apply(this, t)
                            };
                        return function() {
                            var e, i = this._super,
                                s = this._superApply;
                            return this._super = t, this._superApply = o, e = n.apply(this, arguments), this._super = i, this._superApply = s, e
                        }
                    }()) : void(l[e] = n)
                }), a.prototype = t.widget.extend(r, {
                    widgetEventPrefix: s ? r.widgetEventPrefix || e : e
                }, l, {
                    constructor: a,
                    namespace: d,
                    widgetName: e,
                    widgetFullName: o
                }), s ? (t.each(s._childConstructors, function(e, i) {
                    var n = i.prototype;
                    t.widget(n.namespace + "." + n.widgetName, a, i._proto)
                }), delete s._childConstructors) : i._childConstructors.push(a), t.widget.bridge(e, a), a
            }, t.widget.extend = function(e) {
                for (var i, n, s = o.call(arguments, 1), a = 0, r = s.length; r > a; a++)
                    for (i in s[a]) n = s[a][i], s[a].hasOwnProperty(i) && void 0 !== n && (e[i] = t.isPlainObject(n) ? t.isPlainObject(e[i]) ? t.widget.extend({}, e[i], n) : t.widget.extend({}, n) : n);
                return e
            }, t.widget.bridge = function(e, i) {
                var n = i.prototype.widgetFullName || e;
                t.fn[e] = function(s) {
                    var a = "string" == typeof s,
                        r = o.call(arguments, 1),
                        l = this;
                    return a ? this.each(function() {
                        var i, o = t.data(this, n);
                        return "instance" === s ? (l = o, !1) : o ? t.isFunction(o[s]) && "_" !== s.charAt(0) ? (i = o[s].apply(o, r), i !== o && void 0 !== i ? (l = i && i.jquery ? l.pushStack(i.get()) : i, !1) : void 0) : t.error("no such method '" + s + "' for " + e + " widget instance") : t.error("cannot call methods on " + e + " prior to initialization; attempted to call method '" + s + "'")
                    }) : (r.length && (s = t.widget.extend.apply(null, [s].concat(r))), this.each(function() {
                        var e = t.data(this, n);
                        e ? (e.option(s || {}), e._init && e._init()) : t.data(this, n, new i(s, this))
                    })), l
                }
            }, t.Widget = function() {}, t.Widget._childConstructors = [], t.Widget.prototype = {
                widgetName: "widget",
                widgetEventPrefix: "",
                defaultElement: "<div>",
                options: {
                    disabled: !1,
                    create: null
                },
                _createWidget: function(e, i) {
                    i = t(i || this.defaultElement || this)[0], this.element = t(i), this.uuid = n++, this.eventNamespace = "." + this.widgetName + this.uuid, this.bindings = t(), this.hoverable = t(), this.focusable = t(), i !== this && (t.data(i, this.widgetFullName, this), this._on(!0, this.element, {
                        remove: function(t) {
                            t.target === i && this.destroy()
                        }
                    }), this.document = t(i.style ? i.ownerDocument : i.document || i), this.window = t(this.document[0].defaultView || this.document[0].parentWindow)), this.options = t.widget.extend({}, this.options, this._getCreateOptions(), e), this._create(), this._trigger("create", null, this._getCreateEventData()), this._init()
                },
                _getCreateOptions: t.noop,
                _getCreateEventData: t.noop,
                _create: t.noop,
                _init: t.noop,
                destroy: function() {
                    this._destroy(), this.element.unbind(this.eventNamespace).removeData(this.widgetFullName).removeData(t.camelCase(this.widgetFullName)), this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName + "-disabled ui-state-disabled"), this.bindings.unbind(this.eventNamespace), this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus")
                },
                _destroy: t.noop,
                widget: function() {
                    return this.element
                },
                option: function(e, i) {
                    var n, o, s, a = e;
                    if (0 === arguments.length) return t.widget.extend({}, this.options);
                    if ("string" == typeof e)
                        if (a = {}, n = e.split("."), e = n.shift(), n.length) {
                            for (o = a[e] = t.widget.extend({}, this.options[e]), s = 0; n.length - 1 > s; s++) o[n[s]] = o[n[s]] || {}, o = o[n[s]];
                            if (e = n.pop(), 1 === arguments.length) return void 0 === o[e] ? null : o[e];
                            o[e] = i
                        } else {
                            if (1 === arguments.length) return void 0 === this.options[e] ? null : this.options[e];
                            a[e] = i
                        } return this._setOptions(a), this
                },
                _setOptions: function(t) {
                    var e;
                    for (e in t) this._setOption(e, t[e]);
                    return this
                },
                _setOption: function(t, e) {
                    return this.options[t] = e, "disabled" === t && (this.widget().toggleClass(this.widgetFullName + "-disabled", !!e), e && (this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus"))), this
                },
                enable: function() {
                    return this._setOptions({
                        disabled: !1
                    })
                },
                disable: function() {
                    return this._setOptions({
                        disabled: !0
                    })
                },
                _on: function(e, i, n) {
                    var o, s = this;
                    "boolean" != typeof e && (n = i, i = e, e = !1), n ? (i = o = t(i), this.bindings = this.bindings.add(i)) : (n = i, i = this.element, o = this.widget()), t.each(n, function(n, a) {
                        function r() {
                            return e || s.options.disabled !== !0 && !t(this).hasClass("ui-state-disabled") ? ("string" == typeof a ? s[a] : a).apply(s, arguments) : void 0
                        }
                        "string" != typeof a && (r.guid = a.guid = a.guid || r.guid || t.guid++);
                        var l = n.match(/^([\w:-]*)\s*(.*)$/),
                            d = l[1] + s.eventNamespace,
                            c = l[2];
                        c ? o.delegate(c, d, r) : i.bind(d, r)
                    })
                },
                _off: function(e, i) {
                    i = (i || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace, e.unbind(i).undelegate(i), this.bindings = t(this.bindings.not(e).get()), this.focusable = t(this.focusable.not(e).get()), this.hoverable = t(this.hoverable.not(e).get())
                },
                _delay: function(t, e) {
                    function i() {
                        return ("string" == typeof t ? n[t] : t).apply(n, arguments)
                    }
                    var n = this;
                    return setTimeout(i, e || 0)
                },
                _hoverable: function(e) {
                    this.hoverable = this.hoverable.add(e), this._on(e, {
                        mouseenter: function(e) {
                            t(e.currentTarget).addClass("ui-state-hover")
                        },
                        mouseleave: function(e) {
                            t(e.currentTarget).removeClass("ui-state-hover")
                        }
                    })
                },
                _focusable: function(e) {
                    this.focusable = this.focusable.add(e), this._on(e, {
                        focusin: function(e) {
                            t(e.currentTarget).addClass("ui-state-focus")
                        },
                        focusout: function(e) {
                            t(e.currentTarget).removeClass("ui-state-focus")
                        }
                    })
                },
                _trigger: function(e, i, n) {
                    var o, s, a = this.options[e];
                    if (n = n || {}, i = t.Event(i), i.type = (e === this.widgetEventPrefix ? e : this.widgetEventPrefix + e).toLowerCase(), i.target = this.element[0], s = i.originalEvent)
                        for (o in s) o in i || (i[o] = s[o]);
                    return this.element.trigger(i, n), !(t.isFunction(a) && a.apply(this.element[0], [i].concat(n)) === !1 || i.isDefaultPrevented())
                }
            }, t.each({
                show: "fadeIn",
                hide: "fadeOut"
            }, function(e, i) {
                t.Widget.prototype["_" + e] = function(n, o, s) {
                    "string" == typeof o && (o = {
                        effect: o
                    });
                    var a, r = o ? o === !0 || "number" == typeof o ? i : o.effect || i : e;
                    o = o || {}, "number" == typeof o && (o = {
                        duration: o
                    }), a = !t.isEmptyObject(o), o.complete = s, o.delay && n.delay(o.delay), a && t.effects && t.effects.effect[r] ? n[e](o) : r !== e && n[r] ? n[r](o.duration, o.easing, s) : n.queue(function(i) {
                        t(this)[e](), s && s.call(n[0]), i()
                    })
                }
            }), t.widget,
            function() {
                function e(t, e, i) {
                    return [parseFloat(t[0]) * (p.test(t[0]) ? e / 100 : 1), parseFloat(t[1]) * (p.test(t[1]) ? i / 100 : 1)]
                }

                function i(e, i) {
                    return parseInt(t.css(e, i), 10) || 0
                }

                function n(e) {
                    var i = e[0];
                    return 9 === i.nodeType ? {
                        width: e.width(),
                        height: e.height(),
                        offset: {
                            top: 0,
                            left: 0
                        }
                    } : t.isWindow(i) ? {
                        width: e.width(),
                        height: e.height(),
                        offset: {
                            top: e.scrollTop(),
                            left: e.scrollLeft()
                        }
                    } : i.preventDefault ? {
                        width: 0,
                        height: 0,
                        offset: {
                            top: i.pageY,
                            left: i.pageX
                        }
                    } : {
                        width: e.outerWidth(),
                        height: e.outerHeight(),
                        offset: e.offset()
                    }
                }
                t.ui = t.ui || {};
                var o, s, a = Math.max,
                    r = Math.abs,
                    l = Math.round,
                    d = /left|center|right/,
                    c = /top|center|bottom/,
                    u = /[\+\-]\d+(\.[\d]+)?%?/,
                    h = /^\w+/,
                    p = /%$/,
                    f = t.fn.position;
                t.position = {
                        scrollbarWidth: function() {
                            if (void 0 !== o) return o;
                            var e, i, n = t("<div style='display:block;position:absolute;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"),
                                s = n.children()[0];
                            return t("body").append(n), e = s.offsetWidth, n.css("overflow", "scroll"), i = s.offsetWidth, e === i && (i = n[0].clientWidth), n.remove(), o = e - i
                        },
                        getScrollInfo: function(e) {
                            var i = e.isWindow || e.isDocument ? "" : e.element.css("overflow-x"),
                                n = e.isWindow || e.isDocument ? "" : e.element.css("overflow-y"),
                                o = "scroll" === i || "auto" === i && e.width < e.element[0].scrollWidth,
                                s = "scroll" === n || "auto" === n && e.height < e.element[0].scrollHeight;
                            return {
                                width: s ? t.position.scrollbarWidth() : 0,
                                height: o ? t.position.scrollbarWidth() : 0
                            }
                        },
                        getWithinInfo: function(e) {
                            var i = t(e || window),
                                n = t.isWindow(i[0]),
                                o = !!i[0] && 9 === i[0].nodeType;
                            return {
                                element: i,
                                isWindow: n,
                                isDocument: o,
                                offset: i.offset() || {
                                    left: 0,
                                    top: 0
                                },
                                scrollLeft: i.scrollLeft(),
                                scrollTop: i.scrollTop(),
                                width: n || o ? i.width() : i.outerWidth(),
                                height: n || o ? i.height() : i.outerHeight()
                            }
                        }
                    }, t.fn.position = function(o) {
                        if (!o || !o.of) return f.apply(this, arguments);
                        o = t.extend({}, o);
                        var p, g, v, m, b, x, w = t(o.of),
                            y = t.position.getWithinInfo(o.within),
                            S = t.position.getScrollInfo(y),
                            C = (o.collision || "flip").split(" "),
                            _ = {};
                        return x = n(w), w[0].preventDefault && (o.at = "left top"), g = x.width, v = x.height, m = x.offset, b = t.extend({}, m), t.each(["my", "at"], function() {
                            var t, e, i = (o[this] || "").split(" ");
                            1 === i.length && (i = d.test(i[0]) ? i.concat(["center"]) : c.test(i[0]) ? ["center"].concat(i) : ["center", "center"]), i[0] = d.test(i[0]) ? i[0] : "center", i[1] = c.test(i[1]) ? i[1] : "center", t = u.exec(i[0]), e = u.exec(i[1]), _[this] = [t ? t[0] : 0, e ? e[0] : 0], o[this] = [h.exec(i[0])[0], h.exec(i[1])[0]]
                        }), 1 === C.length && (C[1] = C[0]), "right" === o.at[0] ? b.left += g : "center" === o.at[0] && (b.left += g / 2), "bottom" === o.at[1] ? b.top += v : "center" === o.at[1] && (b.top += v / 2), p = e(_.at, g, v), b.left += p[0], b.top += p[1], this.each(function() {
                            var n, d, c = t(this),
                                u = c.outerWidth(),
                                h = c.outerHeight(),
                                f = i(this, "marginLeft"),
                                x = i(this, "marginTop"),
                                T = u + f + i(this, "marginRight") + S.width,
                                E = h + x + i(this, "marginBottom") + S.height,
                                k = t.extend({}, b),
                                W = e(_.my, c.outerWidth(), c.outerHeight());
                            "right" === o.my[0] ? k.left -= u : "center" === o.my[0] && (k.left -= u / 2), "bottom" === o.my[1] ? k.top -= h : "center" === o.my[1] && (k.top -= h / 2), k.left += W[0], k.top += W[1], s || (k.left = l(k.left), k.top = l(k.top)), n = {
                                marginLeft: f,
                                marginTop: x
                            }, t.each(["left", "top"], function(e, i) {
                                t.ui.position[C[e]] && t.ui.position[C[e]][i](k, {
                                    targetWidth: g,
                                    targetHeight: v,
                                    elemWidth: u,
                                    elemHeight: h,
                                    collisionPosition: n,
                                    collisionWidth: T,
                                    collisionHeight: E,
                                    offset: [p[0] + W[0], p[1] + W[1]],
                                    my: o.my,
                                    at: o.at,
                                    within: y,
                                    elem: c
                                })
                            }), o.using && (d = function(t) {
                                var e = m.left - k.left,
                                    i = e + g - u,
                                    n = m.top - k.top,
                                    s = n + v - h,
                                    l = {
                                        target: {
                                            element: w,
                                            left: m.left,
                                            top: m.top,
                                            width: g,
                                            height: v
                                        },
                                        element: {
                                            element: c,
                                            left: k.left,
                                            top: k.top,
                                            width: u,
                                            height: h
                                        },
                                        horizontal: 0 > i ? "left" : e > 0 ? "right" : "center",
                                        vertical: 0 > s ? "top" : n > 0 ? "bottom" : "middle"
                                    };
                                u > g && g > r(e + i) && (l.horizontal = "center"), h > v && v > r(n + s) && (l.vertical = "middle"), l.important = a(r(e), r(i)) > a(r(n), r(s)) ? "horizontal" : "vertical", o.using.call(this, t, l)
                            }), c.offset(t.extend(k, {
                                using: d
                            }))
                        })
                    }, t.ui.position = {
                        fit: {
                            left: function(t, e) {
                                var i, n = e.within,
                                    o = n.isWindow ? n.scrollLeft : n.offset.left,
                                    s = n.width,
                                    r = t.left - e.collisionPosition.marginLeft,
                                    l = o - r,
                                    d = r + e.collisionWidth - s - o;
                                e.collisionWidth > s ? l > 0 && 0 >= d ? (i = t.left + l + e.collisionWidth - s - o, t.left += l - i) : t.left = d > 0 && 0 >= l ? o : l > d ? o + s - e.collisionWidth : o : l > 0 ? t.left += l : d > 0 ? t.left -= d : t.left = a(t.left - r, t.left)
                            },
                            top: function(t, e) {
                                var i, n = e.within,
                                    o = n.isWindow ? n.scrollTop : n.offset.top,
                                    s = e.within.height,
                                    r = t.top - e.collisionPosition.marginTop,
                                    l = o - r,
                                    d = r + e.collisionHeight - s - o;
                                e.collisionHeight > s ? l > 0 && 0 >= d ? (i = t.top + l + e.collisionHeight - s - o, t.top += l - i) : t.top = d > 0 && 0 >= l ? o : l > d ? o + s - e.collisionHeight : o : l > 0 ? t.top += l : d > 0 ? t.top -= d : t.top = a(t.top - r, t.top)
                            }
                        },
                        flip: {
                            left: function(t, e) {
                                var i, n, o = e.within,
                                    s = o.offset.left + o.scrollLeft,
                                    a = o.width,
                                    l = o.isWindow ? o.scrollLeft : o.offset.left,
                                    d = t.left - e.collisionPosition.marginLeft,
                                    c = d - l,
                                    u = d + e.collisionWidth - a - l,
                                    h = "left" === e.my[0] ? -e.elemWidth : "right" === e.my[0] ? e.elemWidth : 0,
                                    p = "left" === e.at[0] ? e.targetWidth : "right" === e.at[0] ? -e.targetWidth : 0,
                                    f = -2 * e.offset[0];
                                0 > c ? (i = t.left + h + p + f + e.collisionWidth - a - s, (0 > i || r(c) > i) && (t.left += h + p + f)) : u > 0 && (n = t.left - e.collisionPosition.marginLeft + h + p + f - l, (n > 0 || u > r(n)) && (t.left += h + p + f))
                            },
                            top: function(t, e) {
                                var i, n, o = e.within,
                                    s = o.offset.top + o.scrollTop,
                                    a = o.height,
                                    l = o.isWindow ? o.scrollTop : o.offset.top,
                                    d = t.top - e.collisionPosition.marginTop,
                                    c = d - l,
                                    u = d + e.collisionHeight - a - l,
                                    h = "top" === e.my[1],
                                    p = h ? -e.elemHeight : "bottom" === e.my[1] ? e.elemHeight : 0,
                                    f = "top" === e.at[1] ? e.targetHeight : "bottom" === e.at[1] ? -e.targetHeight : 0,
                                    g = -2 * e.offset[1];
                                0 > c ? (n = t.top + p + f + g + e.collisionHeight - a - s, (0 > n || r(c) > n) && (t.top += p + f + g)) : u > 0 && (i = t.top - e.collisionPosition.marginTop + p + f + g - l, (i > 0 || u > r(i)) && (t.top += p + f + g))
                            }
                        },
                        flipfit: {
                            left: function() {
                                t.ui.position.flip.left.apply(this, arguments), t.ui.position.fit.left.apply(this, arguments)
                            },
                            top: function() {
                                t.ui.position.flip.top.apply(this, arguments), t.ui.position.fit.top.apply(this, arguments)
                            }
                        }
                    },
                    function() {
                        var e, i, n, o, a, r = document.getElementsByTagName("body")[0],
                            l = document.createElement("div");
                        e = document.createElement(r ? "div" : "body"), n = {
                            visibility: "hidden",
                            width: 0,
                            height: 0,
                            border: 0,
                            margin: 0,
                            background: "none"
                        }, r && t.extend(n, {
                            position: "absolute",
                            left: "-1000px",
                            top: "-1000px"
                        });
                        for (a in n) e.style[a] = n[a];
                        e.appendChild(l), i = r || document.documentElement, i.insertBefore(e, i.firstChild), l.style.cssText = "position: absolute; left: 10.7432222px;", o = t(l).offset().left, s = o > 10 && 11 > o, e.innerHTML = "", i.removeChild(e)
                    }()
            }(), t.ui.position, t.widget("ui.tooltip", {
                version: "1.11.4",
                options: {
                    content: function() {
                        var e = t(this).attr("title") || "";
                        return t("<a>").text(e).html()
                    },
                    hide: !0,
                    items: "[title]:not([disabled])",
                    position: {
                        my: "left top+15",
                        at: "left bottom",
                        collision: "flipfit flip"
                    },
                    show: !0,
                    tooltipClass: null,
                    track: !1,
                    close: null,
                    open: null
                },
                _addDescribedBy: function(e, i) {
                    var n = (e.attr("aria-describedby") || "").split(/\s+/);
                    n.push(i), e.data("ui-tooltip-id", i).attr("aria-describedby", t.trim(n.join(" ")))
                },
                _removeDescribedBy: function(e) {
                    var i = e.data("ui-tooltip-id"),
                        n = (e.attr("aria-describedby") || "").split(/\s+/),
                        o = t.inArray(i, n); - 1 !== o && n.splice(o, 1), e.removeData("ui-tooltip-id"), n = t.trim(n.join(" ")), n ? e.attr("aria-describedby", n) : e.removeAttr("aria-describedby")
                },
                _create: function() {
                    this._on({
                        mouseover: "open",
                        focusin: "open"
                    }), this.tooltips = {}, this.parents = {}, this.options.disabled && this._disable(), this.liveRegion = t("<div>").attr({
                        role: "log",
                        "aria-live": "assertive",
                        "aria-relevant": "additions"
                    }).addClass("ui-helper-hidden-accessible").appendTo(this.document[0].body)
                },
                _setOption: function(e, i) {
                    var n = this;
                    return "disabled" === e ? (this[i ? "_disable" : "_enable"](), void(this.options[e] = i)) : (this._super(e, i), void("content" === e && t.each(this.tooltips, function(t, e) {
                        n._updateContent(e.element)
                    })))
                },
                _disable: function() {
                    var e = this;
                    t.each(this.tooltips, function(i, n) {
                        var o = t.Event("blur");
                        o.target = o.currentTarget = n.element[0], e.close(o, !0)
                    }), this.element.find(this.options.items).addBack().each(function() {
                        var e = t(this);
                        e.is("[title]") && e.data("ui-tooltip-title", e.attr("title")).removeAttr("title")
                    })
                },
                _enable: function() {
                    this.element.find(this.options.items).addBack().each(function() {
                        var e = t(this);
                        e.data("ui-tooltip-title") && e.attr("title", e.data("ui-tooltip-title"))
                    })
                },
                open: function(e) {
                    var i = this,
                        n = t(e ? e.target : this.element).closest(this.options.items);
                    n.length && !n.data("ui-tooltip-id") && (n.attr("title") && n.data("ui-tooltip-title", n.attr("title")), n.data("ui-tooltip-open", !0), e && "mouseover" === e.type && n.parents().each(function() {
                        var e, n = t(this);
                        n.data("ui-tooltip-open") && (e = t.Event("blur"), e.target = e.currentTarget = this, i.close(e, !0)), n.attr("title") && (n.uniqueId(), i.parents[this.id] = {
                            element: this,
                            title: n.attr("title")
                        }, n.attr("title", ""))
                    }), this._registerCloseHandlers(e, n), this._updateContent(n, e))
                },
                _updateContent: function(t, e) {
                    var i, n = this.options.content,
                        o = this,
                        s = e ? e.type : null;
                    return "string" == typeof n ? this._open(e, t, n) : (i = n.call(t[0], function(i) {
                        o._delay(function() {
                            t.data("ui-tooltip-open") && (e && (e.type = s), this._open(e, t, i))
                        })
                    }), void(i && this._open(e, t, i)))
                },
                _open: function(e, i, n) {
                    function o(t) {
                        d.of = t, a.is(":hidden") || a.position(d)
                    }
                    var s, a, r, l, d = t.extend({}, this.options.position);
                    if (n) {
                        if (s = this._find(i)) return void s.tooltip.find(".ui-tooltip-content").html(n);
                        i.is("[title]") && (e && "mouseover" === e.type ? i.attr("title", "") : i.removeAttr("title")), s = this._tooltip(i), a = s.tooltip, this._addDescribedBy(i, a.attr("id")), a.find(".ui-tooltip-content").html(n), this.liveRegion.children().hide(), n.clone ? (l = n.clone(), l.removeAttr("id").find("[id]").removeAttr("id")) : l = n, t("<div>").html(l).appendTo(this.liveRegion), this.options.track && e && /^mouse/.test(e.type) ? (this._on(this.document, {
                            mousemove: o
                        }), o(e)) : a.position(t.extend({
                            of: i
                        }, this.options.position)), a.hide(), this._show(a, this.options.show), this.options.show && this.options.show.delay && (r = this.delayedShow = setInterval(function() {
                            a.is(":visible") && (o(d.of), clearInterval(r))
                        }, t.fx.interval)), this._trigger("open", e, {
                            tooltip: a
                        })
                    }
                },
                _registerCloseHandlers: function(e, i) {
                    var n = {
                        keyup: function(e) {
                            if (e.keyCode === t.ui.keyCode.ESCAPE) {
                                var n = t.Event(e);
                                n.currentTarget = i[0], this.close(n, !0)
                            }
                        }
                    };
                    i[0] !== this.element[0] && (n.remove = function() {
                        this._removeTooltip(this._find(i).tooltip)
                    }), e && "mouseover" !== e.type || (n.mouseleave = "close"), e && "focusin" !== e.type || (n.focusout = "close"), this._on(!0, i, n)
                },
                close: function(e) {
                    var i, n = this,
                        o = t(e ? e.currentTarget : this.element),
                        s = this._find(o);
                    return s ? (i = s.tooltip, void(s.closing || (clearInterval(this.delayedShow), o.data("ui-tooltip-title") && !o.attr("title") && o.attr("title", o.data("ui-tooltip-title")), this._removeDescribedBy(o), s.hiding = !0, i.stop(!0), this._hide(i, this.options.hide, function() {
                        n._removeTooltip(t(this))
                    }), o.removeData("ui-tooltip-open"), this._off(o, "mouseleave focusout keyup"), o[0] !== this.element[0] && this._off(o, "remove"), this._off(this.document, "mousemove"), e && "mouseleave" === e.type && t.each(this.parents, function(e, i) {
                        t(i.element).attr("title", i.title), delete n.parents[e]
                    }), s.closing = !0, this._trigger("close", e, {
                        tooltip: i
                    }), s.hiding || (s.closing = !1)))) : void o.removeData("ui-tooltip-open")
                },
                _tooltip: function(e) {
                    var i = t("<div>").attr("role", "tooltip").addClass("ui-tooltip ui-widget ui-corner-all ui-widget-content " + (this.options.tooltipClass || "")),
                        n = i.uniqueId().attr("id");
                    return t("<div>").addClass("ui-tooltip-content").appendTo(i), i.appendTo(this.document[0].body), this.tooltips[n] = {
                        element: e,
                        tooltip: i
                    }
                },
                _find: function(t) {
                    var e = t.data("ui-tooltip-id");
                    return e ? this.tooltips[e] : null
                },
                _removeTooltip: function(t) {
                    t.remove(), delete this.tooltips[t.attr("id")]
                },
                _destroy: function() {
                    var e = this;
                    t.each(this.tooltips, function(i, n) {
                        var o = t.Event("blur"),
                            s = n.element;
                        o.target = o.currentTarget = s[0], e.close(o, !0), t("#" + i).remove(), s.data("ui-tooltip-title") && (s.attr("title") || s.attr("title", s.data("ui-tooltip-title")), s.removeData("ui-tooltip-title"))
                    }), this.liveRegion.remove()
                }
            })
    });