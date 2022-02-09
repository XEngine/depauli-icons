'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _mergeJSXProps = require('@vue/babel-helper-vue-jsx-merge-props');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var _mergeJSXProps__default = /*#__PURE__*/_interopDefaultLegacy(_mergeJSXProps);

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

var Library = /*#__PURE__*/function () {
  function Library() {
    _classCallCheck(this, Library);

    this.store = {};
  }

  _createClass(Library, [{
    key: "add",
    value: function add(icon) {
      this.store[icon.name] = icon;
    }
  }, {
    key: "addRange",
    value: function addRange(icons) {
      var _this = this;

      icons.forEach(function (icon) {
        _this.store[icon.name] = icon;
      });
    }
  }, {
    key: "has",
    value: function has(name) {
      return !!this.store[name];
    }
  }, {
    key: "get",
    value: function get(name) {
      if (this.has(name)) {
        return this.store[name];
      }

      throw new Error("Unable to find icon : ".concat(name));
    }
  }]);

  return Library;
}();

var Library$1 = new Library();

//

var script = {
    name: 'DpIcon',
    props: {
        icon: {
            type: String,
            required: true,

        },
        size: {
            type: String,
            default: "24",
            required: false
        }
    },
    computed: {
        getIcon() {
            return Library$1.get(this.icon)
        }
    }
};

function normalizeComponent(template, style, script, scopeId, isFunctionalTemplate, moduleIdentifier
/* server only */
, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
  if (typeof shadowMode !== 'boolean') {
    createInjectorSSR = createInjector;
    createInjector = shadowMode;
    shadowMode = false;
  } // Vue.extend constructor export interop.


  const options = typeof script === 'function' ? script.options : script; // render functions

  if (template && template.render) {
    options.render = template.render;
    options.staticRenderFns = template.staticRenderFns;
    options._compiled = true; // functional template

    if (isFunctionalTemplate) {
      options.functional = true;
    }
  } // scopedId


  if (scopeId) {
    options._scopeId = scopeId;
  }

  let hook;

  if (moduleIdentifier) {
    // server build
    hook = function (context) {
      // 2.3 injection
      context = context || // cached call
      this.$vnode && this.$vnode.ssrContext || // stateful
      this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext; // functional
      // 2.2 with runInNewContext: true

      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__;
      } // inject component styles


      if (style) {
        style.call(this, createInjectorSSR(context));
      } // register component module identifier for async chunk inference


      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier);
      }
    }; // used by ssr in case component is cached and beforeCreate
    // never gets called


    options._ssrRegister = hook;
  } else if (style) {
    hook = shadowMode ? function (context) {
      style.call(this, createInjectorShadow(context, this.$root.$options.shadowRoot));
    } : function (context) {
      style.call(this, createInjector(context));
    };
  }

  if (hook) {
    if (options.functional) {
      // register for functional component in vue file
      const originalRender = options.render;

      options.render = function renderWithStyleInjection(h, context) {
        hook.call(context);
        return originalRender(h, context);
      };
    } else {
      // inject component registration as beforeCreate hook
      const existing = options.beforeCreate;
      options.beforeCreate = existing ? [].concat(existing, hook) : [hook];
    }
  }

  return script;
}

/* script */
const __vue_script__ = script;

/* template */
var __vue_render__ = function () {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(_vm.getIcon, { tag: "component", attrs: { size: _vm.size } })
};
var __vue_staticRenderFns__ = [];
__vue_render__._withStripped = true;

  /* style */
  const __vue_inject_styles__ = undefined;
  /* scoped */
  const __vue_scope_id__ = undefined;
  /* module identifier */
  const __vue_module_identifier__ = undefined;
  /* functional template */
  const __vue_is_functional_template__ = false;
  /* style inject */
  
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  const __vue_component__ = /*#__PURE__*/normalizeComponent(
    { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
    __vue_inject_styles__,
    __vue_script__,
    __vue_scope_id__,
    __vue_is_functional_template__,
    __vue_module_identifier__,
    false,
    undefined,
    undefined,
    undefined
  );

var Add = {
  name: 'add',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps__default["default"]([{
      "attrs": {
        "width": "24",
        "height": "24",
        "viewBox": "0 0 24 24",
        "fill": "none",
        "xmlns": "http://www.w3.org/2000/svg"
      }
    }, ctx.data]), [h("path", {
      "attrs": {
        "d": "M0.75 12H23.25",
        "stroke": "currentColor",
        "stroke-width": "1.5",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      }
    }), h("path", {
      "attrs": {
        "d": "M12 0.75V23.25",
        "stroke": "currentColor",
        "stroke-width": "1.5",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      }
    })]);
  }
};

var Advence = {
  name: 'advence',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps__default["default"]([{
      "attrs": {
        "width": "24",
        "height": "24",
        "viewBox": "0 0 24 24",
        "fill": "none",
        "xmlns": "http://www.w3.org/2000/svg"
      }
    }, ctx.data]), [h("path", {
      "attrs": {
        "d": "M13.8929 12.75H20.6429L21.1139 13.542C21.2196 13.7006 21.276 13.8869 21.276 14.0775C21.276 14.2681 21.2196 14.4544 21.1139 14.613L20.8139 15.06C20.7196 15.2016 20.6643 15.3656 20.6538 15.5354C20.6433 15.7052 20.6778 15.8748 20.7539 16.027L21.2539 17.027C21.321 17.1611 21.3559 17.309 21.3559 17.459C21.3559 17.609 21.321 17.7569 21.2539 17.891L20.683 19.032C20.5688 19.2611 20.5501 19.5261 20.6309 19.769L20.7979 20.269C20.855 20.439 20.8634 20.6216 20.8222 20.7962C20.781 20.9708 20.6919 21.1303 20.5649 21.257L19.1429 22.5H12.3729C12.0047 22.4999 11.6398 22.5702 11.2979 22.707L9.39795 23.25",
        "stroke": "currentColor",
        "stroke-width": "1.5",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      }
    }), h("path", {
      "attrs": {
        "d": "M2.64294 17.457L5.88494 16.241C6.28721 16.0892 6.62744 15.8077 6.85194 15.441L8.93694 10.619C9.15585 10.2631 9.44924 9.95876 9.79694 9.72701L10.5229 9.242",
        "stroke": "currentColor",
        "stroke-width": "1.5",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      }
    }), h("path", {
      "attrs": {
        "d": "M10.9461 12.205L9.40005 1.373C9.3887 1.29565 9.39415 1.21676 9.41604 1.1417C9.43793 1.06665 9.47574 0.997194 9.52689 0.93807C9.57804 0.878946 9.64134 0.831542 9.71246 0.799087C9.78359 0.766633 9.86087 0.74989 9.93905 0.750001H17.4911",
        "stroke": "currentColor",
        "stroke-width": "1.5",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      }
    }), h("path", {
      "attrs": {
        "d": "M14.1621 12.75L13.3161 4.341C13.3086 4.27103 13.316 4.20027 13.3377 4.13335C13.3595 4.06643 13.3952 4.00486 13.4424 3.95266C13.4895 3.90046 13.5472 3.85881 13.6116 3.83044C13.676 3.80206 13.7457 3.7876 13.8161 3.788H20.7161C20.7887 3.78713 20.8607 3.80212 20.927 3.83191C20.9933 3.86171 21.0523 3.9056 21.0999 3.96052C21.1475 4.01545 21.1825 4.08009 21.2026 4.14995C21.2227 4.2198 21.2272 4.29319 21.2161 4.365L19.9581 12.75",
        "stroke": "currentColor",
        "stroke-width": "1.5",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      }
    }), h("path", {
      "attrs": {
        "d": "M17.088 8.621C17.162 8.62101 17.2344 8.6429 17.2959 8.68393C17.3575 8.72496 17.4056 8.7833 17.4341 8.85159C17.4626 8.91988 17.4702 8.99507 17.4561 9.0677C17.4419 9.14033 17.4066 9.20716 17.3546 9.25976C17.3025 9.31236 17.2361 9.34838 17.1636 9.3633C17.0911 9.37822 17.0158 9.37136 16.9473 9.34359C16.8787 9.31582 16.8198 9.26838 16.7781 9.20724C16.7365 9.1461 16.7138 9.07399 16.713 9C16.713 8.90055 16.7525 8.80516 16.8228 8.73484C16.8932 8.66451 16.9886 8.625 17.088 8.625",
        "stroke": "currentColor",
        "stroke-width": "1.5",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      }
    })]);
  }
};

var ArrowDown = {
  name: 'arrow-down',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps__default["default"]([{
      "attrs": {
        "width": "24",
        "height": "24",
        "viewBox": "0 0 24 24",
        "fill": "none",
        "xmlns": "http://www.w3.org/2000/svg"
      }
    }, ctx.data]), [h("g", {
      "attrs": {
        "clip-path": "url(#clip0)"
      }
    }, [h("path", {
      "attrs": {
        "d": "M12 19.5C11.6729 19.5004 11.3495 19.431 11.0513 19.2965C10.7532 19.162 10.4871 18.9655 10.271 18.72L0.459956 7.568C0.149866 7.19846 -0.00333413 6.72225 0.0331156 6.24122C0.0695652 5.76018 0.292771 5.3125 0.655006 4.9939C1.01724 4.67529 1.48975 4.51105 1.9715 4.5363C2.45326 4.56155 2.90601 4.77428 3.23296 5.129L11.812 14.881C11.8354 14.9078 11.8643 14.9292 11.8968 14.9439C11.9292 14.9586 11.9644 14.9662 12 14.9662C12.0356 14.9662 12.0707 14.9586 12.1032 14.9439C12.1356 14.9292 12.1645 14.9078 12.188 14.881L20.767 5.129C20.9252 4.94043 21.1195 4.78539 21.3385 4.67299C21.5575 4.5606 21.7968 4.49312 22.0423 4.47452C22.2877 4.45592 22.5345 4.48657 22.7679 4.56469C23.0013 4.6428 23.2168 4.76678 23.4017 4.92936C23.5865 5.09194 23.737 5.28983 23.8443 5.5114C23.9515 5.73297 24.0134 5.97374 24.0263 6.21957C24.0392 6.4654 24.0028 6.71133 23.9193 6.94289C23.8358 7.17446 23.7068 7.38699 23.54 7.568L13.732 18.716C13.5154 18.9621 13.249 19.1593 12.9504 19.2944C12.6517 19.4296 12.3278 19.4997 12 19.5V19.5Z",
        "fill": "currentColor"
      }
    })]), h("defs", [h("clipPath", {
      "attrs": {
        "id": "clip0"
      }
    }, [h("rect", {
      "attrs": {
        "width": "24",
        "height": "24",
        "fill": "currentColor"
      }
    })])])]);
  }
};

var ArrowLeft = {
  name: 'arrow-left',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps__default["default"]([{
      "attrs": {
        "width": "24",
        "height": "24",
        "viewBox": "0 0 24 24",
        "fill": "none",
        "xmlns": "http://www.w3.org/2000/svg"
      }
    }, ctx.data]), [h("g", {
      "attrs": {
        "clip-path": "url(#clip0)"
      }
    }, [h("path", {
      "attrs": {
        "d": "M4.5 12C4.4996 11.6729 4.569 11.3495 4.7035 11.0513C4.838 10.7532 5.0345 10.4871 5.28 10.271L16.432 0.459956C16.8015 0.149866 17.2778 -0.00333427 17.7588 0.0331155C18.2398 0.0695651 18.6875 0.292771 19.0061 0.655006C19.3247 1.01724 19.489 1.48975 19.4637 1.9715C19.4385 2.45326 19.2257 2.90601 18.871 3.23296L9.119 11.812C9.0922 11.8354 9.0708 11.8643 9.0561 11.8968C9.0414 11.9292 9.0338 11.9644 9.0338 12C9.0338 12.0356 9.0414 12.0707 9.0561 12.1032C9.0708 12.1356 9.0922 12.1645 9.119 12.188L18.871 20.767C19.0596 20.9252 19.2146 21.1195 19.327 21.3385C19.4394 21.5575 19.5069 21.7968 19.5255 22.0423C19.5441 22.2877 19.5134 22.5345 19.4353 22.7679C19.3572 23.0013 19.2332 23.2168 19.0706 23.4017C18.9081 23.5865 18.7102 23.737 18.4886 23.8443C18.267 23.9515 18.0263 24.0134 17.7804 24.0263C17.5346 24.0392 17.2887 24.0028 17.0571 23.9193C16.8255 23.8358 16.613 23.7068 16.432 23.54L5.284 13.732C5.0379 13.5154 4.8407 13.249 4.7056 12.9504C4.5704 12.6517 4.5003 12.3278 4.5 12Z",
        "fill": "currentColor"
      }
    })]), h("defs", [h("clipPath", {
      "attrs": {
        "id": "clip0"
      }
    }, [h("rect", {
      "attrs": {
        "width": "24",
        "height": "24",
        "fill": "currentColor"
      }
    })])])]);
  }
};

var ArrowRight = {
  name: 'arrow-right',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps__default["default"]([{
      "attrs": {
        "width": "24",
        "height": "24",
        "viewBox": "0 0 24 24",
        "fill": "none",
        "xmlns": "http://www.w3.org/2000/svg"
      }
    }, ctx.data]), [h("g", {
      "attrs": {
        "clip-path": "url(#clip0)"
      }
    }, [h("path", {
      "attrs": {
        "d": "M19.5 12C19.5004 12.3271 19.431 12.6505 19.2965 12.9487C19.162 13.2468 18.9655 13.5129 18.72 13.729L7.568 23.54C7.19846 23.8501 6.72225 24.0033 6.24122 23.9669C5.76018 23.9304 5.3125 23.7072 4.9939 23.345C4.67529 22.9828 4.51105 22.5102 4.5363 22.0285C4.56155 21.5467 4.77428 21.094 5.129 20.767L14.881 12.188C14.9078 12.1646 14.9292 12.1357 14.9439 12.1032C14.9586 12.0708 14.9662 12.0356 14.9662 12C14.9662 11.9644 14.9586 11.9293 14.9439 11.8968C14.9292 11.8644 14.9078 11.8355 14.881 11.812L5.129 3.233C4.94043 3.0748 4.78539 2.8805 4.67299 2.6615C4.5606 2.4425 4.49312 2.2032 4.47452 1.9577C4.45592 1.7123 4.48657 1.4655 4.56469 1.2321C4.6428 0.9987 4.76678 0.783201 4.92936 0.598301C5.09194 0.413501 5.28983 0.263001 5.5114 0.155701C5.73297 0.0485006 5.97374 -0.0134005 6.21957 -0.0263005C6.4654 -0.0392005 6.71133 -0.00280018 6.94289 0.0806998C7.17446 0.1642 7.38699 0.293199 7.568 0.459999L18.716 10.268C18.9621 10.4846 19.1593 10.751 19.2944 11.0496C19.4296 11.3483 19.4997 11.6722 19.5 12Z",
        "fill": "currentColor"
      }
    })]), h("defs", [h("clipPath", {
      "attrs": {
        "id": "clip0"
      }
    }, [h("rect", {
      "attrs": {
        "width": "24",
        "height": "24",
        "fill": "currentColor"
      }
    })])])]);
  }
};

var ArrowUp = {
  name: 'arrow-up',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps__default["default"]([{
      "attrs": {
        "width": "24",
        "height": "24",
        "viewBox": "0 0 24 24",
        "fill": "none",
        "xmlns": "http://www.w3.org/2000/svg"
      }
    }, ctx.data]), [h("g", {
      "attrs": {
        "clip-path": "url(#clip0)"
      }
    }, [h("path", {
      "attrs": {
        "d": "M12 4.5C12.3271 4.4996 12.6505 4.569 12.9487 4.7035C13.2468 4.838 13.5129 5.0345 13.729 5.28L23.54 16.432C23.8501 16.8015 24.0033 17.2778 23.9669 17.7588C23.9304 18.2398 23.7072 18.6875 23.345 19.0061C22.9828 19.3247 22.5102 19.489 22.0285 19.4637C21.5467 19.4385 21.094 19.2257 20.767 18.871L12.188 9.119C12.1646 9.0922 12.1357 9.0708 12.1032 9.0561C12.0708 9.0414 12.0356 9.0338 12 9.0338C11.9644 9.0338 11.9293 9.0414 11.8968 9.0561C11.8644 9.0708 11.8355 9.0922 11.812 9.119L3.233 18.871C3.0748 19.0596 2.8805 19.2146 2.6615 19.327C2.4425 19.4394 2.2032 19.5069 1.9577 19.5255C1.7123 19.5441 1.4655 19.5134 1.2321 19.4353C0.9987 19.3572 0.783201 19.2332 0.598301 19.0706C0.413501 18.9081 0.263001 18.7102 0.155701 18.4886C0.0485008 18.267 -0.0134003 18.0263 -0.0263003 17.7804C-0.0392003 17.5346 -0.00279988 17.2887 0.0807001 17.0571C0.1642 16.8255 0.293199 16.613 0.459999 16.432L10.268 5.284C10.4846 5.0379 10.751 4.8407 11.0496 4.7056C11.3483 4.5704 11.6722 4.5003 12 4.5Z",
        "fill": "currentColor"
      }
    })]), h("defs", [h("clipPath", {
      "attrs": {
        "id": "clip0"
      }
    }, [h("rect", {
      "attrs": {
        "width": "24",
        "height": "24",
        "fill": "currentColor"
      }
    })])])]);
  }
};

var Autumn = {
  name: 'autumn',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps__default["default"]([{
      "attrs": {
        "width": "24",
        "height": "24",
        "viewBox": "0 0 24 24",
        "fill": "none",
        "xmlns": "http://www.w3.org/2000/svg"
      }
    }, ctx.data]), [h("g", {
      "attrs": {
        "clip-path": "url(#clip0)"
      }
    }, [h("path", {
      "attrs": {
        "d": "M14.582 20.754C14.582 20.754 15.802 23.249 17.852 23.062C22.01 22.682 21.732 17.155 23.252 15.203C21.9662 14.5622 20.547 14.235 19.1105 14.248C17.674 14.261 16.2609 14.614 14.987 15.278C12.833 16.5 12.681 18.548 14.582 20.754Z",
        "stroke": "currentColor",
        "stroke-width": "1.5",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      }
    }), h("path", {
      "attrs": {
        "d": "M17.523 18.219C17.523 18.219 14.823 18.554 12.9 23.25",
        "stroke": "currentColor",
        "stroke-width": "1.5",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      }
    }), h("path", {
      "attrs": {
        "d": "M20.026 11.491C20.7045 9.96808 21.0165 8.30732 20.937 6.642C20.9313 6.52418 20.8823 6.4126 20.7995 6.32864C20.7166 6.24468 20.6057 6.19425 20.488 6.187C19.2506 6.06013 18.0005 6.21239 16.8297 6.63259C15.6589 7.05279 14.5973 7.73021 13.723 8.615C13.6121 5.87881 12.7518 3.22564 11.236 0.944998C11.1915 0.884627 11.1334 0.835557 11.0664 0.80174C10.9995 0.767923 10.9255 0.750305 10.8505 0.750305C10.7755 0.750305 10.7015 0.767923 10.6345 0.80174C10.5676 0.835557 10.5095 0.884627 10.465 0.944998C8.94916 3.22564 8.08887 5.87881 7.97798 8.615C7.10367 7.73021 6.04204 7.05279 4.87127 6.63259C3.7005 6.21239 2.45039 6.06013 1.21298 6.187C1.09525 6.19425 0.984333 6.24468 0.901481 6.32864C0.818629 6.4126 0.76967 6.52418 0.763983 6.642C0.687983 8.271 0.586983 13.365 6.75298 15.01L4.38098 16.365C4.29651 16.4132 4.22871 16.486 4.18661 16.5737C4.14451 16.6614 4.1301 16.7598 4.1453 16.8559C4.1605 16.9519 4.20458 17.0411 4.27169 17.1115C4.3388 17.1819 4.42575 17.2302 4.52098 17.25C5.90798 17.539 7.82098 18.497 10.503 16.958",
        "stroke": "currentColor",
        "stroke-width": "1.5",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      }
    }), h("path", {
      "attrs": {
        "d": "M10.5031 21V16.958",
        "stroke": "currentColor",
        "stroke-width": "1.5",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      }
    })]), h("defs", [h("clipPath", {
      "attrs": {
        "id": "clip0"
      }
    }, [h("rect", {
      "attrs": {
        "width": "24",
        "height": "24",
        "fill": "white"
      }
    })])])]);
  }
};

