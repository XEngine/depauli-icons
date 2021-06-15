
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
            children.concat([_c('path',{attrs:{"d":"M2.25 24A2.252 2.252 0 010 21.75v-18A2.252 2.252 0 012.25 1.5H4.5V.75a.75.75 0 011.5 0v.75h12V.75a.75.75 0 011.5 0v.75h2.25A2.252 2.252 0 0124 3.75v9.879c0 .317-.066.625-.196.916l-.011.023a2.232 2.232 0 01-.451.65l-8.123 8.122a2.24 2.24 0 01-.691.47c-.274.124-.582.19-.899.19H2.25zm0-21a.75.75 0 00-.75.75v18c0 .414.336.75.75.75H13.5v-6.75a2.252 2.252 0 012.25-2.25h6.75V3.75a.75.75 0 00-.75-.75H19.5v.75a.75.75 0 01-1.5 0V3H6v.75a.75.75 0 01-1.5 0V3H2.25zm13.5 12a.75.75 0 00-.75.75v5.689L21.439 15H15.75z"}}),_c('path',{attrs:{"d":"M5.25 9a.75.75 0 010-1.5h12a.75.75 0 010 1.5h-12zM5.25 13.5a.75.75 0 010-1.5h5.25a.75.75 0 010 1.5H5.25z"}})])
          )
        }
      }
    