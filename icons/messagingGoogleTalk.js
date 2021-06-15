
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
            children.concat([_c('path',{attrs:{"d":"M12 .86C5.38.86 0 5.31 0 10.79a9 9 0 003.41 6.93c0 1.23-.74 2.62-2.33 4.13a.75.75 0 00.78 1.25c3.28-1.21 7-2.48 7.65-2.6a14.63 14.63 0 002.49.21c6.62 0 12-4.45 12-9.93S18.62.86 12 .86zm0 18.36A13.12 13.12 0 019.69 19c-.2 0-.6-.11-5.72 1.72a5.14 5.14 0 00.9-3.49.75.75 0 00-.27-.48 7.64 7.64 0 01-3.09-6C1.5 6.14 6.21 2.36 12 2.36s10.5 3.78 10.5 8.43-4.71 8.42-10.5 8.42z"}}),_c('path',{attrs:{"d":"M14.06 4.07a.75.75 0 00-.3 1.47c3.13.64 5.32 2.89 5.32 5.46a5.23 5.23 0 01-2.35 4.19.75.75 0 10.87 1.22 6.7 6.7 0 003-5.41c-.02-3.3-2.7-6.15-6.54-6.93z"}})])
          )
        }
      }
    