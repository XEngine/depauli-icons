var sr = Object.defineProperty;
var lr = (s, i, c) => i in s ? sr(s, i, { enumerable: !0, configurable: !0, writable: !0, value: c }) : s[i] = c;
var Re = (s, i, c) => (lr(s, typeof i != "symbol" ? i + "" : i, c), c);
import Ce, { createElement as M } from "react";
class fr {
  constructor() {
    Re(this, "store");
    this.store = /* @__PURE__ */ new Map();
  }
  add(i) {
    this.store.set(`${i.name}_${i.type}`, i);
  }
  has(i) {
    return this.store.has(i);
  }
  get(i, c = "regular") {
    if (!!i) {
      if (i && this.has(`${i}_${c}`))
        return this.store.get(`${i}_${c}`);
      console.warn(`Unable to find icon : ${i} in ${c} type`);
    }
  }
}
const cr = new fr();
var Pe = { exports: {} }, A = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Te;
function dr() {
  if (Te)
    return A;
  Te = 1;
  var s = Ce, i = Symbol.for("react.element"), c = Symbol.for("react.fragment"), y = Object.prototype.hasOwnProperty, E = s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, O = { key: !0, ref: !0, __self: !0, __source: !0 };
  function P(_, v, C) {
    var g, m = {}, S = null, I = null;
    C !== void 0 && (S = "" + C), v.key !== void 0 && (S = "" + v.key), v.ref !== void 0 && (I = v.ref);
    for (g in v)
      y.call(v, g) && !O.hasOwnProperty(g) && (m[g] = v[g]);
    if (_ && _.defaultProps)
      for (g in v = _.defaultProps, v)
        m[g] === void 0 && (m[g] = v[g]);
    return { $$typeof: i, type: _, key: S, ref: I, props: m, _owner: E.current };
  }
  return A.Fragment = c, A.jsx = P, A.jsxs = P, A;
}
var $ = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Oe;
function vr() {
  return Oe || (Oe = 1, process.env.NODE_ENV !== "production" && function() {
    var s = Ce, i = Symbol.for("react.element"), c = Symbol.for("react.portal"), y = Symbol.for("react.fragment"), E = Symbol.for("react.strict_mode"), O = Symbol.for("react.profiler"), P = Symbol.for("react.provider"), _ = Symbol.for("react.context"), v = Symbol.for("react.forward_ref"), C = Symbol.for("react.suspense"), g = Symbol.for("react.suspense_list"), m = Symbol.for("react.memo"), S = Symbol.for("react.lazy"), I = Symbol.for("react.offscreen"), X = Symbol.iterator, Se = "@@iterator";
    function we(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = X && e[X] || e[Se];
      return typeof r == "function" ? r : null;
    }
    var x = s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function p(e) {
      {
        for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++)
          t[n - 1] = arguments[n];
        xe("error", e, t);
      }
    }
    function xe(e, r, t) {
      {
        var n = x.ReactDebugCurrentFrame, u = n.getStackAddendum();
        u !== "" && (r += "%s", t = t.concat([u]));
        var l = t.map(function(o) {
          return String(o);
        });
        l.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, l);
      }
    }
    var je = !1, ke = !1, De = !1, Fe = !1, Ae = !1, Z;
    Z = Symbol.for("react.module.reference");
    function $e(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === y || e === O || Ae || e === E || e === C || e === g || Fe || e === I || je || ke || De || typeof e == "object" && e !== null && (e.$$typeof === S || e.$$typeof === m || e.$$typeof === P || e.$$typeof === _ || e.$$typeof === v || e.$$typeof === Z || e.getModuleId !== void 0));
    }
    function Ie(e, r, t) {
      var n = e.displayName;
      if (n)
        return n;
      var u = r.displayName || r.name || "";
      return u !== "" ? t + "(" + u + ")" : t;
    }
    function Q(e) {
      return e.displayName || "Context";
    }
    function R(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && p("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case y:
          return "Fragment";
        case c:
          return "Portal";
        case O:
          return "Profiler";
        case E:
          return "StrictMode";
        case C:
          return "Suspense";
        case g:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case _:
            var r = e;
            return Q(r) + ".Consumer";
          case P:
            var t = e;
            return Q(t._context) + ".Provider";
          case v:
            return Ie(e, e.render, "ForwardRef");
          case m:
            var n = e.displayName || null;
            return n !== null ? n : R(e.type) || "Memo";
          case S: {
            var u = e, l = u._payload, o = u._init;
            try {
              return R(o(l));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var w = Object.assign, D = 0, ee, re, te, ne, ae, oe, ie;
    function ue() {
    }
    ue.__reactDisabledLog = !0;
    function We() {
      {
        if (D === 0) {
          ee = console.log, re = console.info, te = console.warn, ne = console.error, ae = console.group, oe = console.groupCollapsed, ie = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: ue,
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
        D++;
      }
    }
    function Ye() {
      {
        if (D--, D === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: w({}, e, {
              value: ee
            }),
            info: w({}, e, {
              value: re
            }),
            warn: w({}, e, {
              value: te
            }),
            error: w({}, e, {
              value: ne
            }),
            group: w({}, e, {
              value: ae
            }),
            groupCollapsed: w({}, e, {
              value: oe
            }),
            groupEnd: w({}, e, {
              value: ie
            })
          });
        }
        D < 0 && p("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var V = x.ReactCurrentDispatcher, B;
    function W(e, r, t) {
      {
        if (B === void 0)
          try {
            throw Error();
          } catch (u) {
            var n = u.stack.trim().match(/\n( *(at )?)/);
            B = n && n[1] || "";
          }
        return `
` + B + e;
      }
    }
    var q = !1, Y;
    {
      var Le = typeof WeakMap == "function" ? WeakMap : Map;
      Y = new Le();
    }
    function se(e, r) {
      if (!e || q)
        return "";
      {
        var t = Y.get(e);
        if (t !== void 0)
          return t;
      }
      var n;
      q = !0;
      var u = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var l;
      l = V.current, V.current = null, We();
      try {
        if (r) {
          var o = function() {
            throw Error();
          };
          if (Object.defineProperty(o.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(o, []);
            } catch (T) {
              n = T;
            }
            Reflect.construct(e, [], o);
          } else {
            try {
              o.call();
            } catch (T) {
              n = T;
            }
            e.call(o.prototype);
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
`), b = n.stack.split(`
`), f = a.length - 1, d = b.length - 1; f >= 1 && d >= 0 && a[f] !== b[d]; )
            d--;
          for (; f >= 1 && d >= 0; f--, d--)
            if (a[f] !== b[d]) {
              if (f !== 1 || d !== 1)
                do
                  if (f--, d--, d < 0 || a[f] !== b[d]) {
                    var h = `
` + a[f].replace(" at new ", " at ");
                    return e.displayName && h.includes("<anonymous>") && (h = h.replace("<anonymous>", e.displayName)), typeof e == "function" && Y.set(e, h), h;
                  }
                while (f >= 1 && d >= 0);
              break;
            }
        }
      } finally {
        q = !1, V.current = l, Ye(), Error.prepareStackTrace = u;
      }
      var k = e ? e.displayName || e.name : "", me = k ? W(k) : "";
      return typeof e == "function" && Y.set(e, me), me;
    }
    function Ne(e, r, t) {
      return se(e, !1);
    }
    function Ue(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function L(e, r, t) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return se(e, Ue(e));
      if (typeof e == "string")
        return W(e);
      switch (e) {
        case C:
          return W("Suspense");
        case g:
          return W("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case v:
            return Ne(e.render);
          case m:
            return L(e.type, r, t);
          case S: {
            var n = e, u = n._payload, l = n._init;
            try {
              return L(l(u), r, t);
            } catch {
            }
          }
        }
      return "";
    }
    var N = Object.prototype.hasOwnProperty, le = {}, fe = x.ReactDebugCurrentFrame;
    function U(e) {
      if (e) {
        var r = e._owner, t = L(e.type, e._source, r ? r.type : null);
        fe.setExtraStackFrame(t);
      } else
        fe.setExtraStackFrame(null);
    }
    function Me(e, r, t, n, u) {
      {
        var l = Function.call.bind(N);
        for (var o in e)
          if (l(e, o)) {
            var a = void 0;
            try {
              if (typeof e[o] != "function") {
                var b = Error((n || "React class") + ": " + t + " type `" + o + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[o] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw b.name = "Invariant Violation", b;
              }
              a = e[o](r, o, n, t, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (f) {
              a = f;
            }
            a && !(a instanceof Error) && (U(u), p("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", n || "React class", t, o, typeof a), U(null)), a instanceof Error && !(a.message in le) && (le[a.message] = !0, U(u), p("Failed %s type: %s", t, a.message), U(null));
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
        return ce(e), !1;
      } catch {
        return !0;
      }
    }
    function ce(e) {
      return "" + e;
    }
    function de(e) {
      if (qe(e))
        return p("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Be(e)), ce(e);
    }
    var F = x.ReactCurrentOwner, ze = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, ve, pe, J;
    J = {};
    function Je(e) {
      if (N.call(e, "ref")) {
        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function Ge(e) {
      if (N.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function Ke(e, r) {
      if (typeof e.ref == "string" && F.current && r && F.current.stateNode !== r) {
        var t = R(F.current.type);
        J[t] || (p('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', R(F.current.type), e.ref), J[t] = !0);
      }
    }
    function He(e, r) {
      {
        var t = function() {
          ve || (ve = !0, p("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
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
          pe || (pe = !0, p("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: t,
          configurable: !0
        });
      }
    }
    var Ze = function(e, r, t, n, u, l, o) {
      var a = {
        $$typeof: i,
        type: e,
        key: r,
        ref: t,
        props: o,
        _owner: l
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
        value: u
      }), Object.freeze && (Object.freeze(a.props), Object.freeze(a)), a;
    };
    function Qe(e, r, t, n, u) {
      {
        var l, o = {}, a = null, b = null;
        t !== void 0 && (de(t), a = "" + t), Ge(r) && (de(r.key), a = "" + r.key), Je(r) && (b = r.ref, Ke(r, u));
        for (l in r)
          N.call(r, l) && !ze.hasOwnProperty(l) && (o[l] = r[l]);
        if (e && e.defaultProps) {
          var f = e.defaultProps;
          for (l in f)
            o[l] === void 0 && (o[l] = f[l]);
        }
        if (a || b) {
          var d = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          a && He(o, d), b && Xe(o, d);
        }
        return Ze(e, a, b, u, n, F.current, o);
      }
    }
    var G = x.ReactCurrentOwner, be = x.ReactDebugCurrentFrame;
    function j(e) {
      if (e) {
        var r = e._owner, t = L(e.type, e._source, r ? r.type : null);
        be.setExtraStackFrame(t);
      } else
        be.setExtraStackFrame(null);
    }
    var K;
    K = !1;
    function H(e) {
      return typeof e == "object" && e !== null && e.$$typeof === i;
    }
    function ge() {
      {
        if (G.current) {
          var e = R(G.current.type);
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
        var r = ge();
        if (!r) {
          var t = typeof e == "string" ? e : e.displayName || e.name;
          t && (r = `

Check the top-level render call using <` + t + ">.");
        }
        return r;
      }
    }
    function he(e, r) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var t = rr(r);
        if (ye[t])
          return;
        ye[t] = !0;
        var n = "";
        e && e._owner && e._owner !== G.current && (n = " It was passed a child from " + R(e._owner.type) + "."), j(e), p('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', t, n), j(null);
      }
    }
    function Ee(e, r) {
      {
        if (typeof e != "object")
          return;
        if (z(e))
          for (var t = 0; t < e.length; t++) {
            var n = e[t];
            H(n) && he(n, r);
          }
        else if (H(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var u = we(e);
          if (typeof u == "function" && u !== e.entries)
            for (var l = u.call(e), o; !(o = l.next()).done; )
              H(o.value) && he(o.value, r);
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
        else if (typeof r == "object" && (r.$$typeof === v || r.$$typeof === m))
          t = r.propTypes;
        else
          return;
        if (t) {
          var n = R(r);
          Me(t, e.props, "prop", n, e);
        } else if (r.PropTypes !== void 0 && !K) {
          K = !0;
          var u = R(r);
          p("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", u || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && p("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function nr(e) {
      {
        for (var r = Object.keys(e.props), t = 0; t < r.length; t++) {
          var n = r[t];
          if (n !== "children" && n !== "key") {
            j(e), p("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", n), j(null);
            break;
          }
        }
        e.ref !== null && (j(e), p("Invalid attribute `ref` supplied to `React.Fragment`."), j(null));
      }
    }
    function _e(e, r, t, n, u, l) {
      {
        var o = $e(e);
        if (!o) {
          var a = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (a += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var b = er(u);
          b ? a += b : a += ge();
          var f;
          e === null ? f = "null" : z(e) ? f = "array" : e !== void 0 && e.$$typeof === i ? (f = "<" + (R(e.type) || "Unknown") + " />", a = " Did you accidentally export a JSX literal instead of a component?") : f = typeof e, p("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", f, a);
        }
        var d = Qe(e, r, t, u, l);
        if (d == null)
          return d;
        if (o) {
          var h = r.children;
          if (h !== void 0)
            if (n)
              if (z(h)) {
                for (var k = 0; k < h.length; k++)
                  Ee(h[k], e);
                Object.freeze && Object.freeze(h);
              } else
                p("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Ee(h, e);
        }
        return e === y ? nr(d) : tr(d), d;
      }
    }
    function ar(e, r, t) {
      return _e(e, r, t, !0);
    }
    function or(e, r, t) {
      return _e(e, r, t, !1);
    }
    var ir = or, ur = ar;
    $.Fragment = y, $.jsx = ir, $.jsxs = ur;
  }()), $;
}
(function(s) {
  process.env.NODE_ENV === "production" ? s.exports = dr() : s.exports = vr();
})(Pe);
const pr = Pe.exports.jsx, br = (s) => Object.keys(s).reduce((i, c) => {
  const y = c.split("-").map((E, O) => O !== 0 ? E.charAt(0).toUpperCase() + E.substring(1) : E).join("");
  return i[y] = s[c], i;
}, {}), gr = (s) => s.slice(-1) === "x" ? s.slice(0, s.length - 1) + "rem" : parseInt(s) + "px", yr = ({
  icon: s,
  size: i = "1.5x",
  width: c,
  height: y,
  fill: E,
  stroke: O,
  ...P
}) => {
  const _ = gr(i);
  return M("svg", {
    viewBox: "0 0 24 24",
    width: c != null ? c : _,
    height: y != null ? y : _,
    ...P
  }, M("g", {
    ...br(s.attributes),
    stroke: O || s.attributes.stroke,
    fill: E || s.attributes.fill
  }, s.svgPathData.map((v, C) => M("path", {
    key: C,
    d: v
  }))));
}, _r = (s) => {
  const i = cr.get(s.icon, s.type);
  return i ? M(yr, {
    ...s,
    icon: i
  }) : /* @__PURE__ */ pr("span", {
    children: "?"
  });
};
export {
  cr as Library,
  _r as default
};
