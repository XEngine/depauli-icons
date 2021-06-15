
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
            children.concat([_c('path',{attrs:{"d":"M7.589 24a2.262 2.262 0 01-2.242-2.062L3.102 1.645A1.512 1.512 0 013.453.528 1.49 1.49 0 014.589 0H19.41a1.503 1.503 0 011.495 1.623l-2.064 20.325A2.236 2.236 0 0116.604 24H7.589zm-.749-2.208a.764.764 0 00.75.708h9.013a.745.745 0 00.745-.688L18.496 10.5H5.591L6.84 21.792zM18.648 9l.763-7.514-14.827.015L5.424 9h13.224z"}})])
          )
        }
      }
    