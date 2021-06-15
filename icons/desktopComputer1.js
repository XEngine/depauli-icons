
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
            children.concat([_c('path',{attrs:{"d":"M5.25 20.25a.75.75 0 010-1.5H7.5v-1.5H2.25A2.252 2.252 0 010 15V6a2.252 2.252 0 012.25-2.25h12A2.252 2.252 0 0116.5 6v9a2.252 2.252 0 01-2.25 2.25H9v1.5h2.25a.75.75 0 010 1.5h-6zm-3-15A.75.75 0 001.5 6v9c0 .414.336.75.75.75h12A.75.75 0 0015 15V6a.75.75 0 00-.75-.75h-12zM21.75 20.25a.751.751 0 01-.53-.22l-1.28-1.28h-1.19a.75.75 0 010-1.5h1.5c.198 0 .391.08.53.22l1.233 1.233A.753.753 0 0022.5 18V7.5c0-.317-.2-.595-.487-.703L20.78 8.03a.755.755 0 01-.53.22h-1.5a.75.75 0 010-1.5h1.189l1.28-1.28c.14-.14.333-.22.53-.22A2.252 2.252 0 0124 7.5V18a2.252 2.252 0 01-2.25 2.25z"}}),_c('path',{attrs:{"d":"M18.75 11.25a.75.75 0 010-1.5h1.5a.75.75 0 010 1.5h-1.5zM18.75 14.25a.75.75 0 010-1.5h1.5a.75.75 0 010 1.5h-1.5z"}})])
          )
        }
      }
    