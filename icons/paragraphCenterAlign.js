
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
            children.concat([_c('path',{attrs:{"d":"M2.241 3.748a.75.75 0 010-1.5h19.5a.75.75 0 010 1.5h-19.5zM5.241 8.248a.75.75 0 010-1.5h13.5a.75.75 0 010 1.5h-13.5zM.741 12.748a.75.75 0 010-1.5h22.5a.75.75 0 010 1.5H.741zM5.241 17.248a.75.75 0 010-1.5h13.5a.75.75 0 010 1.5h-13.5zM2.241 21.748a.75.75 0 010-1.5h19.5a.75.75 0 010 1.5h-19.5z"}})])
          )
        }
      }
    