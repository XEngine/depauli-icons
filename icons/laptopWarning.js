
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
            children.concat([_c('circle',{attrs:{"cx":"17.249","cy":"20.625","r":"1.125"}}),_c('path',{attrs:{"d":"M17.249 18.75a.75.75 0 01-.75-.75v-3a.75.75 0 011.5 0v3a.75.75 0 01-.75.75z"}}),_c('path',{attrs:{"d":"M13.023 24a2.528 2.528 0 01-2.258-3.654l4.226-8.451a2.513 2.513 0 012.262-1.396c.393 0 .771.089 1.124.266.486.243.887.644 1.13 1.13l4.226 8.451A2.526 2.526 0 0121.475 24h-8.452zm4.229-12c-.392 0-.744.217-.918.567l-4.226 8.451a1.025 1.025 0 00.915 1.483h8.452a1.026 1.026 0 00.917-1.483l-4.226-8.451a1.037 1.037 0 00-.458-.459 1.013 1.013 0 00-.456-.108z"}}),_c('path',{attrs:{"d":"M4.499 16.5a4.505 4.505 0 01-4.5-4.5.75.75 0 01.75-.75h1.5v-9c0-1.241 1.01-2.25 2.25-2.25h15a2.252 2.252 0 012.25 2.25v6a.75.75 0 01-1.5 0v-6a.75.75 0 00-.75-.75h-15a.75.75 0 00-.75.75v9h7.5a.75.75 0 010 1.5H1.594A2.996 2.996 0 004.499 15h5.25a.75.75 0 010 1.5h-5.25z"}})])
          )
        }
      }
    