var Basket = {
  name: 'basket',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps__default["default"]([{
      "attrs": {
        "width": "24",
        "height": "24",
        "viewBox": "0 0 24 24",
        "fill": "none",
        "xmlns": "http://www.w3.org/2000/svg"
      }
    }, ctx.data]), [h("path", {
      "attrs": {
        "d": "M8.99301 23.25H2.45101C2.23768 23.2499 2.02682 23.2044 1.83249 23.1164C1.63817 23.0283 1.46485 22.8999 1.32412 22.7395C1.18338 22.5792 1.07847 22.3907 1.01637 22.1866C0.954272 21.9825 0.936423 21.7675 0.964014 21.556L2.82201 7.306C2.86913 6.94473 3.04613 6.61297 3.31994 6.37264C3.59376 6.13231 3.94569 5.99985 4.31001 6H5.42601C5.79017 6.0001 6.14185 6.13266 6.41546 6.37297C6.68907 6.61327 6.86592 6.9449 6.91301 7.306L8.99301 23.25Z",
        "stroke": "currentColor",
        "stroke-width": "1.5",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      }
    }), h("path", {
      "attrs": {
        "d": "M14.243 6H19.676C20.0402 6.0001 20.3919 6.13266 20.6655 6.37297C20.9391 6.61327 21.1159 6.9449 21.163 7.306L23.022 21.556C23.0496 21.7676 23.0318 21.9827 22.9696 22.1869C22.9075 22.391 22.8025 22.5796 22.6616 22.7399C22.5208 22.9003 22.3473 23.0287 22.1529 23.1167C21.9584 23.2046 21.7475 23.2501 21.534 23.25H8.99304",
        "stroke": "currentColor",
        "stroke-width": "1.5",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      }
    }), h("path", {
      "attrs": {
        "d": "M5.42603 6H11.993",
        "stroke": "currentColor",
        "stroke-width": "1.5",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      }
    }), h("path", {
      "attrs": {
        "d": "M17.993 10.5V3.75C17.993 3.35603 17.9154 2.96593 17.7647 2.60195C17.6139 2.23797 17.3929 1.90726 17.1144 1.62868C16.8358 1.3501 16.5051 1.12913 16.1411 0.978361C15.7771 0.827597 15.387 0.75 14.993 0.75C14.5991 0.75 14.209 0.827597 13.845 0.978361C13.481 1.12913 13.1503 1.3501 12.8717 1.62868C12.5931 1.90726 12.3722 2.23797 12.2214 2.60195C12.0706 2.96593 11.993 3.35603 11.993 3.75V10.5",
        "stroke": "currentColor",
        "stroke-width": "1.5",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      }
    }), h("path", {
      "attrs": {
        "d": "M9.57805 1.253C9.16673 1.52742 8.82963 1.89925 8.59672 2.33542C8.36381 2.77158 8.24231 3.25855 8.24305 3.753V6",
        "stroke": "currentColor",
        "stroke-width": "1.5",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      }
    })]);
  }
};

var BookAddress1 = {
  name: 'book-address-1',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var _attrs;

    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps__default["default"]([{
      "attrs": (_attrs = {
        "xmlns": "http://www.w3.org/2000/svg"
      }, _defineProperty(_attrs, "xmlns", "http://www.w3.org/1999/xlink"), _defineProperty(_attrs, "width", "24px"), _defineProperty(_attrs, "height", "24px"), _defineProperty(_attrs, "viewBox", "0 0 24 24"), _defineProperty(_attrs, "version", "1.1"), _attrs)
    }, ctx.data]), [h("g", {
      "attrs": {
        "fill": "currentColor"
      }
    }, [h("path", {
      "attrs": {
        "d": "M 4.5 24 C 3.121094 24 2 22.878906 2 21.5 L 2 2.5 C 2 1.121094 3.121094 0 4.5 0 L 21.5 0 C 21.777344 0 22 0.222656 22 0.5 C 22 0.777344 21.777344 1 21.5 1 L 4.5 1 C 3.671875 1 3 1.671875 3 2.5 C 3 3.328125 3.671875 4 4.5 4 L 20.5 4 C 21.328125 4 22 4.671875 22 5.5 L 22 22.5 C 22 23.328125 21.328125 24 20.5 24 Z M 3 21.5 C 3 22.328125 3.671875 23 4.5 23 L 20.5 23 C 20.777344 23 21 22.777344 21 22.5 L 21 5.5 C 21 5.222656 20.777344 5 20.5 5 L 4.5 5 C 3.949219 5 3.429688 4.820312 3 4.5 Z M 3 21.5 "
      }
    }), h("path", {
      "attrs": {
        "d": "M 4.5 3 C 4.222656 3 4 2.777344 4 2.5 C 4 2.222656 4.222656 2 4.5 2 L 20.5 2 C 20.777344 2 21 2.222656 21 2.5 C 21 2.777344 20.777344 3 20.5 3 Z M 4.5 3 "
      }
    }), h("path", {
      "attrs": {
        "d": "M 17.5 19.21875 C 17.429688 19.21875 17.363281 19.203125 17.300781 19.175781 C 17.277344 19.167969 15.269531 18.28125 13.894531 17.773438 C 13.421875 17.597656 13.089844 17.195312 12.953125 16.644531 C 12.773438 15.894531 12.976562 14.980469 13.441406 14.472656 C 14.292969 13.640625 14.703125 12.496094 14.574219 11.335938 C 14.570312 11.300781 14.570312 11.265625 14.570312 11.234375 C 14.632812 10.570312 14.433594 9.921875 14.007812 9.40625 C 13.578125 8.890625 12.980469 8.570312 12.316406 8.511719 C 12.238281 8.503906 12.15625 8.5 12.078125 8.5 L 11.925781 8.5 C 11.269531 8.5 10.671875 8.734375 10.199219 9.183594 C 9.714844 9.644531 9.4375 10.265625 9.417969 10.929688 C 9.414062 11.03125 9.421875 11.132812 9.429688 11.234375 C 9.433594 11.265625 9.433594 11.300781 9.429688 11.335938 C 9.300781 12.496094 9.703125 13.632812 10.539062 14.453125 C 11.019531 14.976562 11.226562 15.894531 11.046875 16.644531 C 10.910156 17.195312 10.578125 17.597656 10.105469 17.773438 C 8.796875 18.257812 6.917969 19.082031 6.707031 19.175781 C 6.640625 19.203125 6.570312 19.21875 6.5 19.21875 C 6.300781 19.21875 6.121094 19.101562 6.042969 18.921875 C 5.988281 18.800781 5.984375 18.664062 6.03125 18.539062 C 6.082031 18.414062 6.175781 18.316406 6.296875 18.261719 C 6.3125 18.253906 8.339844 17.359375 9.757812 16.835938 C 9.914062 16.777344 10.019531 16.636719 10.074219 16.410156 C 10.171875 15.992188 10.054688 15.40625 9.820312 15.148438 C 8.792969 14.140625 8.28125 12.726562 8.429688 11.273438 C 8.417969 11.152344 8.414062 11.027344 8.417969 10.902344 C 8.445312 9.96875 8.832031 9.101562 9.511719 8.457031 C 10.164062 7.839844 11.015625 7.5 11.914062 7.5 C 11.945312 7.5 11.980469 7.5 12.015625 7.5 C 12.027344 7.5 12.058594 7.5 12.085938 7.5 C 12.191406 7.5 12.300781 7.503906 12.40625 7.515625 C 14.308594 7.691406 15.722656 9.375 15.570312 11.273438 C 15.71875 12.726562 15.203125 14.144531 14.160156 15.167969 C 13.941406 15.410156 13.824219 15.992188 13.925781 16.410156 C 13.980469 16.632812 14.085938 16.777344 14.242188 16.835938 C 15.539062 17.3125 17.34375 18.105469 17.691406 18.257812 C 17.953125 18.371094 18.066406 18.667969 17.957031 18.921875 C 17.878906 19.101562 17.699219 19.21875 17.5 19.21875 Z M 17.5 19.21875 "
      }
    })])]);
  }
};

var Cargo = {
  name: 'cargo',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps__default["default"]([{
      "attrs": {
        "width": "24",
        "height": "24",
        "viewBox": "0 0 24 24",
        "fill": "none",
        "xmlns": "http://www.w3.org/2000/svg"
      }
    }, ctx.data]), [h("path", {
      "attrs": {
        "d": "M18.75 20.25C19.5784 20.25 20.25 19.5784 20.25 18.75C20.25 17.9216 19.5784 17.25 18.75 17.25C17.9216 17.25 17.25 17.9216 17.25 18.75C17.25 19.5784 17.9216 20.25 18.75 20.25Z",
        "stroke": "currentColor",
        "stroke-width": "1.5",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      }
    }), h("path", {
      "attrs": {
        "d": "M5.25 20.25C6.07843 20.25 6.75 19.5784 6.75 18.75C6.75 17.9216 6.07843 17.25 5.25 17.25C4.42157 17.25 3.75 17.9216 3.75 18.75C3.75 19.5784 4.42157 20.25 5.25 20.25Z",
        "stroke": "currentColor",
        "stroke-width": "1.5",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      }
    }), h("path", {
      "attrs": {
        "d": "M20.25 18.75H21.75C22.1478 18.75 22.5294 18.592 22.8107 18.3107C23.092 18.0294 23.25 17.6478 23.25 17.25V11.25C23.25 10.4544 22.9339 9.69129 22.3713 9.12868C21.8087 8.56607 21.0456 8.25 20.25 8.25H16.5",
        "stroke": "currentColor",
        "stroke-width": "1.5",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      }
    }), h("path", {
      "attrs": {
        "d": "M16.5 18.75V5.25C16.5 4.85218 16.342 4.47064 16.0607 4.18934C15.7794 3.90804 15.3978 3.75 15 3.75H2.25C1.85218 3.75 1.47064 3.90804 1.18934 4.18934C0.908035 4.47064 0.75 4.85218 0.75 5.25V17.25C0.75 17.6478 0.908035 18.0294 1.18934 18.3107C1.47064 18.592 1.85218 18.75 2.25 18.75H3.75",
        "stroke": "currentColor",
        "stroke-width": "1.5",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      }
    }), h("path", {
      "attrs": {
        "d": "M17.25 18.75H6.75",
        "stroke": "currentColor",
        "stroke-width": "1.5",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      }
    }), h("path", {
      "attrs": {
        "d": "M23.25 12.75H21C20.6022 12.75 20.2206 12.592 19.9393 12.3107C19.658 12.0294 19.5 11.6478 19.5 11.25V8.25",
        "stroke": "currentColor",
        "stroke-width": "1.5",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      }
    }), h("path", {
      "attrs": {
        "d": "M0.75 11.25H12.75V15",
        "stroke": "currentColor",
        "stroke-width": "1.5",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      }
    }), h("path", {
      "attrs": {
        "d": "M11.25 6.75H5.25V11.25H11.25V6.75Z",
        "stroke": "currentColor",
        "stroke-width": "1.5",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      }
    }), h("path", {
      "attrs": {
        "d": "M3.75 11.25V13.5",
        "stroke": "currentColor",
        "stroke-width": "1.5",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      }
    }), h("path", {
      "attrs": {
        "d": "M8.25 6.75V9",
        "stroke": "currentColor",
        "stroke-width": "1.5",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      }
    }), h("path", {
      "attrs": {
        "d": "M9.75 11.25V13.5",
        "stroke": "currentColor",
        "stroke-width": "1.5",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      }
    }), h("path", {
      "attrs": {
        "d": "M6.75 11.25V15",
        "stroke": "currentColor",
        "stroke-width": "1.5",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      }
    })]);
  }
};

var Cash = {
  name: 'cash',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps__default["default"]([{
      "attrs": {
        "width": "24",
        "height": "24",
        "viewBox": "0 0 24 24",
        "fill": "none",
        "xmlns": "http://www.w3.org/2000/svg"
      }
    }, ctx.data]), [h("path", {
      "attrs": {
        "d": "M6.75 17.25C10.0637 17.25 12.75 15.9069 12.75 14.25C12.75 12.5931 10.0637 11.25 6.75 11.25C3.43629 11.25 0.75 12.5931 0.75 14.25C0.75 15.9069 3.43629 17.25 6.75 17.25Z",
        "stroke": "currentColor",
        "stroke-width": "1.5",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      }
    }), h("path", {
      "attrs": {
        "d": "M0.75 14.25V20.25C0.75 21.907 3.436 23.25 6.75 23.25C10.064 23.25 12.75 21.907 12.75 20.25V14.25",
        "stroke": "currentColor",
        "stroke-width": "1.5",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      }
    }), h("path", {
      "attrs": {
        "d": "M12.75 17.25C12.75 18.907 10.064 20.25 6.75 20.25C3.436 20.25 0.75 18.907 0.75 17.25",
        "stroke": "currentColor",
        "stroke-width": "1.5",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      }
    }), h("path", {
      "attrs": {
        "d": "M15.75 15.75H21.75C22.1478 15.75 22.5294 15.592 22.8107 15.3107C23.092 15.0294 23.25 14.6478 23.25 14.25V2.25C23.25 1.85218 23.092 1.47064 22.8107 1.18934C22.5294 0.908035 22.1478 0.75 21.75 0.75H2.25C1.85218 0.75 1.47064 0.908035 1.18934 1.18934C0.908035 1.47064 0.75 1.85218 0.75 2.25V9.757",
        "stroke": "currentColor",
        "stroke-width": "1.5",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      }
    }), h("path", {
      "attrs": {
        "d": "M9 8.25001C9.00005 7.74842 9.12588 7.25485 9.36595 6.81444C9.60603 6.37403 9.9527 6.00085 10.3743 5.72903C10.7958 5.45721 11.2788 5.29543 11.779 5.25849C12.2793 5.22154 12.7808 5.31061 13.2377 5.51755C13.6946 5.72449 14.0923 6.04269 14.3945 6.44304C14.6967 6.8434 14.8937 7.31313 14.9674 7.80928C15.0411 8.30542 14.9893 8.81213 14.8166 9.28307C14.644 9.754 14.356 10.1741 13.979 10.505",
        "stroke": "currentColor",
        "stroke-width": "1.5",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      }
    }), h("path", {
      "attrs": {
        "d": "M4.5 4.125C4.57417 4.125 4.64667 4.14699 4.70834 4.1882C4.77001 4.2294 4.81807 4.28797 4.84645 4.35649C4.87484 4.42502 4.88226 4.50042 4.86779 4.57316C4.85333 4.6459 4.81761 4.71272 4.76516 4.76516C4.71272 4.81761 4.6459 4.85333 4.57316 4.86779C4.50042 4.88226 4.42502 4.87484 4.35649 4.84645C4.28797 4.81807 4.2294 4.77001 4.1882 4.70834C4.14699 4.64667 4.125 4.57417 4.125 4.5C4.125 4.40054 4.16451 4.30516 4.23484 4.23484C4.30516 4.16451 4.40054 4.125 4.5 4.125Z",
        "stroke": "currentColor",
        "stroke-width": "1.5",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      }
    }), h("path", {
      "attrs": {
        "d": "M19.5 11.625C19.5742 11.625 19.6467 11.647 19.7083 11.6882C19.77 11.7294 19.8181 11.788 19.8465 11.8565C19.8748 11.925 19.8823 12.0004 19.8678 12.0732C19.8533 12.1459 19.8176 12.2127 19.7652 12.2652C19.7127 12.3176 19.6459 12.3533 19.5732 12.3678C19.5004 12.3823 19.425 12.3748 19.3565 12.3465C19.288 12.3181 19.2294 12.27 19.1882 12.2083C19.147 12.1467 19.125 12.0742 19.125 12C19.125 11.9005 19.1645 11.8052 19.2348 11.7348C19.3052 11.6645 19.4005 11.625 19.5 11.625Z",
        "stroke": "currentColor",
        "stroke-width": "1.5",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      }
    })]);
  }
};

var Check = {
  name: 'check',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps__default["default"]([{
      "attrs": {
        "width": "24",
        "height": "24",
        "viewBox": "0 0 24 24",
        "fill": "none",
        "xmlns": "http://www.w3.org/2000/svg"
      }
    }, ctx.data]), [h("g", {
      "attrs": {
        "clip-path": "url(#clip0)"
      }
    }, [h("path", {
      "attrs": {
        "d": "M23.374 0.286973C23.0507 0.0551881 22.6486 -0.0386786 22.2561 0.0260207C21.8635 0.0907201 21.5128 0.308686 21.281 0.631973L7.24601 20.2L2.56101 15.511C2.42174 15.3716 2.25639 15.2611 2.07441 15.1857C1.89242 15.1102 1.69736 15.0714 1.50036 15.0713C1.30336 15.0713 1.10828 15.1101 0.926258 15.1854C0.744236 15.2607 0.578838 15.3712 0.439505 15.5105C0.300173 15.6497 0.189635 15.8151 0.114204 15.9971C0.0387723 16.1791 -7.56019e-05 16.3741 -0.000122029 16.5711C-0.000168455 16.7681 0.0385875 16.9632 0.113933 17.1452C0.189279 17.3272 0.299738 17.4926 0.439005 17.632L6.37401 23.566C6.52982 23.7159 6.71575 23.831 6.91944 23.9036C7.12313 23.9762 7.33994 24.0046 7.55546 23.987C7.77099 23.9695 7.98031 23.9062 8.16953 23.8016C8.35876 23.6969 8.52356 23.5532 8.653 23.38L23.719 2.37997C23.9508 2.05667 24.0447 1.65453 23.98 1.26202C23.9153 0.869516 23.6973 0.518781 23.374 0.286973Z",
        "fill": "currentColor"
      }
    })]), h("defs", [h("clipPath", {
      "attrs": {
        "id": "clip0"
      }
    }, [h("rect", {
      "attrs": {
        "width": "24",
        "height": "24",
        "fill": "white"
      }
    })])])]);
  }
};

var CircleCheckmark = {
  name: 'circle-checkmark',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps__default["default"]([{
      "attrs": {
        "width": "24",
        "height": "24",
        "viewBox": "0 0 24 24",
        "fill": "none",
        "xmlns": "http://www.w3.org/2000/svg"
      }
    }, ctx.data]), [h("g", {
      "attrs": {
        "clip-path": "url(#clip0)"
      }
    }, [h("path", {
      "attrs": {
        "d": "M6 13.223L8.45 16.7C8.54293 16.8388 8.66768 16.9534 8.81385 17.0343C8.96002 17.1152 9.12339 17.16 9.29037 17.165C9.45735 17.17 9.6231 17.135 9.77384 17.063C9.92458 16.991 10.0559 16.884 10.157 16.751L18 6.828",
        "stroke": "currentColor",
        "stroke-width": "1.5",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      }
    }), h("path", {
      "attrs": {
        "d": "M12 23.249C18.2132 23.249 23.25 18.2122 23.25 11.999C23.25 5.78579 18.2132 0.748993 12 0.748993C5.7868 0.748993 0.75 5.78579 0.75 11.999C0.75 18.2122 5.7868 23.249 12 23.249Z",
        "stroke": "currentColor",
        "stroke-width": "1.5",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      }
    })]), h("defs", [h("clipPath", {
      "attrs": {
        "id": "clip0"
      }
    }, [h("rect", {
      "attrs": {
        "width": "24",
        "height": "24",
        "fill": "white"
      }
    })])])]);
  }
};

var Close = {
  name: 'close',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps__default["default"]([{
      "attrs": {
        "width": "24",
        "height": "24",
        "viewBox": "0 0 24 24",
        "fill": "none",
        "xmlns": "http://www.w3.org/2000/svg"
      }
    }, ctx.data]), [h("path", {
      "attrs": {
        "d": "M0.75 23.249L23.25 0.749",
        "stroke": "currentColor",
        "stroke-width": "1.5",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      }
    }), h("path", {
      "attrs": {
        "d": "M23.25 23.249L0.75 0.749",
        "stroke": "currentColor",
        "stroke-width": "1.5",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      }
    })]);
  }
};

