
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
            children.concat([_c('path',{attrs:{"d":"M3.75 22.499A3.754 3.754 0 010 18.749v-9a3.754 3.754 0 013.75-3.75H7.5C7.5 3.518 9.519 1.5 12 1.5s4.5 2.018 4.5 4.499h3.75A3.754 3.754 0 0124 9.749v9a3.754 3.754 0 01-3.75 3.75H3.75zm16.5-1.5a2.252 2.252 0 002.25-2.25v-9a2.252 2.252 0 00-2.25-2.25H18v13.5h2.25zm-3.75 0v-13.5h-.724l-.026.001h-7.5l-.03-.001H7.5v13.5h9zM3.75 7.499a2.252 2.252 0 00-2.25 2.25v9a2.252 2.252 0 002.25 2.25H6v-13.5H3.75zM15 5.999A3.003 3.003 0 0012 3c-1.654 0-3 1.345-3 2.999h6z"}}),_c('path',{attrs:{"d":"M12 14.999a.75.75 0 010-1.5c.62 0 1.125-.505 1.125-1.125S12.62 11.249 12 11.249s-1.125.505-1.125 1.125a.75.75 0 01-1.5 0A2.629 2.629 0 0112 9.749a2.627 2.627 0 012.625 2.625A2.628 2.628 0 0112 14.999z"}}),_c('circle',{attrs:{"cx":"12","cy":"17.624","r":"1.125"}})])
          )
        }
      }
    