
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
            children.concat([_c('path',{attrs:{"d":"M8.259 22.5a.727.727 0 01-.309-.068l-.046-.024a.596.596 0 01-.124-.084.88.88 0 01-.061-.057c-.012-.012-.025-.025-.034-.036a.76.76 0 01-.072-.105.682.682 0 01-.097-.287l-.005-.05a.563.563 0 01.004-.116.26.26 0 01.005-.047L8.123 18H4.989a2.257 2.257 0 01-2.207-1.809l-2.4-12A2.252 2.252 0 012.589 1.5h16.44c1.069 0 1.997.761 2.206 1.809l2.4 12A2.252 2.252 0 0121.429 18h-5.534l.5 3h2.365a.75.75 0 010 1.5H8.259zm6.615-1.5l-1.146-6.877a.748.748 0 00-.74-.626H11.03a.748.748 0 00-.74.626L9.144 21h5.73zm6.555-4.5a.75.75 0 00.735-.898l-2.4-11.999A.751.751 0 0019.029 3H2.589a.75.75 0 00-.735.897l2.4 12c.07.349.379.603.736.603h3.384l.437-2.623a2.243 2.243 0 012.219-1.88h1.958c1.105 0 2.038.791 2.22 1.879l.437 2.624h5.784z"}}),_c('path',{attrs:{"d":"M17.259 15a.75.75 0 010-1.5h1.5a.75.75 0 010 1.5h-1.5z"}})])
          )
        }
      }
    