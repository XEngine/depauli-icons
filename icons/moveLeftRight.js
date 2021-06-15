
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
            children.concat([_c('path',{attrs:{"d":"M18 20.25a.749.749 0 01-.53-1.28l3.97-3.971-20.69-.001a.75.75 0 010-1.5h20.689c.401 0 .778.157 1.061.441.283.284.439.661.439 1.062a1.496 1.496 0 01-.437 1.057L18.53 20.03a.743.743 0 01-.53.22zM2.561 10.498c-.401 0-.777-.156-1.06-.439a1.488 1.488 0 01-.44-1.061c0-.401.156-.777.439-1.061l3.97-3.969a.75.75 0 011.06 1.063L2.56 8.999h20.69a.75.75 0 010 1.5H2.561z"}})])
          )
        }
      }
    