
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
            children.concat([_c('path',{attrs:{"d":"M23.25 16.5a.75.75 0 01-.75-.75V13.5h-21v2.25a.75.75 0 01-1.5 0v-5.5C0 9.561.561 9 1.25 9h21.5c.689 0 1.25.561 1.25 1.25v5.5a.75.75 0 01-.75.75zM22.5 12v-1.5h-21V12h21z"}}),_c('path',{attrs:{"d":"M6 24a2.252 2.252 0 01-2.25-2.25v-6a.75.75 0 011.5 0v6c0 .414.336.75.75.75h.75v-6.75a.75.75 0 011.5 0V18h7.5v-2.25a.75.75 0 011.5 0v6.75H18a.75.75 0 00.75-.75v-6a.75.75 0 011.5 0v6A2.252 2.252 0 0118 24H6zm9.75-1.5v-3h-3v3h3zm-4.5 0v-3h-3v3h3zM19.5 7.5a.75.75 0 01-.75-.75v-4.5A.75.75 0 0018 1.5h-.75v5.25a.75.75 0 01-1.5 0V6h-7.5v.75a.75.75 0 01-1.5 0V1.5H6a.75.75 0 00-.75.75v4.5a.75.75 0 01-1.5 0v-4.5A2.252 2.252 0 016 0h12a2.252 2.252 0 012.25 2.25v4.5a.75.75 0 01-.75.75zm-3.75-3v-3h-3v3h3zm-4.5 0v-3h-3v3h3z"}})])
          )
        }
      }
    