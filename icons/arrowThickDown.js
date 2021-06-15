
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
            children.concat([_c('path',{attrs:{"d":"M12.002 24a1.498 1.498 0 01-1.168-.55L2.581 12.936a1.48 1.48 0 01-.329-.951A1.504 1.504 0 013.751 10.5H6.75v-9C6.753.672 7.428 0 8.253 0h7.491c.829 0 1.503.672 1.506 1.497V10.5h2.992a1.502 1.502 0 011.499 1.35 1.49 1.49 0 01-.331 1.099l-8.233 10.488c-.071.086-.14.156-.215.219a1.523 1.523 0 01-.96.344zM3.751 12.001l8.252 10.509 8.236-10.5L16.5 12a.75.75 0 01-.75-.75V1.5H8.256l-.006 9.75a.75.75 0 01-.75.75H3.754l-.003.001z"}})])
          )
        }
      }
    