
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
            children.concat([_c('path',{attrs:{"d":"M.75 23.997a.743.743 0 01-.53-.22c-.142-.141-.22-.33-.22-.53s.078-.389.22-.53l21.22-21.22h-5.69a.75.75 0 010-1.5h7.5a.735.735 0 01.293.06.75.75 0 01.401.405l.01.026c.03.081.046.17.046.259v7.5a.75.75 0 01-1.5 0V2.558L1.28 23.777a.743.743 0 01-.53.22z"}})])
          )
        }
      }
    