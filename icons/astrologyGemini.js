
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
            children.concat([_c('path',{attrs:{"d":"M23.273 23.5a.752.752 0 01-.647-.371c-1.221-2.086-5.878-3.72-10.603-3.72s-9.382 1.634-10.603 3.72a.752.752 0 01-1.024.269.751.751 0 01-.269-1.027c1.02-1.744 3.646-3.21 7.056-3.951V5.603C3.773 4.862 1.147 3.396.127 1.652A.75.75 0 011.421.894c1.221 2.086 5.878 3.72 10.603 3.72S21.406 2.98 22.627.894a.753.753 0 011.026-.268.752.752 0 01.269 1.026c-1.021 1.744-3.646 3.21-7.057 3.951V18.42c3.411.741 6.036 2.207 7.057 3.951a.752.752 0 01-.649 1.129zm-11.25-5.591c1.12 0 2.242.081 3.341.24V5.874a23.38 23.38 0 01-6.682 0V18.15a23.247 23.247 0 013.341-.241z"}})])
          )
        }
      }
    