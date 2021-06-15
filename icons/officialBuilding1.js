
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
            children.concat([_c('path',{attrs:{"d":"M.75 24a.75.75 0 010-1.5h.75v-6H.75a.75.75 0 010-1.5h4.5V9H4.5a.75.75 0 010-1.5h.821c.434-2.351 2.888-4.204 5.929-4.467V.75a.75.75 0 011.5 0v2.283c3.041.263 5.495 2.116 5.929 4.467h.821a.75.75 0 010 1.5h-.75v6h4.5a.75.75 0 010 1.5h-.75v6h.75a.75.75 0 010 1.5H.75zM21 22.5v-6H3v6h18zM17.25 15V9H6.75v6h10.5zm-.108-7.5c-.495-1.713-2.648-3-5.142-3s-4.647 1.287-5.142 3h10.284z"}}),_c('path',{attrs:{"d":"M7.5 21a.75.75 0 01-.75-.75v-1.5a.75.75 0 011.5 0v1.5a.75.75 0 01-.75.75zM10.5 21a.75.75 0 01-.75-.75v-1.5a.75.75 0 011.5 0v1.5a.75.75 0 01-.75.75zM13.5 21a.75.75 0 01-.75-.75v-1.5a.75.75 0 011.5 0v1.5a.75.75 0 01-.75.75zM10.5 13.5a.75.75 0 01-.75-.75v-1.5a.75.75 0 011.5 0v1.5a.75.75 0 01-.75.75zM13.5 13.5a.75.75 0 01-.75-.75v-1.5a.75.75 0 011.5 0v1.5a.75.75 0 01-.75.75zM16.5 21a.75.75 0 01-.75-.75v-1.5a.75.75 0 011.5 0v1.5a.75.75 0 01-.75.75z"}})])
          )
        }
      }
    