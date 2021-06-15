
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
            children.concat([_c('path',{attrs:{"d":"M4.5 16.997a.743.743 0 01-.53-.22l-3.75-3.75a.75.75 0 01-.163-.245l-.009-.024a.733.733 0 01.008-.543.74.74 0 01.166-.249L3.97 8.217a.744.744 0 011.06 0c.142.141.22.33.22.53s-.078.389-.22.53l-2.47 2.47h20.69a.75.75 0 010 1.5H2.561l2.47 2.47a.744.744 0 010 1.06.747.747 0 01-.531.22z"}})])
          )
        }
      }
    