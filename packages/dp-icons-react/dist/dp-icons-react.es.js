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
const $ = new b(), f = (r) => Object.keys(r).reduce((t, e) => {
  const n = e.split("-").map((s, o) => o !== 0 ? s.charAt(0).toUpperCase() + s.substring(1) : s).join("");
  return t[n] = r[e], t;
}, {}), y = (r) => r.slice(-1) === "x" ? r.slice(0, r.length - 1) + "rem" : parseInt(r) + "px", m = (r) => {
  const t = $.get(r.icon, r.type);
  return t ? a(g, {
    ...r,
    icon: t
  }) : "?";
}, g = ({
  icon: r,
  type: t = "regular",
  size: e = "1.5x",
  width: n,
  height: s,
  fill: o,
  stroke: c,
  ...i
}) => {
  const l = y(e);
  return a("svg", {
    viewBox: "0 0 24 24",
    width: n != null ? n : l,
    height: s != null ? s : l,
    ...i
  }, a("g", {
    ...f(r.attributes),
    stroke: c || r.attributes.stroke,
    fill: o || r.attributes.fill
  }, r.svgPathData.map((u, p) => a("path", {
    key: p,
    d: u
  }))));
};
export {
  $ as Library,
  m as default
};
