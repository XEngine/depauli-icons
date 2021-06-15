
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
            children.concat([_c('path',{attrs:{"d":"M2.25 14.25A2.252 2.252 0 010 12V3A2.252 2.252 0 012.25.75h12A2.252 2.252 0 0116.5 3v6.75a.75.75 0 01-1.5 0V3a.75.75 0 00-.75-.75h-12A.75.75 0 001.5 3v9c0 .414.336.75.75.75H9a.75.75 0 010 1.5H2.25zM22.499 13.037c-.233 0-.458-.053-.669-.159l-2.586-1.292A2.237 2.237 0 0118 9.573V5.427c0-.858.476-1.629 1.244-2.013l2.586-1.292A1.502 1.502 0 0124 3.464v8.072a1.49 1.49 0 01-1.024 1.422 1.5 1.5 0 01-.477.079zm-2.585-8.281a.747.747 0 00-.414.671v4.146c0 .286.159.543.415.671l2.586 1.292V3.464l-2.587 1.292zM13.25 23.25c-.689 0-1.25-.561-1.25-1.25v-6.5c0-.689.561-1.25 1.25-1.25h6.5c.689 0 1.25.561 1.25 1.25V22c0 .689-.561 1.25-1.25 1.25h-6.5zm6.25-1.5v-6h-6v6h6z"}})])
          )
        }
      }
    