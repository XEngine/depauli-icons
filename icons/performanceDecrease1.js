
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
            children.concat([_c('path',{attrs:{"d":"M.75 24a.75.75 0 010-1.5h.75v-9c0-.827.673-1.5 1.5-1.5h3c.827 0 1.5.673 1.5 1.5v9H9v-12c0-.827.673-1.5 1.5-1.5h3c.827 0 1.5.673 1.5 1.5v12h1.5V18c0-.827.673-1.5 1.5-1.5h3c.827 0 1.5.673 1.5 1.5v4.5h.75a.75.75 0 010 1.5H.75zM21 22.5V18h-3v4.5h3zm-7.5 0v-12h-3v12h3zm-7.5 0v-9H3v9h3z"}}),_c('path',{attrs:{"d":"M18.75 12.003a.75.75 0 010-1.5h2.69L17.67 6.73a1.49 1.49 0 00-1.492-.376l-5.73 1.535a2.994 2.994 0 01-.771.101c-.792 0-1.567-.32-2.125-.878L1.72 1.28C1.578 1.139 1.5.95 1.5.75s.078-.389.22-.53c.141-.142.33-.22.53-.22s.389.078.53.22l5.832 5.832a1.515 1.515 0 001.449.389l5.708-1.529c.265-.08.552-.122.841-.122.789 0 1.561.321 2.12.88l3.77 3.772V6.753a.75.75 0 011.5 0v4.5a.74.74 0 01-.048.261l-.009.024a.75.75 0 01-.163.245l-.001.002a.744.744 0 01-.53.219H18.75z"}})])
          )
        }
      }
    