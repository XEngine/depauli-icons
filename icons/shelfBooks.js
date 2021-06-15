
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
            children.concat([_c('path',{attrs:{"d":"M2.25 24A2.252 2.252 0 010 21.75V2.25A2.252 2.252 0 012.25 0h19.5A2.252 2.252 0 0124 2.25v19.5A2.252 2.252 0 0121.75 24H2.25zm19.5-1.5a.75.75 0 00.75-.75V13.5h-21v8.25c0 .414.336.75.75.75H7.5v-4.75c0-.689.561-1.25 1.25-1.25h8c.689 0 1.25.561 1.25 1.25v4.75h3.75zm-5.25 0V18H15v4.5h1.5zm-3 0V18H12v4.5h1.5zm-3 0V18H9v4.5h1.5zm12-10.5V7.5H21V12h1.5zm-3 0V7.5H18V12h1.5zm-3 0V7.25c0-.689.561-1.25 1.25-1.25h4.75V2.25a.75.75 0 00-.75-.75H2.25a.75.75 0 00-.75.75V6h7.75c.689 0 1.25.561 1.25 1.25V12h6zM9 12V7.5H7.5V12H9zm-3 0V7.5H4.5V12H6zm-3 0V7.5H1.5V12H3z"}})])
          )
        }
      }
    