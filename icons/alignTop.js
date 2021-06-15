
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
            children.concat([_c('path',{attrs:{"d":"M4.732 24c-.965 0-1.75-.785-1.75-1.75V4.75c0-.965.785-1.75 1.75-1.75H8.75c.965 0 1.75.785 1.75 1.75v17.5c0 .965-.785 1.75-1.75 1.75H4.732zm0-19.5a.25.25 0 00-.25.25v17.5c0 .138.112.25.25.25H8.75a.25.25 0 00.25-.25V4.75a.25.25 0 00-.25-.25H4.732zM15.25 15.75c-.965 0-1.75-.785-1.75-1.75V4.75c0-.965.785-1.75 1.75-1.75h4.018c.965 0 1.75.785 1.75 1.75V14c0 .965-.785 1.75-1.75 1.75H15.25zm0-11.25a.25.25 0 00-.25.25V14c0 .138.112.25.25.25h4.018a.25.25 0 00.25-.25V4.75a.25.25 0 00-.25-.25H15.25zM.75 1.5a.75.75 0 010-1.5h22.5a.75.75 0 010 1.5H.75z"}})])
          )
        }
      }
    