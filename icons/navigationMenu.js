
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
            children.concat([_c('path',{attrs:{"d":"M2.25 18.753a.75.75 0 010-1.5h19.5a.75.75 0 010 1.5H2.25zM2.25 12.753a.75.75 0 010-1.5h19.5a.75.75 0 010 1.5H2.25zM2.25 6.753a.75.75 0 010-1.5h19.5a.75.75 0 010 1.5H2.25z"}})])
          )
        }
      }
    