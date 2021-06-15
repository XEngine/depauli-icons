
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
            children.concat([_c('path',{attrs:{"d":"M.75 24a.75.75 0 010-1.5h.75V10.75C1.5 9.785 2.285 9 3.25 9h8.5c.965 0 1.75.785 1.75 1.75v12.5a.75.75 0 01-.75.75h-12zM12 22.5V10.75a.25.25 0 00-.25-.25h-8.5a.25.25 0 00-.25.25V12h1.5a.75.75 0 010 1.5H3v9h1.5v-2.25C4.5 19.009 5.509 18 6.75 18S9 19.009 9 20.25v2.25h3zm-4.5 0v-2.25a.75.75 0 00-1.5 0v2.25h1.5z"}}),_c('path',{attrs:{"d":"M15.75 24a.75.75 0 01-.75-.75v-4.5c0-1.241 1.009-2.25 2.25-2.25s2.25 1.009 2.25 2.25v3.75H21V2.25a.75.75 0 00-.75-.75h-9a.75.75 0 00-.75.75V3h3.75a.75.75 0 010 1.5H10.5V6h.75a.75.75 0 010 1.5h-1.5A.75.75 0 019 6.75v-4.5A2.252 2.252 0 0111.25 0h9a2.252 2.252 0 012.25 2.25V22.5h.75a.75.75 0 010 1.5h-7.5zM18 22.5v-3.75a.75.75 0 00-1.5 0v3.75H18z"}})])
          )
        }
      }
    