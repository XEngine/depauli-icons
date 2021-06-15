
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
            children.concat([_c('path',{attrs:{"d":"M5.25 9a.75.75 0 010-1.5h4.5a.75.75 0 010 1.5h-4.5zM5.25 12a.75.75 0 010-1.5h4.5a.75.75 0 010 1.5h-4.5zM5.25 15a.75.75 0 010-1.5h4.5a.75.75 0 010 1.5h-4.5zM5.25 18a.75.75 0 010-1.5h4.5a.75.75 0 010 1.5h-4.5zM5.25 21a.75.75 0 010-1.5h4.5a.75.75 0 010 1.5h-4.5z"}}),_c('path',{attrs:{"d":"M.75 24a.75.75 0 010-1.5h.75V5.75c0-.689.561-1.25 1.25-1.25H4.5V2.75c0-.689.561-1.25 1.25-1.25H7.5V.75a.75.75 0 011.5 0v.75h.25c.689 0 1.25.561 1.25 1.25V4.5h1.75c.689 0 1.25.561 1.25 1.25V22.5H15v-12c0-.827.673-1.5 1.5-1.5h3v-.75a.75.75 0 011.5 0V9c.827 0 1.5.673 1.5 1.5v12h.75a.75.75 0 010 1.5H.75zM21 22.5v-12h-4.5v12H21zm-9 0V6H3v16.5h9zm-3-18V3H6v1.5h3z"}})])
          )
        }
      }
    