var Coupon = {
  name: 'coupon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps__default["default"]([{
      "attrs": {
        "width": "24",
        "height": "24",
        "viewBox": "0 0 24 24",
        "fill": "none",
        "xmlns": "http://www.w3.org/2000/svg"
      }
    }, ctx.data]), [h("g", [h("path", {
      "attrs": {
        "d": "M23.5 9.5A.5.5 0 0024 9V5.5A1.5 1.5 0 0022.5 4h-21A1.5 1.5 0 000 5.5V9a.5.5 0 00.5.5 2.5 2.5 0 010 5 .5.5 0 00-.5.5v3.5A1.5 1.5 0 001.5 20h21a1.5 1.5 0 001.5-1.5V15a.5.5 0 00-.5-.5 2.5 2.5 0 010-5zM7.47 15.47l8-8a.75.75 0 011.06 1.06l-8 8a.75.75 0 01-1.06-1.06zM7 9a2 2 0 114 0 2 2 0 01-4 0zm8 4a2 2 0 110 4 2 2 0 010-4z",
        "fill": "currentColor"
      }
    })])]);
  }
};

var Coupons = {
  name: 'coupons',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps__default["default"]([{
      "attrs": {
        "width": "24",
        "height": "24",
        "viewBox": "0 0 24 24",
        "fill": "none",
        "xmlns": "http://www.w3.org/2000/svg"
      }
    }, ctx.data]), [h("path", {
      "attrs": {
        "d": "M11.479 23.1C11.6362 23.2121 11.828 23.2646 12.0204 23.2483C12.2127 23.232 12.393 23.1479 12.529 23.011L23.01 12.529C23.1468 12.3928 23.2308 12.2126 23.2471 12.0203C23.2633 11.828 23.2109 11.6362 23.099 11.479C22.6083 10.7884 22.3446 9.96221 22.3446 9.115C22.3446 8.26779 22.6083 7.44159 23.099 6.751C23.2114 6.59376 23.2641 6.40169 23.2478 6.20913C23.2315 6.01658 23.1472 5.83611 23.01 5.7L18.3 0.989C18.1638 0.85175 17.9831 0.767437 17.7904 0.751132C17.5977 0.734828 17.4054 0.787594 17.248 0.9C16.5575 1.39054 15.7315 1.65407 14.8845 1.65407C14.0375 1.65407 13.2115 1.39054 12.521 0.9C12.3637 0.788327 12.172 0.735994 11.9797 0.752287C11.7875 0.768579 11.6073 0.852445 11.471 0.989L0.990025 11.471C0.853318 11.6071 0.769268 11.7873 0.752791 11.9795C0.736315 12.1717 0.788479 12.3636 0.900025 12.521C1.39079 13.2116 1.65446 14.0378 1.65446 14.885C1.65446 15.7322 1.39079 16.5584 0.900025 17.249C0.787819 17.4064 0.73526 17.5985 0.751749 17.791C0.768238 17.9836 0.8527 18.164 0.990025 18.3L5.70003 23.011C5.83633 23.1476 6.01673 23.2314 6.20905 23.2473C6.40137 23.2632 6.5931 23.2103 6.75003 23.098C7.44092 22.6073 8.26743 22.3439 9.11485 22.3442C9.96226 22.3446 10.7885 22.6087 11.479 23.1V23.1Z",
        "stroke": "currentColor",
        "stroke-width": "1.25",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      }
    }), h("path", {
      "attrs": {
        "d": "M18.7939 10.7155L13.2841 5.2057C12.8936 4.81518 12.2604 4.81518 11.8699 5.2057L5.20614 11.8695C4.81562 12.26 4.81562 12.8932 5.20614 13.2837L10.7159 18.7935C11.1064 19.184 11.7396 19.184 12.1301 18.7935L18.7939 12.1297C19.1844 11.7392 19.1844 11.106 18.7939 10.7155Z",
        "stroke": "currentColor",
        "stroke-width": "1.25",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      }
    }), h("path", {
      "attrs": {
        "d": "M12.577 9.11499L9.11499 12.577",
        "stroke": "currentColor",
        "stroke-width": "1.25",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      }
    }), h("path", {
      "attrs": {
        "d": "M13.779 12.529L12.701 13.607",
        "stroke": "currentColor",
        "stroke-width": "1.25",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      }
    })]);
  }
};

var Credit = {
  name: 'credit',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps__default["default"]([{
      "attrs": {
        "width": "24",
        "height": "24",
        "viewBox": "0 0 24 24",
        "fill": "none",
        "xmlns": "http://www.w3.org/2000/svg"
      }
    }, ctx.data]), [h("path", {
      "attrs": {
        "d": "M23.25 13.5V2.25C23.25 1.85218 23.092 1.47064 22.8107 1.18934C22.5294 0.908035 22.1478 0.75 21.75 0.75H5.25C4.85218 0.75 4.47064 0.908035 4.18934 1.18934C3.90804 1.47064 3.75 1.85218 3.75 2.25V6",
        "stroke": "currentColor",
        "stroke-width": "1.5",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      }
    }), h("path", {
      "attrs": {
        "d": "M3.75 5.25H23.25",
        "stroke": "currentColor",
        "stroke-width": "1.5",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      }
    }), h("path", {
      "attrs": {
        "d": "M18.75 9H2.25C1.42157 9 0.75 9.67157 0.75 10.5V21.75C0.75 22.5784 1.42157 23.25 2.25 23.25H18.75C19.5784 23.25 20.25 22.5784 20.25 21.75V10.5C20.25 9.67157 19.5784 9 18.75 9Z",
        "stroke": "currentColor",
        "stroke-width": "1.5",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      }
    }), h("path", {
      "attrs": {
        "d": "M0.75 13.5H20.25",
        "stroke": "currentColor",
        "stroke-width": "1.5",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      }
    }), h("path", {
      "attrs": {
        "d": "M3.75 18H6",
        "stroke": "currentColor",
        "stroke-width": "1.5",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      }
    }), h("path", {
      "attrs": {
        "d": "M13.875 17.25C13.6389 16.9352 13.3097 16.7026 12.9341 16.5853C12.5584 16.4679 12.1554 16.4718 11.7821 16.5962C11.4087 16.7207 11.084 16.9594 10.8539 17.2787C10.6238 17.5979 10.5 17.9815 10.5 18.375C10.5 18.7685 10.6238 19.1521 10.8539 19.4713C11.084 19.7906 11.4087 20.0293 11.7821 20.1538C12.1554 20.2782 12.5584 20.2821 12.9341 20.1647C13.3097 20.0474 13.6389 19.8148 13.875 19.5C14.1111 19.8148 14.4403 20.0474 14.8159 20.1647C15.1916 20.2821 15.5946 20.2782 15.9679 20.1538C16.3413 20.0293 16.666 19.7906 16.8961 19.4713C17.1262 19.1521 17.25 18.7685 17.25 18.375C17.25 17.9815 17.1262 17.5979 16.8961 17.2787C16.666 16.9594 16.3413 16.7207 15.9679 16.5962C15.5946 16.4718 15.1916 16.4679 14.8159 16.5853C14.4403 16.7026 14.1111 16.9352 13.875 17.25V17.25Z",
        "stroke": "currentColor",
        "stroke-width": "1.5",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      }
    })]);
  }
};

var Creditcard = {
  name: 'creditcard',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps__default["default"]([{
      "attrs": {
        "width": "24",
        "height": "24",
        "viewBox": "0 0 24 24",
        "fill": "none",
        "xmlns": "http://www.w3.org/2000/svg"
      }
    }, ctx.data]), [h("path", {
      "attrs": {
        "d": "M21.75 3.75H2.25C1.42157 3.75 0.75 4.42157 0.75 5.25V18.75C0.75 19.5784 1.42157 20.25 2.25 20.25H21.75C22.5784 20.25 23.25 19.5784 23.25 18.75V5.25C23.25 4.42157 22.5784 3.75 21.75 3.75Z",
        "stroke": "currentColor",
        "stroke-width": "1.5",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      }
    }), h("path", {
      "attrs": {
        "d": "M0.75 8.25H23.25",
        "stroke": "currentColor",
        "stroke-width": "1.5",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      }
    }), h("path", {
      "attrs": {
        "d": "M5.25 12.75H13.5",
        "stroke": "currentColor",
        "stroke-width": "1.5",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      }
    }), h("path", {
      "attrs": {
        "d": "M5.25 15.75H10.5",
        "stroke": "currentColor",
        "stroke-width": "1.5",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      }
    })]);
  }
};

var Customers = {
  name: 'customers',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps__default["default"]([{
      "attrs": {
        "width": "24px",
        "height": "24px",
        "viewBox": "0 0 24 24",
        "xmlns": "http://www.w3.org/2000/svg"
      }
    }, ctx.data]), [h("g", {
      "attrs": {
        "fill": "currentColor"
      }
    }, [h("path", {
      "attrs": {
        "d": "M22.516 17.015l-2.868-1.275c-.0441-.0196-.0816-.0515-.1079-.092-.0262-.0405-.0402-.0877-.0401-.136v-1.143c-.0001-.0329.0064-.0656.0191-.096.0127-.0304.0314-.0579.0549-.081.5255-.622.8029-1.4161.779-2.23.0021-.0337.0109-.0667.026-.097.0152-.0302.0362-.0571.062-.079.1812-.1838.3225-.403.4151-.6439.0926-.2409.1344-.4983.1229-.7561.015-.3645-.0971-.72291-.317-1.01399-.0301-.03644-.0493-.08067-.0554-.12758-.006-.04691.0014-.09456.0214-.13742.2538-.53932.3091-1.15093.156-1.727-.353-1.439-2.2-1.972-3.729-1.861h-.036c-.6657-.04769-1.3345.02584-1.974.217-.0421.0133-.0801.03736-.11.0698-.03.03245-.051.07215-.061.1152-.031.143-.064.282-.1.412-.015.05719-.0089.11787.017.171.2207.46759.3332.97894.329 1.496.0135.73146-.2182 1.44639-.658 2.03099-.0264.0329-.0436.0723-.05.114-.1053.6866-.3431 1.3461-.7 1.942-.028.0466-.0399.101-.034.155.0346.4079.1265.8088.273 1.191.0124.0315.0312.06.0551.0839.0239.0239.0525.0427.0839.0551l2.254.893c.9333.3666 1.734 1.0067 2.2972 1.8363.5632.8296.8625 1.81.8588 2.8127V22c.0001.0726-.0049.1451-.015.217-.0045.0354-.0015.0713.0089.1054.0105.0341.0281.0656.0516.0924.0236.0268.0526.0482.0851.0629.0325.0147.0677.0223.1034.0223H23.5c.1326 0 .2598-.0527.3536-.1464.0937-.0938.1464-.221.1464-.3536v-2.7c.0002-.4836-.14-.9568-.4034-1.3624-.2634-.4056-.6387-.7261-1.0806-.9226z"
      }
    }), h("path", {
      "attrs": {
        "d": "M18 19.114c.0024-.7022-.2074-1.3887-.602-1.9695-.3945-.5809-.9554-1.0289-1.609-1.2855l-4.131-1.636c-.0464-.0185-.0863-.0505-.1144-.0918-.0282-.0414-.0434-.0902-.0436-.1402V12.44c-.0001-.0404.0097-.0802.0285-.116.0188-.0357.0461-.0663.0795-.089.4242-.3215.7686-.7363 1.0067-1.2123.2381-.4761.3634-1.0005.3663-1.5327.0029-.03554.0133-.07007.0305-.10128.0173-.03121.041-.05838.0695-.07972.1847-.16188.3294-.36426.4229-.59134.0935-.22707.1333-.47269.1161-.71766.0227-.43818-.1249-.86816-.412-1.2-.0315-.03243-.0537-.07282-.064-.11684-.0104-.04403-.0087-.09005.005-.13316.3869-1.0106.5027-2.1048.336-3.174C13.139 1.992 11.256 1.5 9.75002 1.5c-1.292 0-2.86.362-3.5 1.341-.02251.03421-.05305.0624-.08896.08209-.03591.0197-.07609.03031-.11704.03091-.19847-.00594-.39601.02949-.58005.10403-.18404.07455-.35056.18658-.48895.32897-.713.769-.357 2.253-.1 3.161.01167.04295.01181.08821.0004.13123-.01142.04301-.03397.08226-.0654.11377-.08234.08232-.15209.17633-.207.279-.15037.28597-.22702.60493-.223.928-.01713.24497.02261.49059.11611.71766.0935.22708.23823.42946.42289.59134.02857.02134.05226.04851.06951.07972.01724.03121.02764.06574.03049.10128.00288.5322.12821 1.0566.3663 1.5327.23809.476.58255.8908 1.0067 1.2123.03321.0229.06038.0535.07919.0892.0188.0357.02869.0755.02881.1158v1.552c.00005.0501-.01501.099-.04319.1404-.02819.0414-.0682.0733-.11481.0916l-4.136 1.646c-.65237.2569-1.211978.7048-1.605585 1.2851-.393606.5802-.60287334 1.2658-.60041356 1.9669V22c0 .1326.05267846.2598.14644656.3536.093768.0937.220945.1464.353553.1464H17.5c.1326 0 .2598-.0527.3536-.1464.0937-.0938.1464-.221.1464-.3536v-2.886z"
      }
    })])]);
  }
};

var Dashboard = {
  name: 'dashboard',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps__default["default"]([{
      "attrs": {
        "width": "24px",
        "height": "24px",
        "viewBox": "0 0 24 24",
        "fill": "none",
        "xmlns": "http://www.w3.org/2000/svg"
      }
    }, ctx.data]), [h("path", {
      "attrs": {
        "d": "M5 10c2.76142 0 5-2.23858 5-5S7.76142 0 5 0 0 2.23858 0 5s2.23858 5 5 5zM19 10c2.7614 0 5-2.23858 5-5s-2.2386-5-5-5-5 2.23858-5 5 2.2386 5 5 5zM5 24c2.76142 0 5-2.2386 5-5s-2.23858-5-5-5-5 2.2386-5 5 2.23858 5 5 5zM19 24c2.7614 0 5-2.2386 5-5s-2.2386-5-5-5-5 2.2386-5 5 2.2386 5 5 5z",
        "fill": "currentColor"
      }
    })]);
  }
};

var Delete = {
  name: 'delete',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps__default["default"]([{
      "attrs": {
        "width": "24",
        "height": "24",
        "viewBox": "0 0 24 24",
        "fill": "none",
        "xmlns": "http://www.w3.org/2000/svg"
      }
    }, ctx.data]), [h("path", {
      "attrs": {
        "d": "M1.75098 6.36801L22.292 2.00201",
        "stroke": "currentColor",
        "stroke-width": "1.5",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      }
    }), h("path", {
      "attrs": {
        "d": "M13.6 0.782993L9.20005 1.71799C9.00683 1.75863 8.82354 1.83702 8.66068 1.94866C8.49783 2.06029 8.35861 2.20298 8.25103 2.36854C8.14344 2.5341 8.0696 2.71927 8.03374 2.91343C7.99788 3.1076 8.0007 3.30693 8.04205 3.49999L8.35405 4.96799L15.69 3.40799L15.378 1.94099C15.3374 1.74819 15.2591 1.56529 15.1478 1.40273C15.0364 1.24018 14.8941 1.10117 14.729 0.993627C14.5638 0.88609 14.3792 0.812138 14.1855 0.775996C13.9918 0.739855 13.7928 0.742233 13.6 0.782993V0.782993Z",
        "stroke": "currentColor",
        "stroke-width": "1.5",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      }
    }), h("path", {
      "attrs": {
        "d": "M10.751 18V10.5",
        "stroke": "currentColor",
        "stroke-width": "1.5",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      }
    }), h("path", {
      "attrs": {
        "d": "M15.251 18V10.5",
        "stroke": "currentColor",
        "stroke-width": "1.5",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      }
    }), h("path", {
      "attrs": {
        "d": "M18.626 6H21.251L19.866 21.874C19.8348 22.25 19.6631 22.6004 19.3851 22.8554C19.1071 23.1104 18.7432 23.2513 18.366 23.25H7.63098C7.25477 23.2498 6.89237 23.1082 6.61565 22.8533C6.33892 22.5985 6.16808 22.2489 6.13698 21.874L5.09998 9.377",
        "stroke": "currentColor",
        "stroke-width": "1.5",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      }
    })]);
  }
};

var DeliveryTruckClock = {
  name: 'delivery-truck-clock',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var _attrs;

    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps__default["default"]([{
      "attrs": (_attrs = {
        "xmlns": "http://www.w3.org/2000/svg"
      }, _defineProperty(_attrs, "xmlns", "http://www.w3.org/1999/xlink"), _defineProperty(_attrs, "width", "24pt"), _defineProperty(_attrs, "height", "24pt"), _defineProperty(_attrs, "viewBox", "0 0 24 24"), _defineProperty(_attrs, "version", "1.1"), _attrs)
    }, ctx.data]), [h("g", {
      "attrs": {
        "id": "surface1"
      }
    }, [h("path", {
      "style": "stroke:none;fill-rule:nonzero;fill:rgb(0%,0%,0%);fill-opacity:1",
      "attrs": {
        "d": "M 5.710938 12 C 2.675781 12 0.210938 9.53125 0.210938 6.5 C 0.210938 3.46875 2.675781 1 5.710938 1 C 8.742188 1 11.210938 3.46875 11.210938 6.5 C 11.210938 9.53125 8.742188 12 5.710938 12 Z M 5.710938 2 C 3.230469 2 1.210938 4.019531 1.210938 6.5 C 1.210938 8.980469 3.226562 11 5.710938 11 C 8.191406 11 10.210938 8.980469 10.210938 6.5 C 10.210938 4.019531 8.191406 2 5.710938 2 Z M 5.710938 2 "
      }
    }), h("path", {
      "style": "stroke:none;fill-rule:nonzero;fill:rgb(0%,0%,0%);fill-opacity:1",
      "attrs": {
        "d": "M 5.710938 8 C 5.433594 8 5.210938 7.777344 5.210938 7.5 L 5.210938 4 C 5.210938 3.722656 5.433594 3.5 5.710938 3.5 C 5.984375 3.5 6.210938 3.722656 6.210938 4 L 6.210938 7 L 7.710938 7 C 7.984375 7 8.210938 7.222656 8.210938 7.5 C 8.210938 7.777344 7.984375 8 7.710938 8 Z M 5.710938 8 "
      }
    }), h("path", {
      "style": "stroke:none;fill-rule:nonzero;fill:rgb(0%,0%,0%);fill-opacity:1",
      "attrs": {
        "d": "M 19.710938 23 C 18.605469 23 17.710938 22.101562 17.710938 21 L 11.710938 21 C 11.710938 22.101562 10.8125 23 9.710938 23 C 8.605469 23 7.710938 22.101562 7.710938 21 L 6.710938 21 C 5.882812 21 5.210938 20.328125 5.210938 19.5 L 5.210938 13.5 C 5.210938 13.222656 5.433594 13 5.710938 13 C 5.984375 13 6.210938 13.222656 6.210938 13.5 L 6.210938 19.5 C 6.210938 19.777344 6.433594 20 6.710938 20 L 7.980469 20 C 8.335938 19.386719 9 19 9.710938 19 C 10.421875 19 11.085938 19.386719 11.4375 20 L 16.222656 20 L 16.21875 16.582031 C 16.214844 16.5625 16.210938 16.53125 16.210938 16.5 C 16.210938 16.46875 16.214844 16.441406 16.21875 16.421875 L 16.21875 13.5625 C 16.214844 13.550781 16.210938 13.527344 16.210938 13.5 C 16.210938 13.484375 16.214844 13.460938 16.21875 13.441406 L 16.214844 11.5 C 16.214844 11.222656 15.992188 11 15.714844 11 L 11.714844 11 C 11.4375 11 11.214844 10.777344 11.214844 10.5 C 11.214844 10.222656 11.4375 10 11.714844 10 L 15.714844 10 C 16.542969 10 17.214844 10.671875 17.214844 11.5 L 17.214844 13 L 20.511719 13 C 21.144531 13 21.710938 13.398438 21.921875 13.996094 L 23.707031 18.996094 C 23.84375 19.371094 23.824219 19.78125 23.652344 20.140625 C 23.480469 20.503906 23.175781 20.777344 22.800781 20.910156 C 22.636719 20.972656 22.46875 21 22.296875 21 L 21.710938 21 C 21.710938 22.101562 20.8125 23 19.710938 23 Z M 18.769531 20.679688 C 18.730469 20.796875 18.710938 20.898438 18.710938 21 C 18.710938 21.550781 19.15625 22 19.710938 22 C 20.261719 22 20.710938 21.550781 20.710938 21 C 20.710938 20.449219 20.261719 20 19.710938 20 C 19.289062 20 18.910156 20.269531 18.769531 20.671875 C 18.769531 20.675781 18.769531 20.675781 18.769531 20.679688 Z M 9.710938 20 C 9.160156 20 8.710938 20.449219 8.710938 21 C 8.710938 21.550781 9.160156 22 9.710938 22 C 10.261719 22 10.710938 21.550781 10.710938 21 C 10.710938 20.449219 10.261719 20 9.710938 20 Z M 22.296875 20 C 22.363281 20 22.40625 19.992188 22.464844 19.972656 C 22.589844 19.925781 22.691406 19.835938 22.746094 19.714844 C 22.804688 19.59375 22.8125 19.460938 22.765625 19.332031 L 21.933594 17 L 17.21875 17 L 17.222656 20 L 17.980469 20 C 18.335938 19.386719 19 19 19.710938 19 C 20.421875 19 21.085938 19.386719 21.4375 20 C 21.4375 20 22.292969 20 22.296875 20 Z M 21.574219 16 L 20.980469 14.332031 C 20.910156 14.132812 20.722656 14 20.511719 14 L 17.21875 14 L 17.21875 16 Z M 21.574219 16 "
      }
    }), h("path", {
      "style": "stroke:none;fill-rule:nonzero;fill:rgb(0%,0%,0%);fill-opacity:1",
      "attrs": {
        "d": "M 0.710938 16 C 0.574219 16 0.449219 15.949219 0.355469 15.851562 C 0.261719 15.757812 0.210938 15.632812 0.210938 15.5 C 0.210938 15.222656 0.433594 15 0.710938 15 L 3.710938 15.003906 C 3.84375 15.003906 3.96875 15.058594 4.0625 15.152344 C 4.15625 15.246094 4.210938 15.371094 4.210938 15.507812 C 4.210938 15.78125 3.984375 16.003906 3.710938 16.003906 C 3.710938 16.003906 0.710938 16 0.710938 16 Z M 0.710938 16 "
      }
    }), h("path", {
      "style": "stroke:none;fill-rule:nonzero;fill:rgb(0%,0%,0%);fill-opacity:1",
      "attrs": {
        "d": "M 2.207031 18 C 2.074219 18 1.949219 17.945312 1.855469 17.851562 C 1.761719 17.757812 1.710938 17.632812 1.710938 17.496094 C 1.710938 17.222656 1.933594 17 2.210938 17 L 3.710938 17.003906 C 3.847656 17.003906 3.972656 17.058594 4.066406 17.152344 C 4.160156 17.246094 4.210938 17.371094 4.210938 17.507812 C 4.210938 17.78125 3.984375 18.003906 3.710938 18.003906 Z M 2.207031 18 "
      }
    }), h("path", {
      "style": "stroke:none;fill-rule:nonzero;fill:rgb(0%,0%,0%);fill-opacity:1",
      "attrs": {
        "d": "M 3.203125 20 C 2.929688 19.996094 2.707031 19.769531 2.710938 19.496094 C 2.710938 19.222656 2.9375 19 3.210938 19 L 3.714844 19.003906 C 3.992188 19.007812 4.214844 19.234375 4.210938 19.511719 C 4.207031 19.78125 3.984375 20.003906 3.710938 20.003906 Z M 3.203125 20 "
      }
    })])]);
  }
};

