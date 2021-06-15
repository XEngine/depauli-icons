
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
            children.concat([_c('path',{attrs:{"d":"M16.5 23.997a.75.75 0 010-1.5h4.939L.22 1.277C.078 1.136 0 .948 0 .747S.078.358.22.217c.141-.142.33-.22.53-.22s.389.078.53.22l21.22 21.22v-4.939a.75.75 0 011.5-.001v6.75a.744.744 0 01-.047.258l-.006.016a.76.76 0 01-.412.419l-.026.01a.733.733 0 01-.259.047H16.5z"}})])
          )
        }
      }
    