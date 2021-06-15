
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
            children.concat([_c('path',{attrs:{"d":"M23.25 21.75a.751.751 0 01-.744-.657L21 9.046l-1.506 12.047a.752.752 0 01-.744.657h-18a.75.75 0 01-.744-.843l2.25-18A.751.751 0 013 2.25h18l.047.003a.65.65 0 01.137.022c.022.005.044.013.066.021a.68.68 0 01.276.174l.01.009.027.028.008.009a.715.715 0 01.157.322c.006.02.011.046.015.074l2.25 17.997a.75.75 0 01-.743.841zm-5.162-1.5l.375-3h-4.488l-.375 3h4.488zm-6 0l.375-3H7.975l-.375 3h4.488zm-6 0l.375-3H1.975l-.375 3h4.488zm12.562-4.5l.375-3h-4.488l-.375 3h4.488zm-6 0l.375-3H8.537l-.375 3h4.488zm-6 0l.375-3H2.537l-.375 3H6.65zm12.563-4.5l.375-3H15.1l-.375 3h4.488zm-6 0l.375-3H9.1l-.375 3h4.488zm-6 0l.375-3H3.1l-.375 3h4.488zm12.562-4.5l.375-3h-4.488l-.375 3h4.488zm-6 0l.375-3H9.662l-.375 3h4.488zm-6 0l.375-3H3.662l-.375 3h4.488z"}})])
          )
        }
      }
    