var Delivery = {
  name: 'delivery',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps__default["default"]([{
      "attrs": {
        "width": "24",
        "height": "24",
        "viewBox": "0 0 24 24",
        "fill": "none",
        "xmlns": "http://www.w3.org/2000/svg"
      }
    }, ctx.data]), [h("path", {
      "attrs": {
        "d": "M17.25 23.25C20.5637 23.25 23.25 20.5637 23.25 17.25C23.25 13.9363 20.5637 11.25 17.25 11.25C13.9363 11.25 11.25 13.9363 11.25 17.25C11.25 20.5637 13.9363 23.25 17.25 23.25Z",
        "stroke": "currentColor",
        "stroke-width": "1.5",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      }
    }), h("path", {
      "attrs": {
        "d": "M15.375 16.125C15.375 15.7542 15.485 15.3916 15.691 15.0833C15.897 14.775 16.1899 14.5346 16.5325 14.3927C16.8751 14.2508 17.2521 14.2137 17.6158 14.286C17.9795 14.3584 18.3136 14.537 18.5758 14.7992C18.838 15.0614 19.0166 15.3955 19.089 15.7592C19.1613 16.1229 19.1242 16.4999 18.9823 16.8425C18.8404 17.1851 18.6 17.478 18.2917 17.684C17.9834 17.89 17.6208 18 17.25 18",
        "stroke": "currentColor",
        "stroke-width": "1.5",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      }
    }), h("path", {
      "attrs": {
        "d": "M17.25 20.25C17.3242 20.25 17.3967 20.272 17.4583 20.3132C17.52 20.3544 17.5681 20.413 17.5965 20.4815C17.6248 20.55 17.6323 20.6254 17.6178 20.6982C17.6033 20.7709 17.5676 20.8377 17.5152 20.8902C17.4627 20.9426 17.3959 20.9783 17.3232 20.9928C17.2504 21.0073 17.175 20.9998 17.1065 20.9715C17.038 20.9431 16.9794 20.895 16.9382 20.8333C16.897 20.7717 16.875 20.6992 16.875 20.625C16.875 20.5255 16.9145 20.4302 16.9848 20.3598C17.0552 20.2895 17.1505 20.25 17.25 20.25Z",
        "stroke": "currentColor",
        "stroke-width": "1.5",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      }
    }), h("path", {
      "attrs": {
        "d": "M8.25 18.75H2.25C1.85218 18.75 1.47064 18.592 1.18934 18.3107C0.908035 18.0294 0.75 17.6478 0.75 17.25V6.75C0.75 6.35218 0.908035 5.97064 1.18934 5.68934C1.47064 5.40804 1.85218 5.25 2.25 5.25H17.25C17.6478 5.25 18.0294 5.40804 18.3107 5.68934C18.592 5.97064 18.75 6.35218 18.75 6.75V8.25",
        "stroke": "currentColor",
        "stroke-width": "1.5",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      }
    }), h("path", {
      "attrs": {
        "d": "M18.266 5.647L15.445 1.418C15.3083 1.21295 15.1232 1.04474 14.9061 0.928235C14.6889 0.811727 14.4464 0.750511 14.2 0.75H5.30001C5.05308 0.750018 4.80996 0.810998 4.59226 0.927528C4.37455 1.04406 4.18897 1.21253 4.05201 1.418L1.23401 5.647",
        "stroke": "currentColor",
        "stroke-width": "1.5",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      }
    }), h("path", {
      "attrs": {
        "d": "M9.75 0.75V5.25",
        "stroke": "currentColor",
        "stroke-width": "1.5",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      }
    })]);
  }
};

var Discount = {
  name: 'discount',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps__default["default"]([{
      "attrs": {
        "width": "24",
        "height": "24",
        "viewBox": "0 0 24 24",
        "fill": "none",
        "xmlns": "http://www.w3.org/2000/svg"
      }
    }, ctx.data]), [h("path", {
      "attrs": {
        "d": "M22.125 12C22.1327 11.2667 21.9092 10.5495 21.4863 9.95034C21.0634 9.35117 20.4626 8.9004 19.769 8.662C20.0993 8.00057 20.2179 7.25348 20.1088 6.52226C19.9997 5.79105 19.668 5.11116 19.159 4.575C18.6625 4.05171 18.0077 3.70631 17.2955 3.59209C16.5832 3.47787 15.8532 3.60119 15.218 3.943C15.0219 3.24033 14.6012 2.62117 14.0201 2.18007C13.439 1.73898 12.7295 1.5002 12 1.5002C11.2705 1.5002 10.561 1.73898 9.97994 2.18007C9.39886 2.62117 8.97814 3.24033 8.78201 3.943C8.14662 3.60128 7.41647 3.47802 6.70411 3.59223C5.99175 3.70643 5.33673 4.05177 4.84001 4.575C4.33114 5.11128 3.9997 5.79121 3.89075 6.52243C3.78179 7.25364 3.90059 8.00067 4.23101 8.662C3.54176 8.90695 2.94526 9.35929 2.52342 9.95689C2.10159 10.5545 1.87512 11.268 1.87512 11.9995C1.87512 12.731 2.10159 13.4445 2.52342 14.0421C2.94526 14.6397 3.54176 15.0921 4.23101 15.337C3.90059 15.9983 3.78179 16.7454 3.89075 17.4766C3.9997 18.2078 4.33114 18.8877 4.84001 19.424C5.33661 19.9474 5.99157 20.2929 6.70394 20.4073C7.4163 20.5217 8.14651 20.3986 8.78201 20.057C8.97814 20.7597 9.39886 21.3788 9.97994 21.8199C10.561 22.261 11.2705 22.4998 12 22.4998C12.7295 22.4998 13.439 22.261 14.0201 21.8199C14.6012 21.3788 15.0219 20.7597 15.218 20.057C15.8533 20.3987 16.5834 20.5218 17.2956 20.4074C18.0079 20.293 18.6627 19.9475 19.159 19.424C19.668 18.8878 19.9997 18.208 20.1088 17.4767C20.2179 16.7455 20.0993 15.9984 19.769 15.337C20.4625 15.0988 21.0633 14.6482 21.4862 14.0492C21.9091 13.4502 22.1326 12.7332 22.125 12V12Z",
        "stroke": "currentColor",
        "stroke-width": "1.5",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      }
    }), h("path", {
      "attrs": {
        "d": "M8.625 15.75L16.125 8.25",
        "stroke": "currentColor",
        "stroke-width": "1.5",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      }
    }), h("path", {
      "attrs": {
        "d": "M9.375 10.5C10.2034 10.5 10.875 9.82843 10.875 9C10.875 8.17157 10.2034 7.5 9.375 7.5C8.54657 7.5 7.875 8.17157 7.875 9C7.875 9.82843 8.54657 10.5 9.375 10.5Z",
        "stroke": "currentColor",
        "stroke-width": "1.5",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      }
    }), h("path", {
      "attrs": {
        "d": "M15.375 16.5C16.2034 16.5 16.875 15.8284 16.875 15C16.875 14.1716 16.2034 13.5 15.375 13.5C14.5466 13.5 13.875 14.1716 13.875 15C13.875 15.8284 14.5466 16.5 15.375 16.5Z",
        "stroke": "currentColor",
        "stroke-width": "1.5",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      }
    })]);
  }
};

var DoubleCheckmark = {
  name: 'double-checkmark',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps__default["default"]([{
      "attrs": {
        "width": "24",
        "height": "24",
        "viewBox": "0 0 24 24",
        "fill": "none",
        "xmlns": "http://www.w3.org/2000/svg"
      }
    }, ctx.data]), [h("path", {
      "attrs": {
        "d": "M23.2499 4.24899L11.8079 19.505C11.679 19.677 11.5146 19.8193 11.3259 19.9222C11.1372 20.0252 10.9286 20.0863 10.7142 20.1016C10.4998 20.1169 10.2846 20.0859 10.0832 20.0107C9.88182 19.9356 9.69894 19.818 9.54695 19.666L6.56995 16.689",
        "stroke": "currentColor",
        "stroke-width": "1.5",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      }
    }), h("path", {
      "attrs": {
        "d": "M6.00001 19.76C5.86131 19.9018 5.69585 20.0147 5.51322 20.0922C5.33058 20.1697 5.1344 20.2101 4.93602 20.2112C4.73764 20.2123 4.54101 20.1741 4.35752 20.0987C4.17402 20.0233 4.0073 19.9123 3.86701 19.772L0.890015 16.8",
        "stroke": "currentColor",
        "stroke-width": "1.5",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      }
    }), h("path", {
      "attrs": {
        "d": "M17.43 4.355L9.29004 15.209",
        "stroke": "currentColor",
        "stroke-width": "1.5",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      }
    })]);
  }
};

var Edit = {
  name: 'edit',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps__default["default"]([{
      "attrs": {
        "width": "24",
        "height": "24",
        "viewBox": "0 0 24 24",
        "fill": "none",
        "xmlns": "http://www.w3.org/2000/svg"
      }
    }, ctx.data]), [h("path", {
      "attrs": {
        "d": "M22.19 1.81001C21.8494 1.47082 21.4449 1.20248 20.9999 1.0205C20.555 0.838516 20.0784 0.746493 19.5977 0.749748C19.117 0.753002 18.6417 0.851469 18.1993 1.03946C17.7568 1.22745 17.356 1.50124 17.02 1.84501L2.52 16.345L0.75 23.25L7.655 21.479L22.155 6.97901C22.4989 6.64315 22.7727 6.24245 22.9608 5.80009C23.1488 5.35773 23.2473 4.88248 23.2506 4.40181C23.2539 3.92115 23.1618 3.44461 22.9798 2.99974C22.7977 2.55487 22.5293 2.15051 22.19 1.81001V1.81001Z",
        "stroke": "currentColor",
        "stroke-width": "1.5",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      }
    }), h("path", {
      "attrs": {
        "d": "M16.606 2.26001L21.74 7.39401",
        "stroke": "currentColor",
        "stroke-width": "1.5",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      }
    }), h("path", {
      "attrs": {
        "d": "M2.521 16.344L7.66 21.474",
        "stroke": "currentColor",
        "stroke-width": "1.5",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      }
    })]);
  }
};

var Employees = {
  name: 'employees',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps__default["default"]([{
      "attrs": {
        "width": "24",
        "height": "24",
        "viewBox": "0 0 24 24",
        "fill": "none",
        "xmlns": "http://www.w3.org/2000/svg"
      }
    }, ctx.data]), [h("path", {
      "attrs": {
        "d": "M0.749023 23.25C0.75248 22.1782 0.973973 21.1184 1.40002 20.135C1.87002 19.216 3.83102 18.578 6.29302 17.685C6.95902 17.444 6.85002 15.742 6.55502 15.424C6.08733 14.93 5.73112 14.3414 5.51047 13.6979C5.28982 13.0544 5.20987 12.371 5.27602 11.694C5.21149 10.8815 5.45939 10.0751 5.96912 9.43918C6.47885 8.80327 7.21202 8.38581 8.01902 8.27197",
        "stroke": "currentColor",
        "stroke-width": "1.25",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      }
    }), h("path", {
      "attrs": {
        "d": "M11.3999 13.1C11.2667 13.9788 10.8573 14.7923 10.2309 15.423C9.93594 15.741 9.82594 17.443 10.4929 17.684C12.9549 18.577 14.9159 19.215 15.3859 20.134C15.8136 21.1174 16.0401 22.1766 16.0519 23.249",
        "stroke": "currentColor",
        "stroke-width": "1.25",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      }
    }), h("path", {
      "attrs": {
        "d": "M19.3671 23.25H21.7351V22.433C21.7351 19.539 19.7351 19.072 17.7281 18.333C17.0631 18.086 17.1721 16.349 17.4661 16.025C18.1382 15.3315 18.5604 14.434 18.6661 13.474",
        "stroke": "currentColor",
        "stroke-width": "1.25",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      }
    }), h("path", {
      "attrs": {
        "d": "M15.749 11.264C18.6485 11.264 20.999 8.91347 20.999 6.01398C20.999 3.11448 18.6485 0.763977 15.749 0.763977C12.8495 0.763977 10.499 3.11448 10.499 6.01398C10.499 8.91347 12.8495 11.264 15.749 11.264Z",
        "stroke": "currentColor",
        "stroke-width": "1.25",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      }
    }), h("path", {
      "attrs": {
        "d": "M23.2491 13.514L19.4611 9.72601",
        "stroke": "currentColor",
        "stroke-width": "1.25",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      }
    })]);
  }
};

var Employes = {
  name: 'employes',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps__default["default"]([{
      "attrs": {
        "width": "24px",
        "height": "24px",
        "viewBox": "0 0 24 24",
        "xmlns": "http://www.w3.org/2000/svg"
      }
    }, ctx.data]), [h("g", {
      "attrs": {
        "fill": "currentColor"
      }
    }, [h("path", {
      "attrs": {
        "d": "M20.717 12.878c.0033-.0366-.0014-.0735-.0138-.108-.0124-.0346-.0323-.066-.0582-.092l-.668-.668c-.0351-.0351-.0797-.0589-.1283-.0685-.0486-.0096-.099-.0046-.1447.0145-1.5522.6497-3.286.7207-4.886.2-.0592-.0198-.1236-.0166-.1805.0089-.0569.0256-.1021.0717-.1265.1291-.2517.5856-.577 1.1367-.968 1.64-.0232.0307-.0392.0663-.0466.104-.0075.0378-.0062.0768.0036.114.0664.2451.1506.4851.252.718.0146.0305.0353.0578.0607.0801.0254.0224.0551.0393.0873.0499 2.435.9 5.605 2.391 5.605 7v1.5c0 .0742-.004.1483-.012.222-.0038.035-.0002.0704.0106.1039s.0285.0643.052.0906c.0234.0262.0522.0472.0843.0615.0321.0144.0669.0219.1021.022H23.5c.1326 0 .2598-.0527.3535-.1465.0938-.0937.1465-.2209.1465-.3535v-.853c0-3.1-2.161-3.871-4.068-4.55l-.49-.177c-.0311-.0112-.0597-.0284-.0841-.0507-.0244-.0224-.0441-.0493-.0579-.0793-.0296-.0641-.0524-.1312-.068-.2-.0831-.4098-.0718-.8332.033-1.238.0109-.0333.0286-.0639.052-.09.8622-.9205 1.3598-2.1234 1.4-3.384z"
      }
    }), h("path", {
      "attrs": {
        "d": "M10 5.50001c-.00073-.69892.1034-1.39399.309-2.062.0101-.03303.0132-.06779.0092-.10209s-.015-.06741-.0324-.09725c-.0173-.02985-.0407-.05579-.0685-.07621-.0279-.02042-.0596-.03487-.0933-.04245-.36925-.08035-.74611-.12058-1.124-.12-.65452-.01859-1.30556.10152-1.91035.35246-.6048.25093-1.14964.627-1.59875 1.10349-.4491.47649-.79229 1.04263-1.00702 1.6612-.21473.61857-.29614 1.27558-.23888 1.92785 0 3.18499.917 4.47599 1.856 5.51199.01571.0177.02884.0376.039.059.19812.6199.2189 1.2829.06 1.914-.076.256-.175.373-.242.4-.253.093-.508.183-.763.274C2.762 17.064 0 18.042 0 22v1.5c0 .1326.0526784.2598.146447.3536C.240215 23.9473.367392 24 .5 24h17c.1326 0 .2598-.0527.3536-.1464.0937-.0938.1464-.221.1464-.3536V22c0-3.948-2.773-4.935-5.22-5.806l-.739-.266c-.067-.025-.166-.142-.242-.4-.1565-.6284-.1371-1.2878.056-1.906.0106-.0222.0244-.0428.041-.061.5445-.568.9798-1.2314 1.284-1.957.0216-.0529.0242-.1117.0075-.1664-.0168-.0547-.0519-.1019-.0995-.1336-.9506-.6406-1.7293-1.50491-2.2678-2.51691-.5384-1.012-.8201-2.14075-.8202-3.28708z"
      }
    }), h("path", {
      "attrs": {
        "d": "M19.949 10.14c.0479-.0306.1049-.0439.1614-.0377.0566.0062.1093.0315.1496.0717l2.033 2.033c.0929.0928.2032.1665.3245.2167.1214.0502.2515.076.3828.076.1314-.0001.2614-.026.3827-.0763.1214-.0503.2316-.124.3245-.2169.0928-.0929.1664-.2032.2167-.3246.0502-.1213.076-.2514.076-.3828-.0001-.1313-.026-.2614-.0763-.3827-.0503-.1213-.124-.2316-.2169-.3244l-2.033-2.03201c-.0402-.04024-.0655-.09298-.0717-.14953-.0062-.05654.0071-.1135.0377-.16147.7278-1.1443 1.0077-2.51695.786-3.85485-.2217-1.33791-.9293-2.54695-1.9872-3.39539C19.3808.3503 18.047-.0778646 16.6929-.00368327 15.3388.0704981 14.0596.641807 13.1007 1.60074c-.9589.95894-1.5302 2.23804-1.6044 3.59215-.0742 1.35411.354 2.68797 1.2024 3.74592.8485 1.05795 2.0575 1.76559 3.3954 1.98719 1.3379.2217 2.7106-.0582 3.8549-.786zM13.5 5.49999c0-.69224.2052-1.36893.5898-1.9445.3846-.57557.9312-1.02417 1.5708-1.28908.6395-.26491 1.3432-.33422 2.0222-.19917.6789.13505 1.3025.46839 1.792.95787.4895.48949.8229 1.11313.9579 1.79206.1351.67894.0657 1.38267-.1992 2.02221-.2649.63954-.7135 1.18617-1.289 1.57075-.5756.38459-1.2523.58986-1.9445.58986-.9283 0-1.8185-.36875-2.4749-1.02513C13.8687 7.31848 13.5 6.42825 13.5 5.49999z"
      }
    })])]);
  }
};

