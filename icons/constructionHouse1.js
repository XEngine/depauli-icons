
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
            children.concat([_c('path',{attrs:{"d":"M1.25 24C.561 24 0 23.439 0 22.75v-2c0-.689.561-1.25 1.25-1.25h1V18h-1C.561 18 0 17.439 0 16.75v-2c0-.689.561-1.25 1.25-1.25H11.5c.689 0 1.25.561 1.25 1.25v1.75h1c.689 0 1.25.561 1.25 1.25v2c0 .689-.561 1.25-1.25 1.25h-1v1.5h9a.75.75 0 00.75-.75v-3a.75.75 0 00-.75-.75H16.5a.75.75 0 010-1.5h3v-6H15v3.75a.75.75 0 01-1.5 0V10.5h-12v.75a.75.75 0 01-1.5 0v-1.5c0-.017.002-.046.005-.063a.695.695 0 01.036-.177l.012-.036A.747.747 0 01.15 9.3L6.9.3a.813.813 0 01.124-.128A.752.752 0 017.5 0h11.25a.75.75 0 010 1.5H15l2.25 3H21A.75.75 0 0121 6h-2.625l2.25 3h2.625a.75.75 0 010 1.5H21v6h.75A2.252 2.252 0 0124 18.75v3A2.252 2.252 0 0121.75 24H1.25zm10-1.5V21H1.5v1.5h9.75zm2.25-3V18H3.75v1.5h9.75zm-2.25-3V15H1.5v1.5h9.75zm7.5-7.5L16.5 6h-4.125l2.25 3h4.125zm-6 0L7.5 2 2.25 9h10.5zm2.625-4.5l-2.25-3H9l2.25 3h4.125z"}})])
          )
        }
      }
    