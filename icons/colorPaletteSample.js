
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
            children.concat([_c('path',{attrs:{"d":"M2.998 24a2.252 2.252 0 01-2.25-2.25V2.25C.748 1.009 1.758 0 2.998 0h4.5a2.252 2.252 0 012.25 2.25v16.003l6.304-14.021a.736.736 0 00-.01-.553.748.748 0 00-.406-.406l-4.159-1.717A.75.75 0 0112.049.17l4.159 1.717a2.23 2.23 0 011.219 1.216c.231.555.231 1.167.002 1.722l-6.787 15.096 10.88-9.256a.743.743 0 00.031-1.043l-3.029-3.328a.75.75 0 011.11-1.009l3.029 3.328a2.252 2.252 0 01-.15 3.178L9.399 22.949A2.261 2.261 0 017.498 24h-4.5zm-.75-2.25c0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75V15h-6v6.75zm6-8.25v-3h-6v3h6zm0-4.5V6h-6v3h6zm0-4.5V2.25a.75.75 0 00-.75-.75h-4.5a.75.75 0 00-.75.75V4.5h6z"}}),_c('circle',{attrs:{"cx":"5.248","cy":"19.875","r":"1.125"}})])
          )
        }
      }
    