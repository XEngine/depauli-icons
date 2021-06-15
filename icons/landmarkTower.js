
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
            children.concat([_c('path',{attrs:{"d":"M.75 23.5a.75.75 0 010-1.5h5.278l.713-18.545a1.5 1.5 0 01.297-.841L8.55.6A1.488 1.488 0 019.752 0a1.488 1.488 0 011.198.6l1.51 2.013c.183.245.286.536.299.841L13.472 22h9.778a.75.75 0 010 1.5H.75zM11.971 22L11.26 3.513 9.75 1.5 8.24 3.513 7.529 22h4.442zM18 7c-1.241 0-2.25-1.009-2.25-2.25S16.759 2.5 18 2.5c.13.004.256.017.378.04A2.996 2.996 0 0120.997 1 3.004 3.004 0 0124 4c0 1.654-1.346 3-3 3h-3zm-.016-3A.75.75 0 0018 5.5h3c.827 0 1.5-.673 1.5-1.5s-.673-1.5-1.5-1.5h-.003c-.699 0-1.314.495-1.464 1.178a.748.748 0 01-1.166.451.703.703 0 00-.383-.129z"}})])
          )
        }
      }
    