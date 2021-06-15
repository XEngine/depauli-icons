
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
            children.concat([_c('path',{attrs:{"d":"M11.189 24a.75.75 0 01-.75-.75V18h-6.75a.743.743 0 01-.53-.22L.69 15.31a1.501 1.501 0 010-2.121l2.47-2.469a.744.744 0 01.53-.22h6.75V9H3.69a.75.75 0 01-.75-.75v-6a.75.75 0 01.75-.75h6.75V.75a.75.75 0 011.5 0v.75h8.25c.198 0 .391.08.53.22l2.47 2.469c.585.585.585 1.536.001 2.121l-2.472 2.47a.755.755 0 01-.53.22h-8.25v1.5h8.25a.75.75 0 01.75.75v6a.75.75 0 01-.75.75h-8.25v5.25a.75.75 0 01-.75.75zm8.25-7.5V12H3.999L1.75 14.249 4 16.5h15.439zm.439-9l2.25-2.25L19.878 3H4.439v4.5h15.439z"}})])
          )
        }
      }
    