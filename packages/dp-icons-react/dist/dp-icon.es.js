var y = Object.defineProperty;
var d = (t, e, r) => e in t ? y(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r;
var g = (t, e, r) => (d(t, typeof e != "symbol" ? e + "" : e, r), r);
import { createElement as a } from "react";
import { defineComponent as b, ref as m, watch as p, h as c } from "vue";
class $ {
  constructor() {
    g(this, "store");
    this.store = /* @__PURE__ */ new Map();
  }
  add(e) {
    this.store.set(`${e.name}_${e.type}`, e);
  }
  has(e) {
    return this.store.has(e);
  }
  get(e, r = "regular") {
    if (!!e) {
      if (e && this.has(`${e}_${r}`))
        return this.store.get(`${e}_${r}`);
      console.warn(`Unable to find icon : ${e} in ${r} type`);
    }
  }
}
const u = new $(), v = (t) => Object.keys(t).reduce((e, r) => {
  const n = r.split("-").map((s, i) => i !== 0 ? s.charAt(0).toUpperCase() + s.substring(1) : s).join("");
  return e[n] = t[r], e;
}, {}), z = (t) => t.slice(-1) === "x" ? t.slice(0, t.length - 1) + "rem" : parseInt(t) + "px", I = ({
  icon: t,
  size: e = "1.5x",
  width: r,
  height: n,
  fill: s,
  stroke: i,
  ...o
}) => {
  const l = z(e);
  return a(
    "svg",
    {
      viewBox: "0 0 24 24",
      width: r != null ? r : l,
      height: n != null ? n : l,
      ...o
    },
    a(
      "g",
      {
        ...v(t.attributes),
        stroke: i || t.attributes.stroke,
        fill: s || t.attributes.fill
      },
      t.svgPathData.map((h, f) => a("path", { key: f, d: h }))
    )
  );
}, C = (t) => {
  const e = u.get(t.icon, t.type);
  return e ? a(I, { ...t, icon: e }) : a("span", null, "?");
}, S = b({
  props: {
    icon: {
      type: String,
      default: ""
    },
    size: {
      type: String,
      default: "1.5x"
    },
    type: {
      type: String,
      default: "regular"
    }
  },
  setup(t, e) {
    const r = m(u.get(t.icon, t.type));
    p([() => t.icon, () => t.type], () => {
      r.value = u.get(t.icon, t.type);
    }, {
      immediate: !0
    });
    let n = t.size.slice(-1) === "x" ? t.size.slice(0, t.size.length - 1) + "rem" : parseInt(t.size) + "px", s = {
      width: e.attrs.width || n,
      height: e.attrs.height || n
    };
    return () => {
      var i;
      return r.value ? c("svg", {
        viewBox: "0 0 24 24",
        ...s
      }, [t.icon, c("g", { ...(i = r.value.attributes) != null ? i : {} }, [...r.value.svgPathData.map((o) => c("path", { d: o }))])]) : c("span");
    };
  }
});
export {
  C as DpIconReact,
  S as DpIconVue,
  u as Library
};
