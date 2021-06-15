
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
            children.concat([_c('path',{attrs:{"d":"M20.25 18.75a.752.752 0 01-.53-1.281l1.72-1.72H10.5a.75.75 0 010-1.5h10.939l-1.72-1.72c-.141-.14-.219-.329-.219-.529s.078-.389.22-.53a.749.749 0 011.06 0l3 3a.74.74 0 01.163.245l.01.026a.73.73 0 01.001.517l-.006.017a.748.748 0 01-.167.256l-3 3a.75.75 0 01-.531.219zM3.75 12.75a.743.743 0 01-.53-.22l-3-3a.74.74 0 01-.163-.245A.76.76 0 010 9c0-.089.016-.176.048-.261l.007-.021a.74.74 0 01.166-.249L3.22 5.47a.744.744 0 011.06 0c.142.141.22.33.22.53s-.078.389-.22.53L2.56 8.25H13.5a.75.75 0 010 1.5H2.561l1.72 1.72a.747.747 0 01-.531 1.28z"}})])
          )
        }
      }
    