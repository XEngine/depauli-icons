
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
            children.concat([_c('path',{attrs:{"d":"M18 17.75a2.746 2.746 0 01-2.701-2.25H4a2.252 2.252 0 01-2.25-2.25v-3A2.252 2.252 0 014 8h8.25V6.5a.75.75 0 011.5 0V8h1.549A2.746 2.746 0 0118 5.75h3.5c.689 0 1.25.561 1.25 1.25v9.5c0 .689-.561 1.25-1.25 1.25H18zm-1.245-2.637A1.253 1.253 0 0018 16.25h3.25v-9H18c-.65 0-1.187.5-1.245 1.137a.74.74 0 01-.005.736v5.255a.747.747 0 01.005.735zM4 9.5a.75.75 0 00-.75.75v3c0 .414.336.75.75.75h11.25V9.5H4z"}})])
          )
        }
      }
    