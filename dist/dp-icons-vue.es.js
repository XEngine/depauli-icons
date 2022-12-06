import { defineComponent as l, ref as h, h as e } from "vue";
const o = l({
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
  setup(t, r) {
    const i = h();
    let a = t.size.slice(-1) === "x" ? t.size.slice(0, t.size.length - 1) + "rem" : parseInt(t.size) + "px", s = {
      width: r.attrs.width || a,
      height: r.attrs.height || a
    };
    return () => {
      var n;
      return i.value ? e("svg", {
        viewBox: "0 0 24 24",
        ...s
      }, [t.icon, e("g", { ...(n = i.value.attributes) != null ? n : {} }, [...i.value.svgPathData.map((u) => e("path", { d: u }))])]) : e("span");
    };
  }
});
export {
  o as DpIcon
};
