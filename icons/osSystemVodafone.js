
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
            children.concat([_c('path',{attrs:{"d":"M12 24A12 12 0 100 12a12 12 0 0012 12zm1.26-16.63a5.3 5.3 0 014.5 5.17 5.38 5.38 0 01-5.46 5.27 5.17 5.17 0 01-3.76-1.58 6.52 6.52 0 01-1.78-4.69 8.68 8.68 0 013.15-7 9.5 9.5 0 013.89-1.9 6.71 6.71 0 00-1.16 4 .75.75 0 00.62.73zM12 1.5h.38A11 11 0 009 3.39a10.12 10.12 0 00-3.7 8.14 8 8 0 002.21 5.75 6.72 6.72 0 004.83 2 6.88 6.88 0 007-6.77A6.77 6.77 0 0014.17 6c.27-2.83 1.72-3.32 2.45-3.46A10.49 10.49 0 1112 1.5z"}})])
          )
        }
      }
    