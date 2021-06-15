
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
            children.concat([_c('path',{attrs:{"d":"M19.5 24a11.943 11.943 0 01-11.617-9H4.5a.75.75 0 010-1.5h3.095A12.048 12.048 0 017.5 12c0-.496.032-.999.095-1.5H4.5a.75.75 0 010-1.5h3.383C9.251 3.685 13.986 0 19.5 0a.75.75 0 010 1.5c-4.67 0-8.741 3.06-10.062 7.5H16.5a.75.75 0 010 1.5H9.11C9.037 11.003 9 11.507 9 12s.037.997.11 1.5h4.39a.75.75 0 010 1.5H9.438A10.482 10.482 0 0019.5 22.5a.75.75 0 010 1.5z"}})])
          )
        }
      }
    