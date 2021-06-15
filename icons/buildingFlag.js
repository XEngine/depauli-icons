
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
            children.concat([_c('path',{attrs:{"d":"M.75 24a.75.75 0 010-1.5h.75V18H.75a.75.75 0 010-1.5h.75v-3H.75a.75.75 0 010-1.5H4.5V7.5h-.75a.75.75 0 010-1.5h6.75V.75a.75.75 0 01.75-.75h4c.689 0 1.25.561 1.25 1.25v2c0 .689-.561 1.25-1.25 1.25H12V6h8.25a.75.75 0 010 1.5h-.75V12h3.75a.75.75 0 010 1.5h-.75v3h.75a.75.75 0 010 1.5h-.75v4.5h.75a.75.75 0 010 1.5H.75zM21 22.5V18h-1.5v4.5H21zm-3 0V18H6v4.5h12zm-13.5 0V18H3v4.5h1.5zm16.5-6v-3h-1.5v3H21zm-3 0v-9H6v9h12zm-13.5 0v-3H3v3h1.5zM15 3V1.5h-3V3h3z"}}),_c('path',{attrs:{"d":"M9.75 11.25A.75.75 0 019 10.5v-.75a.75.75 0 011.5 0v.75a.75.75 0 01-.75.75zM9.75 15a.75.75 0 01-.75-.75v-.75a.75.75 0 011.5 0v.75a.75.75 0 01-.75.75zM14.25 11.25a.75.75 0 01-.75-.75v-.75a.75.75 0 011.5 0v.75a.75.75 0 01-.75.75zM14.25 15a.75.75 0 01-.75-.75v-.75a.75.75 0 011.5 0v.75a.75.75 0 01-.75.75zM9.75 21a.75.75 0 01-.75-.75v-.75a.75.75 0 011.5 0v.75a.75.75 0 01-.75.75zM14.25 21a.75.75 0 01-.75-.75v-.75a.75.75 0 011.5 0v.75a.75.75 0 01-.75.75z"}})])
          )
        }
      }
    