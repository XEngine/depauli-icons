
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
            children.concat([_c('path',{attrs:{"d":"M12 24c-.827 0-1.5-.673-1.5-1.5V21H5.25A2.252 2.252 0 013 18.75V13.5H1.5C.673 13.5 0 12.827 0 12v-1.5C0 9.673.673 9 1.5 9H3V7.5C3 6.673 3.673 6 4.5 6H6c.827 0 1.5.673 1.5 1.5V9h5.25c.338 0 .668.075.969.22l9-9a.747.747 0 011.061 0c.142.141.22.33.22.53s-.078.389-.22.53l-9 9c.145.302.22.632.22.97v5.25h1.5c.827 0 1.5.673 1.5 1.5v1.5c0 .827-.673 1.5-1.5 1.5H15v1.5c0 .827-.673 1.5-1.5 1.5H12zm0-1.5h1.5V21H12v1.5zm-7.5-3.75c0 .414.336.75.75.75H16.5V18H6.75a.75.75 0 01-.75-.75V13.5H4.5v5.25zm9-2.25v-5.25a.744.744 0 00-.212-.522l-.008-.008a.744.744 0 00-.53-.22H1.5V12h9.75a.75.75 0 01.75.75v3.75h1.5zm-3 0v-3h-3v3h3zM6 9V7.5H4.5V9H6z"}})])
          )
        }
      }
    