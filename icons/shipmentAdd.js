
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
            children.concat([_c('path',{attrs:{"d":"M17.25 24c-3.722 0-6.75-3.028-6.75-6.75s3.028-6.75 6.75-6.75S24 13.528 24 17.25 20.972 24 17.25 24zm0-12C14.355 12 12 14.355 12 17.25s2.355 5.25 5.25 5.25 5.25-2.355 5.25-5.25S20.145 12 17.25 12z"}}),_c('path',{attrs:{"d":"M17.25 21a.75.75 0 01-.75-.75V18h-2.25a.75.75 0 010-1.5h2.25v-2.25a.75.75 0 011.5 0v2.25h2.25a.75.75 0 010 1.5H18v2.25a.75.75 0 01-.75.75zM2.25 19.5A2.252 2.252 0 010 17.25V6.75c0-.596.231-1.156.651-1.58l2.777-4.168A2.246 2.246 0 015.3 0h8.9a2.248 2.248 0 011.869 1.002L18.85 5.17c.42.425.65.984.65 1.58v1.5a.75.75 0 01-1.5 0v-1.5a.75.75 0 00-.75-.75h-15a.75.75 0 00-.75.75v10.5c0 .414.336.75.75.75h6a.75.75 0 010 1.5h-6zm14.349-15l-1.778-2.666a.747.747 0 00-.623-.334H10.5v3h6.099zM9 4.5v-3H5.3a.749.749 0 00-.624.334L2.899 4.5H9z"}})])
          )
        }
      }
    