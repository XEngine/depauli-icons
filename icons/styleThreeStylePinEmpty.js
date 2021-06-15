
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
            children.concat([_c('path',{attrs:{"d":"M11.75 24.001a1.5 1.5 0 01-.744-.197C9.502 22.949 2 18.255 2 9.853 2 4.477 6.374.103 11.75.103s9.75 4.374 9.75 9.75c0 3.544-1.3 6.822-3.865 9.744a21.033 21.033 0 01-5.142 4.208 1.508 1.508 0 01-.743.196zm0-22.398c-4.549 0-8.25 3.701-8.25 8.25 0 7.573 6.871 11.865 8.249 12.648C19.405 18.13 20 11.715 20 9.853c0-4.549-3.701-8.25-8.25-8.25z"}})])
          )
        }
      }
    