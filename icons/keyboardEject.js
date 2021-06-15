
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
            children.concat([_c('path',{attrs:{"d":"M4.5 23.247a3.754 3.754 0 01-3.75-3.75v-15A3.754 3.754 0 014.5.747h15a3.754 3.754 0 013.75 3.75v15a3.754 3.754 0 01-3.75 3.75h-15zm0-21a2.252 2.252 0 00-2.25 2.25v15a2.252 2.252 0 002.25 2.25h15a2.252 2.252 0 002.25-2.25v-15a2.252 2.252 0 00-2.25-2.25h-15z"}}),_c('path',{attrs:{"d":"M6.75 18.747c-.827 0-1.5-.673-1.5-1.5v-1.5c0-.827.673-1.5 1.5-1.5h10.5c.827 0 1.5.673 1.5 1.5v1.5c0 .827-.673 1.5-1.5 1.5H6.75zm0-1.5h10.5v-1.5H6.75v1.5zM6.905 12.747c-.301 0-.583-.117-.795-.33a1.121 1.121 0 01-.001-1.591l4.836-4.836a1.554 1.554 0 011.052-.436c.414.002.79.16 1.071.445l4.827 4.827a1.125 1.125 0 01-.795 1.92c.001.001-10.195.001-10.195.001zm.906-1.5h8.384l-4.19-4.19a.317.317 0 01-.034.03l-4.16 4.16z"}})])
          )
        }
      }
    