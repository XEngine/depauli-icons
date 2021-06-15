
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
            children.concat([_c('path',{attrs:{"d":"M.75 18.75A.75.75 0 010 18v-6a2.252 2.252 0 012.25-2.25H7.5V7.5a2.252 2.252 0 012.25-2.25h4.5A2.252 2.252 0 0116.5 7.5v3.75h5.25A2.252 2.252 0 0124 13.5V18a.75.75 0 01-.75.75H.75zm21.75-1.5V13.5a.75.75 0 00-.75-.75H16.5v4.5h6zm-7.5 0V7.5a.75.75 0 00-.75-.75h-4.5A.75.75 0 009 7.5v9.75h6zm-7.5 0v-6H2.25a.75.75 0 00-.75.75v5.25h6z"}}),_c('path',{attrs:{"d":"M4.5 15.375c-.62 0-1.125-.505-1.125-1.125 0-.599.469-1.091 1.069-1.121a.546.546 0 01.056-.004c.62 0 1.125.505 1.125 1.125S5.12 15.375 4.5 15.375z"}}),_c('circle',{attrs:{"cx":"19.5","cy":"15","r":"1.125"}}),_c('path',{attrs:{"d":"M12 12.75c-.62 0-1.125-.505-1.125-1.125 0-.599.468-1.09 1.067-1.121l.03-.003-.026.002a1.127 1.127 0 011.179 1.122c0 .62-.505 1.125-1.125 1.125z"}})])
          )
        }
      }
    