
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
            children.concat([_c('path',{attrs:{"d":"M2.25 24A2.252 2.252 0 010 21.75V2.25A2.252 2.252 0 012.25 0h19.5A2.252 2.252 0 0124 2.25v11.379c0 .317-.066.625-.196.916l-.011.023a2.232 2.232 0 01-.451.65l-8.123 8.122a2.24 2.24 0 01-.691.47c-.274.124-.582.19-.899.19H2.25zm0-22.5a.75.75 0 00-.75.75v19.5c0 .414.336.75.75.75H13.5v-6.75a2.252 2.252 0 012.25-2.25h6.75V2.25a.75.75 0 00-.75-.75H2.25zM15.75 15a.75.75 0 00-.75.75v5.689L21.439 15H15.75z"}})])
          )
        }
      }
    