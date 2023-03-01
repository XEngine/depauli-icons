"use strict";
const l = require("react"), m = t => t ? Object.keys(t).reduce((a, e) => {
        const r = e.split("-").map((s, c) => c !== 0 ? s.charAt(0).toUpperCase() + s.substring(1) : s).join("");
        return a[r] = t[e], a
    }, {}) : {}, f = t => t.slice(-1) === "x" ? t.slice(0, t.length - 1) + "rem" : parseInt(t) + "px",
    y = ({icon: t, size: a = "1.5x", width: e, height: r, fill: s, stroke: c, ...i}) => {
        var n, p;
        const u = f(a);
        return l.createElement("svg", {
            viewBox: "0 0 24 24",
            width: e != null ? e : u,
            height: r != null ? r : u, ...i
        }, l.createElement("g", {
            ...m(t.attributes),
            stroke: c || t.attributes && ((n = t.attributes) == null ? void 0 : n.stroke),
            fill: s || t.attributes && ((p = t.attributes) == null ? void 0 : p.fill)
        }, t.svgPathData.map((b, o) => l.createElement("path", {key: o, d: b}))))
    };
module.exports = y;
