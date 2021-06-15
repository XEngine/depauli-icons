
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
            children.concat([_c('path',{attrs:{"d":"M20.25 16.498a.743.743 0 01-.53-.22l-3-3a.74.74 0 01-.163-.245l-.01-.026a.733.733 0 01-.001-.517l.006-.016a.764.764 0 01.168-.257l2.999-2.999a.744.744 0 011.06 0c.143.141.221.33.221.53s-.078.389-.22.53l-1.72 1.72h4.189a.75.75 0 010 1.5H19.06l1.72 1.72a.752.752 0 010 1.061.746.746 0 01-.53.219zM14.25 23.998a.75.75 0 01-.75-.75v-21a.75.75 0 011.5 0v21a.75.75 0 01-.75.75zM.75 4.498a.75.75 0 010-1.5h10.5a.75.75 0 010 1.5H.75zM3.75 8.998a.75.75 0 010-1.5h7.5a.75.75 0 010 1.5h-7.5zM.75 13.498a.75.75 0 010-1.5h10.5a.75.75 0 010 1.5H.75zM3.75 17.998a.75.75 0 010-1.5h7.5a.75.75 0 010 1.5h-7.5zM.75 22.498a.75.75 0 010-1.5h10.5a.75.75 0 010 1.5H.75z"}})])
          )
        }
      }
    