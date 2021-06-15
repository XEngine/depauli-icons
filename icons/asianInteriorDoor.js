
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
            children.concat([_c('path',{attrs:{"d":"M2.25 24A2.252 2.252 0 010 21.75V5.25A2.252 2.252 0 012.25 3h6a2.252 2.252 0 012.25 2.25v16.5A2.252 2.252 0 018.25 24h-6zm-.75-2.25c0 .414.336.75.75.75h6a.75.75 0 00.75-.75V18H1.5v3.75zM9 16.5V12H7.5v4.5H9zm-3 0V12H4.5v4.5H6zm-3 0V12H1.5v4.5H3zm6-6V5.25a.75.75 0 00-.75-.75H7.5v6H9zm-3 0v-6H4.5v6H6zm-3 0v-6h-.75a.75.75 0 00-.75.75v5.25H3zM15.75 24a2.252 2.252 0 01-2.25-2.25V5.25A2.252 2.252 0 0115.75 3h6A2.252 2.252 0 0124 5.25v16.5A2.252 2.252 0 0121.75 24h-6zM15 21.75c0 .414.336.75.75.75h6a.75.75 0 00.75-.75V18H15v3.75zm7.5-5.25V12H21v4.5h1.5zm-3 0V12H18v4.5h1.5zm-3 0V12H15v4.5h1.5zm6-6V5.25a.75.75 0 00-.75-.75H21v6h1.5zm-3 0v-6H18v6h1.5zm-3 0v-6h-.75a.75.75 0 00-.75.75v5.25h1.5zM.75 1.5a.75.75 0 010-1.5h22.5a.75.75 0 010 1.5H.75z"}})])
          )
        }
      }
    