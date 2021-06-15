
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
            children.concat([_c('path',{attrs:{"d":"M15.5 12.753a3.007 3.007 0 01-2.975-2.634 1.856 1.856 0 00-.776-.36 1.849 1.849 0 00-.774.357A3.005 3.005 0 018 12.753c-1.654 0-3-1.346-3-3s1.346-3 3-3c1.187 0 2.253.708 2.732 1.768.293-.131.603-.222.915-.265a.713.713 0 01.208 0c.311.044.62.134.912.266A3.008 3.008 0 0115.5 6.753c1.654 0 3 1.346 3 3s-1.346 3-3 3zm0-4.5c-.827 0-1.5.673-1.5 1.5s.673 1.5 1.5 1.5 1.5-.673 1.5-1.5-.673-1.5-1.5-1.5zm-7.5 0c-.827 0-1.5.673-1.5 1.5s.673 1.5 1.5 1.5 1.5-.673 1.5-1.5-.673-1.5-1.5-1.5z"}}),_c('path',{attrs:{"d":"M11.749 23.901c-.261 0-.518-.068-.743-.197C9.503 22.849 2 18.155 2 9.753 2 4.377 6.374.003 11.75.003s9.75 4.374 9.75 9.75c0 3.544-1.3 6.822-3.865 9.744a21.008 21.008 0 01-5.142 4.208 1.51 1.51 0 01-.744.196zm.001-22.398c-4.549 0-8.25 3.701-8.25 8.25 0 7.573 6.871 11.865 8.249 12.648C19.405 18.03 20 11.615 20 9.753c0-4.549-3.701-8.25-8.25-8.25z"}})])
          )
        }
      }
    