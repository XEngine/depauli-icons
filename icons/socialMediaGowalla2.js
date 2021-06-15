
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
            children.concat([_c('path',{attrs:{"d":"M12.7 5c.55 2.21 2.1 3.14 3.53 3.07a3.34 3.34 0 003.07-3.52C19.3 1.88 16.69 0 12.95 0a11 11 0 00-6.66 2.21A8.55 8.55 0 003 9.24C3 14 4.83 17.05 8.53 18.4c.1 2.3.56 5.58 5.33 5.58C19.16 24 21 20.65 21 17.8v-7.3a.75.75 0 00-.75-.75h-6.8a.75.75 0 00-.75.75v2.74a3 3 0 01-1.36-.72A4.67 4.67 0 0110.19 9a4.23 4.23 0 012.51-4zm-4 4a6.05 6.05 0 001.63 4.6 4.58 4.58 0 003.17 1.2.75.75 0 00.7-.75v-2.79h5.35v6.54c0 2.93-2.13 4.68-5.69 4.68s-3.75-1.84-3.86-4.65a.75.75 0 00-.53-.69c-3.38-1-5-3.63-5-7.89A7.12 7.12 0 017.21 3.4a9.51 9.51 0 015.74-1.88c2.34 0 4.85.95 4.85 3a1.86 1.86 0 01-1.65 2.07C15.3 6.65 14.24 6 14 3.95a.75.75 0 00-.92-.65A5.85 5.85 0 008.69 9z"}}),_c('path',{attrs:{"d":"M13.24 20.78a3 3 0 002-.93c1.06-1.06 1.24-2.53.41-3.36s-2.31-.65-3.36.41a3.14 3.14 0 00-.89 1.63 1.92 1.92 0 00.48 1.72 1.83 1.83 0 001.36.53zm-.31-2a1.65 1.65 0 01.47-.78c.49-.49 1.07-.57 1.24-.41s.09.75-.41 1.24a1.5 1.5 0 01-1 .49.37.37 0 01-.23-.12.47.47 0 01-.07-.4z"}})])
          )
        }
      }
    