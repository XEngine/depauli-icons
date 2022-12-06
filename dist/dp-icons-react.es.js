import { createElement as c } from "react";
const i = (t) => Object.keys(t).reduce((a, e) => {
  const r = e.split("-").map((s, n) => n !== 0 ? s.charAt(0).toUpperCase() + s.substring(1) : s).join("");
  return a[r] = t[e], a;
}, {}), b = (t) => t.slice(-1) === "x" ? t.slice(0, t.length - 1) + "rem" : parseInt(t) + "px", f = ({
  icon: t,
  size: a = "1.5x",
  width: e,
  height: r,
  fill: s,
  stroke: n,
  ...o
}) => {
  const l = b(a);
  return c(
    "svg",
    {
      viewBox: "0 0 24 24",
      width: e != null ? e : l,
      height: r != null ? r : l,
      ...o
    },
    c(
      "g",
      {
        ...i(t.attributes),
        stroke: n || t.attributes.stroke,
        fill: s || t.attributes.fill
      },
      t.svgPathData.map((p, u) => c("path", { key: u, d: p }))
    )
  );
};
export {
  f as DpIcon,
  i as reactifyAttributes,
  b as sizeCalculate
};
