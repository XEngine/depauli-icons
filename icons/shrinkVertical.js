
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
            children.concat([_c('path',{attrs:{"d":"M12.001 10.498a.731.731 0 01-.261-.048l-.02-.007a.754.754 0 01-.25-.166L7.721 6.528c-.142-.141-.22-.33-.22-.53s.078-.389.22-.53c.141-.142.33-.22.53-.22s.389.078.53.22l2.47 2.47v-6.44H.751a.75.75 0 010-1.5h22.5a.75.75 0 010 1.5h-10.5v6.439l2.47-2.47a.744.744 0 011.06 0c.142.141.22.33.22.53s-.078.389-.22.53l-3.75 3.749a.74.74 0 01-.245.163l-.025.009a.694.694 0 01-.26.05zM.751 23.998a.75.75 0 010-1.5h10.5v-6.439l-2.47 2.47a.744.744 0 01-1.06 0 .744.744 0 010-1.06l3.75-3.75a.763.763 0 01.246-.164l.027-.01a.755.755 0 01.518 0l.022.008a.732.732 0 01.249.165l3.749 3.749a.744.744 0 010 1.06.749.749 0 01-1.06 0l-2.47-2.47v6.439h10.5a.75.75 0 010 1.5H.751z"}})])
          )
        }
      }
    