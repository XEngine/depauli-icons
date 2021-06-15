
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
            children.concat([_c('path',{attrs:{"d":"M12 24C5.383 24 0 18.617 0 12S5.383 0 12 0s12 5.383 12 12-5.383 12-12 12zm0-22.5C6.21 1.5 1.5 6.21 1.5 12S6.21 22.5 12 22.5 22.5 17.79 22.5 12 17.79 1.5 12 1.5z"}}),_c('path',{attrs:{"d":"M7.6 18.118c-.827 0-1.5-.673-1.5-1.5V8.572c0-.827.673-1.5 1.5-1.5h1.684c.827 0 1.5.673 1.5 1.5v.618l3.493-3.49a1.494 1.494 0 011.061-.439c.401 0 .778.156 1.061.44l2.121 2.121c.284.284.44.661.439 1.061 0 .4-.156.777-.439 1.06l-3.493 3.493h.619c.827 0 1.5.673 1.5 1.5v1.682c0 .827-.673 1.5-1.5 1.5H7.6zm0-1.5h8.046v-1.682h-2.43a.75.75 0 01-.53-1.28l4.773-4.773-2.121-2.121-4.774 4.769a.744.744 0 01-.818.162.75.75 0 01-.462-.693V8.572H7.6v8.046z"}})])
          )
        }
      }
    