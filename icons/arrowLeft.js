
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
            children.concat([_c('path',{attrs:{"d":"M11.25 23.25a.743.743 0 01-.53-.22L.22 12.53a.74.74 0 01-.163-.245l-.01-.026a.75.75 0 01.009-.541.74.74 0 01.166-.249L10.72.97a.744.744 0 011.06 0c.142.141.22.33.22.53s-.078.389-.22.53l-9.22 9.22h20.69a.75.75 0 010 1.5H2.561l9.22 9.22a.75.75 0 01-.531 1.28z"}})])
          )
        }
      }
    