
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
            children.concat([_c('path',{attrs:{"d":"M17.25 23.25a.75.75 0 01-.75-.75V21h-3.75v1.5a.75.75 0 01-1.5 0V21H7.5v1.5a.75.75 0 01-1.5 0V21h-.75A2.252 2.252 0 013 18.75V18H1.5a.75.75 0 010-1.5H3v-3.75H1.5a.75.75 0 010-1.5H3V7.5H1.5a.75.75 0 010-1.5H3v-.75A2.252 2.252 0 015.25 3H6V1.5a.75.75 0 011.5 0V3h3.75V1.5a.75.75 0 011.5 0V3h3.75V1.5a.75.75 0 011.5 0V3h.75A2.252 2.252 0 0121 5.25V6h1.5a.75.75 0 010 1.5H21v3.75h1.5a.75.75 0 010 1.5H21v3.75h1.5a.75.75 0 010 1.5H21v.75A2.252 2.252 0 0118.75 21H18v1.5a.75.75 0 01-.75.75zM5.25 4.5a.75.75 0 00-.75.75v13.5c0 .414.336.75.75.75h13.5a.75.75 0 00.75-.75V5.25a.75.75 0 00-.75-.75H5.25z"}}),_c('path',{attrs:{"d":"M8.25 18A2.252 2.252 0 016 15.75v-7.5A2.252 2.252 0 018.25 6h7.5A2.252 2.252 0 0118 8.25v7.5A2.252 2.252 0 0115.75 18h-7.5zm0-10.5a.75.75 0 00-.75.75v7.5c0 .414.336.75.75.75h7.5a.75.75 0 00.75-.75v-7.5a.75.75 0 00-.75-.75h-7.5z"}}),_c('path',{attrs:{"d":"M12 15a.75.75 0 010-1.5h2.25a.75.75 0 010 1.5H12z"}})])
          )
        }
      }
    