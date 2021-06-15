
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
            children.concat([_c('path',{attrs:{"d":"M2.251 24a2.252 2.252 0 01-2.25-2.25V2.25A2.252 2.252 0 012.251 0H21.75C22.99 0 24 1.009 24 2.25v19.5c0 1.241-1.01 2.25-2.25 2.25H2.251zm-.75-2.25c0 .414.336.75.75.75H21.75a.75.75 0 00.75-.75V16.5H1.501v5.25zM22.5 15V9H1.501v6H22.5zm0-7.5V2.25a.75.75 0 00-.75-.75H2.251a.75.75 0 00-.75.75V7.5H22.5z"}}),_c('path',{attrs:{"d":"M9.75 20.25c-.827 0-1.5-.673-1.5-1.5a.75.75 0 011.5 0h4.5a.75.75 0 011.5 0c0 .827-.673 1.5-1.5 1.5h-4.5zM9.75 12.75c-.827 0-1.5-.673-1.5-1.5a.75.75 0 011.5 0h4.5a.75.75 0 011.5 0c0 .827-.673 1.5-1.5 1.5h-4.5zM9.75 5.25c-.827 0-1.5-.673-1.5-1.5a.75.75 0 011.5 0h4.5a.75.75 0 011.5 0c0 .827-.673 1.5-1.5 1.5h-4.5z"}})])
          )
        }
      }
    