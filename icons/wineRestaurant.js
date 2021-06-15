
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
            children.concat([_c('path',{attrs:{"d":"M5.25 19.875a.75.75 0 01-.75-.75v-3a.75.75 0 00-.75-.75H1.5v3.75a.75.75 0 01-1.5 0v-10.5a.75.75 0 011.5 0v5.25h2.25A2.252 2.252 0 016 16.125v3a.75.75 0 01-.75.75zM23.25 19.875a.75.75 0 01-.75-.75v-3.75h-2.25a.75.75 0 00-.75.75v3a.75.75 0 01-1.5 0v-3a2.252 2.252 0 012.25-2.25h2.25v-5.25a.75.75 0 011.5 0v10.5a.75.75 0 01-.75.75zM9.75 19.875a.75.75 0 010-1.5h1.5v-7.5h-4.5a.75.75 0 010-1.5h7.5V7.777A3.016 3.016 0 0112 4.875a.75.75 0 01.75-.75h4.5a.75.75 0 01.75.75c0 1.37-.947 2.564-2.25 2.902v1.598h1.5a.75.75 0 010 1.5h-4.5v7.5h1.5a.75.75 0 010 1.5h-4.5zm3.951-14.25c.263.453.754.75 1.299.75s1.036-.297 1.299-.75h-2.598z"}})])
          )
        }
      }
    