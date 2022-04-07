var __defProp = Object.defineProperty;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
class Library {
  constructor() {
    this.store = {};
  }
  add(icon) {
    this.store[icon.name] = icon;
  }
  addRange(icons) {
    icons.forEach((icon) => {
      this.store[icon.name] = icon;
    });
  }
  has(name) {
    return !!this.store[name];
  }
  get(name) {
    if (this.has(name)) {
      return this.store[name];
    }
    console.warn(`Unable to find icon : ${name}`);
    return null;
  }
}
var Library$1 = new Library();
var Component = {
  functional: true,
  props: {
    icon: {
      type: String,
      default: ""
    },
    size: {
      type: String,
      default: "24px"
    }
  },
  render(createElement, { props, data }) {
    let svg = Library$1.get(props.icon);
    if (!svg) {
      return createElement("span");
    }
    let size = props.props.size.slice(-1) === "x" ? props.props.size.slice(0, props.props.size.length - 1) + "rem" : parseInt(props.props.size) + "px";
    let attrs = {
      width: data.attrs.width || size,
      height: data.attrs.height || size
    };
    return createElement("svg", {
      class: props.size,
      attrs: __spreadValues({
        viewBox: "0 0 24 24"
      }, attrs)
    }, [
      createElement("path", {
        attrs: {
          "d": `${svg.svgPathData}`
        }
      })
    ]);
  }
};
const DPIcon = {
  install(app) {
    app.component("dp-icon", Component);
  }
};
export { Library$1 as Library, DPIcon as default };
