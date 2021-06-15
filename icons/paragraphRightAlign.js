
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
            children.concat([_c('path',{attrs:{"d":"M2 3.748a.75.75 0 010-1.5h21a.75.75 0 010 1.5H2zM5 8.248a.75.75 0 010-1.5h18a.75.75 0 010 1.5H5zM.5 12.748a.75.75 0 010-1.5H23a.75.75 0 010 1.5H.5zM5 17.248a.75.75 0 010-1.5h18a.75.75 0 010 1.5H5zM2 21.748a.75.75 0 010-1.5h21a.75.75 0 010 1.5H2z"}})])
          )
        }
      }
    