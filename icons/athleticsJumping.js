
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
            children.concat([_c('path',{attrs:{"d":"M21 24a.75.75 0 01-.75-.75V19.5H3.75v3.75a.75.75 0 01-1.5 0V19.5h-.5C.785 19.5 0 18.715 0 17.75v-2.5c0-.965.785-1.75 1.75-1.75h20.5c.965 0 1.75.785 1.75 1.75v2.5c0 .965-.785 1.75-1.75 1.75h-.5v3.75A.75.75 0 0121 24zM1.75 15a.25.25 0 00-.25.25v2.5c0 .138.112.25.25.25h20.5a.25.25 0 00.25-.25v-2.5a.25.25 0 00-.25-.25H1.75zM18 12a.75.75 0 01-.75-.75v-1.5H6.75v1.5a.75.75 0 01-1.5 0v-1.5H3.5c-.689 0-1.25-.561-1.25-1.25v-2c0-.689.561-1.25 1.25-1.25h17c.689 0 1.25.561 1.25 1.25v2c0 .689-.561 1.25-1.25 1.25h-1.75v1.5A.75.75 0 0118 12zm2.25-3.75v-1.5H3.75v1.5h16.5zM17.25 3.75A.75.75 0 0116.5 3V1.5h-9V3A.75.75 0 016 3V1.5H4.5a.75.75 0 010-1.5h15a.75.75 0 010 1.5H18V3a.75.75 0 01-.75.75z"}})])
          )
        }
      }
    