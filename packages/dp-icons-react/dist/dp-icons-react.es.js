import $e, { useRef as ie, useEffect as oe } from "react";
class fr {
  constructor() {
    this.store = /* @__PURE__ */ new Map();
  }
  add(l) {
    this.store.set(`${l.name}_${l.type}`, l);
  }
  has(l) {
    return this.store.has(l);
  }
  get(l, h = "regular") {
    return l ? l && this.has(`${l}_${h}`) ? this.store.get(`${l}_${h}`) : (console.warn(`Unable to find icon : ${l} in ${h} type`), null) : null;
  }
}
const De = new fr();
var ue = { exports: {} }, W = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Fe;
function cr() {
  if (Fe)
    return W;
  Fe = 1;
  var _ = $e, l = Symbol.for("react.element"), h = Symbol.for("react.fragment"), C = Object.prototype.hasOwnProperty, P = _.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, x = { key: !0, ref: !0, __self: !0, __source: !0 };
  function y(g, s, R) {
    var v, b = {}, m = null, j = null;
    R !== void 0 && (m = "" + R), s.key !== void 0 && (m = "" + s.key), s.ref !== void 0 && (j = s.ref);
    for (v in s)
      C.call(s, v) && !x.hasOwnProperty(v) && (b[v] = s[v]);
    if (g && g.defaultProps)
      for (v in s = g.defaultProps, s)
        b[v] === void 0 && (b[v] = s[v]);
    return { $$typeof: l, type: g, key: m, ref: j, props: b, _owner: P.current };
  }
  return W.Fragment = h, W.jsx = y, W.jsxs = y, W;
}
var Y = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ae;
function dr() {
  return Ae || (Ae = 1, process.env.NODE_ENV !== "production" && function() {
    var _ = $e, l = Symbol.for("react.element"), h = Symbol.for("react.portal"), C = Symbol.for("react.fragment"), P = Symbol.for("react.strict_mode"), x = Symbol.for("react.profiler"), y = Symbol.for("react.provider"), g = Symbol.for("react.context"), s = Symbol.for("react.forward_ref"), R = Symbol.for("react.suspense"), v = Symbol.for("react.suspense_list"), b = Symbol.for("react.memo"), m = Symbol.for("react.lazy"), j = Symbol.for("react.offscreen"), N = Symbol.iterator, G = "@@iterator";
    function K(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = N && e[N] || e[G];
      return typeof r == "function" ? r : null;
    }
    var T = _.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function c(e) {
      {
        for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++)
          t[n - 1] = arguments[n];
        k("error", e, t);
      }
    }
    function k(e, r, t) {
      {
        var n = T.ReactDebugCurrentFrame, o = n.getStackAddendum();
        o !== "" && (r += "%s", t = t.concat([o]));
        var u = t.map(function(i) {
          return String(i);
        });
        u.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, u);
      }
    }
    var U = !1, z = !1, A = !1, H = !1, Ie = !1, se;
    se = Symbol.for("react.module.reference");
    function We(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === C || e === x || Ie || e === P || e === R || e === v || H || e === j || U || z || A || typeof e == "object" && e !== null && (e.$$typeof === m || e.$$typeof === b || e.$$typeof === y || e.$$typeof === g || e.$$typeof === s || e.$$typeof === se || e.getModuleId !== void 0));
    }
    function Ye(e, r, t) {
      var n = e.displayName;
      if (n)
        return n;
      var o = r.displayName || r.name || "";
      return o !== "" ? t + "(" + o + ")" : t;
    }
    function le(e) {
      return e.displayName || "Context";
    }
    function w(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && c("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case C:
          return "Fragment";
        case h:
          return "Portal";
        case x:
          return "Profiler";
        case P:
          return "StrictMode";
        case R:
          return "Suspense";
        case v:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case g:
            var r = e;
            return le(r) + ".Consumer";
          case y:
            var t = e;
            return le(t._context) + ".Provider";
          case s:
            return Ye(e, e.render, "ForwardRef");
          case b:
            var n = e.displayName || null;
            return n !== null ? n : w(e.type) || "Memo";
          case m: {
            var o = e, u = o._payload, i = o._init;
            try {
              return w(i(u));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var S = Object.assign, $ = 0, fe, ce, de, ve, pe, he, ge;
    function be() {
    }
    be.__reactDisabledLog = !0;
    function Le() {
      {
        if ($ === 0) {
          fe = console.log, ce = console.info, de = console.warn, ve = console.error, pe = console.group, he = console.groupCollapsed, ge = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: be,
            writable: !0
          };
          Object.defineProperties(console, {
            info: e,
            log: e,
            warn: e,
            error: e,
            group: e,
            groupCollapsed: e,
            groupEnd: e
          });
        }
        $++;
      }
    }
    function Ne() {
      {
        if ($--, $ === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: S({}, e, {
              value: fe
            }),
            info: S({}, e, {
              value: ce
            }),
            warn: S({}, e, {
              value: de
            }),
            error: S({}, e, {
              value: ve
            }),
            group: S({}, e, {
              value: pe
            }),
            groupCollapsed: S({}, e, {
              value: he
            }),
            groupEnd: S({}, e, {
              value: ge
            })
          });
        }
        $ < 0 && c("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var X = T.ReactCurrentDispatcher, Z;
    function M(e, r, t) {
      {
        if (Z === void 0)
          try {
            throw Error();
          } catch (o) {
            var n = o.stack.trim().match(/\n( *(at )?)/);
            Z = n && n[1] || "";
          }
        return `
` + Z + e;
      }
    }
    var Q = !1, V;
    {
      var Ue = typeof WeakMap == "function" ? WeakMap : Map;
      V = new Ue();
    }
    function Ee(e, r) {
      if (!e || Q)
        return "";
      {
        var t = V.get(e);
        if (t !== void 0)
          return t;
      }
      var n;
      Q = !0;
      var o = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var u;
      u = X.current, X.current = null, Le();
      try {
        if (r) {
          var i = function() {
            throw Error();
          };
          if (Object.defineProperty(i.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(i, []);
            } catch (O) {
              n = O;
            }
            Reflect.construct(e, [], i);
          } else {
            try {
              i.call();
            } catch (O) {
              n = O;
            }
            e.call(i.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (O) {
            n = O;
          }
          e();
        }
      } catch (O) {
        if (O && n && typeof O.stack == "string") {
          for (var a = O.stack.split(`
`), p = n.stack.split(`
`), f = a.length - 1, d = p.length - 1; f >= 1 && d >= 0 && a[f] !== p[d]; )
            d--;
          for (; f >= 1 && d >= 0; f--, d--)
            if (a[f] !== p[d]) {
              if (f !== 1 || d !== 1)
                do
                  if (f--, d--, d < 0 || a[f] !== p[d]) {
                    var E = `
` + a[f].replace(" at new ", " at ");
                    return e.displayName && E.includes("<anonymous>") && (E = E.replace("<anonymous>", e.displayName)), typeof e == "function" && V.set(e, E), E;
                  }
                while (f >= 1 && d >= 0);
              break;
            }
        }
      } finally {
        Q = !1, X.current = u, Ne(), Error.prepareStackTrace = o;
      }
      var F = e ? e.displayName || e.name : "", ke = F ? M(F) : "";
      return typeof e == "function" && V.set(e, ke), ke;
    }
    function Me(e, r, t) {
      return Ee(e, !1);
    }
    function Ve(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function B(e, r, t) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return Ee(e, Ve(e));
      if (typeof e == "string")
        return M(e);
      switch (e) {
        case R:
          return M("Suspense");
        case v:
          return M("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case s:
            return Me(e.render);
          case b:
            return B(e.type, r, t);
          case m: {
            var n = e, o = n._payload, u = n._init;
            try {
              return B(u(o), r, t);
            } catch {
            }
          }
        }
      return "";
    }
    var q = Object.prototype.hasOwnProperty, _e = {}, ye = T.ReactDebugCurrentFrame;
    function J(e) {
      if (e) {
        var r = e._owner, t = B(e.type, e._source, r ? r.type : null);
        ye.setExtraStackFrame(t);
      } else
        ye.setExtraStackFrame(null);
    }
    function Be(e, r, t, n, o) {
      {
        var u = Function.call.bind(q);
        for (var i in e)
          if (u(e, i)) {
            var a = void 0;
            try {
              if (typeof e[i] != "function") {
                var p = Error((n || "React class") + ": " + t + " type `" + i + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[i] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw p.name = "Invariant Violation", p;
              }
              a = e[i](r, i, n, t, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (f) {
              a = f;
            }
            a && !(a instanceof Error) && (J(o), c("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", n || "React class", t, i, typeof a), J(null)), a instanceof Error && !(a.message in _e) && (_e[a.message] = !0, J(o), c("Failed %s type: %s", t, a.message), J(null));
          }
      }
    }
    var qe = Array.isArray;
    function ee(e) {
      return qe(e);
    }
    function Je(e) {
      {
        var r = typeof Symbol == "function" && Symbol.toStringTag, t = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return t;
      }
    }
    function Ge(e) {
      try {
        return Re(e), !1;
      } catch {
        return !0;
      }
    }
    function Re(e) {
      return "" + e;
    }
    function me(e) {
      if (Ge(e))
        return c("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Je(e)), Re(e);
    }
    var I = T.ReactCurrentOwner, Ke = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Te, we, re;
    re = {};
    function ze(e) {
      if (q.call(e, "ref")) {
        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function He(e) {
      if (q.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function Xe(e, r) {
      if (typeof e.ref == "string" && I.current && r && I.current.stateNode !== r) {
        var t = w(I.current.type);
        re[t] || (c('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', w(I.current.type), e.ref), re[t] = !0);
      }
    }
    function Ze(e, r) {
      {
        var t = function() {
          Te || (Te = !0, c("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: t,
          configurable: !0
        });
      }
    }
    function Qe(e, r) {
      {
        var t = function() {
          we || (we = !0, c("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: t,
          configurable: !0
        });
      }
    }
    var er = function(e, r, t, n, o, u, i) {
      var a = {
        $$typeof: l,
        type: e,
        key: r,
        ref: t,
        props: i,
        _owner: u
      };
      return a._store = {}, Object.defineProperty(a._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(a, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: n
      }), Object.defineProperty(a, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: o
      }), Object.freeze && (Object.freeze(a.props), Object.freeze(a)), a;
    };
    function rr(e, r, t, n, o) {
      {
        var u, i = {}, a = null, p = null;
        t !== void 0 && (me(t), a = "" + t), He(r) && (me(r.key), a = "" + r.key), ze(r) && (p = r.ref, Xe(r, o));
        for (u in r)
          q.call(r, u) && !Ke.hasOwnProperty(u) && (i[u] = r[u]);
        if (e && e.defaultProps) {
          var f = e.defaultProps;
          for (u in f)
            i[u] === void 0 && (i[u] = f[u]);
        }
        if (a || p) {
          var d = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          a && Ze(i, d), p && Qe(i, d);
        }
        return er(e, a, p, o, n, I.current, i);
      }
    }
    var te = T.ReactCurrentOwner, Oe = T.ReactDebugCurrentFrame;
    function D(e) {
      if (e) {
        var r = e._owner, t = B(e.type, e._source, r ? r.type : null);
        Oe.setExtraStackFrame(t);
      } else
        Oe.setExtraStackFrame(null);
    }
    var ne;
    ne = !1;
    function ae(e) {
      return typeof e == "object" && e !== null && e.$$typeof === l;
    }
    function Ce() {
      {
        if (te.current) {
          var e = w(te.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function tr(e) {
      {
        if (e !== void 0) {
          var r = e.fileName.replace(/^.*[\\\/]/, ""), t = e.lineNumber;
          return `

Check your code at ` + r + ":" + t + ".";
        }
        return "";
      }
    }
    var Se = {};
    function nr(e) {
      {
        var r = Ce();
        if (!r) {
          var t = typeof e == "string" ? e : e.displayName || e.name;
          t && (r = `

Check the top-level render call using <` + t + ">.");
        }
        return r;
      }
    }
    function Pe(e, r) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var t = nr(r);
        if (Se[t])
          return;
        Se[t] = !0;
        var n = "";
        e && e._owner && e._owner !== te.current && (n = " It was passed a child from " + w(e._owner.type) + "."), D(e), c('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', t, n), D(null);
      }
    }
    function xe(e, r) {
      {
        if (typeof e != "object")
          return;
        if (ee(e))
          for (var t = 0; t < e.length; t++) {
            var n = e[t];
            ae(n) && Pe(n, r);
          }
        else if (ae(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var o = K(e);
          if (typeof o == "function" && o !== e.entries)
            for (var u = o.call(e), i; !(i = u.next()).done; )
              ae(i.value) && Pe(i.value, r);
        }
      }
    }
    function ar(e) {
      {
        var r = e.type;
        if (r == null || typeof r == "string")
          return;
        var t;
        if (typeof r == "function")
          t = r.propTypes;
        else if (typeof r == "object" && (r.$$typeof === s || r.$$typeof === b))
          t = r.propTypes;
        else
          return;
        if (t) {
          var n = w(r);
          Be(t, e.props, "prop", n, e);
        } else if (r.PropTypes !== void 0 && !ne) {
          ne = !0;
          var o = w(r);
          c("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", o || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && c("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function ir(e) {
      {
        for (var r = Object.keys(e.props), t = 0; t < r.length; t++) {
          var n = r[t];
          if (n !== "children" && n !== "key") {
            D(e), c("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", n), D(null);
            break;
          }
        }
        e.ref !== null && (D(e), c("Invalid attribute `ref` supplied to `React.Fragment`."), D(null));
      }
    }
    function je(e, r, t, n, o, u) {
      {
        var i = We(e);
        if (!i) {
          var a = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (a += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var p = tr(o);
          p ? a += p : a += Ce();
          var f;
          e === null ? f = "null" : ee(e) ? f = "array" : e !== void 0 && e.$$typeof === l ? (f = "<" + (w(e.type) || "Unknown") + " />", a = " Did you accidentally export a JSX literal instead of a component?") : f = typeof e, c("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", f, a);
        }
        var d = rr(e, r, t, o, u);
        if (d == null)
          return d;
        if (i) {
          var E = r.children;
          if (E !== void 0)
            if (n)
              if (ee(E)) {
                for (var F = 0; F < E.length; F++)
                  xe(E[F], e);
                Object.freeze && Object.freeze(E);
              } else
                c("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              xe(E, e);
        }
        return e === C ? ir(d) : ar(d), d;
      }
    }
    function or(e, r, t) {
      return je(e, r, t, !0);
    }
    function ur(e, r, t) {
      return je(e, r, t, !1);
    }
    var sr = ur, lr = or;
    Y.Fragment = C, Y.jsx = sr, Y.jsxs = lr;
  }()), Y;
}
(function(_) {
  process.env.NODE_ENV === "production" ? _.exports = cr() : _.exports = dr();
})(ue);
const vr = ue.exports.Fragment, L = ue.exports.jsx, hr = ({
  icon: _ = "",
  type: l = "regular",
  size: h = "1.5x",
  width: C,
  height: P,
  className: x,
  fill: y,
  stroke: g
}) => {
  var T;
  const s = ie(null), R = ie("none"), v = ie("currentColor");
  oe(() => {
    s.current = De.get(_, l);
  }, [_, l]), s.current = De.get(_, l);
  let b = h.slice(-1) === "x" ? h.slice(0, h.length - 1) + "rem" : parseInt(h) + "px", m = {
    width: C || b,
    height: P || b
  };
  const j = (c) => Object.keys(c).reduce((k, U) => {
    const z = U.split("-").map((A, H) => H !== 0 ? A.charAt(0).toUpperCase() + A.substring(1) : A).join("");
    return k[z] = c[U], k;
  }, {}), {
    fill: N,
    stroke: G,
    ...K
  } = s.current.attributes;
  return oe(() => {
    R.current = y;
  }, [y]), R.current = y === void 0 ? N : y, oe(() => {
    v.current = g;
  }, [g]), v.current = g === void 0 ? G : g, /* @__PURE__ */ L(vr, {
    children: s.current ? /* @__PURE__ */ L("svg", {
      viewBox: "0 0 24 24",
      width: m.width,
      height: m.height,
      className: x,
      children: /* @__PURE__ */ L("g", {
        fill: R.current,
        stroke: v.current,
        ...(T = j(K)) != null ? T : {},
        children: s.current.svgPathData.map((c, k) => /* @__PURE__ */ L("path", {
          d: c
        }, s.current.name + k))
      })
    }) : /* @__PURE__ */ L("span", {})
  });
};
export {
  De as Library,
  hr as default
};
