
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
            children.concat([_c('path',{attrs:{"d":"M3.75 19.5A3.754 3.754 0 010 15.75v-12A3.754 3.754 0 013.75 0h12a3.754 3.754 0 013.75 3.75v4.5a.75.75 0 01-1.5 0V7.5h-4.5v2.25a.75.75 0 01-1.5 0V7.5H7.5V12h2.25a.75.75 0 010 1.5H7.5V18h.75a.75.75 0 010 1.5h-4.5zM1.5 15.75A2.252 2.252 0 003.75 18H6v-4.5H1.5v2.25zM6 12V7.5H1.5V12H6zm12-6V3.75a2.252 2.252 0 00-2.25-2.25H13.5V6H18zm-6 0V1.5H7.5V6H12zM6 6V1.5H3.75A2.252 2.252 0 001.5 3.75V6H6z"}}),_c('path',{attrs:{"d":"M17.25 24c-3.722 0-6.75-3.028-6.75-6.75s3.028-6.75 6.75-6.75S24 13.528 24 17.25 20.972 24 17.25 24zm0-12C14.355 12 12 14.355 12 17.25s2.355 5.25 5.25 5.25 5.25-2.355 5.25-5.25S20.145 12 17.25 12z"}}),_c('path',{attrs:{"d":"M16.417 20.429a1.48 1.48 0 01-1.055-.436l-1.503-1.503a.752.752 0 01.53-1.281c.2 0 .389.078.53.22l1.5 1.5 2.905-3.874a.753.753 0 011.049-.151c.332.249.399.72.151 1.051l-2.905 3.873a1.497 1.497 0 01-1.202.601z"}})])
          )
        }
      }
    