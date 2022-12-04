import { ref, watch, h } from "vue";
class Library {
  constructor() {
    this.store = /* @__PURE__ */ new Map();
  }
  add(icon) {
    this.store.set(`${icon.name}_${icon.type}`, icon);
  }
  has(name) {
    return this.store.has(name);
  }
  get(name, type = "regular") {
    if (!name) {
      return null;
    }
    if (name && this.has(`${name}_${type}`)) {
      return this.store.get(`${name}_${type}`);
    }
    console.warn(`Unable to find icon : ${name} in ${type} type`);
    return null;
  }
}
var Library$1 = new Library();
var Component = {
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
  setup(props, context) {
    const theIcon = ref(null);
    watch([() => props.icon, () => props.type], () => {
      theIcon.value = Library$1.get(props.icon, props.type);
    }, {
      immediate: true
    });
    let size = props.size.slice(-1) === "x" ? props.size.slice(0, props.size.length - 1) + "rem" : parseInt(props.size) + "px";
    let attrs = {
      width: context.attrs.width || size,
      height: context.attrs.height || size
    };
    return () => {
      var _a;
      if (!theIcon.value) {
        return h("span");
      }
      return h("svg", {
        viewBox: "0 0 24 24",
        ...attrs
      }, [props.icon, h("g", { ...(_a = theIcon.value.attributes) != null ? _a : {} }, [...theIcon.value.svgPathData.map((x) => {
        return h("path", { d: x });
      })])]);
    };
  }
};
const DPIcon = {
  install(app) {
    app.component("dp-icon", Component);
  }
};
export { Library$1 as Library, DPIcon as default };
