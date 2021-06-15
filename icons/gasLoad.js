
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
            children.concat([_c('path',{attrs:{"d":"M5.25 7.5C4.01 7.5 3 6.491 3 5.25S4.01 3 5.25 3h6c1.241 0 2.25 1.009 2.25 2.25S12.491 7.5 11.25 7.5h-6zm0-3a.75.75 0 000 1.5h6a.75.75 0 000-1.5h-6z"}}),_c('path',{attrs:{"d":"M20.25 24A2.253 2.253 0 0118 21.75v-15a.75.75 0 00-.75-.75h-.75v16.25c0 .965-.785 1.75-1.75 1.75h-13C.785 24 0 23.215 0 22.25V1.75C0 .785.785 0 1.75 0h13c.965 0 1.75.785 1.75 1.75V4.5h.75a2.252 2.252 0 012.25 2.25v15a.75.75 0 001.5 0v-9a5.69 5.69 0 01.958-3.166l.668-1.001a.753.753 0 011.041-.207.748.748 0 01.207 1.04l-.668 1a4.218 4.218 0 00-.637 1.583h.682a.75.75 0 010 1.5H22.5v8.25A2.252 2.252 0 0120.25 24zM1.5 22.25c0 .138.112.25.25.25h13a.25.25 0 00.25-.25V10.5H1.5v11.75zM15 9V1.75a.25.25 0 00-.25-.25h-13a.25.25 0 00-.25.25V9H15z"}})])
          )
        }
      }
    