var ExternalLink = {
  name: 'external-link',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var _attrs;

    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps__default["default"]([{
      "attrs": (_attrs = {
        "xmlns": "http://www.w3.org/2000/svg"
      }, _defineProperty(_attrs, "xmlns", "http://www.w3.org/1999/xlink"), _defineProperty(_attrs, "width", "24px"), _defineProperty(_attrs, "height", "24px"), _defineProperty(_attrs, "viewBox", "0 0 24 24"), _defineProperty(_attrs, "version", "1.1"), _attrs)
    }, ctx.data]), [h("g", {
      "attrs": {
        "id": "surface1"
      }
    }, [h("path", {
      "attrs": {
        "fill": "currentColor",
        "d": "M 10.90625 5.074219 C 10.90625 4.6875 10.753906 4.316406 10.480469 4.042969 C 10.207031 3.769531 9.839844 3.617188 9.453125 3.617188 L 4.363281 3.617188 C 3.207031 3.617188 2.097656 4.078125 1.277344 4.894531 C 0.460938 5.714844 0 6.824219 0 7.984375 L 0 19.632812 C 0 20.789062 0.460938 21.902344 1.277344 22.71875 C 2.097656 23.539062 3.207031 24 4.363281 24 L 15.996094 24 C 17.152344 24 18.261719 23.539062 19.082031 22.71875 C 19.898438 21.902344 20.359375 20.789062 20.359375 19.632812 L 20.359375 15.992188 C 20.359375 15.605469 20.207031 15.234375 19.933594 14.960938 C 19.660156 14.691406 19.289062 14.535156 18.90625 14.535156 C 18.519531 14.535156 18.148438 14.691406 17.875 14.960938 C 17.605469 15.234375 17.449219 15.605469 17.449219 15.992188 L 17.449219 19.632812 C 17.449219 20.019531 17.296875 20.386719 17.023438 20.660156 C 16.753906 20.933594 16.382812 21.089844 15.996094 21.089844 L 4.363281 21.089844 C 3.976562 21.089844 3.605469 20.933594 3.335938 20.660156 C 3.0625 20.386719 2.910156 20.019531 2.910156 19.632812 L 2.910156 7.984375 C 2.910156 7.597656 3.0625 7.226562 3.335938 6.953125 C 3.605469 6.683594 3.976562 6.527344 4.363281 6.527344 L 9.453125 6.527344 C 9.644531 6.527344 9.832031 6.492188 10.007812 6.417969 C 10.183594 6.34375 10.34375 6.238281 10.480469 6.101562 C 10.617188 5.96875 10.722656 5.804688 10.796875 5.628906 C 10.867188 5.453125 10.90625 5.265625 10.90625 5.074219 Z M 10.90625 5.074219 "
      }
    }), h("path", {
      "attrs": {
        "fill": "currentColor",
        "d": "M 8.726562 17.449219 C 9.300781 17.449219 9.855469 17.21875 10.265625 16.808594 L 19.671875 7.40625 C 19.707031 7.375 19.746094 7.347656 19.789062 7.328125 C 19.832031 7.308594 19.882812 7.300781 19.929688 7.300781 C 19.976562 7.300781 20.023438 7.308594 20.066406 7.328125 C 20.113281 7.347656 20.152344 7.375 20.1875 7.40625 L 22.757812 9.976562 C 22.824219 10.046875 22.90625 10.097656 22.996094 10.136719 C 23.082031 10.171875 23.175781 10.191406 23.273438 10.191406 C 23.367188 10.191406 23.460938 10.171875 23.550781 10.136719 C 23.683594 10.082031 23.796875 9.988281 23.878906 9.867188 C 23.957031 9.75 24 9.609375 24 9.464844 L 24 0.726562 C 24 0.535156 23.921875 0.351562 23.785156 0.214844 C 23.652344 0.078125 23.464844 0 23.273438 0 L 14.546875 0 C 14.402344 0 14.261719 0.0429688 14.144531 0.121094 C 14.023438 0.203125 13.929688 0.316406 13.875 0.449219 C 13.820312 0.582031 13.804688 0.726562 13.835938 0.871094 C 13.863281 1.011719 13.929688 1.140625 14.03125 1.242188 L 16.59375 3.804688 C 16.660156 3.875 16.699219 3.964844 16.699219 4.0625 C 16.699219 4.109375 16.691406 4.15625 16.671875 4.203125 C 16.652344 4.246094 16.625 4.285156 16.59375 4.320312 L 7.183594 13.71875 C 6.878906 14.023438 6.671875 14.414062 6.585938 14.835938 C 6.5 15.261719 6.542969 15.699219 6.710938 16.097656 C 6.875 16.5 7.152344 16.839844 7.511719 17.078125 C 7.871094 17.320312 8.292969 17.449219 8.726562 17.449219 Z M 8.726562 17.449219 "
      }
    })])]);
  }
};

var EyeClose = {
  name: 'eye-close',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps__default["default"]([{
      "attrs": {
        "xmlns": "http://www.w3.org/2000/svg",
        "width": "24px",
        "height": "24px",
        "viewBox": "0 0 24 24"
      }
    }, ctx.data]), [h("g", {
      "attrs": {
        "fill": "currentColor"
      }
    }, [h("path", {
      "attrs": {
        "d": "M12.001 16c-2.206 0-4-1.794-4-4s1.794-4 4-4 4 1.794 4 4-1.795 4-4 4zm0-7c-1.654 0-3 1.346-3 3s1.346 3 3 3 3-1.346 3-3-1.346-3-3-3z"
      }
    }), h("path", {
      "attrs": {
        "d": "M12.001 19C6.281 19 1.56 14.146.25 12.658a1.006 1.006 0 01-.002-1.315C1.559 9.855 6.281 5 12.001 5c5.714 0 10.432 4.845 11.747 6.337l.006.007c.325.374.325.938 0 1.312C22.442 14.145 17.72 19 12.001 19zm0-13C6.701 6 2.24 10.594 1 12.003 2.241 13.406 6.7 18 12.001 18c5.3 0 9.76-4.594 11.001-6.003C21.76 10.594 17.3 6 12.001 6z"
      }
    })])]);
  }
};

var Eye = {
  name: 'eye',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps__default["default"]([{
      "attrs": {
        "xmlns": "http://www.w3.org/2000/svg",
        "width": "24px",
        "height": "24px",
        "viewBox": "0 0 24 24"
      }
    }, ctx.data]), [h("g", {
      "attrs": {
        "fill": "currentColor"
      }
    }, [h("path", {
      "attrs": {
        "d": "M12 19C5.481 19 .324 12.584.108 12.311a.498.498 0 010-.621C.325 11.416 5.483 5 12 5c6.514 0 11.676 6.416 11.892 6.689a.498.498 0 010 .621C23.676 12.584 18.516 19 12 19zM1.155 12C2.304 13.315 6.763 18 12 18c5.239 0 9.697-4.684 10.845-6C21.697 10.684 17.236 6 12 6c-5.24 0-9.697 4.684-10.845 6z"
      }
    }), h("path", {
      "attrs": {
        "d": "M12 16.5A4.505 4.505 0 017.5 12c0-2.481 2.019-4.5 4.5-4.5s4.5 2.019 4.5 4.5-2.019 4.5-4.5 4.5zm0-8c-1.93 0-3.5 1.57-3.5 3.5s1.57 3.5 3.5 3.5 3.5-1.57 3.5-3.5-1.57-3.5-3.5-3.5z"
      }
    }), h("path", {
      "attrs": {
        "d": "M12 14.5A2.503 2.503 0 019.5 12a.5.5 0 011 0c0 .827.673 1.5 1.5 1.5s1.5-.673 1.5-1.5-.673-1.5-1.5-1.5a.5.5 0 010-1c1.378 0 2.5 1.121 2.5 2.5 0 1.378-1.122 2.5-2.5 2.5z"
      }
    })])]);
  }
};

var Feedback = {
  name: 'feedback',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps__default["default"]([{
      "attrs": {
        "width": "24",
        "height": "24",
        "viewBox": "0 0 24 24",
        "fill": "none",
        "xmlns": "http://www.w3.org/2000/svg"
      }
    }, ctx.data]), [h("path", {
      "attrs": {
        "d": "M17.25 23.25C20.5637 23.25 23.25 20.5637 23.25 17.25C23.25 13.9363 20.5637 11.25 17.25 11.25C13.9363 11.25 11.25 13.9363 11.25 17.25C11.25 20.5637 13.9363 23.25 17.25 23.25Z",
        "stroke": "currentColor",
        "stroke-width": "1.5",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      }
    }), h("path", {
      "attrs": {
        "d": "M17.25 14.25V20.25",
        "stroke": "currentColor",
        "stroke-width": "1.5",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      }
    }), h("path", {
      "attrs": {
        "d": "M14.25 17.25H20.25",
        "stroke": "currentColor",
        "stroke-width": "1.5",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      }
    }), h("path", {
      "attrs": {
        "d": "M8.223 19.9L3.75 23.25V18.75H2.25C1.85218 18.75 1.47064 18.592 1.18934 18.3107C0.908035 18.0294 0.75 17.6478 0.75 17.25V2.25C0.75 1.85218 0.908035 1.47064 1.18934 1.18934C1.47064 0.908035 1.85218 0.75 2.25 0.75H21.75C22.1478 0.75 22.5294 0.908035 22.8107 1.18934C23.092 1.47064 23.25 1.85218 23.25 2.25V9.75",
        "stroke": "currentColor",
        "stroke-width": "1.5",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      }
    })]);
  }
};

var GiftBox = {
  name: 'gift-box',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var _attrs;

    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps__default["default"]([{
      "attrs": (_attrs = {
        "xmlns": "http://www.w3.org/2000/svg"
      }, _defineProperty(_attrs, "xmlns", "http://www.w3.org/1999/xlink"), _defineProperty(_attrs, "width", "24px"), _defineProperty(_attrs, "height", "24px"), _defineProperty(_attrs, "viewBox", "0 0 24 24"), _defineProperty(_attrs, "version", "1.1"), _attrs)
    }, ctx.data]), [h("g", {
      "attrs": {
        "fill": "currentColor"
      }
    }, [h("path", {
      "attrs": {
        "d": "M 3.5 24.003906 C 2.671875 24.003906 2 23.328125 2 22.503906 L 2 12.003906 L 1.5 12.003906 C 0.671875 12.003906 0 11.328125 0 10.503906 L 0 8.503906 C 0 7.675781 0.671875 7.003906 1.5 7.003906 L 22.5 7.003906 C 23.328125 7.003906 24 7.675781 24 8.503906 L 24 10.503906 C 24 11.328125 23.328125 12.003906 22.5 12.003906 L 22 12.003906 L 22 22.503906 C 22 23.328125 21.328125 24.003906 20.5 24.003906 Z M 20.5 23.003906 C 20.777344 23.003906 21 22.777344 21 22.503906 L 21 12.003906 L 16 12.003906 L 16 23.003906 Z M 15 23.003906 L 15 12.003906 L 9 12.003906 L 9 23.003906 Z M 3 22.503906 C 3 22.777344 3.222656 23.003906 3.5 23.003906 L 8 23.003906 L 8 12.003906 L 3 12.003906 Z M 22.5 11 C 22.777344 11 23 10.777344 23 10.5 L 23 8.5 C 23 8.226562 22.777344 8 22.5 8 L 16 8 L 16 11 Z M 15 11 L 15 8 L 9 8 L 9 11 Z M 1.5 8 C 1.222656 8 1 8.226562 1 8.5 L 1 10.5 C 1 10.777344 1.222656 11 1.5 11 L 8 11 L 8 8 Z M 1.5 8 "
      }
    }), h("path", {
      "attrs": {
        "d": "M 13 6 C 12.867188 6 12.742188 5.949219 12.644531 5.855469 C 12.523438 5.730469 12.472656 5.550781 12.515625 5.382812 C 12.671875 4.746094 13.488281 1.542969 14.304688 0.722656 C 14.765625 0.238281 15.394531 -0.0273438 16.070312 -0.0273438 C 16.710938 -0.0273438 17.3125 0.214844 17.773438 0.65625 C 18.246094 1.109375 18.515625 1.71875 18.527344 2.378906 C 18.542969 3.03125 18.300781 3.65625 17.847656 4.128906 C 17.824219 4.152344 17.800781 4.175781 17.777344 4.199219 C 16.953125 5.019531 13.753906 5.832031 13.117188 5.988281 C 13.082031 5.996094 13.039062 6 13 6 Z M 16.074219 0.972656 C 15.671875 0.972656 15.296875 1.132812 15.019531 1.421875 C 14.652344 1.789062 14.113281 3.320312 13.703125 4.800781 C 15.183594 4.390625 16.707031 3.855469 17.074219 3.488281 L 17.125 3.4375 C 17.394531 3.15625 17.535156 2.789062 17.527344 2.398438 C 17.519531 2.011719 17.363281 1.648438 17.082031 1.378906 C 16.808594 1.117188 16.449219 0.972656 16.074219 0.972656 Z M 16.074219 0.972656 "
      }
    }), h("path", {
      "attrs": {
        "d": "M 11 6 C 10.960938 6 10.917969 5.996094 10.878906 5.984375 C 10.246094 5.832031 7.039062 5.015625 6.21875 4.195312 C 5.296875 3.234375 5.296875 1.738281 6.210938 0.785156 C 6.664062 0.3125 7.277344 0.046875 7.933594 0.03125 L 7.972656 0.03125 C 8.617188 0.03125 9.226562 0.273438 9.6875 0.714844 C 10.511719 1.542969 11.328125 4.746094 11.484375 5.382812 C 11.527344 5.550781 11.476562 5.730469 11.355469 5.855469 C 11.257812 5.949219 11.132812 6 11 6 Z M 7.957031 1.03125 C 7.566406 1.039062 7.203125 1.199219 6.933594 1.476562 C 6.394531 2.042969 6.390625 2.929688 6.933594 3.492188 C 7.296875 3.855469 8.820312 4.390625 10.296875 4.800781 C 9.886719 3.320312 9.347656 1.792969 8.984375 1.425781 C 8.71875 1.171875 8.363281 1.03125 7.992188 1.03125 Z M 7.957031 1.03125 "
      }
    })])]);
  }
};

var Information = {
  name: 'information',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps__default["default"]([{
      "attrs": {
        "xmlns": "http://www.w3.org/2000/svg",
        "viewBox": "0 0 24 24"
      }
    }, ctx.data]), [h("g", {
      "attrs": {
        "fill": "none",
        "stroke-linecap": "round",
        "stroke-linejoin": "round",
        "stroke": "currentColor"
      }
    }, [h("path", {
      "attrs": {
        "d": "M23.145 12c0 6.152-4.993 11.145-11.145 11.145C5.848 23.145.855 18.152.855 12 .855 5.848 5.848.855 12 .855 18.152.855 23.145 5.848 23.145 12ZM12 12v6",
        "stroke-width": "1.71429"
      }
    }), h("path", {
      "attrs": {
        "d": "M12.855 7.715a.855.855 0 1 1-1.71 0c0-.473.382-.86.855-.86s.855.387.855.86Zm0 0",
        "stroke-width": "1.71429"
      }
    })])]);
  }
};

var Insight = {
  name: 'insight',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps__default["default"]([{
      "attrs": {
        "width": "24",
        "height": "24",
        "viewBox": "0 0 24 24",
        "fill": "none",
        "xmlns": "http://www.w3.org/2000/svg"
      }
    }, ctx.data]), [h("g", {
      "attrs": {
        "fill": "currentColor"
      }
    }, [h("path", {
      "attrs": {
        "d": "M23 10.5c.1326 0 .2598-.0527.3536-.1464.0937-.0938.1464-.221.1464-.3536-.0032-2.65119-1.0578-5.19288-2.9324-7.06756C18.6929 1.05776 16.1512.00317572 13.5 0c-.1326 0-.2598.0526784-.3536.146447C13.0527.240215 13 .367392 13 .5v9.025c.0003.2586.103.5065.2858.6895.1828.1829.4306.286.6892.2865L23 10.5zM23.5 12H14c-.1473-.0188-.2968.0114-.4253.0859-.1286.0745-.229.1893-.2859.3265-.0568.1373-.0669.2895-.0288.433.0382.1436.1225.2707.24.3616l6.718 6.718c.0938.0937.2209.1464.3535.1464.1326 0 .2598-.0527.3535-.1464.978-.9729 1.7533-2.1301 2.2812-3.4045.5278-1.2745.7976-2.6411.7938-4.0205 0-.1326-.0526-.2598-.1464-.3536-.0938-.0937-.221-.1464-.3536-.1464z"
      }
    }), h("path", {
      "attrs": {
        "d": "M10.588 24c1.3662-.0029 2.7182-.277 3.9777-.8064S16.967 21.89 17.925 20.916c.0938-.0938.1464-.2209.1464-.3535 0-.1326-.0526-.2597-.1464-.3535l-6.718-6.718c-.1181-.1418-.1903-.3162-.207-.5v-9.5c0-.13261-.0527-.25979-.1464-.35356-.0938-.09376-.221-.14644-.3536-.14644-2.78595.01167-5.45317 1.12958-7.41489 3.10781C1.12338 8.07703.0278515 10.7535.039521 13.5395c.0116695 2.786 1.129579 5.4532 3.107809 7.4149C5.12556 22.9161 7.80205 24.0117 10.588 24z"
      }
    })])]);
  }
};

var Invoice = {
  name: 'invoice',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps__default["default"]([{
      "attrs": {
        "width": "24",
        "height": "24",
        "viewBox": "0 0 24 24",
        "fill": "none",
        "xmlns": "http://www.w3.org/2000/svg"
      }
    }, ctx.data]), [h("path", {
      "attrs": {
        "d": "M21.75 21.75C21.75 22.1478 21.592 22.5294 21.3107 22.8107C21.0294 23.092 20.6478 23.25 20.25 23.25H3.75C3.35218 23.25 2.97064 23.092 2.68934 22.8107C2.40804 22.5294 2.25 22.1478 2.25 21.75V2.25C2.25 1.85218 2.40804 1.47064 2.68934 1.18934C2.97064 0.908035 3.35218 0.75 3.75 0.75H14.379C14.7765 0.750085 15.1578 0.907982 15.439 1.189L21.311 7.061C21.592 7.3422 21.7499 7.72345 21.75 8.121V21.75Z",
        "stroke": "currentColor",
        "stroke-width": "1.5",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      }
    }), h("path", {
      "attrs": {
        "d": "M21.75 8.25H15.75C15.3522 8.25 14.9706 8.09196 14.6893 7.81066C14.408 7.52936 14.25 7.14782 14.25 6.75V0.75",
        "stroke": "currentColor",
        "stroke-width": "1.5",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      }
    }), h("path", {
      "attrs": {
        "d": "M6.2 11.594C6.41657 11.8784 6.69852 12.1065 7.02195 12.2588C7.34539 12.4111 7.70078 12.4832 8.058 12.469C9.197 12.469 10.121 11.776 10.121 10.922C10.121 10.068 9.2 9.376 8.062 9.376C6.924 9.376 6 8.683 6 7.828C6 6.973 6.924 6.281 8.062 6.281C8.41926 6.26652 8.77473 6.3385 9.09821 6.49084C9.42169 6.64318 9.7036 6.87136 9.92 7.156",
        "stroke": "currentColor",
        "stroke-width": "1.5",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      }
    }), h("path", {
      "attrs": {
        "d": "M8.06201 12.469V13.5",
        "stroke": "currentColor",
        "stroke-width": "1.5",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      }
    }), h("path", {
      "attrs": {
        "d": "M8.06201 5.25V6.281",
        "stroke": "currentColor",
        "stroke-width": "1.5",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      }
    }), h("path", {
      "attrs": {
        "d": "M12 15H18",
        "stroke": "currentColor",
        "stroke-width": "1.5",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      }
    }), h("path", {
      "attrs": {
        "d": "M6.75 19.5H18",
        "stroke": "currentColor",
        "stroke-width": "1.5",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      }
    })]);
  }
};

