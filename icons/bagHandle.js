
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
            children.concat([_c('path',{attrs:{"d":"M3.749 24a3.754 3.754 0 01-3.115-1.662 3.724 3.724 0 01-.564-2.814l1.481-7.5A3.76 3.76 0 015.23 9h2.269V4.5c0-2.481 2.019-4.5 4.5-4.5s4.5 2.019 4.5 4.5V9h2.268a3.759 3.759 0 013.68 3.024l1.481 7.5a3.73 3.73 0 01-1.027 3.378A3.726 3.726 0 0120.249 24h-16.5zm16.5-1.5c.601 0 1.166-.234 1.591-.659a2.235 2.235 0 00.616-2.027l-1.481-7.5a2.255 2.255 0 00-2.207-1.814h-.769v12h2.25zm-3.75 0v-12h-9v12h9zM5.23 10.5c-1.072 0-2 .763-2.207 1.814l-1.481 7.5a2.239 2.239 0 00.338 1.688 2.24 2.24 0 001.869.998h2.25v-12H5.23zM14.999 9V4.5c0-1.654-1.346-3-3-3s-3 1.346-3 3V9h6z"}}),_c('path',{attrs:{"d":"M9.749 15a.75.75 0 010-1.5h4.5a.75.75 0 010 1.5h-4.5z"}})])
          )
        }
      }
    