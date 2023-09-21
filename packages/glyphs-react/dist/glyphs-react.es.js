import { jsx as i, jsxs as b, Fragment as S } from "react/jsx-runtime";
import { useRef as j, useState as C, useEffect as w, createElement as d } from "react";
import { createPortal as x } from "react-dom";
const k = (e) => {
  const t = `{"${e.replace(/"/g, "").replace(/;/g, '", "').replace(/:/g, '": "').replace(";", "")}"}`, r = JSON.parse(t), s = Object.keys(r).map((n) => ({ [n.replace(/-[a-z]/g, (a) => a[1].toUpperCase())]: r[n].trim() }));
  return Object.assign({}, ...s);
}, f = (e) => e ? Object.keys(e).reduce((t, r) => {
  const s = r.split("-").map((n, l) => l !== 0 ? n.charAt(0).toUpperCase() + n.substring(1) : n).join("");
  return s === "style" ? (t[s] = k(e[r]), t) : (t[s] = e[r], t);
}, {}) : {}, z = (e) => parseFloat(e) * (typeof getComputedStyle == "function" ? parseFloat(getComputedStyle(document.documentElement).fontSize) : 16), O = (e) => typeof e == "number" ? e + "px" : (e.slice(-1) === "x" ? z(e.slice(0, e.length - 1)) : parseInt(e)) + "px", N = ({
  icon: e,
  size: t = "1.5x",
  width: r,
  height: s,
  fill: n,
  stroke: l,
  ...a
}) => {
  const o = j(null), [p, g] = C(null);
  w(() => {
    o.current && !o.current.shadowRoot && g(o.current.attachShadow({ mode: "open" }));
  }, [o]);
  const u = O(t);
  return /* @__PURE__ */ i("span", { ref: o, className: a.className, "data-key": e.name, children: p && x(
    /* @__PURE__ */ b(S, { children: [
      /* @__PURE__ */ i(
        "style",
        {
          dangerouslySetInnerHTML: { __html: ":host{display:inline-block;vertical-align:0}span,svg{display:block}" }
        }
      ),
      /* @__PURE__ */ i(
        "svg",
        {
          viewBox: `0 0 ${e.width} ${e.height}`,
          width: r ?? u,
          height: s ?? u,
          ...a,
          children: e.svgPathData.map((c, h) => d(
            c.name,
            {
              ...f(c.attributes),
              key: h
            },
            c.children.map((m, y) => d(m.name, {
              ...f(m.attributes),
              key: y * 2
            }))
          ))
        }
      )
    ] }),
    p
  ) });
};
export {
  N as default
};
