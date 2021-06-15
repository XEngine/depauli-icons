
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
            children.concat([_c('path',{attrs:{"d":"M11.25 24c-.827 0-1.5-.673-1.5-1.5v-2l-1.2-1.6a5.283 5.283 0 01-1.05-3.15v-7.5H5.25a.75.75 0 010-1.5H7.5V4.5C7.5 2.019 9.519 0 12 0s4.5 2.019 4.5 4.5v2.25h2.25a.75.75 0 010 1.5H16.5v7.5a5.285 5.285 0 01-1.05 3.15l-1.2 1.6v2c0 .827-.673 1.5-1.5 1.5h-1.5zM9 15.75c0 .806.266 1.605.75 2.25l1.35 1.8c.097.129.15.289.15.45v2.25h1.5v-2.25c0-.161.053-.321.15-.45l1.35-1.8c.484-.645.75-1.444.75-2.25v-7.5H9v7.5zm6-9V4.5c0-1.654-1.346-3-3-3s-3 1.346-3 3v2.25h6z"}}),_c('path',{attrs:{"d":"M12 18a.75.75 0 01-.75-.75V10.5a.75.75 0 011.5 0v6.75A.75.75 0 0112 18z"}})])
          )
        }
      }
    