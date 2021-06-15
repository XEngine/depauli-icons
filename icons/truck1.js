
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
            children.concat([_c('path',{attrs:{"d":"M18.75 19.5c-.96 0-1.808-.615-2.121-1.5H7.371c-.314.885-1.162 1.5-2.121 1.5s-1.808-.615-2.121-1.5H2.25A2.252 2.252 0 010 15.75v-9A2.252 2.252 0 012.25 4.5h13.408a3.745 3.745 0 013.638 2.84l.848 3.391c.408.2.769.372 1.087.523C23.246 12.216 24 12.576 24 14.25v1.5A2.252 2.252 0 0121.75 18h-.879a2.258 2.258 0 01-2.121 1.5zm0-3a.75.75 0 100 1.5.75.75 0 000-1.5zm-13.5 0a.75.75 0 100 1.5.75.75 0 000-1.5zm16.5 0a.75.75 0 00.75-.75v-1.5c0-.728 0-.728-1.916-1.642-.362-.173-.781-.373-1.259-.608H14.25v4.5h2.379c.314-.885 1.162-1.5 2.121-1.5s1.808.615 2.121 1.5h.879zm-9 0V6H2.25a.75.75 0 00-.75.75v9c0 .414.336.75.75.75h.879C3.442 15.615 4.29 15 5.25 15s1.808.615 2.121 1.5h5.379zm5.79-6l-.699-2.796A2.248 2.248 0 0015.658 6H14.25v4.5h4.29z"}}),_c('path',{attrs:{"d":"M4.25 12C3.561 12 3 11.439 3 10.75v-2c0-.689.561-1.25 1.25-1.25H10c.689 0 1.25.561 1.25 1.25v2c0 .689-.561 1.25-1.25 1.25H4.25zm5.5-1.5V9H4.5v1.5h5.25z"}})])
          )
        }
      }
    