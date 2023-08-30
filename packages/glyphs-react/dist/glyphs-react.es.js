import { createElement as l } from "react";
const d = (e) => {
  const t = `{"${e.replace(/"/g, "").replace(/;/g, '", "').replace(/:/g, '": "').replace(";", "")}"}`, r = JSON.parse(t), s = Object.keys(r).map((n) => ({ [n.replace(/-[a-z]/g, (a) => a[1].toUpperCase())]: r[n].trim() }));
  return Object.assign({}, ...s);
}, u = (e) => e ? Object.keys(e).reduce((t, r) => {
  const s = r.split("-").map((n, o) => o !== 0 ? n.charAt(0).toUpperCase() + n.substring(1) : n).join("");
  return s === "style" ? (t[s] = d(e[r]), t) : (t[s] = e[r], t);
}, {}) : {}, f = (e) => parseFloat(e) * (typeof getComputedStyle == "function" ? parseFloat(getComputedStyle(document.documentElement).fontSize) : 16), y = (e) => (e.slice(-1) === "x" ? f(e.slice(0, e.length - 1)) : parseInt(e)) + "px", C = ({
  icon: e,
  size: t = "1.5x",
  width: r,
  height: s,
  fill: n,
  stroke: o,
  ...a
}) => {
  const i = y(t);
  return l(
    "svg",
    {
      viewBox: `0 0 ${e.width} ${e.height}`,
      width: r ?? i,
      height: s ?? i,
      ...a
    },
    e.svgPathData.map((c, m) => l(
      c.name,
      {
        ...u(c.attributes),
        key: m
      },
      c.children.map((p, g) => l(p.name, {
        ...u(p.attributes),
        key: g * 2
      }))
    ))
  );
};
export {
  C as default
};
