
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
            children.concat([_c('path',{attrs:{"d":"M5.754 24a1.502 1.502 0 01-1.171-2.438L12.234 12l-7.65-9.562A1.502 1.502 0 015.754 0h5.219c.687 0 1.327.308 1.757.844l8.175 10.218c.441.552.441 1.323.001 1.874l-8.176 10.22c-.43.536-1.07.844-1.757.844H5.754zm0-1.5h5.219a.747.747 0 00.585-.281L19.734 12 11.558 1.781a.747.747 0 00-.585-.281H5.754l8.026 10.031a.745.745 0 010 .937L5.754 22.5l-.292-.235.292.235z"}})])
          )
        }
      }
    