import { jsxs as h, Fragment as f, jsx as m } from "react/jsx-runtime";
import { createElement as o, useRef as y, useState as S, useEffect as b } from "react";
import { createPortal as j } from "react-dom";
const C = (e) => {
  const t = `{"${e.replace(/"/g, "").replace(/;/g, '", "').replace(/:/g, '": "').replace(";", "")}"}`, r = JSON.parse(t), s = Object.keys(r).map((n) => ({ [n.replace(/-[a-z]/g, (c) => c[1].toUpperCase())]: r[n].trim() }));
  return Object.assign({}, ...s);
}, p = (e) => e ? Object.keys(e).reduce((t, r) => {
  const s = r.split("-").map((n, a) => a !== 0 ? n.charAt(0).toUpperCase() + n.substring(1) : n).join("");
  return s === "style" ? (t[s] = C(e[r]), t) : (t[s] = e[r], t);
}, {}) : {}, w = (e) => parseFloat(e) * (typeof getComputedStyle == "function" ? parseFloat(getComputedStyle(document.documentElement).fontSize) : 16), k = (e) => (e.slice(-1) === "x" ? w(e.slice(0, e.length - 1)) : parseInt(e)) + "px", x = ({
  icon: e,
  size: t = "1.5x",
  width: r,
  height: s,
  fill: n,
  stroke: a,
  ...c
}) => {
  const i = k(t);
  return o(
    "svg",
    {
      viewBox: `0 0 ${e.width} ${e.height}`,
      width: r ?? i,
      height: s ?? i,
      ...c
    },
    e.svgPathData.map((l, d) => o(
      l.name,
      {
        ...p(l.attributes),
        key: d
      },
      l.children.map((u, g) => o(u.name, {
        ...p(u.attributes),
        key: g * 2
      }))
    ))
  );
}, E = (e) => {
  const t = y(), [r, s] = S(null);
  return b(() => {
    t.current && !t.current.shadowRoot && s(t.current.attachShadow({ mode: "open" }));
  }, [t]), o(
    "glyphs-uc",
    {
      ref: t,
      "data-key": e.icon.name,
      class: e.className
    },
    r && j(
      /* @__PURE__ */ h(f, { children: [
        /* @__PURE__ */ m("style", { dangerouslySetInnerHTML: { __html: ":host{display:inline-block;vertical-align:0}span,svg{display:block}" } }),
        /* @__PURE__ */ m(x, { ...e })
      ] }),
      r
    )
  );
};
export {
  E as default
};
