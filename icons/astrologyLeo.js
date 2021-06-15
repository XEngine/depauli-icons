
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
            children.concat([_c('path',{attrs:{"d":"M3.83 24C2.007 24 .523 22.517.523 20.693s1.484-3.307 3.307-3.307c.645 0 1.272.192 1.806.542V6.886C5.637 3.089 8.727 0 12.523 0s6.886 3.089 6.886 6.886v14.311c.015.69.596 1.259 1.295 1.259h.029A1.293 1.293 0 0022 21.189a.757.757 0 01.756-.733.753.753 0 01.744.766 2.792 2.792 0 01-2.734 2.734h-.062a2.813 2.813 0 01-2.795-2.734V6.886A5.392 5.392 0 0012.523 1.5a5.393 5.393 0 00-5.387 5.386v13.785A3.313 3.313 0 013.83 24zm0-5.114c-.996 0-1.807.811-1.807 1.807S2.834 22.5 3.83 22.5c.988 0 1.795-.8 1.807-1.786l-.001-.021a1.815 1.815 0 00-1.806-1.807z"}})])
          )
        }
      }
    