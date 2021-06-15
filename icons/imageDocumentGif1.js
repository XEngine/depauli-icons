
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
            children.concat([_c('path',{attrs:{"d":"M1.75 24C.785 24 0 23.215 0 22.25V1.75C0 .785.785 0 1.75 0h20.5C23.215 0 24 .785 24 1.75v20.5c0 .965-.785 1.75-1.75 1.75H1.75zm0-22.5a.25.25 0 00-.25.25v20.5c0 .138.112.25.25.25h20.5a.25.25 0 00.25-.25V1.75a.25.25 0 00-.25-.25H1.75z"}}),_c('path',{attrs:{"d":"M15 18.75a.75.75 0 01-.75-.75v-6a2.252 2.252 0 012.25-2.25H18a.75.75 0 010 1.5h-1.5a.75.75 0 00-.75.75v2.25h1.5a.75.75 0 010 1.5h-1.5V18a.75.75 0 01-.75.75zM12 18.75a.75.75 0 01-.75-.75v-7.5a.75.75 0 011.5 0V18a.75.75 0 01-.75.75zM7.5 18.75a2.252 2.252 0 01-2.25-2.25V12A2.252 2.252 0 017.5 9.75H9a.75.75 0 010 1.5H7.5a.75.75 0 00-.75.75v4.5a.75.75 0 001.5 0v-.75a.75.75 0 010-1.5H9a.75.75 0 01.75.75v1.5a2.252 2.252 0 01-2.25 2.25z"}})])
          )
        }
      }
    