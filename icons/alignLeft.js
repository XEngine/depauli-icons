
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
            children.concat([_c('path',{attrs:{"d":"M4.75 21.018c-.965 0-1.75-.785-1.75-1.75V15.25c0-.965.785-1.75 1.75-1.75h17.5c.965 0 1.75.785 1.75 1.75v4.018c0 .965-.785 1.75-1.75 1.75H4.75zm0-6.018a.25.25 0 00-.25.25v4.018c0 .138.112.25.25.25h17.5a.25.25 0 00.25-.25V15.25a.25.25 0 00-.25-.25H4.75zM4.75 10.5C3.785 10.5 3 9.715 3 8.75V4.732c0-.965.785-1.75 1.75-1.75H14c.965 0 1.75.785 1.75 1.75V8.75c0 .965-.785 1.75-1.75 1.75H4.75zm0-6.018a.25.25 0 00-.25.25V8.75c0 .138.112.25.25.25H14a.25.25 0 00.25-.25V4.732a.25.25 0 00-.25-.25H4.75zM.75 24a.75.75 0 01-.75-.75V.75a.75.75 0 011.5 0v22.5a.75.75 0 01-.75.75z"}})])
          )
        }
      }
    