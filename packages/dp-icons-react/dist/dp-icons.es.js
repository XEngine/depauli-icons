import Se, { useRef as sr, useEffect as lr } from "react";
class fr {
  constructor() {
    this.store = /* @__PURE__ */ new Map();
  }
  add(s) {
    this.store.set(`${s.name}_${s.type}`, s);
  }
  has(s) {
    return this.store.has(s);
  }
  get(s, g = "regular") {
    return s ? s && this.has(`${s}_${g}`) ? this.store.get(`${s}_${g}`) : (console.warn(`Unable to find icon : ${s} in ${g} type`), null) : null;
  }
}
const Oe = new fr();
var ee = { exports: {} }, I = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ce;
function cr() {
  if (Ce)
    return I;
  Ce = 1;
  var y = Se, s = Symbol.for("react.element"), g = Symbol.for("react.fragment"), w = Object.prototype.hasOwnProperty, S = y.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, x = { key: !0, ref: !0, __self: !0, __source: !0 };
  function b(m, c, O) {
    var d, h = {}, E = null, C = null;
    O !== void 0 && (E = "" + O), c.key !== void 0 && (E = "" + c.key), c.ref !== void 0 && (C = c.ref);
    for (d in c)
      w.call(c, d) && !x.hasOwnProperty(d) && (h[d] = c[d]);
    if (m && m.defaultProps)
      for (d in c = m.defaultProps, c)
        h[d] === void 0 && (h[d] = c[d]);
    return { $$typeof: s, type: m, key: E, ref: C, props: h, _owner: S.current };
  }
  return I.Fragment = g, I.jsx = b, I.jsxs = b, I;
}
var W = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Pe;
function dr() {
  return Pe || (Pe = 1, process.env.NODE_ENV !== "production" && function() {
    var y = Se, s = Symbol.for("react.element"), g = Symbol.for("react.portal"), w = Symbol.for("react.fragment"), S = Symbol.for("react.strict_mode"), x = Symbol.for("react.profiler"), b = Symbol.for("react.provider"), m = Symbol.for("react.context"), c = Symbol.for("react.forward_ref"), O = Symbol.for("react.suspense"), d = Symbol.for("react.suspense_list"), h = Symbol.for("react.memo"), E = Symbol.for("react.lazy"), C = Symbol.for("react.offscreen"), L = Symbol.iterator, F = "@@iterator";
    function q(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = L && e[L] || e[F];
      return typeof r == "function" ? r : null;
    }
    var j = y.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function v(e) {
      {
        for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++)
          t[n - 1] = arguments[n];
        xe("error", e, t);
      }
    }
    function xe(e, r, t) {
      {
        var n = j.ReactDebugCurrentFrame, o = n.getStackAddendum();
        o !== "" && (r += "%s", t = t.concat([o]));
        var u = t.map(function(i) {
          return String(i);
        });
        u.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, u);
      }
    }
    var je = !1, ke = !1, De = !1, Fe = !1, Ae = !1, re;
    re = Symbol.for("react.module.reference");
    function $e(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === w || e === x || Ae || e === S || e === O || e === d || Fe || e === C || je || ke || De || typeof e == "object" && e !== null && (e.$$typeof === E || e.$$typeof === h || e.$$typeof === b || e.$$typeof === m || e.$$typeof === c || e.$$typeof === re || e.getModuleId !== void 0));
    }
    function Ie(e, r, t) {
      var n = e.displayName;
      if (n)
        return n;
      var o = r.displayName || r.name || "";
      return o !== "" ? t + "(" + o + ")" : t;
    }
    function te(e) {
      return e.displayName || "Context";
    }
    function R(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && v("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case w:
          return "Fragment";
        case g:
          return "Portal";
        case x:
          return "Profiler";
        case S:
          return "StrictMode";
        case O:
          return "Suspense";
        case d:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case m:
            var r = e;
            return te(r) + ".Consumer";
          case b:
            var t = e;
            return te(t._context) + ".Provider";
          case c:
            return Ie(e, e.render, "ForwardRef");
          case h:
            var n = e.displayName || null;
            return n !== null ? n : R(e.type) || "Memo";
          case E: {
            var o = e, u = o._payload, i = o._init;
            try {
              return R(i(u));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var P = Object.assign, A = 0, ne, ae, ie, oe, ue, se, le;
    function fe() {
    }
    fe.__reactDisabledLog = !0;
    function We() {
      {
        if (A === 0) {
          ne = console.log, ae = console.info, ie = console.warn, oe = console.error, ue = console.group, se = console.groupCollapsed, le = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: fe,
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
        A++;
      }
    }
    function Ye() {
      {
        if (A--, A === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: P({}, e, {
              value: ne
            }),
            info: P({}, e, {
              value: ae
            }),
            warn: P({}, e, {
              value: ie
            }),
            error: P({}, e, {
              value: oe
            }),
            group: P({}, e, {
              value: ue
            }),
            groupCollapsed: P({}, e, {
              value: se
            }),
            groupEnd: P({}, e, {
              value: le
            })
          });
        }
        A < 0 && v("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var J = j.ReactCurrentDispatcher, G;
    function N(e, r, t) {
      {
        if (G === void 0)
          try {
            throw Error();
          } catch (o) {
            var n = o.stack.trim().match(/\n( *(at )?)/);
            G = n && n[1] || "";
          }
        return `
` + G + e;
      }
    }
    var K = !1, U;
    {
      var Le = typeof WeakMap == "function" ? WeakMap : Map;
      U = new Le();
    }
    function ce(e, r) {
      if (!e || K)
        return "";
      {
        var t = U.get(e);
        if (t !== void 0)
          return t;
      }
      var n;
      K = !0;
      var o = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var u;
      u = J.current, J.current = null, We();
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
            } catch (T) {
              n = T;
            }
            Reflect.construct(e, [], i);
          } else {
            try {
              i.call();
            } catch (T) {
              n = T;
            }
            e.call(i.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (T) {
            n = T;
          }
          e();
        }
      } catch (T) {
        if (T && n && typeof T.stack == "string") {
          for (var a = T.stack.split(`
`), p = n.stack.split(`
`), l = a.length - 1, f = p.length - 1; l >= 1 && f >= 0 && a[l] !== p[f]; )
            f--;
          for (; l >= 1 && f >= 0; l--, f--)
            if (a[l] !== p[f]) {
              if (l !== 1 || f !== 1)
                do
                  if (l--, f--, f < 0 || a[l] !== p[f]) {
                    var _ = `
` + a[l].replace(" at new ", " at ");
                    return e.displayName && _.includes("<anonymous>") && (_ = _.replace("<anonymous>", e.displayName)), typeof e == "function" && U.set(e, _), _;
                  }
                while (l >= 1 && f >= 0);
              break;
            }
        }
      } finally {
        K = !1, J.current = u, Ye(), Error.prepareStackTrace = o;
      }
      var D = e ? e.displayName || e.name : "", we = D ? N(D) : "";
      return typeof e == "function" && U.set(e, we), we;
    }
    function Ne(e, r, t) {
      return ce(e, !1);
    }
    function Ue(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function M(e, r, t) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return ce(e, Ue(e));
      if (typeof e == "string")
        return N(e);
      switch (e) {
        case O:
          return N("Suspense");
        case d:
          return N("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case c:
            return Ne(e.render);
          case h:
            return M(e.type, r, t);
          case E: {
            var n = e, o = n._payload, u = n._init;
            try {
              return M(u(o), r, t);
            } catch {
            }
          }
        }
      return "";
    }
    var V = Object.prototype.hasOwnProperty, de = {}, ve = j.ReactDebugCurrentFrame;
    function B(e) {
      if (e) {
        var r = e._owner, t = M(e.type, e._source, r ? r.type : null);
        ve.setExtraStackFrame(t);
      } else
        ve.setExtraStackFrame(null);
    }
    function Me(e, r, t, n, o) {
      {
        var u = Function.call.bind(V);
        for (var i in e)
          if (u(e, i)) {
            var a = void 0;
            try {
              if (typeof e[i] != "function") {
                var p = Error((n || "React class") + ": " + t + " type `" + i + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[i] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw p.name = "Invariant Violation", p;
              }
              a = e[i](r, i, n, t, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (l) {
              a = l;
            }
            a && !(a instanceof Error) && (B(o), v("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", n || "React class", t, i, typeof a), B(null)), a instanceof Error && !(a.message in de) && (de[a.message] = !0, B(o), v("Failed %s type: %s", t, a.message), B(null));
          }
      }
    }
    var Ve = Array.isArray;
    function z(e) {
      return Ve(e);
    }
    function Be(e) {
      {
        var r = typeof Symbol == "function" && Symbol.toStringTag, t = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return t;
      }
    }
    function qe(e) {
      try {
        return pe(e), !1;
      } catch {
        return !0;
      }
    }
    function pe(e) {
      return "" + e;
    }
    function he(e) {
      if (qe(e))
        return v("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Be(e)), pe(e);
    }
    var $ = j.ReactCurrentOwner, Je = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, ge, be, H;
    H = {};
    function Ge(e) {
      if (V.call(e, "ref")) {
        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function Ke(e) {
      if (V.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function ze(e, r) {
      if (typeof e.ref == "string" && $.current && r && $.current.stateNode !== r) {
        var t = R($.current.type);
        H[t] || (v('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', R($.current.type), e.ref), H[t] = !0);
      }
    }
    function He(e, r) {
      {
        var t = function() {
          ge || (ge = !0, v("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: t,
          configurable: !0
        });
      }
    }
    function Xe(e, r) {
      {
        var t = function() {
          be || (be = !0, v("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: t,
          configurable: !0
        });
      }
    }
    var Ze = function(e, r, t, n, o, u, i) {
      var a = {
        $$typeof: s,
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
    function Qe(e, r, t, n, o) {
      {
        var u, i = {}, a = null, p = null;
        t !== void 0 && (he(t), a = "" + t), Ke(r) && (he(r.key), a = "" + r.key), Ge(r) && (p = r.ref, ze(r, o));
        for (u in r)
          V.call(r, u) && !Je.hasOwnProperty(u) && (i[u] = r[u]);
        if (e && e.defaultProps) {
          var l = e.defaultProps;
          for (u in l)
            i[u] === void 0 && (i[u] = l[u]);
        }
        if (a || p) {
          var f = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          a && He(i, f), p && Xe(i, f);
        }
        return Ze(e, a, p, o, n, $.current, i);
      }
    }
    var X = j.ReactCurrentOwner, Ee = j.ReactDebugCurrentFrame;
    function k(e) {
      if (e) {
        var r = e._owner, t = M(e.type, e._source, r ? r.type : null);
        Ee.setExtraStackFrame(t);
      } else
        Ee.setExtraStackFrame(null);
    }
    var Z;
    Z = !1;
    function Q(e) {
      return typeof e == "object" && e !== null && e.$$typeof === s;
    }
    function _e() {
      {
        if (X.current) {
          var e = R(X.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function er(e) {
      {
        if (e !== void 0) {
          var r = e.fileName.replace(/^.*[\\\/]/, ""), t = e.lineNumber;
          return `

Check your code at ` + r + ":" + t + ".";
        }
        return "";
      }
    }
    var ye = {};
    function rr(e) {
      {
        var r = _e();
        if (!r) {
          var t = typeof e == "string" ? e : e.displayName || e.name;
          t && (r = `

Check the top-level render call using <` + t + ">.");
        }
        return r;
      }
    }
    function me(e, r) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var t = rr(r);
        if (ye[t])
          return;
        ye[t] = !0;
        var n = "";
        e && e._owner && e._owner !== X.current && (n = " It was passed a child from " + R(e._owner.type) + "."), k(e), v('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', t, n), k(null);
      }
    }
    function Re(e, r) {
      {
        if (typeof e != "object")
          return;
        if (z(e))
          for (var t = 0; t < e.length; t++) {
            var n = e[t];
            Q(n) && me(n, r);
          }
        else if (Q(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var o = q(e);
          if (typeof o == "function" && o !== e.entries)
            for (var u = o.call(e), i; !(i = u.next()).done; )
              Q(i.value) && me(i.value, r);
        }
      }
    }
    function tr(e) {
      {
        var r = e.type;
        if (r == null || typeof r == "string")
          return;
        var t;
        if (typeof r == "function")
          t = r.propTypes;
        else if (typeof r == "object" && (r.$$typeof === c || r.$$typeof === h))
          t = r.propTypes;
        else
          return;
        if (t) {
          var n = R(r);
          Me(t, e.props, "prop", n, e);
        } else if (r.PropTypes !== void 0 && !Z) {
          Z = !0;
          var o = R(r);
          v("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", o || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && v("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function nr(e) {
      {
        for (var r = Object.keys(e.props), t = 0; t < r.length; t++) {
          var n = r[t];
          if (n !== "children" && n !== "key") {
            k(e), v("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", n), k(null);
            break;
          }
        }
        e.ref !== null && (k(e), v("Invalid attribute `ref` supplied to `React.Fragment`."), k(null));
      }
    }
    function Te(e, r, t, n, o, u) {
      {
        var i = $e(e);
        if (!i) {
          var a = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (a += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var p = er(o);
          p ? a += p : a += _e();
          var l;
          e === null ? l = "null" : z(e) ? l = "array" : e !== void 0 && e.$$typeof === s ? (l = "<" + (R(e.type) || "Unknown") + " />", a = " Did you accidentally export a JSX literal instead of a component?") : l = typeof e, v("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", l, a);
        }
        var f = Qe(e, r, t, o, u);
        if (f == null)
          return f;
        if (i) {
          var _ = r.children;
          if (_ !== void 0)
            if (n)
              if (z(_)) {
                for (var D = 0; D < _.length; D++)
                  Re(_[D], e);
                Object.freeze && Object.freeze(_);
              } else
                v("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Re(_, e);
        }
        return e === w ? nr(f) : tr(f), f;
      }
    }
    function ar(e, r, t) {
      return Te(e, r, t, !0);
    }
    function ir(e, r, t) {
      return Te(e, r, t, !1);
    }
    var or = ir, ur = ar;
    W.Fragment = w, W.jsx = or, W.jsxs = ur;
  }()), W;
}
(function(y) {
  process.env.NODE_ENV === "production" ? y.exports = cr() : y.exports = dr();
})(ee);
const vr = ee.exports.Fragment, Y = ee.exports.jsx, hr = ({
  icon: y = "",
  type: s = "regular",
  size: g = "1.5x",
  width: w,
  height: S,
  className: x
}) => {
  var d;
  const b = sr(null);
  lr(() => {
    b.current = Oe.get(y, s);
  }, [y, s]), b.current = Oe.get(y, s);
  let m = g.slice(-1) === "x" ? g.slice(0, g.length - 1) + "rem" : parseInt(g) + "px", c = {
    width: w || m,
    height: S || m
  };
  const O = (h) => Object.keys(h).reduce((E, C) => {
    const L = C.split("-").map((F, q) => q !== 0 ? F.charAt(0).toUpperCase() + F.substring(1) : F).join("");
    return E[L] = h[C], E;
  }, {});
  return /* @__PURE__ */ Y(vr, {
    children: b.current ? /* @__PURE__ */ Y("svg", {
      viewBox: "0 0 24 24",
      width: c.width,
      height: c.height,
      className: x,
      children: /* @__PURE__ */ Y("g", {
        ...(d = O(b.current.attributes)) != null ? d : {},
        children: b.current.svgPathData.map((h, E) => /* @__PURE__ */ Y("path", {
          d: h
        }, b.current.name + E))
      })
    }) : /* @__PURE__ */ Y("span", {})
  });
};
export {
  Oe as Library,
  hr as default
};