var Key = {
  name: 'key',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps__default["default"]([{
      "attrs": {
        "width": "24",
        "height": "24",
        "viewBox": "0 0 24 24",
        "fill": "none",
        "xmlns": "http://www.w3.org/2000/svg"
      }
    }, ctx.data]), [h("path", {
      "attrs": {
        "d": "M18.75 9.75H5.25C4.42157 9.75 3.75 10.4216 3.75 11.25V21.75C3.75 22.5784 4.42157 23.25 5.25 23.25H18.75C19.5784 23.25 20.25 22.5784 20.25 21.75V11.25C20.25 10.4216 19.5784 9.75 18.75 9.75Z",
        "stroke": "currentColor",
        "stroke-width": "1.5",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      }
    }), h("path", {
      "attrs": {
        "d": "M6.75 9.75V6C6.75 4.60761 7.30312 3.27226 8.28769 2.28769C9.27226 1.30312 10.6076 0.75 12 0.75C13.3924 0.75 14.7277 1.30312 15.7123 2.28769C16.6969 3.27226 17.25 4.60761 17.25 6V9.75",
        "stroke": "currentColor",
        "stroke-width": "1.5",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      }
    }), h("path", {
      "attrs": {
        "d": "M12 15V18",
        "stroke": "currentColor",
        "stroke-width": "1.5",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      }
    })]);
  }
};

var LikeAdd = {
  name: 'like-add',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps__default["default"]([{
      "attrs": {
        "width": "24",
        "height": "24",
        "viewBox": "0 0 24 24",
        "fill": "none",
        "xmlns": "http://www.w3.org/2000/svg"
      }
    }, ctx.data]), [h("g", {
      "attrs": {
        "clip-path": "url(#clip0)"
      }
    }, [h("path", {
      "attrs": {
        "d": "M17.254 23.25C20.5677 23.25 23.254 20.5637 23.254 17.25C23.254 13.9363 20.5677 11.25 17.254 11.25C13.9403 11.25 11.254 13.9363 11.254 17.25C11.254 20.5637 13.9403 23.25 17.254 23.25Z",
        "stroke": "currentColor",
        "stroke-width": "1.5",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      }
    }), h("path", {
      "attrs": {
        "d": "M17.254 14.25V20.25",
        "stroke": "currentColor",
        "stroke-width": "1.5",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      }
    }), h("path", {
      "attrs": {
        "d": "M14.254 17.25H20.254",
        "stroke": "currentColor",
        "stroke-width": "1.5",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      }
    }), h("path", {
      "attrs": {
        "d": "M8.21896 16.5L2.40796 10.435C1.56586 9.59307 1.01005 8.5075 0.819263 7.3321C0.628478 6.1567 0.812396 4.95106 1.34496 3.886V3.886C1.74695 3.08203 2.33426 2.3851 3.05848 1.85268C3.7827 1.32026 4.62309 0.967579 5.51037 0.823719C6.39765 0.679859 7.30642 0.748936 8.16177 1.02526C9.01711 1.30158 9.79454 1.77723 10.43 2.413L12 3.978L13.566 2.413C14.2014 1.77723 14.9788 1.30158 15.8342 1.02526C16.6895 0.748936 17.5983 0.679859 18.4856 0.823719C19.3728 0.967579 20.2132 1.32026 20.9374 1.85268C21.6617 2.3851 22.249 3.08203 22.651 3.886V3.886C23.0476 4.68075 23.2522 5.55751 23.2482 6.44574C23.2442 7.33396 23.0317 8.20885 22.628 9",
        "stroke": "currentColor",
        "stroke-width": "1.5",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      }
    })]), h("defs", [h("clipPath", {
      "attrs": {
        "id": "clip0"
      }
    }, [h("rect", {
      "attrs": {
        "width": "24",
        "height": "24",
        "fill": "white"
      }
    })])])]);
  }
};

var NavigationMenu4 = {
  name: 'navigation-menu-4',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var _attrs;

    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps__default["default"]([{
      "attrs": (_attrs = {
        "xmlns": "http://www.w3.org/2000/svg"
      }, _defineProperty(_attrs, "xmlns", "http://www.w3.org/1999/xlink"), _defineProperty(_attrs, "width", "24px"), _defineProperty(_attrs, "height", "24px"), _defineProperty(_attrs, "viewBox", "0 0 24 24"), _defineProperty(_attrs, "version", "1.1"), _attrs)
    }, ctx.data]), [h("g", {
      "attrs": {
        "fill": "currentColor"
      }
    }, [h("path", {
      "attrs": {
        "d": "M 6.75 8.5 C 6.472656 8.5 6.25 8.277344 6.25 8 C 6.25 7.722656 6.472656 7.5 6.75 7.5 L 17.25 7.5 C 17.527344 7.5 17.75 7.722656 17.75 8 C 17.75 8.277344 17.527344 8.5 17.25 8.5 Z M 6.75 8.5 "
      }
    }), h("path", {
      "attrs": {
        "d": "M 6.75 12.5 C 6.472656 12.5 6.25 12.277344 6.25 12 C 6.25 11.722656 6.472656 11.5 6.75 11.5 L 17.25 11.5 C 17.527344 11.5 17.75 11.722656 17.75 12 C 17.75 12.277344 17.527344 12.5 17.25 12.5 Z M 6.75 12.5 "
      }
    }), h("path", {
      "attrs": {
        "d": "M 6.75 16.5 C 6.472656 16.5 6.25 16.277344 6.25 16 C 6.25 15.722656 6.472656 15.5 6.75 15.5 L 17.25 15.5 C 17.527344 15.5 17.75 15.722656 17.75 16 C 17.75 16.277344 17.527344 16.5 17.25 16.5 Z M 6.75 16.5 "
      }
    }), h("path", {
      "attrs": {
        "d": "M 2.5 24 C 1.121094 24 0 22.878906 0 21.5 L 0 2.5 C 0 1.121094 1.121094 0 2.5 0 L 21.5 0 C 22.878906 0 24 1.121094 24 2.5 L 24 21.5 C 24 22.878906 22.878906 24 21.5 24 Z M 2.5 1 C 1.671875 1 1 1.671875 1 2.5 L 1 21.5 C 1 22.328125 1.671875 23 2.5 23 L 21.5 23 C 22.328125 23 23 22.328125 23 21.5 L 23 2.5 C 23 1.671875 22.328125 1 21.5 1 Z M 2.5 1 "
      }
    })])]);
  }
};

var NavigationMenuVertical = {
  name: 'navigation-menu-vertical',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps__default["default"]([{
      "attrs": {
        "xmlns": "http://www.w3.org/2000/svg",
        "width": "24",
        "height": "24",
        "viewBox": "0 0 24 24",
        "fill": "none"
      }
    }, ctx.data]), [h("g", [h("path", {
      "attrs": {
        "fill": "currentColor",
        "d": "M12,6c-1.654,0-3-1.346-3-3s1.346-3,3-3c1.654,0,3,1.346,3,3S13.654,6,12,6z M12,1c-1.103,0-2,0.897-2,2s0.897,2,2,2s2-0.897,2-2S13.103,1,12,1z"
      }
    }), h("path", {
      "attrs": {
        "fill": "currentColor",
        "d": "M12,15c-1.654,0-3-1.346-3-3c0-1.654,1.346-3,3-3c1.654,0,3,1.346,3,3C15,13.654,13.654,15,12,15z M12,10c-1.103,0-2,0.897-2,2s0.897,2,2,2s2-0.897,2-2S13.103,10,12,10z"
      }
    }), h("path", {
      "attrs": {
        "fill": "currentColor",
        "d": "M12,24c-1.654,0-3-1.346-3-3s1.346-3,3-3c1.654,0,3,1.346,3,3S13.654,24,12,24z M12,19c-1.103,0-2,0.897-2,2s0.897,2,2,2s2-0.897,2-2S13.103,19,12,19z"
      }
    })])]);
  }
};

var OrderManagement = {
  name: 'order-management',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps__default["default"]([{
      "attrs": {
        "width": "24",
        "height": "24",
        "viewBox": "0 0 24 24",
        "fill": "none",
        "xmlns": "http://www.w3.org/2000/svg"
      }
    }, ctx.data]), [h("path", {
      "attrs": {
        "d": "M21.75 21.75C21.75 22.1478 21.592 22.5294 21.3107 22.8107C21.0294 23.092 20.6478 23.25 20.25 23.25H3.75C3.35218 23.25 2.97064 23.092 2.68934 22.8107C2.40804 22.5294 2.25 22.1478 2.25 21.75V2.25C2.25 1.85218 2.40804 1.47064 2.68934 1.18934C2.97064 0.908035 3.35218 0.75 3.75 0.75H14.379C14.7765 0.750085 15.1578 0.907982 15.439 1.189L21.311 7.061C21.592 7.3422 21.7499 7.72345 21.75 8.121V21.75Z",
        "stroke": "currentColor",
        "stroke-width": "1.25",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      }
    }), h("path", {
      "attrs": {
        "d": "M21.75 8.25H15.75C15.3522 8.25 14.9706 8.09197 14.6893 7.81066C14.408 7.52936 14.25 7.14783 14.25 6.75V0.75",
        "stroke": "currentColor",
        "stroke-width": "1.25",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      }
    }), h("path", {
      "attrs": {
        "d": "M6.2 11.594C6.41657 11.8784 6.69852 12.1065 7.02195 12.2588C7.34539 12.4111 7.70078 12.4832 8.058 12.469C9.197 12.469 10.121 11.776 10.121 10.922C10.121 10.068 9.2 9.376 8.062 9.376C6.924 9.376 6 8.683 6 7.828C6 6.973 6.924 6.281 8.062 6.281C8.41926 6.26652 8.77473 6.3385 9.09821 6.49084C9.42169 6.64318 9.7036 6.87136 9.92 7.156",
        "stroke": "currentColor",
        "stroke-width": "1.25",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      }
    }), h("path", {
      "attrs": {
        "d": "M8.06201 12.469V13.5",
        "stroke": "currentColor",
        "stroke-width": "1.25",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      }
    }), h("path", {
      "attrs": {
        "d": "M8.06201 5.25V6.281",
        "stroke": "currentColor",
        "stroke-width": "1.25",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      }
    }), h("path", {
      "attrs": {
        "d": "M12 15H18",
        "stroke": "currentColor",
        "stroke-width": "1.25",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      }
    }), h("path", {
      "attrs": {
        "d": "M6.75 19.5H18",
        "stroke": "currentColor",
        "stroke-width": "1.25",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      }
    })]);
  }
};

var Order = {
  name: 'order',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps__default["default"]([{
      "attrs": {
        "width": "24",
        "height": "24",
        "viewBox": "0 0 24 24",
        "xmlns": "http://www.w3.org/2000/svg"
      }
    }, ctx.data]), [h("g", {
      "attrs": {
        "fill": "currentColor"
      }
    }, [h("path", {
      "attrs": {
        "d": "M8.49998 15.5H13.75c.1326 0 .2598-.0527.3535-.1464.0938-.0938.1465-.221.1465-.3536v-2.25c0-.0663.0263-.1299.0732-.1768.0469-.0469.1105-.0732.1768-.0732h.75c.0759 0 .1509-.0173.2191-.0507.0683-.0333.1281-.0817.1748-.1415.0468-.0599.0793-.1296.095-.2039.0158-.0743.0145-.1512-.0039-.2249l-.608-2.432c-.0675-.27062-.2235-.51088-.4433-.6825-.2199-.17162-.4908-.26474-.7697-.2645H12.25c-.1326 0-.2598.05268-.3536.14645-.0937.09376-.1464.22094-.1464.35355 0 .16576-.0659.32473-.1831.44194-.1172.11721-.2762.18306-.4419.18306-.1658 0-.3247-.06585-.442-.18306C10.5658 9.32473 10.5 9.16576 10.5 9c0-.13261-.0527-.25979-.1465-.35355-.0937-.09377-.2209-.14645-.35352-.14645h-1.664c-.27889-.00024-.54983.09288-.76966.2645-.21984.17162-.3759.41188-.44334.6825l-.608 2.432c-.01838.0737-.01973.1506-.00395.2249.01579.0743.04828.144.09503.2039.04675.0598.10652.1082.17477.1415.06826.0334.14321.0507.21915.0507h.75c.06631 0 .1299.0263.17678.0732.04689.0469.07322.1105.07322.1768V15c0 .1326.05268.2598.14645.3536.09377.0937.22095.1464.35355.1464zM21.251 19.837c-.0289-.0289-.0504-.0644-.0625-.1035-.012-.0391-.0143-.0805-.0066-.1207s.0251-.0779.0508-.1098c.0256-.0318.0587-.0569.0963-.073l1.077-.461c.0906-.0387.1677-.1033.2217-.1857.054-.0823.0824-.1788.0818-.2773-.0007-.0985-.0304-.1946-.0854-.2762-.0551-.0817-.133-.1453-.2241-.1828l-6.29-2.59c-.0912-.0376-.1915-.0473-.2882-.028-.0967.0193-.1856.0668-.2554.1365-.0698.0697-.1174.1585-.1369.2552-.0195.0967-.0099.197.0275.2883l2.59 6.29c.0375.0911.101.1691.1826.2242.0816.0552.1776.085.2761.0857.0985.0008.195-.0276.2774-.0815.0825-.0539.1471-.1309.1859-.2214l.461-1.077c.0163-.0375.0415-.0705.0734-.0961.0319-.0256.0695-.0431.1096-.0509.0402-.0078.0816-.0055.1207.0065.039.012.0745.0335.1033.0625l2.456 2.456c.1886.1822.4412.283.7034.2807.2622-.0023.5131-.1075.6985-.2929s.2905-.4362.2928-.6984c.0023-.2622-.0985-.5148-.2807-.7034l-2.456-2.456z"
      }
    }), h("path", {
      "attrs": {
        "d": "M22 0H2C1.46957 0 .960859.210714.585786.585786.210714.960859 0 1.46957 0 2v16.694c.0274179.5041.253085.9769.627767 1.3152.374683.3384.867963.5148 1.372233.4908h12c.2652 0 .5196-.1054.7071-.2929S15 19.7652 15 19.5c0-.2652-.1054-.5196-.2929-.7071S14.2652 18.5 14 18.5l-11.5-.016c-.13261 0-.25979-.0527-.35355-.1464C2.05268 18.2438 2 18.1166 2 17.984V6c0-.13261.05268-.25979.14645-.35355C2.24021 5.55268 2.36739 5.5 2.5 5.5h19c.1326 0 .2598.05268.3536.14645C21.9473 5.74021 22 5.86739 22 6v9.5c0 .2652.1054.5196.2929.7071s.4419.2929.7071.2929c.2652 0 .5196-.1054.7071-.2929S24 15.7652 24 15.5V2c0-.53043-.2107-1.039141-.5858-1.414214C23.0391.210714 22.5304 0 22 0zM8 2.5c0 .19778-.05865.39112-.16853.55557-.10988.16445-.26606.29262-.44879.36831-.18272.07569-.38379.09549-.57777.05691-.19398-.03859-.37216-.13383-.51202-.27368-.13985-.13986-.23509-.31804-.27368-.51202-.03858-.19398-.01878-.39505.05691-.57777.07569-.18273.20386-.33891.36831-.44879C6.60888 1.55865 6.80222 1.5 7 1.5c.26522 0 .51957.10536.70711.29289C7.89464 1.98043 8 2.23478 8 2.5zm-4.5-1c.19778 0 .39112.05865.55557.16853.16445.10988.29262.26606.36831.44879.07569.18272.09549.38379.05691.57777-.03859.19398-.13383.37216-.27368.51202-.13986.13985-.31804.23509-.51202.27368-.19398.03858-.39505.01878-.57777-.05691-.18273-.07569-.33891-.20386-.44879-.36831C2.55865 2.89112 2.5 2.69778 2.5 2.5c0-.26522.10536-.51957.29289-.70711C2.98043 1.60536 3.23478 1.5 3.5 1.5zm6 1c0-.19778.05865-.39112.16853-.55557.10988-.16445.26606-.29262.44877-.36831.1827-.07569.3838-.09549.5778-.05691.194.03859.3722.13383.512.27368.1399.13986.2351.31804.2737.51202.0386.19398.0188.39505-.0569.57777-.0757.18273-.2039.33891-.3683.44879-.1645.10988-.3578.16853-.5556.16853-.2652 0-.51957-.10536-.70711-.29289C9.60536 3.01957 9.5 2.76522 9.5 2.5z"
      }
    })])]);
  }
};

var PasswordDesktopLockApproved = {
  name: 'password-desktop-lock-approved',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var _attrs;

    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps__default["default"]([{
      "attrs": (_attrs = {
        "version": "1.1",
        "id": "Layer_1",
        "xmlns": "http://www.w3.org/2000/svg"
      }, _defineProperty(_attrs, "xmlns", "http://www.w3.org/1999/xlink"), _defineProperty(_attrs, "x", "0px"), _defineProperty(_attrs, "y", "0px"), _defineProperty(_attrs, "viewBox", "0 0 24 24"), _defineProperty(_attrs, "xml", "preserve"), _attrs),
      "style": "enable-background:new 0 0 24 24"
    }, ctx.data]), [h("path", {
      "attrs": {
        "d": "M7.5 24a.5.5 0 010-1h1.369a6.98 6.98 0 001.085-3H1.5C.673 20 0 19.327 0 18.5v-17C0 .673.673 0 1.5 0h13a.5.5 0 010 1h-13a.5.5 0 00-.5.5V16h22v-2.5a.5.5 0 011 0v5c0 .827-.673 1.5-1.5 1.5h-8.454a6.988 6.988 0 001.085 3H16.5a.5.5 0 010 1h-9zm6.467-1a8.017 8.017 0 01-.927-3h-2.08a8.017 8.017 0 01-.927 3h3.934zM1 18.5a.5.5 0 00.5.5h21a.5.5 0 00.5-.5V17H1v1.5z"
      }
    }), h("path", {
      "attrs": {
        "d": "M7.539 10.051a.5.5 0 01-.354-.146L5.501 8.22a.497.497 0 010-.707.5.5 0 01.708 0l1.33 1.331 3.858-3.857a.5.5 0 11.707.708l-4.211 4.21a.501.501 0 01-.354.146z"
      }
    }), h("path", {
      "attrs": {
        "d": "M7.535 12.568a4.261 4.261 0 01-3.03-1.261 4.26 4.26 0 01-1.25-3.034 4.293 4.293 0 014.287-4.279 4.323 4.323 0 011.904.446.5.5 0 01-.445.896 3.297 3.297 0 00-1.453-.342 3.293 3.293 0 00-3.293 3.281 3.266 3.266 0 00.958 2.326c.62.622 1.444.966 2.323.967.882 0 1.706-.34 2.326-.958.622-.62.966-1.444.967-2.323a.5.5 0 011 .002 4.259 4.259 0 01-1.261 3.029 4.258 4.258 0 01-3.025 1.25h-.008z"
      }
    }), h("path", {
      "attrs": {
        "d": "M15.5 12c-.827 0-1.5-.673-1.5-1.5v-5c0-.827.673-1.5 1.5-1.5h.5V3c0-1.654 1.346-3 3-3s3 1.346 3 3v1h.5c.827 0 1.5.673 1.5 1.5v5c0 .827-.673 1.5-1.5 1.5h-7zm0-7a.5.5 0 00-.5.5v5a.5.5 0 00.5.5h7a.5.5 0 00.5-.5v-5a.5.5 0 00-.5-.5h-7zM21 4V3c0-1.103-.897-2-2-2s-2 .897-2 2v1h4z"
      }
    }), h("path", {
      "attrs": {
        "d": "M19 9.5c-.827 0-1.5-.673-1.5-1.5s.673-1.5 1.5-1.5 1.5.673 1.5 1.5-.673 1.5-1.5 1.5zm0-2a.5.5 0 100 1 .5.5 0 000-1z"
      }
    })]);
  }
};

