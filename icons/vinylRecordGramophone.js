
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
            children.concat([_c('path',{attrs:{"d":"M1.5 24C.673 24 0 23.327 0 22.5V18c0-.827.673-1.5 1.5-1.5h6V15H2.25a.75.75 0 010-1.5H7.5v-.75a.75.75 0 011.5 0v.75h5.25a.75.75 0 010 1.5H9v1.5h10.646l1.026-2.164c.532-1.282.24-2.811-.732-3.836H8.25c-.262 0-.5-.133-.638-.356s-.15-.495-.033-.73l4.5-9a.75.75 0 01.584-.41c.03-.002.058-.004.086-.004a.75.75 0 01.577.269l7.474 8.97a5.125 5.125 0 011.242 5.707l-.736 1.554H22.5c.827 0 1.5.673 1.5 1.5v4.5c0 .827-.673 1.5-1.5 1.5h-21zm0-1.5h21V18h-21v4.5zM18.649 9l-5.741-6.889L9.464 9h9.185z"}})])
          )
        }
      }
    