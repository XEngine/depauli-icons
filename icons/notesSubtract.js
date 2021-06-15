
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
            children.concat([_c('path',{attrs:{"d":"M17.249 24c-3.722 0-6.75-3.028-6.75-6.75s3.028-6.75 6.75-6.75 6.75 3.028 6.75 6.75S20.971 24 17.249 24zm0-12c-2.895 0-5.25 2.355-5.25 5.25s2.355 5.25 5.25 5.25 5.25-2.355 5.25-5.25S20.144 12 17.249 12z"}}),_c('path',{attrs:{"d":"M14.249 18a.75.75 0 010-1.5h6a.75.75 0 010 1.5h-6zM2.204 21A2.222 2.222 0 010 18.732V3.857C-.042 2.609.955 1.546 2.222 1.5h2.277V.75a.75.75 0 011.5 0v.75h3V.75a.75.75 0 011.5 0v.75h3V.75a.75.75 0 011.5 0v.75h2.25c1.288.046 2.291 1.114 2.25 2.382V8.25a.75.75 0 01-1.5 0V3.857A.818.818 0 0017.222 3h-2.223v2.25a.75.75 0 01-1.5 0V3h-3v2.25a.75.75 0 01-1.5 0V3h-3v2.25a.75.75 0 01-1.5 0V3h-2.25c-.422.016-.765.389-.75.832v14.971c.01.391.328.697.723.697h6.027a.75.75 0 010 1.5H2.204z"}})])
          )
        }
      }
    