var Paypal = {
  name: 'paypal',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps__default["default"]([{
      "attrs": {
        "width": "24",
        "height": "24",
        "viewBox": "0 0 24 24",
        "fill": "none",
        "xmlns": "http://www.w3.org/2000/svg"
      }
    }, ctx.data]), [h("path", {
      "attrs": {
        "d": "M13.95 7.11999C14.0444 6.86125 14.0732 6.5832 14.0341 6.3106C13.9949 6.038 13.889 5.77932 13.7256 5.55758C13.5623 5.33585 13.3467 5.15795 13.0979 5.03973C12.8492 4.92151 12.5751 4.86663 12.3 4.87999H9.91003L8.91003 9.35999H11.2C11.837 9.32743 12.447 9.09271 12.9415 8.68991C13.436 8.28711 13.7893 7.73719 13.95 7.11999V7.11999Z",
        "stroke": "currentColor",
        "stroke-width": "1.5",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      }
    }), h("path", {
      "attrs": {
        "d": "M1.81006 18.74L5.81006 1.73999H14.1001C16.5901 1.73999 19.3601 3.52999 18.5301 7.31999C18.2063 8.88575 17.3411 10.2874 16.0865 11.2786C14.832 12.2698 13.2683 12.7872 11.6701 12.74H8.18006L6.69006 18.74H1.81006Z",
        "stroke": "currentColor",
        "stroke-width": "1.5",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      }
    }), h("path", {
      "attrs": {
        "d": "M21.6799 7.42999C23.1799 10.09 21.2999 16.15 15.3299 16.24H11.7199L10.1999 22.24H5.31995L5.55995 21",
        "stroke": "currentColor",
        "stroke-width": "1.5",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      }
    })]);
  }
};

var Search = {
  name: 'search',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps__default["default"]([{
      "attrs": {
        "width": "24",
        "height": "24",
        "viewBox": "0 0 24 24",
        "fill": "none",
        "xmlns": "http://www.w3.org/2000/svg"
      }
    }, ctx.data]), [h("g", {
      "attrs": {
        "clip-path": "url(#clip0)"
      }
    }, [h("path", {
      "attrs": {
        "d": "M13.3579 18.1531C17.9645 16.1954 20.1118 10.8739 18.1541 6.26731C16.1963 1.66071 10.8748 -0.486604 6.26824 1.47115C1.66163 3.42891 -0.485676 8.75038 1.47208 13.357C3.42984 17.9636 8.75131 20.1109 13.3579 18.1531Z",
        "stroke": "currentColor",
        "stroke-width": "1.25",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      }
    }), h("path", {
      "attrs": {
        "d": "M16.2209 16.22L23.2499 23.25",
        "stroke": "currentColor",
        "stroke-width": "1.25",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      }
    })]), h("defs", [h("clipPath", {
      "attrs": {
        "id": "clip0"
      }
    }, [h("rect", {
      "attrs": {
        "width": "24",
        "height": "24",
        "fill": "white"
      }
    })])])]);
  }
};

var Shipping = {
  name: 'shipping',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps__default["default"]([{
      "attrs": {
        "width": "24",
        "height": "24",
        "viewBox": "0 0 24 24",
        "fill": "none",
        "xmlns": "http://www.w3.org/2000/svg"
      }
    }, ctx.data]), [h("path", {
      "attrs": {
        "d": "M7.538 21.75H6.75C6.35218 21.75 5.97064 21.592 5.68934 21.3107C5.40804 21.0294 5.25 20.6478 5.25 20.25V14.25C5.25 13.8522 5.40804 13.4706 5.68934 13.1893C5.97064 12.908 6.35218 12.75 6.75 12.75H15.75C16.1478 12.75 16.5294 12.908 16.8107 13.1893C17.092 13.4706 17.25 13.8522 17.25 14.25V19.538",
        "stroke": "currentColor",
        "stroke-width": "1.5",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      }
    }), h("path", {
      "attrs": {
        "d": "M17.25 14.25H20.25C21.0456 14.25 21.8087 14.5661 22.3713 15.1287C22.9339 15.6913 23.25 16.4544 23.25 17.25V20.25C23.25 20.6478 23.092 21.0294 22.8107 21.3107C22.5294 21.592 22.1478 21.75 21.75 21.75H19.462",
        "stroke": "currentColor",
        "stroke-width": "1.5",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      }
    }), h("path", {
      "attrs": {
        "d": "M17.625 23.25C18.6605 23.25 19.5 22.4105 19.5 21.375C19.5 20.3395 18.6605 19.5 17.625 19.5C16.5895 19.5 15.75 20.3395 15.75 21.375C15.75 22.4105 16.5895 23.25 17.625 23.25Z",
        "stroke": "currentColor",
        "stroke-width": "1.5",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      }
    }), h("path", {
      "attrs": {
        "d": "M9.375 23.25C10.4105 23.25 11.25 22.4105 11.25 21.375C11.25 20.3395 10.4105 19.5 9.375 19.5C8.33947 19.5 7.5 20.3395 7.5 21.375C7.5 22.4105 8.33947 23.25 9.375 23.25Z",
        "stroke": "currentColor",
        "stroke-width": "1.5",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      }
    }), h("path", {
      "attrs": {
        "d": "M15.788 21.75H11.212",
        "stroke": "currentColor",
        "stroke-width": "1.5",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      }
    }), h("path", {
      "attrs": {
        "d": "M23.25 17.25H20.25",
        "stroke": "currentColor",
        "stroke-width": "1.5",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      }
    }), h("path", {
      "attrs": {
        "d": "M1.757 13.891C1.13061 12.6807 0.787263 11.3439 0.752867 9.98149C0.718472 8.6191 0.993924 7.26669 1.55844 6.02629C2.12296 4.78588 2.96181 3.68988 4.01169 2.82096C5.06158 1.95204 6.29509 1.33289 7.61916 1.01023C8.94323 0.687566 10.3233 0.669815 11.6552 0.958314C12.9872 1.24681 14.2362 1.83403 15.3081 2.67566C16.38 3.51729 17.2467 4.59135 17.843 5.81683C18.4392 7.0423 18.7493 8.38718 18.75 9.75",
        "stroke": "currentColor",
        "stroke-width": "1.5",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      }
    }), h("path", {
      "attrs": {
        "d": "M9.74998 0.75C8.52257 1.89854 7.55345 3.29497 6.90692 4.84664C6.26039 6.39831 5.95124 8.06973 5.99998 9.75",
        "stroke": "currentColor",
        "stroke-width": "1.5",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      }
    }), h("path", {
      "attrs": {
        "d": "M9.75 0.75C10.9774 1.89854 11.9465 3.29497 12.5931 4.84664C13.2396 6.39831 13.5487 8.06973 13.5 9.75",
        "stroke": "currentColor",
        "stroke-width": "1.5",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      }
    }), h("path", {
      "attrs": {
        "d": "M1.26294 6.75H18.2339",
        "stroke": "currentColor",
        "stroke-width": "1.5",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      }
    })]);
  }
};

var SingleNeutralActionsSetting = {
  name: 'single-neutral-actions-setting',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var _attrs;

    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps__default["default"]([{
      "attrs": (_attrs = {
        "xmlns": "http://www.w3.org/2000/svg"
      }, _defineProperty(_attrs, "xmlns", "http://www.w3.org/1999/xlink"), _defineProperty(_attrs, "width", "24px"), _defineProperty(_attrs, "height", "24px"), _defineProperty(_attrs, "viewBox", "0 0 24 24"), _defineProperty(_attrs, "version", "1.1"), _attrs)
    }, ctx.data]), [h("g", {
      "attrs": {
        "fill": "currentColor"
      }
    }, [h("path", {
      "attrs": {
        "d": "M17.75 18.969a1.942 1.942 0 01-1.938-1.938c0-1.066.872-1.937 1.938-1.937 1.066 0 1.938.87 1.938 1.937a1.942 1.942 0 01-1.938 1.938zm0-2.875a.94.94 0 00-.938.937.94.94 0 00.938.938.94.94 0 00.938-.938.94.94 0 00-.938-.937zm0 0"
      }
    }), h("path", {
      "attrs": {
        "d": "M17.754 24a1.763 1.763 0 01-1.7-1.266l-.425-1.386a.46.46 0 00-.535-.313l-1.41.324a1.734 1.734 0 01-.399.047 1.799 1.799 0 01-1.738-1.39 1.8 1.8 0 01.433-1.61l.989-1.062a.461.461 0 000-.621l-.989-1.063a1.753 1.753 0 01-.472-1.277c.015-.477.215-.918.562-1.242a1.785 1.785 0 011.61-.438l1.414.328c.035.008.066.016.101.016a.451.451 0 00.43-.324l.426-1.395a1.773 1.773 0 013.398-.004l.426 1.39a.452.452 0 00.531.313l1.41-.328a1.8 1.8 0 012.137 1.348 1.788 1.788 0 01-.433 1.61l-.989 1.062a.461.461 0 000 .62l.989 1.063a1.784 1.784 0 01-1.305 3c-.133 0-.266-.015-.395-.043l-1.414-.332a.456.456 0 00-.527.316l-.426 1.395a1.785 1.785 0 01-1.7 1.262zm-2.563-3.977c.637 0 1.207.422 1.395 1.032l.426 1.39a.778.778 0 00.746.555c.336 0 .64-.227.738-.55l.426-1.395a1.463 1.463 0 011.707-1l1.418.328a.762.762 0 00.7-.192.788.788 0 00.25-.546.765.765 0 00-.212-.56l-.988-1.065a1.47 1.47 0 010-1.98l.988-1.067a.772.772 0 00.192-.707.776.776 0 00-.762-.61.674.674 0 00-.176.02L20.633 14a1.463 1.463 0 01-1.719-.996l-.422-1.39a.786.786 0 00-.52-.52.88.88 0 00-.226-.031.751.751 0 00-.363.093.761.761 0 00-.375.461l-.426 1.395a1.46 1.46 0 01-1.715.992l-1.414-.328a.785.785 0 00-.7.191.788.788 0 00-.042 1.11l.988 1.062c.512.559.512 1.426.004 1.98l-.988 1.067a.782.782 0 00-.195.707.793.793 0 00.937.59l1.406-.324c.11-.024.219-.036.328-.036zm0 0"
      }
    }), h("path", {
      "attrs": {
        "d": "M7.5 9.5a4.758 4.758 0 01-4.75-4.75A4.758 4.758 0 017.5 0a4.758 4.758 0 014.75 4.75A4.758 4.758 0 017.5 9.5zm0-8.5a3.756 3.756 0 00-3.75 3.75A3.756 3.756 0 007.5 8.5a3.756 3.756 0 003.75-3.75A3.756 3.756 0 007.5 1zm0 0"
      }
    }), h("path", {
      "attrs": {
        "d": "M.5 18a.501.501 0 01-.5-.5c0-2.004.781-3.887 2.195-5.305A7.465 7.465 0 017.5 10a7.49 7.49 0 014.055 1.188.503.503 0 01-.274.921.514.514 0 01-.27-.078A6.47 6.47 0 007.5 11a6.472 6.472 0 00-4.598 1.902A6.486 6.486 0 001.02 17H9.5c.277 0 .5.223.5.5s-.223.5-.5.5zm0 0"
      }
    })])]);
  }
};

var Spring = {
  name: 'spring',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps__default["default"]([{
      "attrs": {
        "width": "24",
        "height": "24",
        "viewBox": "0 0 24 24",
        "fill": "none",
        "xmlns": "http://www.w3.org/2000/svg"
      }
    }, ctx.data]), [h("g", {
      "attrs": {
        "clip-path": "url(#clip0)"
      }
    }, [h("path", {
      "attrs": {
        "d": "M14.579 20.754C14.579 20.754 15.798 23.249 17.849 23.062C22.007 22.682 21.729 17.155 23.249 15.203C21.9632 14.5622 20.544 14.235 19.1075 14.248C17.671 14.261 16.2579 14.614 14.984 15.278C12.83 16.494 12.677 18.548 14.579 20.754Z",
        "stroke": "currentColor",
        "stroke-width": "1.5",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      }
    }), h("path", {
      "attrs": {
        "d": "M17.52 18.219C17.52 18.219 14.82 18.553 12.897 23.25",
        "stroke": "currentColor",
        "stroke-width": "1.5",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      }
    }), h("path", {
      "attrs": {
        "d": "M5.25 18L1.5 21.75",
        "stroke": "currentColor",
        "stroke-width": "1.5",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      }
    }), h("path", {
      "attrs": {
        "d": "M10.5 18L6.75 21.75",
        "stroke": "currentColor",
        "stroke-width": "1.5",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      }
    }), h("path", {
      "attrs": {
        "d": "M20.814 10.726C21.2104 9.82785 21.4148 8.85676 21.414 7.87501C21.3995 6.09466 20.7248 4.38304 19.5206 3.07166C18.3164 1.76029 16.6684 0.942493 14.8957 0.776679C13.123 0.610864 11.3519 1.10883 9.92535 2.17413C8.49882 3.23942 7.5184 4.79623 7.17401 6.54301C6.57045 6.24642 5.9076 6.09026 5.23512 6.08622C4.56264 6.08218 3.89796 6.23036 3.29088 6.51968C2.68381 6.80899 2.15007 7.23193 1.72966 7.75681C1.30924 8.28169 1.01306 8.89491 0.863284 9.55051C0.713511 10.2061 0.714038 10.8871 0.864823 11.5425C1.01561 12.1978 1.31274 12.8106 1.73397 13.3348C2.15519 13.8591 2.68958 14.2812 3.2971 14.5696C3.90463 14.8579 4.56953 15.0051 5.24201 15H10.013",
        "stroke": "currentColor",
        "stroke-width": "1.5",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      }
    })]), h("defs", [h("clipPath", {
      "attrs": {
        "id": "clip0"
      }
    }, [h("rect", {
      "attrs": {
        "width": "24",
        "height": "24",
        "fill": "white"
      }
    })])])]);
  }
};

var Star = {
  name: 'star',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps__default["default"]([{
      "attrs": {
        "xmlns": "http://www.w3.org/2000/svg",
        "width": "24",
        "height": "24",
        "viewBox": "0 0 24 24"
      }
    }, ctx.data]), [h("path", {
      "style": "stroke:none;fill-rule:nonzero;fill:currentColor;fill-opacity:1",
      "attrs": {
        "d": "M23.555 8.73a1.479 1.479 0 0 0-.551-.71 1.482 1.482 0 0 0-.856-.27h-6.085a.474.474 0 0 1-.29-.094.493.493 0 0 1-.183-.242l-2.184-6.191c-.11-.286-.3-.536-.55-.707a1.491 1.491 0 0 0-1.711 0c-.25.171-.442.421-.551.707l-.004.015-2.18 6.176a.5.5 0 0 1-.473.336H1.853c-.309 0-.61.094-.864.27a1.48 1.48 0 0 0-.55.718c-.106.29-.118.602-.036.903.078.296.25.562.485.757L6.07 14.7a.54.54 0 0 1 .164.25.5.5 0 0 1-.007.293l-2.18 6.531c-.098.301-.102.63-.004.934.098.3.289.566.543.754.258.187.57.289.887.289.32-.004.629-.105.886-.293l5.344-3.918a.51.51 0 0 1 .297-.098.51.51 0 0 1 .297.098l5.344 3.918a1.496 1.496 0 0 0 2.308-1.684l-2.176-6.535a.5.5 0 0 1 .157-.543l5.191-4.304a1.5 1.5 0 0 0 .434-1.66Zm0 0"
      }
    })]);
  }
};

var StoreSettings = {
  name: 'store-settings',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps__default["default"]([{
      "attrs": {
        "width": "24",
        "height": "24",
        "viewBox": "0 0 24 24",
        "fill": "none",
        "xmlns": "http://www.w3.org/2000/svg"
      }
    }, ctx.data]), [h("path", {
      "attrs": {
        "d": "M21.75 12.75V21.75C21.75 22.1478 21.592 22.5294 21.3107 22.8107C21.0294 23.092 20.6478 23.25 20.25 23.25H3.75C3.35218 23.25 2.97064 23.092 2.68934 22.8107C2.40804 22.5294 2.25 22.1478 2.25 21.75V12.75",
        "stroke": "currentColor",
        "stroke-width": "1.25",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      }
    }), h("path", {
      "attrs": {
        "d": "M21.148 0.75H2.852C2.6813 0.749972 2.51568 0.808099 2.38244 0.914802C2.24919 1.02151 2.15628 1.17042 2.119 1.337L0.75 7.5C0.75 8.09674 0.987053 8.66903 1.40901 9.09099C1.83097 9.51295 2.40326 9.75 3 9.75C3.59674 9.75 4.16903 9.51295 4.59099 9.09099C5.01295 8.66903 5.25 8.09674 5.25 7.5C5.25 8.09674 5.48705 8.66903 5.90901 9.09099C6.33097 9.51295 6.90326 9.75 7.5 9.75C8.09674 9.75 8.66903 9.51295 9.09099 9.09099C9.51295 8.66903 9.75 8.09674 9.75 7.5C9.75 8.09674 9.98705 8.66903 10.409 9.09099C10.831 9.51295 11.4033 9.75 12 9.75C12.5967 9.75 13.169 9.51295 13.591 9.09099C14.0129 8.66903 14.25 8.09674 14.25 7.5C14.25 8.09674 14.4871 8.66903 14.909 9.09099C15.331 9.51295 15.9033 9.75 16.5 9.75C17.0967 9.75 17.669 9.51295 18.091 9.09099C18.5129 8.66903 18.75 8.09674 18.75 7.5C18.75 8.09674 18.9871 8.66903 19.409 9.09099C19.831 9.51295 20.4033 9.75 21 9.75C21.5967 9.75 22.169 9.51295 22.591 9.09099C23.0129 8.66903 23.25 8.09674 23.25 7.5L21.88 1.337C21.8431 1.17041 21.7504 1.02142 21.6173 0.914675C21.4842 0.80793 21.3186 0.749834 21.148 0.75Z",
        "stroke": "currentColor",
        "stroke-width": "1.25",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      }
    }), h("path", {
      "attrs": {
        "d": "M2.25 17.25H15",
        "stroke": "currentColor",
        "stroke-width": "1.25",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      }
    }), h("path", {
      "attrs": {
        "d": "M15 23.25V12.75",
        "stroke": "currentColor",
        "stroke-width": "1.25",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      }
    })]);
  }
};

