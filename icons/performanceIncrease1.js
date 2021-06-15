
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
            children.concat([_c('path',{attrs:{"d":"M.75 24a.75.75 0 010-1.5h.75V18c0-.827.673-1.5 1.5-1.5h3c.827 0 1.5.673 1.5 1.5v4.5H9v-12c0-.827.673-1.5 1.5-1.5h3c.827 0 1.5.673 1.5 1.5v12h1.5v-9c0-.827.673-1.5 1.5-1.5h3c.827 0 1.5.673 1.5 1.5v9h.75a.75.75 0 010 1.5H.75zM21 22.5v-9h-3v9h3zm-7.5 0v-12h-3v12h3zm-7.5 0V18H3v4.5h3z"}}),_c('path',{attrs:{"d":"M2.25 12.003a.743.743 0 01-.53-.22c-.142-.141-.22-.33-.22-.53s.078-.389.22-.53l5.832-5.832a3.027 3.027 0 012.125-.879c.26 0 .519.034.77.101l5.709 1.526c.156.047.305.069.455.069.4 0 .776-.156 1.058-.438l3.77-3.77H18.75a.75.75 0 010-1.5h4.5a.735.735 0 01.293.06.747.747 0 01.4.404l.01.026A.739.739 0 0124 .75v4.5a.75.75 0 01-1.5 0V2.561l-3.77 3.77a2.975 2.975 0 01-2.119.879c-.292 0-.583-.043-.864-.127l-5.687-1.52a1.512 1.512 0 00-1.449.389L2.78 11.783a.743.743 0 01-.53.22z"}})])
          )
        }
      }
    