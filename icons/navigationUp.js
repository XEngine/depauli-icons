
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
            children.concat([_c('path',{attrs:{"d":"M11.252 23.999a6.758 6.758 0 01-6.75-6.75v-5.25H1.5c-.402 0-.777-.155-1.06-.436a1.505 1.505 0 01.038-2.164L10.481.586a2.216 2.216 0 011.517-.589c.574 0 1.121.214 1.538.604l9.97 8.786c.306.283.478.656.493 1.056a1.502 1.502 0 01-1.499 1.556h-2.998v9.75a2.252 2.252 0 01-2.25 2.25h-6zm6-1.5a.75.75 0 00.75-.75v-10.5a.75.75 0 01.75-.75h3.747l-9.971-8.787a.769.769 0 00-.53-.214.743.743 0 00-.509.2L1.484 10.511l3.768-.013a.75.75 0 01.75.75v5.25h3.75a2.252 2.252 0 012.25 2.25v3.75h5.25zm-11.195-4.5a5.265 5.265 0 004.445 4.445v-3.695a.75.75 0 00-.75-.75H6.057z"}})])
          )
        }
      }
    