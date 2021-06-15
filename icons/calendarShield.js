
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
            children.concat([_c('path',{attrs:{"d":"M17.25 24a.758.758 0 01-.165-.018 8.366 8.366 0 01-6.585-8.233V12.75a2.252 2.252 0 012.25-2.25h9A2.252 2.252 0 0124 12.75v2.999a8.367 8.367 0 01-6.587 8.233.727.727 0 01-.163.018zm-4.5-12a.75.75 0 00-.75.75v3a6.887 6.887 0 005.25 6.729 6.886 6.886 0 005.25-6.728V12.75a.75.75 0 00-.75-.75h-9z"}}),_c('path',{attrs:{"d":"M17.25 20.25a.75.75 0 01-.75-.75V18H15a.75.75 0 010-1.5h1.5V15a.75.75 0 011.5 0v1.5h1.5a.75.75 0 010 1.5H18v1.5a.75.75 0 01-.75.75zM2.25 18A2.252 2.252 0 010 15.75V3.765a2.252 2.252 0 012.25-2.25h2.243V.75a.75.75 0 011.5 0v.765h6V.75a.75.75 0 011.5 0v.765h2.257A2.252 2.252 0 0118 3.765V8.25a.75.75 0 01-1.5 0V7.5h-15v8.25c0 .414.336.75.75.75h6a.75.75 0 010 1.5h-6zM16.5 6V3.765a.75.75 0 00-.75-.75h-2.257v.735a.75.75 0 01-1.5 0v-.735h-6v.735a.75.75 0 01-1.5 0v-.735H2.25a.75.75 0 00-.75.75V6h15z"}})])
          )
        }
      }
    