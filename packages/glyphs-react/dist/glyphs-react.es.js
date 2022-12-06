import { createElement as u } from "react";
const f = (t) => t ? Object.keys(t).reduce((a, e) => {
  const r = e.split("-").map((s, l) => l !== 0 ? s.charAt(0).toUpperCase() + s.substring(1) : s).join("");
  return a[r] = t[e], a;
}, {}) : {}, m = (t) => t.slice(-1) === "x" ? t.slice(0, t.length - 1) + "rem" : parseInt(t) + "px", k = ({
  icon: t,
  size: a = "1.5x",
  width: e,
  height: r,
  fill: s,
  stroke: l,
  ...c
}) => {
  var n, b;
  const p = m(a);
  return u(
    "svg",
    {
      viewBox: "0 0 24 24",
      width: e != null ? e : p,
      height: r != null ? r : p,
      ...c
    },
    u(
      "g",
      {
        ...f(t.attributes),
        stroke: l || t.attributes && ((n = t.attributes) == null ? void 0 : n.stroke),
        fill: s || t.attributes && ((b = t.attributes) == null ? void 0 : b.fill)
      },
      t.svgPathData.map((i, o) => u("path", { key: o, d: i }))
    )
  );
};
export {
  k as default
};
