
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
            children.concat([_c('path',{attrs:{"d":"M.75 24a.75.75 0 010-1.5h.75v-21C1.5.673 2.173 0 3 0h18c.827 0 1.5.673 1.5 1.5v21h.75a.75.75 0 010 1.5H.75zM21 22.5V12h-3a.75.75 0 010-1.5h3V9h-3a.75.75 0 010-1.5h3V6h-3a.75.75 0 010-1.5h3v-3H3v5.25h11.25c.827 0 1.5.673 1.5 1.5V22.5H21zm-6.75 0v-5.25h-4.5c-.827 0-1.5-.673-1.5-1.5v-7.5H3v2.25h3A.75.75 0 016 12H3v1.5h3A.75.75 0 016 15H3v7.5h1.5v-2.25C4.5 19.009 5.509 18 6.75 18S9 19.009 9 20.25v2.25h5.25zm-6.75 0v-2.25a.75.75 0 00-1.5 0v2.25h1.5zm2.25-6.75h4.5v-7.5h-4.5v7.5z"}})])
          )
        }
      }
    