
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
            children.concat([_c('path',{attrs:{"d":"M2.25 24a.75.75 0 010-1.5H3V18h-.75a.75.75 0 010-1.5H3v-6h-.75a.75.75 0 010-1.5H3V4.5h-.75a.75.75 0 010-1.5H13.5V1.75c0-.965.785-1.75 1.75-1.75h2.5c.965 0 1.75.785 1.75 1.75V3h2.25a.75.75 0 010 1.5H21V9h.75a.75.75 0 010 1.5H21v6h.75a.75.75 0 010 1.5H21v4.5h.75a.75.75 0 010 1.5H2.25zm17.25-1.5V18h-15v4.5h15zm0-6v-6h-15v6h15zm0-7.5V4.5h-15V9h15zM18 3V1.75a.25.25 0 00-.25-.25h-2.5a.25.25 0 00-.25.25V3h3z"}})])
          )
        }
      }
    