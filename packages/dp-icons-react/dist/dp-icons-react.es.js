import { createElement as a } from "react";
class b {
  constructor() {
    this.store = /* @__PURE__ */ new Map();
  }
  add(t) {
    this.store.set(`${t.name}_${t.type}`, t);
  }
  has(t) {
    return this.store.has(t);
  }
  get(t, e = "regular") {
    return t ? t && this.has(`${t}_${e}`) ? this.store.get(`${t}_${e}`) : (console.warn(`Unable to find icon : ${t} in ${e} type`), null) : null;
  }
}
const p = new b(), $ = (r) => Object.keys(r).reduce((t, e) => {
  const s = e.split("-").map((n, o) => o !== 0 ? n.charAt(0).toUpperCase() + n.substring(1) : n).join("");
  return t[s] = r[e], t;
}, {}), f = (r) => r.slice(-1) === "x" ? r.slice(0, r.length - 1) + "rem" : parseInt(r) + "px", d = (r) => {
  const t = p.get(r.icon, r.type);
  return t ? a(y, {
    ...r,
    icon: t
  }) : "?";
}, y = ({
  icon: r,
  size: t = "1.5x",
  width: e,
  height: s,
  fill: n,
  stroke: o,
  ...i
}) => {
  const c = f(t);
  return a("svg", {
    viewBox: "0 0 24 24",
    width: e != null ? e : c,
    height: s != null ? s : c,
    ...i
  }, a("g", {
    ...$(r.attributes),
    stroke: o || r.attributes.stroke,
    fill: n || r.attributes.fill
  }, r.svgPathData.map((l, u) => a("path", {
    key: u,
    d: l
  }))));
};
export {
  p as Library,
  d as default
};
