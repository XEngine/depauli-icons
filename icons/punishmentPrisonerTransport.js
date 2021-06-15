
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
            children.concat([_c('path',{attrs:{"d":"M15.75 23.5a3.743 3.743 0 01-3.673-3H8.25a3.754 3.754 0 01-3.75-3.75V16H.75a.75.75 0 010-1.5H4.5V3.25A2.252 2.252 0 016.75 1h15A2.252 2.252 0 0124 3.25v13.5a3.754 3.754 0 01-3.75 3.75h-.827a3.743 3.743 0 01-3.673 3zm0-6c-1.241 0-2.25 1.009-2.25 2.25S14.509 22 15.75 22 18 20.991 18 19.75s-1.009-2.25-2.25-2.25zm4.5 1.5a2.252 2.252 0 002.25-2.25V14.5H6v2.25A2.252 2.252 0 008.25 19h3.827c.35-1.732 1.874-3 3.673-3s3.323 1.268 3.673 3h.827zm2.25-6V8.5H18V13h4.5zm-6 0V8.5H12V13h4.5zm-6 0V8.5H6V13h4.5zm12-6V3.25a.75.75 0 00-.75-.75H18V7h4.5zm-6 0V2.5H12V7h4.5zm-6 0V2.5H6.75a.75.75 0 00-.75.75V7h4.5z"}})])
          )
        }
      }
    