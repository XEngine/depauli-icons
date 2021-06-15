
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
            children.concat([_c('path',{attrs:{"d":"M17.25 24c-3.722 0-6.75-3.028-6.75-6.75s3.028-6.75 6.75-6.75S24 13.528 24 17.25 20.972 24 17.25 24zm0-12C14.355 12 12 14.355 12 17.25s2.355 5.25 5.25 5.25 5.25-2.355 5.25-5.25S20.145 12 17.25 12z"}}),_c('path',{attrs:{"d":"M16.417 20.429a1.48 1.48 0 01-1.055-.436l-1.503-1.503a.752.752 0 01.53-1.281c.2 0 .389.078.53.22l1.5 1.5 2.905-3.874a.753.753 0 011.049-.151c.332.249.399.72.151 1.051l-2.905 3.873a1.497 1.497 0 01-1.202.601zM2.25 16.5A2.252 2.252 0 010 14.25v-12A2.252 2.252 0 012.25 0h16.5A2.252 2.252 0 0121 2.25v6a.75.75 0 01-1.5 0V6h-18v8.25c0 .414.336.75.75.75h6a.75.75 0 010 1.5h-6zm17.25-12V2.25a.75.75 0 00-.75-.75H2.25a.75.75 0 00-.75.75V4.5h18z"}}),_c('path',{attrs:{"d":"M3.75 9.75a.75.75 0 010-1.5h6a.75.75 0 010 1.5h-6zM3.75 12.75a.75.75 0 010-1.5h3a.75.75 0 010 1.5h-3z"}})])
          )
        }
      }
    