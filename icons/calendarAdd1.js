
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
            children.concat([_c('path',{attrs:{"d":"M2.25 18A2.252 2.252 0 010 15.75v-12A2.252 2.252 0 012.25 1.5H4.5V.75a.75.75 0 011.5 0v.75h6V.75a.75.75 0 011.5 0v.75h2.25A2.252 2.252 0 0118 3.75v4.5a.75.75 0 01-1.5 0V7.5h-15v8.25c0 .414.336.75.75.75h6a.75.75 0 010 1.5h-6zM16.5 6V3.75a.75.75 0 00-.75-.75H13.5v.75a.75.75 0 01-1.5 0V3H6v.75a.75.75 0 01-1.5 0V3H2.25a.75.75 0 00-.75.75V6h15z"}}),_c('path',{attrs:{"d":"M17.25 24c-3.722 0-6.75-3.028-6.75-6.75s3.028-6.75 6.75-6.75S24 13.528 24 17.25 20.972 24 17.25 24zm0-12C14.355 12 12 14.355 12 17.25s2.355 5.25 5.25 5.25 5.25-2.355 5.25-5.25S20.145 12 17.25 12z"}}),_c('path',{attrs:{"d":"M17.25 21a.75.75 0 01-.75-.75V18h-2.25a.75.75 0 010-1.5h2.25v-2.25a.75.75 0 011.5 0v2.25h2.25a.75.75 0 010 1.5H18v2.25a.75.75 0 01-.75.75z"}})])
          )
        }
      }
    