
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
            children.concat([_c('path',{attrs:{"d":"M14.75 21c-.689 0-1.25-.561-1.25-1.25V7.5h-12v12.75a.75.75 0 01-1.5 0v-16C0 3.561.561 3 1.25 3h21.5c.689 0 1.25.561 1.25 1.25v15.5c0 .689-.561 1.25-1.25 1.25h-8zm7.75-1.5v-3H15v3h7.5zm0-4.5v-3H15l7.5 3zm0-4.5v-3H15v3h7.5zm0-4.5V4.5h-21V6h21z"}})])
          )
        }
      }
    