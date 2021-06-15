
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
              attrs: Object.assign({"data-name":"Outline Version","xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24"}, attrs),
              ...rest,
            },
            children.concat([_c('path',{attrs:{"d":"M22.75 11.1c0-4.82-4.82-8.73-10.75-8.73S1.25 6.28 1.25 11.1a7.91 7.91 0 003.07 6.12 1.94 1.94 0 01-1.48 2.3.75.75 0 00-.44.27 1 1 0 00-.16 1 1.31 1.31 0 001.09.77 6.09 6.09 0 001.1.1 8.21 8.21 0 005.08-2 13.19 13.19 0 002.49.24c5.93-.07 10.75-3.99 10.75-8.8zM9.41 18a.78.78 0 00-.62.16.7.7 0 00-.15.16 7 7 0 01-3.87 1.77 3.55 3.55 0 001-3.45.75.75 0 00-.28-.46 6.51 6.51 0 01-2.74-5.08c0-4 4.15-7.24 9.25-7.24s9.25 3.25 9.25 7.23-4.15 7.24-9.25 7.24A11.67 11.67 0 019.41 18z"}})])
          )
        }
      }
    