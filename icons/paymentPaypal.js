
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
            children.concat([_c('path',{attrs:{"d":"M12.3 4.13H9.91a.75.75 0 00-.73.58l-1 4.48a.75.75 0 00.73.92h2.29a3.79 3.79 0 003.51-2.8 2.5 2.5 0 00-.37-2.22 2.47 2.47 0 00-2.04-.96zm.92 2.79a2.28 2.28 0 01-2.06 1.67H9.81l.7-3h1.79a1 1 0 01.8.36 1 1 0 01.12.97z"}}),_c('path',{attrs:{"d":"M14.1 1H5.78a.75.75 0 00-.73.58l-4 17a.75.75 0 00.73.92h4.91a.75.75 0 00.73-.57l1.35-5.43h2.9a7.59 7.59 0 007.59-6 5.17 5.17 0 00-.86-4.55A5.51 5.51 0 0014.1 1zm3.7 6.17A6 6 0 0111.67 12H8.18a.75.75 0 00-.73.57L6.1 18H2.75L6.38 2.5h7.72a4 4 0 013.13 1.37 3.75 3.75 0 01.56 3.29z"}}),_c('path',{attrs:{"d":"M15.31 15.49h-3.59a.75.75 0 00-.73.57L9.62 21.5H6.24l.06-.32a.75.75 0 00-1.47-.29l-.24 1.21a.75.75 0 00.74.9h4.87a.75.75 0 00.73-.57L12.3 17h3a7.36 7.36 0 006.56-3.72 6.57 6.57 0 00.43-6.21.75.75 0 00-1.29.73 5.2 5.2 0 01-.42 4.73 5.91 5.91 0 01-5.27 2.96z"}})])
          )
        }
      }
    