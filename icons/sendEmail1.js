
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
            children.concat([_c('path',{attrs:{"d":"M15.051 23.793a2.23 2.23 0 01-2.155-1.636l-2.145-8.91-8.904-2.136a2.224 2.224 0 01-1.345-1.06 2.238 2.238 0 011.241-3.215L21.82.288a1.505 1.505 0 011.454.305.432.432 0 01.119.115c.141.15.253.337.319.542a1.5 1.5 0 01.003.923l-6.542 20.085a2.225 2.225 0 01-1.123 1.298 2.221 2.221 0 01-.999.237zm-.704-2.012a.733.733 0 00.703.512.73.73 0 00.698-.504l6.029-18.507-9.577 9.576 2.147 8.923zM2.214 8.261a.738.738 0 00.035 1.405l8.89 2.132 9.568-9.568L2.214 8.261z"}})])
          )
        }
      }
    