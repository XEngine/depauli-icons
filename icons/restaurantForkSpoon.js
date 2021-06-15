
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
            children.concat([_c('path',{attrs:{"d":"M6.75 24a.75.75 0 01-.75-.75V11.171a3.759 3.759 0 01-3-3.669V.75a.75.75 0 011.5 0V7.5A2.273 2.273 0 006 9.615V.75a.75.75 0 011.5 0v8.865A2.274 2.274 0 009 7.498V.75a.75.75 0 011.5 0V7.5a3.759 3.759 0 01-3 3.671V23.25a.75.75 0 01-.75.75zM17.25 24a.75.75 0 01-.75-.75v-12h-.25A2.754 2.754 0 0113.5 8.5V2.75A2.754 2.754 0 0116.25 0h2A2.754 2.754 0 0121 2.75V8.5a2.754 2.754 0 01-2.75 2.75H18v12a.75.75 0 01-.75.75zm-1-22.5c-.689 0-1.25.561-1.25 1.25V8.5c0 .689.561 1.25 1.25 1.25h2c.689 0 1.25-.561 1.25-1.25V2.75c0-.689-.561-1.25-1.25-1.25h-2z"}})])
          )
        }
      }
    