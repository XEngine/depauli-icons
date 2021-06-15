
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
            children.concat([_c('path',{attrs:{"d":"M7.61 23c4.27 0 7.61-2.08 7.61-4.72 0-3.27-1.87-4.52-3.24-5.44-1.17-.79-1.57-1.13-1.28-2.06a4.92 4.92 0 00.77-.62 5.34 5.34 0 00-.2-7.53c-.07-.07-.15-.12-.22-.18h2.83a.75.75 0 100-1.5H7a.74.74 0 00-.3.05 5 5 0 00-2.95 1.4A5.34 5.34 0 004 10a5.6 5.6 0 004 1.66 5.22 5.22 0 001.22-.16c.07 1.3 1.13 2 2 2.63a11.69 11.69 0 00-3.55-.53C3.34 13.58 0 15.66 0 18.31S3.34 23 7.61 23zM5 8.92a3.84 3.84 0 01-.2-5.41 3.51 3.51 0 012.52-1h.12a4.09 4.09 0 012.77 1.22 3.84 3.84 0 01.2 5.41A3.84 3.84 0 015 8.92zm2.6 6.16c3.31 0 6.11 1.48 6.11 3.22s-2.8 3.22-6.11 3.22-6.1-1.47-6.1-3.21 2.8-3.23 6.11-3.23z"}}),_c('path',{attrs:{"d":"M23.25 7.83h-3.41V4.42a.75.75 0 00-1.5 0v3.41h-3.41a.75.75 0 100 1.5h3.41v3.41a.75.75 0 001.5 0V9.33h3.41a.75.75 0 000-1.5z"}})])
          )
        }
      }
    