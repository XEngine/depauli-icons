
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
            children.concat([_c('path',{attrs:{"d":"M1.5 4.5a.75.75 0 010-1.5h21a.75.75 0 010 1.5h-21zM1.5 21a.75.75 0 010-1.5h21a.75.75 0 010 1.5h-21zM9 16.5a.75.75 0 01-.75-.75V13.5h-1.5v2.25a.75.75 0 01-1.5 0v-6c0-1.241 1.009-2.25 2.25-2.25s2.25 1.009 2.25 2.25v6a.75.75 0 01-.75.75zM8.25 12V9.75a.75.75 0 00-1.5 0V12h1.5zM13.5 16.504a.75.75 0 01-.624-.334 9.65 9.65 0 01-1.626-5.37V8.25a.75.75 0 011.5 0v2.55a8.2 8.2 0 00.75 3.423 8.197 8.197 0 00.75-3.423V8.25a.75.75 0 011.5 0v2.55a9.65 9.65 0 01-1.626 5.37.75.75 0 01-.624.334zM18 16.5a.75.75 0 01-.75-.75v-7.5a.75.75 0 011.5 0v7.5a.75.75 0 01-.75.75z"}})])
          )
        }
      }
    