
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
            children.concat([_c('path',{attrs:{"d":"M5.25 22.497a.743.743 0 01-.53-.22l-4.5-4.5a.75.75 0 01-.163-.245l-.009-.024a.733.733 0 010-.522l.012-.031a.74.74 0 01.16-.238l4.5-4.5a.744.744 0 011.06 0c.142.141.22.33.22.53s-.078.389-.22.53l-3.22 3.22h13.19c3.722 0 6.75-3.028 6.75-6.75s-3.028-6.75-6.75-6.75h-6a.75.75 0 010-1.5h6c4.549 0 8.25 3.701 8.25 8.25s-3.701 8.25-8.25 8.25H2.561l3.22 3.22a.746.746 0 01-.001 1.06.743.743 0 01-.53.22z"}})])
          )
        }
      }
    