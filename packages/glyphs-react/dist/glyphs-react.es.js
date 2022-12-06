import { createElement as n } from "react";
const i = (t) => Object.keys(t).reduce((a, e) => {
  const r = e.split("-").map((s, l) => l !== 0 ? s.charAt(0).toUpperCase() + s.substring(1) : s).join("");
  return a[r] = t[e], a;
}, {}), b = (t) => t.slice(-1) === "x" ? t.slice(0, t.length - 1) + "rem" : parseInt(t) + "px", f = ({
  icon: t,
  size: a = "1.5x",
  width: e,
  height: r,
  fill: s,
  stroke: l,
  ...c
}) => {
  const p = b(a);
  return n(
    "svg",
    {
      viewBox: "0 0 24 24",
      width: e != null ? e : p,
      height: r != null ? r : p,
      ...c
    },
    n(
      "g",
      {
        ...i(t.attributes),
        stroke: l || t.attributes.stroke,
        fill: s || t.attributes.fill
      },
      t.svgPathData.map((o, u) => n("path", { key: u, d: o }))
    )
  );
};
export {
  f as default,
  i as reactifyAttributes,
  b as sizeCalculate
};
