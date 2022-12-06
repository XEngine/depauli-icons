import { createElement as n } from "react";
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
  ...o
}) => {
  var u, c;
  const p = m(a);
  return n(
    "svg",
    {
      viewBox: "0 0 24 24",
      width: e != null ? e : p,
      height: r != null ? r : p,
      ...o
    },
    n(
      "g",
      {
        ...f(t.attributes),
        stroke: l || ((u = t.attributes) == null ? void 0 : u.stroke),
        fill: s || ((c = t.attributes) == null ? void 0 : c.fill)
      },
      t.svgPathData.map((i, b) => n("path", { key: b, d: i }))
    )
  );
};
export {
  k as default,
  f as reactifyAttributes,
  m as sizeCalculate
};
