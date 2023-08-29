import { createElement as a } from "react";
const d = (e) => {
  console.log(e);
  const r = `{"${e.replace(/"/g, "").replace(/;/g, '", "').replace(/:/g, '": "').replace(";", "")}"}`;
  console.log(r);
  const t = JSON.parse(r), s = Object.keys(t).map((n) => ({ [n.replace(/-[a-z]/g, (l) => l[1].toUpperCase())]: t[n].trim() }));
  return Object.assign({}, ...s);
}, u = (e) => {
  if (!e)
    return {};
  const r = Object.keys(e).reduce((t, s) => {
    const n = s.split("-").map((o, l) => l !== 0 ? o.charAt(0).toUpperCase() + o.substring(1) : o).join("");
    return n === "style" ? (t[n] = d(e[s]), t) : (t[n] = e[s], t);
  }, {});
  return console.log(r), r;
}, f = (e) => parseFloat(e) * (typeof getComputedStyle == "function" ? parseFloat(getComputedStyle(document.documentElement).fontSize) : 16), y = (e) => (e.slice(-1) === "x" ? f(e.slice(0, e.length - 1)) : parseInt(e)) + "px", C = ({
  icon: e,
  size: r = "1.5x",
  width: t,
  height: s,
  fill: n,
  stroke: o,
  ...l
}) => {
  const p = y(r);
  return a(
    "svg",
    {
      viewBox: `0 0 ${e.width} ${e.height}`,
      width: t ?? p,
      height: s ?? p,
      ...l
    },
    e.svgPathData.map((c, m) => a(
      c.name,
      {
        ...u(c.attributes),
        key: m
      },
      c.children.map((i, g) => a(i.name, {
        ...u(i.attributes),
        key: g * 2
      }))
    ))
  );
};
export {
  C as default
};
