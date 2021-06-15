
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
            children.concat([_c('path',{attrs:{"d":"M12 24C5.383 24 0 18.617 0 12S5.383 0 12 0s12 5.383 12 12-5.383 12-12 12zm0-22.5C6.21 1.5 1.5 6.21 1.5 12S6.21 22.5 12 22.5 22.5 17.79 22.5 12 17.79 1.5 12 1.5z"}}),_c('circle',{attrs:{"cx":"7.768","cy":"9.518","r":"1.125"}}),_c('circle',{attrs:{"cx":"16.5","cy":"9.518","r":"1.125"}}),_c('path',{attrs:{"d":"M8.313 19.501a1.512 1.512 0 01-1.459-1.79 5.247 5.247 0 015.148-4.211 5.267 5.267 0 015.142 4.201 1.514 1.514 0 01-1.476 1.8.744.744 0 01-.297-.06c-1.066-.455-2.2-.686-3.371-.686s-2.305.231-3.37.686a.844.844 0 01-.317.06zM12.001 15a3.745 3.745 0 00-3.662 2.938A10.043 10.043 0 0112 17.253c1.261 0 2.488.229 3.651.68A3.743 3.743 0 0012.001 15z"}})])
          )
        }
      }
    