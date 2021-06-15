
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
            children.concat([_c('path',{attrs:{"d":"M1.75 24C.785 24 0 23.215 0 22.25V1.75C0 .785.785 0 1.75 0h20.5C23.215 0 24 .785 24 1.75v20.5c0 .965-.785 1.75-1.75 1.75H1.75zm0-22.5a.25.25 0 00-.25.25v20.5c0 .138.112.25.25.25h20.5a.25.25 0 00.25-.25V1.75a.25.25 0 00-.25-.25H1.75z"}}),_c('path',{attrs:{"d":"M4.5 18.75a.75.75 0 01-.75-.75v-6A2.252 2.252 0 016 9.75h1.5a.75.75 0 010 1.5H6a.75.75 0 00-.75.75v2.25h1.5a.75.75 0 010 1.5h-1.5V18a.75.75 0 01-.75.75zM12 18.75a2.252 2.252 0 01-2.25-2.25v-6a.75.75 0 011.5 0v6c0 .414.336.75.75.75h1.5a.75.75 0 010 1.5H12zM18 18.75a.75.75 0 01-.624-.334 9.65 9.65 0 01-1.626-5.37V10.5a.75.75 0 011.5 0v2.546c0 1.184.258 2.354.75 3.423a8.197 8.197 0 00.75-3.423V10.5a.75.75 0 011.5 0v2.546a9.648 9.648 0 01-1.626 5.37.75.75 0 01-.624.334z"}})])
          )
        }
      }
    