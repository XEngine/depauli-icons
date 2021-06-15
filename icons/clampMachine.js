
      module.exports = {
        functional: true,
        render(_h, _vm) {
          const { _c, _v, data, children = [] } = _vm;

          const {
            class: classNames,
            staticClass,
            style,
            staticStyle,
            attrs = {},
            ...rest
          } = data;

          return _c(
            'svg',
            {
              class: [classNames,staticClass],
              style: [style,staticStyle],
              attrs: Object.assign({"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24"}, attrs),
              ...rest,
            },
            children.concat([_c('path',{attrs:{"d":"M6 23.25a.75.75 0 01-.75-.75c0-2.303 2.373-4.244 5.979-4.96L6.44 12.75H5.25A.75.75 0 014.5 12c0-.827-.673-1.5-1.5-1.5s-1.5.673-1.5 1.5.673 1.5 1.5 1.5A.75.75 0 013 15c-1.654 0-3-1.346-3-3s1.346-3 3-3c1.372 0 2.567.947 2.905 2.25h.535l4.547-4.548A.75.75 0 0110.5 6V1.5a.75.75 0 01.75-.75h6a.75.75 0 01.75.75V6a.75.75 0 01-.487.702l4.548 4.548h1.189a.75.75 0 010 1.5h-1.189l-4.79 4.79c3.606.716 5.979 2.658 5.979 4.96a.75.75 0 01-.75.75H6zm15.586-1.5c-.739-1.69-3.858-3-7.336-3s-6.596 1.31-7.336 3h14.672zm-7.336-4.5c.381 0 .767.014 1.149.041l4.541-4.541H8.561l4.541 4.541c.381-.027.767-.041 1.148-.041zm5.689-6l-4.5-4.5H13.06l-4.5 4.5h11.379zm-3.439-6v-3H12v3h4.5z"}})])
          )
        }
      }
    