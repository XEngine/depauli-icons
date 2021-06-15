
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
            children.concat([_c('path',{attrs:{"d":"M12 24C5.383 24 0 18.617 0 12S5.383 0 12 0s12 5.383 12 12-5.383 12-12 12zm0-22.5C6.21 1.5 1.5 6.21 1.5 12S6.21 22.5 12 22.5 22.5 17.79 22.5 12 17.79 1.5 12 1.5z"}}),_c('path',{attrs:{"d":"M11.998 19.05c-.344 0-.667-.114-.937-.33a1.549 1.549 0 01-.233-.232l-4.439-5.55a1.484 1.484 0 01-.319-1.102A1.502 1.502 0 017.56 10.5H9V6c0-.827.673-1.5 1.5-1.5h3c.827 0 1.5.673 1.5 1.5v4.5h1.44c.401 0 .778.156 1.061.44a1.494 1.494 0 01.109 1.998l-4.439 5.549a1.492 1.492 0 01-1.173.563zM12 17.549L16.439 12H14.25a.75.75 0 01-.75-.75V6h-3v5.25a.75.75 0 01-.75.75H7.56L12 17.549z"}})])
          )
        }
      }
    