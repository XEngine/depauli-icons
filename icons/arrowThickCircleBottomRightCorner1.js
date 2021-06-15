
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
            children.concat([_c('path',{attrs:{"d":"M12 24C5.383 24 0 18.617 0 12S5.383 0 12 0s12 5.383 12 12-5.383 12-12 12zm0-22.5C6.21 1.5 1.5 6.21 1.5 12S6.21 22.5 12 22.5 22.5 17.79 22.5 12 17.79 1.5 12 1.5z"}}),_c('path',{attrs:{"d":"M8.352 18.118c-.827 0-1.5-.673-1.5-1.5v-1.682c0-.827.673-1.5 1.5-1.5h.621L5.481 9.943a1.502 1.502 0 01-.001-2.121L7.602 5.7a1.49 1.49 0 011.061-.439c.401 0 .777.156 1.06.438l3.493 3.49v-.617c0-.827.673-1.5 1.5-1.5H16.4c.827 0 1.5.673 1.5 1.5v8.046c0 .827-.673 1.5-1.5 1.5H8.352zm0-1.5H16.4V8.572h-1.684V11a.75.75 0 01-1.28.531l-4.773-4.77-2.122 2.121 4.773 4.773a.749.749 0 01-.53 1.28H8.352v1.683z"}})])
          )
        }
      }
    