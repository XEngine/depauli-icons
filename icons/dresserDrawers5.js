
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
            children.concat([_c('path',{attrs:{"d":"M3 24a2.252 2.252 0 01-2.25-2.25V2.25A2.252 2.252 0 013 0h18a2.252 2.252 0 012.25 2.25v19.5A2.252 2.252 0 0121 24H3zm18-1.5a.75.75 0 00.75-.75V16.5h-9v6H21zm-18.75-.75c0 .414.336.75.75.75h8.25v-6h-9v5.25zM21.75 15V9h-9l9 6zm-10.5 0V9h-9v6h9zm10.5-7.5V2.25A.75.75 0 0021 1.5h-8.25v6h9zm-10.5 0v-6H3a.75.75 0 00-.75.75V7.5h9z"}}),_c('path',{attrs:{"d":"M6 4.5A.75.75 0 016 3h1.5a.75.75 0 010 1.5H6zM16.5 4.5a.75.75 0 010-1.5H18a.75.75 0 010 1.5h-1.5zM6 12a.75.75 0 010-1.5h1.5a.75.75 0 010 1.5H6zM16.5 12a.75.75 0 010-1.5H18a.75.75 0 010 1.5h-1.5zM6 19.5A.75.75 0 016 18h1.5a.75.75 0 010 1.5H6zM16.5 19.5a.75.75 0 010-1.5H18a.75.75 0 010 1.5h-1.5z"}})])
          )
        }
      }
    