
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
            children.concat([_c('path',{attrs:{"d":"M15.182 15.931a.743.743 0 01-.53-.22L12 13.06l-2.652 2.651a.744.744 0 01-.53.22.75.75 0 01-.531-1.28L10.939 12 8.288 9.348a.743.743 0 01-.22-.53c0-.2.078-.389.22-.53.141-.142.33-.22.53-.22s.389.078.53.22L12 10.939l2.652-2.651a.744.744 0 011.06 0 .744.744 0 010 1.06L13.061 12l2.652 2.651a.75.75 0 01-.531 1.28z"}}),_c('path',{attrs:{"d":"M12 24C5.383 24 0 18.617 0 12S5.383 0 12 0s12 5.383 12 12-5.383 12-12 12zm0-22.5C6.21 1.5 1.5 6.21 1.5 12S6.21 22.5 12 22.5 22.5 17.79 22.5 12 17.79 1.5 12 1.5z"}})])
          )
        }
      }
    