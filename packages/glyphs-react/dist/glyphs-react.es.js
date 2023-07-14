import { createElement as i } from "react";
const c = (e) => e ? Object.keys(e).reduce((t, r) => {
  const s = r.split("-").map((n, u) => u !== 0 ? n.charAt(0).toUpperCase() + n.substring(1) : n).join("");
  return t[s] = e[r], t;
}, {}) : {}, f = (e) => parseFloat(e) * (typeof getComputedStyle == "function" ? parseFloat(getComputedStyle(document.documentElement).fontSize) : 16), g = (e) => (e.slice(-1) === "x" ? f(e.slice(0, e.length - 1)) : parseInt(e)) + "px", h = ({
  icon: e,
  size: t = "1.5x",
  width: r,
  height: s,
  fill: n,
  stroke: u,
  ...m
}) => {
  const a = g(t);
  return i(
    "svg",
    {
      viewBox: `0 0 ${e.width} ${e.height}`,
      width: r ?? a,
      height: s ?? a,
      ...m
    },
    e.svgPathData.map((o, p) => i(
      o.name,
      {
        ...c(o.attributes),
        key: p
      },
      o.children.map((l, d) => i(l.name, {
        ...c(l.attributes),
        key: d * 2
      }))
    ))
  );
};
export {
  h as default
};
