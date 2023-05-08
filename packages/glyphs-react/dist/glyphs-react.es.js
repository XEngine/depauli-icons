import { createElement as u } from "react";
const f = (t) => t ? Object.keys(t).reduce((a, e) => {
  const r = e.split("-").map((s, o) => o !== 0 ? s.charAt(0).toUpperCase() + s.substring(1) : s).join("");
  return a[r] = t[e], a;
}, {}) : {}, b = (t) => parseFloat(t) * (typeof getComputedStyle == "function" ? parseFloat(getComputedStyle(document.documentElement).fontSize) : 16), y = (t) => (t.slice(-1) === "x" ? b(t.slice(0, t.length - 1)) : parseInt(t)) + "px", g = ({
  icon: t,
  size: a = "1.5x",
  width: e,
  height: r,
  fill: s,
  stroke: o,
  ...c
}) => {
  var n, p;
  const l = y(a);
  return u(
    "svg",
    {
      viewBox: "0 0 24 24",
      width: e != null ? e : l,
      height: r != null ? r : l,
      ...c
    },
    u(
      "g",
      {
        ...f(t.attributes),
        stroke: o || t.attributes && ((n = t.attributes) == null ? void 0 : n.stroke),
        fill: s || t.attributes && ((p = t.attributes) == null ? void 0 : p.fill)
      },
      t.svgPathData.map((m, i) => u("path", { key: i, d: m }))
    )
  );
};
export {
  g as default
};
