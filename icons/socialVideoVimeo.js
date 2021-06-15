
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
            children.concat([_c('path',{attrs:{"d":"M23.88 7c.46-2.59-.44-4-1.27-4.66a5.08 5.08 0 00-5.06-.51 7.2 7.2 0 00-4.63 5.49.75.75 0 001.08.79c.75-.45 1.39-.54 1.71-.23s.43 1.25-.14 2.32a14.74 14.74 0 01-2.38 3.58A22.37 22.37 0 0112 9.91c-.16-.62-.28-1.36-.41-2.14C11.25 5.44 10.85 3 9.4 2a2.61 2.61 0 00-2.06-.39C4.21 2.27.34 6.85.17 7a.75.75 0 00-.02 1l.91 1.2a.75.75 0 00.5.29.74.74 0 00.56-.15 4 4 0 011.51-.79C4 9.16 4.84 12 5.49 14.12c.74 2.43 1.45 4.73 1.84 5.55a5.3 5.3 0 003 2.77 3.26 3.26 0 00.88.12 3.47 3.47 0 001.9-.59c1.97-1.24 9.43-7.44 10.77-14.97zm-13.1 14a3.79 3.79 0 01-2.1-2c-.34-.71-1.06-3.06-1.76-5.33C5.69 9.66 5.15 8 4.75 7.5A1.33 1.33 0 003.69 7a3.81 3.81 0 00-1.87.68l-.1-.14C3 6.14 5.69 3.5 7.63 3.12a1.11 1.11 0 01.91.15c.93.64 1.3 2.92 1.61 4.75.14.81.26 1.58.43 2.26.86 3.43 1.32 5.08 2.56 5.08.39 0 1.42 0 3.8-4.45.84-1.57.78-3.22-.15-4.11a2.28 2.28 0 00-2-.56 5.87 5.87 0 013.26-3 3.68 3.68 0 013.58.26c.76.63 1 1.75.75 3.25-1.24 7-8.25 12.78-10.06 13.95a1.82 1.82 0 01-1.54.3z"}})])
          )
        }
      }
    