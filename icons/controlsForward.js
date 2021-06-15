
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
            children.concat([_c('path',{attrs:{"d":"M1.506 21.884a1.504 1.504 0 01-1.505-1.502V3.641A1.483 1.483 0 01.44 2.58a1.513 1.513 0 011.067-.433c.302 0 .591.087.834.251l6.66 4.14V3.641A1.483 1.483 0 019.44 2.58a1.517 1.517 0 011.067-.433c.307 0 .599.089.845.258l12.004 8.373c.327.225.548.566.621.96a1.49 1.49 0 01-.624 1.508l-11.997 8.369a1.499 1.499 0 01-2.354-1.234v-2.897l-6.679 4.152c-.231.16-.518.248-.817.248zm8.245-6.497a.748.748 0 01.75.75v4.246l11.996-8.368-12-8.376.004 4.249a.75.75 0 01-1.147.635L1.529 3.659a.52.52 0 01-.03-.02L1.5 20.382 9.355 15.5a.747.747 0 01.396-.113z"}})])
          )
        }
      }
    