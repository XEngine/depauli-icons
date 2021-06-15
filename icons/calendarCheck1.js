
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
            children.concat([_c('path',{attrs:{"d":"M17.25 24c-3.722 0-6.75-3.028-6.75-6.75s3.028-6.75 6.75-6.75S24 13.528 24 17.25 20.972 24 17.25 24zm0-12C14.355 12 12 14.355 12 17.25s2.355 5.25 5.25 5.25 5.25-2.355 5.25-5.25S20.145 12 17.25 12z"}}),_c('path',{attrs:{"d":"M16.417 20.428a1.484 1.484 0 01-1.06-.439l-1.499-1.499a.752.752 0 01.53-1.281c.2 0 .389.078.53.22l1.5 1.5 2.906-3.874a.753.753 0 011.049-.151c.332.249.399.72.151 1.051l-2.905 3.873c-.283.376-.732.6-1.202.6zM2.25 18A2.252 2.252 0 010 15.75V3.765a2.252 2.252 0 012.25-2.25h2.243V.75a.75.75 0 011.5 0v.765h6V.75a.75.75 0 011.5 0v.765h2.257A2.252 2.252 0 0118 3.765V8.25a.75.75 0 01-1.5 0V7.5h-15v8.25c0 .414.336.75.75.75h6a.75.75 0 010 1.5h-6zM16.5 6V3.765a.75.75 0 00-.75-.75h-2.257v.735a.75.75 0 01-1.5 0v-.735h-6v.735a.75.75 0 01-1.5 0v-.735H2.25a.75.75 0 00-.75.75V6h15z"}})])
          )
        }
      }
    