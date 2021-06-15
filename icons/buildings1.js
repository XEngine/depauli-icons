
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
            children.concat([_c('path',{attrs:{"d":"M3 15a.75.75 0 010-1.5h4.5c.414 0 .75.336.75.75S3 15 3 15zM3 18a.75.75 0 010-1.5h4.5a.75.75 0 010 1.5H3zM3 21a.75.75 0 010-1.5h4.5a.75.75 0 010 1.5H3zM3 9a.75.75 0 010-1.5h4.5a.75.75 0 010 1.5H3zM3 12a.75.75 0 010-1.5h4.5a.75.75 0 010 1.5H3zM18.75 15a.75.75 0 010-1.5h1.5a.75.75 0 010 1.5h-1.5zM18.75 18a.75.75 0 010-1.5h1.5a.75.75 0 010 1.5h-1.5zM18.75 21a.75.75 0 010-1.5h1.5a.75.75 0 010 1.5h-1.5zM18.75 12a.75.75 0 010-1.5h1.5a.75.75 0 010 1.5h-1.5z"}}),_c('path',{attrs:{"d":"M1.25 24C.561 24 0 23.439 0 22.75V4.25C0 3.561.561 3 1.25 3H3V.75a.75.75 0 011.5 0V3h4.75c.689 0 1.25.561 1.25 1.25V12H15V7.25c0-.689.561-1.25 1.25-1.25h6.5c.689 0 1.25.561 1.25 1.25v15.5c0 .689-.561 1.25-1.25 1.25H1.25zm21.25-1.5v-15h-6v15h6zm-7.5 0v-9h-4.5v9H15zm-6 0v-18H1.5v18H9z"}})])
          )
        }
      }
    