
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
            children.concat([_c('path',{attrs:{"d":"M14.75 24c-.689 0-1.25-.561-1.25-1.25v-14c0-.689.561-1.25 1.25-1.25h8c.689 0 1.25.561 1.25 1.25v14c0 .689-.561 1.25-1.25 1.25h-8zm7.75-1.5V9H15v13.5h7.5zM1.25 24C.561 24 0 23.439 0 22.75v-11c0-.689.561-1.25 1.25-1.25h.25V3c0-.827.673-1.5 1.5-1.5h1.5V.75a.75.75 0 011.5 0v.75h3c.827 0 1.5.673 1.5 1.5v7.5h.25c.689 0 1.25.561 1.25 1.25v11c0 .689-.561 1.25-1.25 1.25h-9.5zm9.25-1.5V12h-9v10.5h9zM9 10.5V3H3v7.5h6z"}}),_c('path',{attrs:{"d":"M5.25 9a.75.75 0 010-1.5h1.5a.75.75 0 010 1.5h-1.5zM5.25 6a.75.75 0 010-1.5h1.5a.75.75 0 010 1.5h-1.5zM3.75 15a.75.75 0 010-1.5h4.5c.414 0 .75.336.75.75S3.75 15 3.75 15zM3.75 18a.75.75 0 010-1.5h4.5a.75.75 0 010 1.5h-4.5zM3.75 21a.75.75 0 010-1.5h4.5a.75.75 0 010 1.5h-4.5zM17.25 15a.75.75 0 010-1.5h3a.75.75 0 010 1.5h-3zM17.25 12a.75.75 0 010-1.5h3a.75.75 0 010 1.5h-3zM17.25 18a.75.75 0 010-1.5h3a.75.75 0 010 1.5h-3zM17.25 21a.75.75 0 010-1.5h3a.75.75 0 010 1.5h-3z"}})])
          )
        }
      }
    