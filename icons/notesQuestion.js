
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
            children.concat([_c('path',{attrs:{"d":"M17.249 24c-3.722 0-6.75-3.028-6.75-6.75s3.028-6.75 6.75-6.75 6.75 3.028 6.75 6.75S20.971 24 17.249 24zm0-12c-2.895 0-5.25 2.355-5.25 5.25s2.355 5.25 5.25 5.25 5.25-2.355 5.25-5.25S20.144 12 17.249 12z"}}),_c('path',{attrs:{"d":"M17.249 18.75a.75.75 0 010-1.5 1.126 1.126 0 10-1.125-1.125.75.75 0 01-1.5 0c0-1.448 1.177-2.625 2.625-2.625s2.625 1.177 2.625 2.625-1.177 2.625-2.625 2.625z"}}),_c('circle',{attrs:{"cx":"17.249","cy":"20.625","r":"1.125"}}),_c('path',{attrs:{"d":"M2.204 21A2.222 2.222 0 010 18.732V3.857C-.043 2.608.955 1.545 2.223 1.5H4.5V.75a.75.75 0 111.499 0v.75h3V.75a.75.75 0 011.5 0v.75h3V.75a.75.75 0 011.5 0v.75h2.25c1.289.045 2.292 1.114 2.25 2.382V8.25a.75.75 0 01-1.5 0V3.857A.816.816 0 0017.223 3H15v2.25a.75.75 0 01-1.5 0V3h-3v2.25a.75.75 0 01-1.5 0V3H6v2.25a.75.75 0 01-1.501 0V3h-2.25c-.423.015-.765.389-.75.832v14.972c.01.391.328.697.723.697h6.027a.75.75 0 010 1.499H2.204z"}})])
          )
        }
      }
    