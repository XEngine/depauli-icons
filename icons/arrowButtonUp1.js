
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
            children.concat([_c('path',{attrs:{"d":"M23.25 12.439a.743.743 0 01-.53-.22L12 1.5 1.28 12.219a.744.744 0 01-1.06 0 .743.743 0 01-.22-.53c0-.2.078-.389.22-.53L10.94.44c.283-.284.659-.44 1.059-.44.401 0 .777.156 1.06.438l10.721 10.72c.142.141.22.33.22.53s-.078.389-.22.53a.74.74 0 01-.53.221z"}}),_c('path',{attrs:{"d":"M23.25 23.689a.743.743 0 01-.53-.22L12 12.75 1.28 23.469a.744.744 0 01-1.06 0 .744.744 0 010-1.06L10.94 11.69a1.489 1.489 0 011.06-.439c.4 0 .776.155 1.059.438l10.721 10.72a.744.744 0 010 1.06.749.749 0 01-.53.22z"}})])
          )
        }
      }
    