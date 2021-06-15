
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
            children.concat([_c('path',{attrs:{"d":"M12 23.247a.75.75 0 01-.75-.75v-8.69l-6.144 6.144a.744.744 0 01-1.06 0 .744.744 0 010-1.06l6.143-6.144H1.5a.75.75 0 010-1.5h8.69L4.046 5.102a.744.744 0 010-1.06c.141-.142.33-.22.53-.22s.389.078.53.22l6.144 6.144V1.497a.75.75 0 011.5 0v8.689l6.144-6.144a.744.744 0 011.06 0c.142.141.22.33.22.53s-.078.389-.22.53l-6.144 6.145h8.69a.75.75 0 010 1.5h-8.689l6.143 6.144a.744.744 0 010 1.06.749.749 0 01-1.06 0l-6.144-6.144v8.69a.75.75 0 01-.75.75z"}})])
          )
        }
      }
    