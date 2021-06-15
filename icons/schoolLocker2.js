
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
            children.concat([_c('path',{attrs:{"d":"M1.75 22.5C.785 22.5 0 21.715 0 20.75V3.25C0 2.285.785 1.5 1.75 1.5h20.5c.965 0 1.75.785 1.75 1.75v17.5c0 .965-.785 1.75-1.75 1.75H1.75zm20.5-1.5a.25.25 0 00.25-.25V16.5h-2.25V21h2zm-3.5 0v-5.25a.75.75 0 01.75-.75v-.75a.75.75 0 011.5 0V15h1.5v-3.75h-5.25V21h1.5zm-3 0V3H9v18h6.75zm-14-18a.25.25 0 00-.25.25v17.5c0 .138.112.25.25.25H7.5V3H1.75zM22.5 9.75v-6.5a.25.25 0 00-.25-.25h-5v2.25h2c.965 0 1.75.785 1.75 1.75v2.75h1.5zm-3 0V7a.25.25 0 00-.25-.25h-2v3h2.25z"}}),_c('path',{attrs:{"d":"M3.75 18.75a.75.75 0 010-1.5h1.5a.75.75 0 010 1.5h-1.5zM3.75 15.75a.75.75 0 010-1.5h1.5a.75.75 0 010 1.5h-1.5zM3.75 9a.75.75 0 010-1.5h1.5a.75.75 0 010 1.5h-1.5zM3.75 6a.75.75 0 010-1.5h1.5a.75.75 0 010 1.5h-1.5zM11.25 18.75a.75.75 0 010-1.5h2.25a.75.75 0 010 1.5h-2.25zM11.25 15.75a.75.75 0 010-1.5h2.25a.75.75 0 010 1.5h-2.25zM11.25 9a.75.75 0 010-1.5h2.25a.75.75 0 010 1.5h-2.25zM11.25 6a.75.75 0 010-1.5h2.25a.75.75 0 010 1.5h-2.25z"}})])
          )
        }
      }
    