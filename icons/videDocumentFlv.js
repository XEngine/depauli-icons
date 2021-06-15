
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
            children.concat([_c('path',{attrs:{"d":"M1.5 4.5a.75.75 0 010-1.5h21a.75.75 0 010 1.5h-21zM1.5 21a.75.75 0 010-1.5h21a.75.75 0 010 1.5h-21zM4.5 16.5a.75.75 0 01-.75-.75v-6A2.252 2.252 0 016 7.5h1.5a.75.75 0 010 1.5H6a.75.75 0 00-.75.75V12h1.5a.75.75 0 010 1.5h-1.5v2.25a.75.75 0 01-.75.75zM12 16.5a2.252 2.252 0 01-2.25-2.25v-6a.75.75 0 011.5 0v6c0 .414.336.75.75.75h1.5a.75.75 0 010 1.5H12zM18 16.5a.75.75 0 01-.624-.334A9.651 9.651 0 0115.75 10.8V8.25a.75.75 0 011.5 0v2.55c0 1.182.258 2.351.75 3.418a8.182 8.182 0 00.75-3.419V8.25a.75.75 0 011.5 0v2.55a9.651 9.651 0 01-1.626 5.366.75.75 0 01-.624.334z"}})])
          )
        }
      }
    