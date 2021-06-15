
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
            children.concat([_c('path',{attrs:{"d":"M15 24a.75.75 0 01-.75-.75v-.75h-4.5v.75a.75.75 0 01-1.5 0v-.75H7.5a2.252 2.252 0 01-2.25-2.25v-12C5.25 7.01 6.259 6 7.5 6h.75V1.5H7.5a.75.75 0 010-1.5h1.474L9-.001 9.03 0h5.944L15-.001l.03.001h1.47a.75.75 0 010 1.5h-.75V6h.75a2.252 2.252 0 012.25 2.25v12a2.252 2.252 0 01-2.25 2.25h-.75v.75A.75.75 0 0115 24zM7.5 7.5a.75.75 0 00-.75.75v12c0 .414.336.75.75.75h9a.75.75 0 00.75-.75v-12a.75.75 0 00-.75-.75h-9zM14.25 6V1.5h-4.5V6h4.5z"}}),_c('path',{attrs:{"d":"M9.75 12a.75.75 0 010-1.5h4.5a.75.75 0 010 1.5h-4.5zM9.75 18a.75.75 0 010-1.5h4.5a.75.75 0 010 1.5h-4.5z"}})])
          )
        }
      }
    