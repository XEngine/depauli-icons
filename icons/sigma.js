
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
            children.concat([_c('path',{attrs:{"d":"M3.811 23.998a1.503 1.503 0 01-1.062-2.561l8.91-8.91a.752.752 0 000-1.061L2.75 2.558a1.483 1.483 0 01-.439-1.061c0-.401.156-.777.44-1.06a1.49 1.49 0 011.06-.439h16.94a.75.75 0 010 1.5H3.811l8.908 8.909a2.253 2.253 0 010 3.181l-8.91 8.909 16.94.001a.75.75 0 010 1.5H3.811z"}})])
          )
        }
      }
    