
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
            children.concat([_c('path',{attrs:{"d":"M3.75 18a.75.75 0 010-1.5h16.5a.75.75 0 010 1.5H3.75zM6.75 21a.75.75 0 010-1.5h10.5a.75.75 0 010 1.5H6.75zM9.75 24a.75.75 0 010-1.5h4.5a.75.75 0 010 1.5h-4.5zM.75 15a.75.75 0 010-1.5h10.5V.75a.75.75 0 011.5 0V13.5h10.5a.75.75 0 010 1.5H.75z"}})])
          )
        }
      }
    