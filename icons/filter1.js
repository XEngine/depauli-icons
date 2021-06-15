
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
            children.concat([_c('path',{attrs:{"d":"M10.475 23.649a1.503 1.503 0 01-1.501-1.5V12.87C4.041 11.591.37 7.208.004 2.108.002 2.071 0 2.038 0 2.005c0-.4.156-.777.439-1.061.283-.283.66-.44 1.061-.44h20.952a1.488 1.488 0 011.127.511c.264.301.396.687.37 1.088l-.001.01c-.369 5.099-4.041 9.481-8.974 10.757v6.779c.001.447-.197.867-.541 1.153l-2.999 2.499a1.501 1.501 0 01-.959.348zM1.501 2.004c.347 4.679 3.787 8.598 8.373 9.535.348.071.6.38.6.735v9.875l3-2.5v-7.375c0-.355.252-.664.6-.735 4.596-.937 8.041-4.859 8.378-9.537l-20.951.002z"}})])
          )
        }
      }
    