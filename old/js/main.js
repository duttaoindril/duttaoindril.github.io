function setOpacity() {
    var t = window.pageXOffset ? window.pageXOffset : document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop;
    0 == t ? document.getElementById("header").style.opacity = "1" : t > 0 && $("#header:hover").length > 0 ? document.getElementById("header").style.opacity = "1" : t > 0 && !($("#header:hover").length > 0) && (document.getElementById("header").style.opacity = "0.1"), 0 == t ? document.getElementById("footer").style.opacity = "1" : t > 0 && $("#footer:hover").length > 0 ? document.getElementById("footer").style.opacity = "1" : t > 0 && !($("#footer:hover").length > 0) && (document.getElementById("footer").style.opacity = "0.1")
}

function hide(t, e, n) {
    $(t).click(function() {
        console.log("hiding"), $(e).hide(), $(n).hide()
    })
}

function show(t, e, n) {
    $(t).click(function() {
        console.log("showing"), $(e).show(), $(n).show()
    })
}
window.onscroll = function() {
    var t = window.pageXOffset ? window.pageXOffset : document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop;
    if (t > 1) {
        document.getElementById("header").style.position = "fixed", document.getElementById("header").style.height = "40px", document.getElementById("header").style.width = "100%";
        for (var e = document.getElementsByClassName("headericon"), n = 0; n < e.length; n++)
            e[n].style.width = "40px", e[n].style.height = "40px";
        document.getElementById("footer").style.position = "fixed", document.getElementById("footer").style.height = "25px", document.getElementById("footer").style.width = "100%";
        for (var e = document.getElementsByClassName("footericon"), n = 0; n < e.length; n++)
            e[n].style.width = "23px", e[n].style.height = "23px";
        document.getElementById("backtotop").innerHTML = "BACK TO TOP", document.getElementById("backtotoplink").setAttribute("href", "#welcome");
    } else if (0 == t) {
        document.getElementById("header").style.position = "fixed", document.getElementById("header").style.height = "70px", document.getElementById("header").style.width = "100%";
        for (var e = document.getElementsByClassName("headericon"), n = 0; n < e.length; n++)
            e[n].style.width = "70px", e[n].style.height = "70px";
        document.getElementById("footer").style.position = "fixed", document.getElementById("footer").style.height = "35px", document.getElementById("footer").style.width = "100%";
        for (var e = document.getElementsByClassName("footericon"), n = 0; n < e.length; n++)
            e[n].style.width = "32px", e[n].style.height = "32px";
        document.getElementById("backtotop").innerHTML = "HOME", document.getElementById("backtotoplink").setAttribute("href", "index.html");
    }
        setOpacity()
}, $(document).mousemove(function() {
    setOpacity()
}), function(t) {
    var e, n, o = -1,
        r = [];
    t.promin = {
        key: {
            backspace: 8,
            tab: 9,
            enter: 13,
            "return": 13,
            shift: 16,
            ctrl: 17,
            alt: 18,
            caps: 20,
            escape: 27,
            space: 32,
            pageup: 33,
            pagedown: 34,
            end: 35,
            home: 36,
            left: 37,
            up: 38,
            right: 39,
            down: 40,
            del: 46
        }
    };
    var i = {
            ajaxCallback: null,
            autofocus: !0,
            actions: {
                submit: "default"
            },
            events: {
                change: null,
                next: null,
                previous: null,
                submit: null,
                reset: null
            },
            shortcuts: {
                next: [t.promin.key.tab, t.promin.key.enter],
                previous: [
                    [t.promin.key.tab, t.promin.key.shift]
                ],
                reset: [t.promin.key.escape]
            }
        },
        a = {
            next: function(t) {
                var e = o + 1;
                s.eventIsSet("next", t) && i.events.next.call(this, e) === !1 || (e === n.length ? a.submit() : a.show(e))
            },
            previous: function(t) {
                var e = o - 1;
                s.eventIsSet("previous", t) && i.events.next.call(this, e) === !1 || 0 > e || a.show(e)
            },
            show: function(t, e, r) {
                var a, l;
                s.eventIsSet("change", e) && i.events.change.call(this, t) === !1 || (a = n.eq(o), l = s.getField(a), a.hide(), l.blur(), t < n.length && (a = n.eq(t), l = s.getField(a), a.show(), (!r || i.autofocus) && l.focus()), o = t)
            },
            submit: function(o) {
                var r;
                if (!s.eventIsSet("submit", o) || (r = n.find("input, textarea, select"), i.events.submit.call(this, r) !== !1))
                    if (i.actions.submit && "default" === i.actions.submit) e.submit();
                    else if (i.actions.submit && "ajax" === i.actions.submit) {
                    var a = e.attr("action");
                    r = e.serialize(), r.ajax = !0, t.ajax({
                        cache: !1,
                        complete: i.ajaxCallback,
                        data: r,
                        type: "POST",
                        url: a
                    })
                }
            },
            reset: function(t) {
                a.show(0, !1, !0), n.find("input").each(s.resetInput), n.find("textarea").each(s.resetTextarea), n.find("select").each(s.resetSelect), s.eventIsSet("reset", t) && i.events.reset.call(this)
            }
        },
        s = {
            init: function(o) {
                t.extend(i, o), e = this, n = this.find(".pm-step"), e.addClass("promin"), n.hide().each(function(e, n) {
                    var o = t(n),
                        r = s.getField(o);
                    r.keydown(s.keydownHandler), r.keyup(s.keyupHandler)
                }), n.length > 0 && a.show(0, !1, !0)
            },
            keydownHandler: function(t) {
                return r.push(t.keyCode), i.shortcuts ? i.shortcuts.next && i.shortcuts.next.length > 0 && s.keydown.apply(null, i.shortcuts.next) ? (a.next(), !1) : i.shortcuts.previous && i.shortcuts.previous.length > 0 && s.keydown.apply(null, i.shortcuts.previous) ? (a.previous(), !1) : i.shortcuts.reset && i.shortcuts.reset.length > 0 && s.keydown.apply(null, i.shortcuts.reset) ? (a.reset(), !1) : void 0 : void 0
            },
            keyupHandler: function(t) {
                for (var e = r.length; e--;) r[e] === t.keyCode && r.splice(e, 1)
            },
            keydown: function() {
                var e = !1;
                return t.each(arguments, function(n, o) {
                    if ("number" == typeof o) {
                        if (1 !== r.length) return;
                        if (t.inArray(o, r) >= 0) return e = !0, !1
                    } else {
                        if (o.length !== r.length) return;
                        var i = 0;
                        if (t.each(o, function(e, n) {
                                t.inArray(n, r) >= 0 && i++
                            }), i === o.length) return e = !0, !1
                    }
                }), e
            },
            resetInput: function(e, n) {
                var o = t(n);
                o.val(o.attr("value"))
            },
            resetTextarea: function(e, n) {
                var o = t(n);
                o.val(o.html())
            },
            resetSelect: function(e, n) {
                var o = t(n),
                    r = o.find("option[selected]").attr("value");
                o.val(r)
            },
            getField: function(t) {
                var e = t.prop("nodeName").toLowerCase(),
                    n = t.find("input, textarea, select");
                return "input" === e || "textarea" === e || "select" === e ? t : n.length > 0 ? n.eq(0) : n
            },
            eventIsSet: function(t, e) {
                return !e && i.events && i.events[t] && "function" == typeof i.events[t]
            }
        };
    t.fn.promin = function(t) {
        return a[t] ? a[t].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof t && t ? this : s.init.apply(this, arguments)
    }
}(jQuery), show(".toggle", ".iframeHolder", ".iframe"), hide("#backbutton", ".iframeHolder", ".iframe"), $(function() {
    $("a[href*=#]:not([href=#])").click(function() {
        if (location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") && location.hostname == this.hostname) {
            var t = $(this.hash);
            if (t = t.length ? t : $("[name=" + this.hash.slice(1) + "]"), t.length) return $("html,body").animate({
                scrollTop: t.offset().top
            }, 1e3), !1
        }
    })
}), String.prototype.rightChars = function(t) {
    return 0 >= t ? "" : t > this.length ? this : this.substring(this.length, this.length - t)
},
function(t) {
    var e, n, o, r, i, a, s, l, c, u, h, d, p = {
        highlightSpeed: 20,
        typeSpeed: 100,
        clearDelay: 500,
        typeDelay: 200,
        clearOnHighlight: !0,
        typerDataAttr: "data-typer-targets",
        typerInterval: 2e3
    };
    r = function(e, n) {
        return "rgba(0, 0, 0, 0)" === e && (e = "rgb(0, 0, 0)"), t("<span></span>").css("color", e).css("background-color", n)
    }, l = function(t) {
        return !isNaN(parseFloat(t)) && isFinite(t)
    }, s = function(t) {
        t.removeData(["typePosition", "highlightPosition", "leftStop", "rightStop", "primaryColor", "backgroundColor", "text", "typing"])
    }, o = function(t) {
        var e = t.data("text"),
            n = t.data("oldLeft"),
            r = t.data("oldRight");
        return e && 0 !== e.length ? (t.text(n + e.charAt(0) + r).data({
            oldLeft: n + e.charAt(0),
            text: e.substring(1)
        }), void setTimeout(function() {
            o(t)
        }, h())) : void s(t)
    }, n = function(t) {
        t.find("span").remove(), setTimeout(function() {
            o(t)
        }, a())
    }, e = function(t) {
        var o, a, s, c = t.data("highlightPosition");
        return l(c) || (c = t.data("rightStop") + 1), c <= t.data("leftStop") ? void setTimeout(function() {
            n(t)
        }, i()) : (o = t.text().substring(0, c - 1), a = t.text().substring(c - 1, t.data("rightStop") + 1), s = t.text().substring(t.data("rightStop") + 1), t.html(o).append(r(t.data("backgroundColor"), t.data("primaryColor")).append(a)).append(s), t.data("highlightPosition", c - 1), void setTimeout(function() {
            return e(t)
        }, u()))
    }, c = function(e) {
        var n;
        if (!e.data("typing")) {
            try {
                n = JSON.parse(e.attr(t.typer.options.typerDataAttr)).targets
            } catch (o) {}
            "undefined" == typeof n && (n = t.map(e.attr(t.typer.options.typerDataAttr).split(","), function(e) {
                return t.trim(e)
            })), e.typeTo(n[Math.floor(Math.random() * n.length)])
        }
    }, t.typer = function() {
        return {
            options: p
        }
    }(), t.extend(t.typer, {
        options: p
    }), t.fn.typer = function() {
        var e = t(this);
        return e.each(function() {
            var e = t(this);
            "undefined" != typeof e.attr(t.typer.options.typerDataAttr) && (c(e), setInterval(function() {
                c(e)
            }, d()))
        })
    }, t.fn.typeTo = function(n) {
        var o = t(this),
            r = o.text(),
            i = 0,
            a = 0;
        if (r === n) return o;
        if (r !== o.html()) return console.error("Typer does not work on elements with child elements."), o;
        for (o.data("typing", !0); r.charAt(i) === n.charAt(i);) i++;
        for (; r.rightChars(a) === n.rightChars(a);) a++;
        return n = n.substring(i, n.length - a + 1), o.data({
            oldLeft: r.substring(0, i),
            oldRight: r.rightChars(a - 1),
            leftStop: i,
            rightStop: r.length - a,
            primaryColor: o.css("color"),
            backgroundColor: o.css("background-color"),
            text: n
        }), e(o), o
    }, u = function() {
        return t.typer.options.highlightSpeed
    }, h = function() {
        return t.typer.options.typeSpeed
    }, i = function() {
        return t.typer.options.clearDelay
    }, a = function() {
        return t.typer.options.typeDelay
    }, d = function() {
        return t.typer.options.typerInterval
    }
}(jQuery);
$(".iframeHolder").hide();
var $form = $('#form');
var $bar = $('.progressbar .bar');
var steps = $('.pm-step').length;
$form.promin({
    events: {
        change: function(i) {
            $bar.css('width', (i / steps * 100) + '%');
        }
    }
});
$('#navigation').on('click', function() {
    $form.promin('next');
});;
$(function() {
    $("#blur").blur();
});
window.scrollTo(0, 0);
if((window.location.href).includes("?thanks=true"))
    $("#fancytext").html("Thank you!");
else
    $("#fancytext").html("Hi! I'm OD. Welcome!");
setTimeout(function(){$('[data-typer-targets]').typer();}, 5000);