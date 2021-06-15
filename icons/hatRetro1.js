
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
            children.concat([_c('path',{attrs:{"d":"M5.604 24a6.052 6.052 0 01-.407-.015c-2.225-.15-4.128-1.418-5.119-3.399a.75.75 0 011.343-.671 4.678 4.678 0 003.018 2.439L3.109 2.399A2.251 2.251 0 015.338 0h13.31a2.254 2.254 0 012.248 2.398l-1.089 16.299a.666.666 0 01-.014.204l-.231 3.454a4.674 4.674 0 003.021-2.44.745.745 0 011.005-.336.75.75 0 01.336 1.007A6.142 6.142 0 0118.4 24H5.604zm12.445-1.5l.2-3H5.752l.2 3h12.097zm.3-4.5l.201-3H5.452l.2 3h12.697zm.301-4.5l.749-11.2.001-.054a.75.75 0 00-.75-.746H5.357l-.019-.376v.375l-.022.001a.755.755 0 00-.711.8l.746 11.2H18.65z"}})])
          )
        }
      }
    