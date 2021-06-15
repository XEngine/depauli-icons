
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
            children.concat([_c('path',{attrs:{"d":"M.75 18a.75.75 0 010-1.5h.75v-12C.673 4.5 0 3.827 0 3V1.5C0 .673.673 0 1.5 0H21c.827 0 1.5.673 1.5 1.5V3c0 .827-.673 1.5-1.5 1.5v3.75a.75.75 0 01-1.5 0V4.5H3v12h8.25a.75.75 0 010 1.5H.75zM1.5 3H21V1.5H1.5V3z"}}),_c('circle',{attrs:{"cx":"18.75","cy":"15.795","r":"1.125"}}),_c('path',{attrs:{"d":"M18.748 24.008a1.435 1.435 0 01-1.145-.563C15.732 21.054 13.5 17.786 13.5 15.8c0-2.895 2.355-5.25 5.25-5.25S24 12.905 24 15.8c0 1.991-2.233 5.259-4.106 7.648a1.438 1.438 0 01-1.146.56zm.002-11.958A3.754 3.754 0 0015 15.8c0 1.156 1.436 3.712 3.75 6.676 2.315-2.962 3.75-5.516 3.75-6.676a3.755 3.755 0 00-3.75-3.75z"}})])
          )
        }
      }
    