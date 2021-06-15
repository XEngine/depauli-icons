
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
            children.concat([_c('path',{attrs:{"d":"M1.5 24C.673 24 0 23.327 0 22.5V6a1.5 1.5 0 01.75-1.294V3c0-.827.673-1.5 1.5-1.5H4.5C5.327 1.5 6 2.173 6 3v1.5h1.5V3c0-.827.673-1.5 1.5-1.5h2.25c.827 0 1.5.673 1.5 1.5v1.706c.458.265.75.756.75 1.294v5.25a.75.75 0 01-.75.75H1.5v4.5h6.75a.75.75 0 010 1.5H1.5v4.5h6.75a.75.75 0 010 1.5H1.5zM12 10.5V6H1.5v4.5H12zm-.75-6V3H9v1.5h2.25zm-6.75 0V3H2.25v1.5H4.5z"}}),_c('path',{attrs:{"d":"M12 24c-.827 0-1.5-.673-1.5-1.5V18a1.5 1.5 0 01.75-1.294V15c0-.827.673-1.5 1.5-1.5H15c.827 0 1.5.673 1.5 1.5v1.5H18V15c0-.827.673-1.5 1.5-1.5h2.25c.827 0 1.5.673 1.5 1.5v1.706c.458.265.75.756.75 1.294v4.5c0 .827-.673 1.5-1.5 1.5H12zm0-1.5h10.5V18H12v4.5zm9.75-6V15H19.5v1.5h2.25zm-6.75 0V15h-2.25v1.5H15z"}})])
          )
        }
      }
    