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
String.prototype.rightChars = function(t) {
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