var Store = {
  name: 'store',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps__default["default"]([{
      "attrs": {
        "width": "24",
        "height": "24",
        "viewBox": "0 0 24 24",
        "fill": "none",
        "xmlns": "http://www.w3.org/2000/svg"
      }
    }, ctx.data]), [h("g", {
      "attrs": {
        "fill": "currentColor"
      }
    }, [h("path", {
      "attrs": {
        "d": "M22.216 17.962c-.0599-.0082-.1148-.0379-.1545-.0835s-.0616-.104-.0615-.1645v-4.435c0-.2652-.1054-.5196-.2929-.7071-.1875-.1876-.4419-.2929-.7071-.2929-.2652 0-.5196.1053-.7071.2929-.1876.1875-.2929.4419-.2929.7071V17.7c0 .0663-.0264.1299-.0732.1768-.0469.0469-.1105.0732-.1768.0732H15.5c-.1326 0-.2598.0527-.3536.1464-.0937.0938-.1464.221-.1464.3536 0 .71-1.232 1.5-3 1.5s-3.00001-.79-3.00001-1.5c0-.1326-.05268-.2598-.14645-.3536-.09376-.0937-.22094-.1464-.35355-.1464h-4.248c-.033.0003-.06572-.006-.09629-.0185-.03056-.0124-.05835-.0308-.08178-.054-.02343-.0233-.04202-.0509-.05471-.0814-.01269-.0304-.01922-.0631-.01922-.0961v-4.25c0-.2652-.10536-.5196-.29289-.7071-.18754-.1876-.44189-.2929-.70711-.2929s-.51957.1053-.70711.2929c-.18753.1875-.29289.4419-.29289.7071v4.268c-.00006.0601-.0217.1182-.06097.1637-.03927.0455-.09357.0754-.15303.0843-.24656.0362-.48022.1333-.67985.2825-.199632.1492-.35895.3457-.46356.5719-.104611.2262-.151216.4749-.135606.7236.015611.2487.092945.4897.225015.701.518631.829 1.240151 1.5121 2.096351 1.9845.8562.4725 1.81876.7187 2.79665.7155H18.379c.9778.0034 1.9402-.2429 2.7963-.7153.856-.4725 1.5774-1.1556 2.0957-1.9847.133-.2115.211-.4529.2271-.7022.016-.2493-.0305-.4987-.1353-.7255-.1048-.2268-.2646-.4238-.4649-.5732-.2002-.1494-.4346-.2463-.6819-.2821zM24 6.31499v-.006c.0015-.01763.0015-.03537 0-.053v-.007c-.0053-.01685-.012-.03324-.02-.049-.0062-.02184-.0139-.04323-.023-.064l-1.722-4.116c-.1052-.27664-.2899-.51596-.5309-.68786-.2409-.17189-.5273-.26867-.8231-.27814h-2.747c-.0385-.00018-.0766.00857-.1111.02557-.0346.01701-.0647.0418-.0881.07243-.0234.03062-.0393.06625-.0466.10408-.0072.03783-.0056.07682.0048.11392l1.329 4.83c.0172.06528.0259.13249.026.2v3.573c-.0001.05031.0151.09951.0435.14111.0283.0415.0686.0736.1155.0919.4974.1998 1.0355.2772 1.5691.2257.5335-.0514 1.0469-.2302 1.497-.52137.4501-.29114.8237-.68609 1.0894-1.15164.2657-.46556.4157-.9881.4375-1.5237v-.92zM17.748 6.53599c0-.02264-.003-.04518-.009-.067-1.02-3.708-1.339-4.864-1.439-5.231-.0143-.05293-.0457-.09965-.0893-.13292-.0435-.03327-.0969-.05122-.1517-.05108H13c-.0663 0-.1299.02634-.1768.07322-.0469.04688-.0732.11047-.0732.17678V10.665c0 .0467.0131.0925.0378.1321.0248.0396.0602.0714.1022.0919.7677.3738 1.6223.5327 2.473.46.8532-.0667 1.6738-.3571 2.379-.842.0025-.0017.0045-.0039.0059-.0065.0014-.0026.0021-.0055.0021-.0085l-.002-3.95601zM4.74806 6.39999c.00006-.06751.0088-.13472.026-.2l1.326-4.83c.01036-.0371.01198-.07609.00472-.11392-.00726-.03783-.02319-.07346-.04655-.10408-.02336-.03063-.0535-.05542-.08806-.07243-.03456-.017-.0726-.02575-.11111-.02557h-2.74c-.29582.00947-.58222.10625-.82316.27814-.24093.1719-.42563.41122-.53084.68786l-1.721003 4.106c-.0091456.02077-.016831.04216-.023.064-.0051983.01765-.0088784.03572-.011.054v.007c-.00152782.01763-.00152782.03537 0 .053v.926c.0118323.62693.20516 1.23698.556575 1.75629.351415.51932.845848.92562 1.423428 1.16972.40781.1824.84815.2809 1.29481.2897.44667.0088.89054-.0724 1.30519-.2387.04687-.0183.08713-.0504.1155-.0919.02837-.0416.04353-.0908.0435-.14111l-.001-3.574zM11.248 1.29999c0-.06631-.0263-.12989-.0732-.17678-.0469-.04688-.1104-.07322-.1768-.07322H7.93605c-.05483-.00014-.10816.01782-.15174.05109-.04357.03327-.07495.07999-.08926.13291-.1.368-.419 1.526-1.438 5.231-.006.02183-.00903.04436-.009.067V10.353c.00013.0416.01062.0824.03052.1189.01991.0365.0486.0675.08348.0901.68562.4475 1.47201.7169 2.288.784.133.011.266.016.4.016.71423.0019 1.41935-.1603 2.06095-.474.042-.0205.0774-.0523.1022-.0919.0248-.0396.0379-.0854.0378-.1321l-.003-9.36401z"
      }
    })])]);
  }
};

var Subtract = {
  name: 'subtract',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps__default["default"]([{
      "attrs": {
        "width": "24",
        "height": "24",
        "viewBox": "0 0 24 24",
        "fill": "none",
        "xmlns": "http://www.w3.org/2000/svg"
      }
    }, ctx.data]), [h("path", {
      "attrs": {
        "d": "M0.75 12.038H23.25",
        "stroke": "currentColor",
        "stroke-width": "1.5",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      }
    })]);
  }
};

var Summer = {
  name: 'summer',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps__default["default"]([{
      "attrs": {
        "width": "24",
        "height": "24",
        "viewBox": "0 0 24 24",
        "fill": "none",
        "xmlns": "http://www.w3.org/2000/svg"
      }
    }, ctx.data]), [h("path", {
      "attrs": {
        "d": "M14.579 20.754C14.579 20.754 15.798 23.249 17.849 23.062C22.007 22.682 21.729 17.155 23.249 15.203C21.9632 14.5622 20.544 14.235 19.1075 14.248C17.671 14.261 16.2579 14.614 14.984 15.278C12.83 16.494 12.677 18.548 14.579 20.754Z",
        "stroke": "currentColor",
        "stroke-width": "1.5",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      }
    }), h("path", {
      "attrs": {
        "d": "M17.52 18.219C17.52 18.219 14.82 18.553 12.897 23.25",
        "stroke": "currentColor",
        "stroke-width": "1.5",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      }
    }), h("path", {
      "attrs": {
        "d": "M10.5 18.583C9.29207 18.3078 8.18314 17.7054 7.2947 16.8419C6.40626 15.9784 5.77256 14.8871 5.46302 13.6875C5.15347 12.4878 5.18 11.2262 5.53972 10.0406C5.89944 8.85505 6.57846 7.79135 7.50242 6.96598C8.42639 6.14061 9.55966 5.58542 10.7781 5.3612C11.9966 5.13699 13.2533 5.25239 14.4105 5.69478C15.5678 6.13717 16.581 6.88949 17.3391 7.86933C18.0973 8.84918 18.5713 10.0188 18.709 11.25",
        "stroke": "currentColor",
        "stroke-width": "1.5",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      }
    }), h("path", {
      "attrs": {
        "d": "M12 2.25V0.75",
        "stroke": "currentColor",
        "stroke-width": "1.5",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      }
    }), h("path", {
      "attrs": {
        "d": "M18.894 5.10601L19.955 4.04501",
        "stroke": "currentColor",
        "stroke-width": "1.5",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      }
    }), h("path", {
      "attrs": {
        "d": "M5.10604 18.895L4.04504 19.955",
        "stroke": "currentColor",
        "stroke-width": "1.5",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      }
    }), h("path", {
      "attrs": {
        "d": "M2.25 12H0.75",
        "stroke": "currentColor",
        "stroke-width": "1.5",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      }
    }), h("path", {
      "attrs": {
        "d": "M5.10604 5.10601L4.04504 4.04501",
        "stroke": "currentColor",
        "stroke-width": "1.5",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      }
    })]);
  }
};

var Ticket = {
  name: 'ticket',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps__default["default"]([{
      "attrs": {
        "width": "26",
        "height": "24",
        "viewBox": "0 0 26 24",
        "fill": "none",
        "xmlns": "http://www.w3.org/2000/svg"
      }
    }, ctx.data]), [h("path", {
      "attrs": {
        "d": "M25.4582 13.0911C25.7577 13.0911 25.9999 12.8471 25.9999 12.5456V9.81843C25.9999 8.61516 25.0282 7.63663 23.8332 7.63663H19.756C19.6004 7.28967 19.4997 6.92774 19.4997 6.54575C19.4997 5.55817 20.044 4.6452 20.9206 4.16315C21.048 4.09283 21.1427 3.97353 21.1819 3.83235C21.2215 3.69173 21.2031 3.54047 21.1311 3.41314L19.8113 1.09179C19.523 0.585754 19.0574 0.224073 18.5004 0.0738875C17.946 -0.0752748 17.3663 0.00306481 16.8701 0.293873L1.07354 9.55421C0.0483426 10.1551 -0.304445 11.4899 0.286412 12.5286L1.6512 14.9309C1.72367 15.0587 1.84427 15.1515 1.9855 15.1882C2.12622 15.2249 2.27644 15.2031 2.40131 15.1274C2.83825 14.8621 3.3059 14.7274 3.79098 14.7274C4.97341 14.7274 6.00633 15.5118 6.35795 16.6465C6.00729 17.7439 4.99575 18.5455 3.79098 18.5455C3.49157 18.5455 3.24928 18.7895 3.24928 19.091V21.8182C3.24928 23.0215 4.22101 24 5.41603 24H23.8333C25.0282 24 26 23.0215 26 21.8182V19.091C26 18.7895 25.7577 18.5455 25.4583 18.5455C23.965 18.5455 22.7499 17.322 22.7499 15.8183C22.7499 14.3146 23.9649 13.0911 25.4582 13.0911ZM17.4155 1.23671C17.6605 1.09287 17.9482 1.05293 18.2201 1.12754C18.4968 1.20209 18.7275 1.38214 18.8708 1.63408L19.9357 3.50692C18.9872 4.22333 18.4164 5.34463 18.4164 6.54575C18.4164 6.91567 18.4769 7.28241 18.5839 7.63663H6.4979L17.4155 1.23671ZM3.79093 13.6366C3.29529 13.6366 2.80067 13.7399 2.3357 13.9391L1.22696 11.9869C0.930185 11.466 1.10635 10.7975 1.61839 10.4971L3.27889 9.52373C3.26568 9.6211 3.24928 9.71754 3.24928 9.81848V12.5457C3.24928 12.8472 3.49157 13.0912 3.79098 13.0912C4.78764 13.0912 5.65075 13.6422 6.12104 14.4518C5.4724 13.9379 4.65982 13.6366 3.79093 13.6366ZM21.6665 15.8183C21.6665 17.7386 23.0815 19.3323 24.9165 19.5975V21.8182C24.9165 22.4196 24.4304 22.9091 23.8332 22.9091H10.8328V21.9545C10.8328 21.653 10.5905 21.4091 10.2911 21.4091C9.99171 21.4091 9.74942 21.653 9.74942 21.9545V22.9091H5.41598C4.81877 22.9091 4.33263 22.4196 4.33263 21.8182V19.5975C6.16766 19.3322 7.58272 17.7386 7.58272 15.8183C7.58272 13.8981 6.16766 12.3043 4.33263 12.0391V9.81843C4.33263 9.21707 4.81877 8.72755 5.41598 8.72755H9.74942V9.95481C9.74942 10.2563 9.99171 10.5003 10.2911 10.5003C10.5905 10.5003 10.8328 10.2563 10.8328 9.95481V8.72755H23.8332C24.4304 8.72755 24.9165 9.21707 24.9165 9.81843V12.0391C23.0815 12.3043 21.6665 13.8981 21.6665 15.8183Z",
        "fill": "currentColor"
      }
    }), h("path", {
      "attrs": {
        "d": "M10.2911 12.682C9.99167 12.682 9.74939 12.926 9.74939 13.2275V14.3183C9.74939 14.6198 9.99167 14.8638 10.2911 14.8638C10.5905 14.8638 10.8328 14.6198 10.8328 14.3183V13.2275C10.8328 12.926 10.5905 12.682 10.2911 12.682Z",
        "fill": "currentColor"
      }
    }), h("path", {
      "attrs": {
        "d": "M10.2911 17.0455C9.99167 17.0455 9.74939 17.2895 9.74939 17.591V18.6819C9.74939 18.9834 9.99167 19.2273 10.2911 19.2273C10.5905 19.2273 10.8328 18.9834 10.8328 18.6819V17.591C10.8328 17.2895 10.5905 17.0455 10.2911 17.0455Z",
        "fill": "currentColor"
      }
    }), h("path", {
      "attrs": {
        "d": "M20.3662 11.0185C20.1276 10.839 19.7875 10.8869 19.6082 11.1277L13.108 19.8548C12.9281 20.0956 12.9768 20.4376 13.2164 20.6181C13.3137 20.6917 13.4274 20.7273 13.5406 20.7273C13.7057 20.7273 13.8681 20.6522 13.9744 20.5089L20.4746 11.7818C20.6545 11.541 20.6059 11.1991 20.3662 11.0185Z",
        "fill": "currentColor"
      }
    }), h("path", {
      "attrs": {
        "d": "M14.6246 15.2729C15.536 15.2729 16.2496 14.3146 16.2496 13.0911C16.2496 11.8676 15.536 10.9093 14.6246 10.9093C13.7131 10.9093 12.9995 11.8676 12.9995 13.0911C12.9995 14.3146 13.7131 15.2729 14.6246 15.2729ZM14.6246 12.0002C14.8457 12.0002 15.1662 12.4253 15.1662 13.0911C15.1662 13.7569 14.8457 14.182 14.6246 14.182C14.4034 14.182 14.0829 13.7569 14.0829 13.0911C14.0829 12.4253 14.4034 12.0002 14.6246 12.0002Z",
        "fill": "currentColor"
      }
    }), h("path", {
      "attrs": {
        "d": "M18.9581 16.3638C18.0466 16.3638 17.333 17.322 17.333 18.5456C17.333 19.7691 18.0466 20.7274 18.9581 20.7274C19.8695 20.7274 20.5831 19.7691 20.5831 18.5456C20.5831 17.322 19.8695 16.3638 18.9581 16.3638ZM18.9581 19.6364C18.7369 19.6364 18.4164 19.2114 18.4164 18.5456C18.4164 17.8798 18.7369 17.4547 18.9581 17.4547C19.1792 17.4547 19.4998 17.8798 19.4998 18.5456C19.4998 19.2114 19.1792 19.6364 18.9581 19.6364Z",
        "fill": "currentColor"
      }
    })]);
  }
};

var WarehouseCartPackage = {
  name: 'warehouse-cart-package',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var _attrs;

    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps__default["default"]([{
      "attrs": (_attrs = {
        "xmlns": "http://www.w3.org/2000/svg"
      }, _defineProperty(_attrs, "xmlns", "http://www.w3.org/1999/xlink"), _defineProperty(_attrs, "width", "24px"), _defineProperty(_attrs, "height", "24px"), _defineProperty(_attrs, "viewBox", "0 0 24 24"), _defineProperty(_attrs, "version", "1.1"), _attrs)
    }, ctx.data]), [h("g", {
      "attrs": {
        "fill": "currentColor"
      }
    }, [h("path", {
      "attrs": {
        "d": "M21.25 24a.497.497 0 01-.445-.277l-.727-1.446a.493.493 0 00-.445-.277H11.41c-.578 1.219-1.8 2-3.16 2-1.93 0-3.5-1.57-3.5-3.5a3.504 3.504 0 013.922-3.473L7.105 3.54A2.872 2.872 0 004.254 1H2.75a.501.501 0 010-1h1.5a3.87 3.87 0 013.848 3.422L9.71 17.32a3.495 3.495 0 012.039 3.18c0 .164-.012.332-.04.5h7.923c.57 0 1.086.316 1.34.828l.722 1.45c.063.117.07.253.028.378a.47.47 0 01-.25.29.493.493 0 01-.223.054zm-13-6a2.502 2.502 0 00-2.5 2.5c0 1.379 1.121 2.5 2.5 2.5a2.51 2.51 0 002.32-1.582.492.492 0 01.063-.164c.078-.246.117-.5.117-.754a2.513 2.513 0 00-1.578-2.32.481.481 0 01-.176-.067A2.54 2.54 0 008.25 18zm0 0"
      }
    }), h("path", {
      "attrs": {
        "d": "M13.25 20a.498.498 0 01-.5-.5c0-.277.223-.5.5-.5h5c.277 0 .5-.223.5-.5v-6c0-.277-.223-.5-.5-.5h-1.5v2.5c0 .277-.223.5-.5.5h-2a.498.498 0 01-.5-.5V12h-1.5c-.277 0-.5.223-.5.5v4c0 .277-.223.5-.5.5a.498.498 0 01-.5-.5v-4a1.5 1.5 0 011.5-1.5h6a1.5 1.5 0 011.5 1.5v6a1.5 1.5 0 01-1.5 1.5zm2.5-6v-2h-1v2zm0 0"
      }
    })])]);
  }
};

var Winter = {
  name: 'winter',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps__default["default"]([{
      "attrs": {
        "width": "24",
        "height": "24",
        "viewBox": "0 0 24 24",
        "fill": "none",
        "xmlns": "http://www.w3.org/2000/svg"
      }
    }, ctx.data]), [h("path", {
      "attrs": {
        "d": "M14.579 20.379C14.579 20.379 15.798 22.874 17.849 22.687C22.007 22.307 21.729 16.78 23.249 14.828C21.9632 14.1872 20.544 13.86 19.1075 13.873C17.671 13.886 16.2579 14.239 14.984 14.903C12.83 16.12 12.677 18.173 14.579 20.379Z",
        "stroke": "currentColor",
        "stroke-width": "1.5",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      }
    }), h("path", {
      "attrs": {
        "d": "M17.52 17.844C17.52 17.844 14.82 18.179 12.897 22.875",
        "stroke": "currentColor",
        "stroke-width": "1.5",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      }
    }), h("path", {
      "attrs": {
        "d": "M9.75 1.125V19.125",
        "stroke": "currentColor",
        "stroke-width": "1.5",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      }
    }), h("path", {
      "attrs": {
        "d": "M18.75 10.125H0.75",
        "stroke": "currentColor",
        "stroke-width": "1.5",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      }
    }), h("path", {
      "attrs": {
        "d": "M7.50006 12.375L4.60706 15.268",
        "stroke": "currentColor",
        "stroke-width": "1.5",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      }
    }), h("path", {
      "attrs": {
        "d": "M14.893 4.98199L12 7.87499",
        "stroke": "currentColor",
        "stroke-width": "1.5",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      }
    }), h("path", {
      "attrs": {
        "d": "M4.60706 4.98199L7.50006 7.87499",
        "stroke": "currentColor",
        "stroke-width": "1.5",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      }
    }), h("path", {
      "attrs": {
        "d": "M7.17896 1.76801L9.74996 4.33901L12.321 1.76801",
        "stroke": "currentColor",
        "stroke-width": "1.5",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      }
    }), h("path", {
      "attrs": {
        "d": "M18.107 7.55399L15.536 10.125",
        "stroke": "currentColor",
        "stroke-width": "1.5",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      }
    }), h("path", {
      "attrs": {
        "d": "M9.74996 15.911L7.17896 18.482",
        "stroke": "currentColor",
        "stroke-width": "1.5",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      }
    }), h("path", {
      "attrs": {
        "d": "M1.39294 12.696L3.96394 10.125L1.39294 7.55399",
        "stroke": "currentColor",
        "stroke-width": "1.5",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      }
    })]);
  }
};

var DPIcon = {
  install: function install(Vue) {
    Vue.component('dp-icon', __vue_component__);
  }
};

exports.Add = Add;
exports.Advence = Advence;
exports.ArrowDown = ArrowDown;
exports.ArrowLeft = ArrowLeft;
exports.ArrowRight = ArrowRight;
exports.ArrowUp = ArrowUp;
exports.Autumn = Autumn;
exports.Basket = Basket;
exports.BookAddress1 = BookAddress1;
exports.Cargo = Cargo;
exports.Cash = Cash;
exports.Check = Check;
exports.CircleCheckmark = CircleCheckmark;
exports.Close = Close;
exports.Coupon = Coupon;
exports.Coupons = Coupons;
exports.Credit = Credit;
exports.Creditcard = Creditcard;
exports.Customers = Customers;
exports.Dashboard = Dashboard;
exports.Delete = Delete;
exports.Delivery = Delivery;
exports.DeliveryTruckClock = DeliveryTruckClock;
exports.Discount = Discount;
exports.DoubleCheckmark = DoubleCheckmark;
exports.Edit = Edit;
exports.Employees = Employees;
exports.Employes = Employes;
exports.ExternalLink = ExternalLink;
exports.Eye = Eye;
exports.EyeClose = EyeClose;
exports.Feedback = Feedback;
exports.GiftBox = GiftBox;
exports.Information = Information;
exports.Insight = Insight;
exports.Invoice = Invoice;
exports.Key = Key;
exports.Library = Library$1;
exports.LikeAdd = LikeAdd;
exports.NavigationMenu4 = NavigationMenu4;
exports.NavigationMenuVertical = NavigationMenuVertical;
exports.Order = Order;
exports.OrderManagement = OrderManagement;
exports.PasswordDesktopLockApproved = PasswordDesktopLockApproved;
exports.Paypal = Paypal;
exports.Search = Search;
exports.Shipping = Shipping;
exports.SingleNeutralActionsSetting = SingleNeutralActionsSetting;
exports.Spring = Spring;
exports.Star = Star;
exports.Store = Store;
exports.StoreSettings = StoreSettings;
exports.Subtract = Subtract;
exports.Summer = Summer;
exports.Ticket = Ticket;
exports.WarehouseCartPackage = WarehouseCartPackage;
exports.Winter = Winter;
exports["default"] = DPIcon;
//# sourceMappingURL=index.cjs.js.map
