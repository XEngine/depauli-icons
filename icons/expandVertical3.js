
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
            children.concat([_c('path',{attrs:{"d":"M11.503 23.998a.755.755 0 01-.26-.047l-.022-.008a.732.732 0 01-.249-.165l-3.749-3.749a.752.752 0 01.53-1.281c.2 0 .389.078.53.22l2.47 2.47v-6.439a.75.75 0 011.5 0v6.439l2.47-2.47a.744.744 0 011.06 0 .752.752 0 010 1.061l-3.75 3.75a.763.763 0 01-.246.164l-.026.01a.77.77 0 01-.258.045zM11.503 9.748a.75.75 0 01-.75-.75V2.559l-2.47 2.47a.744.744 0 01-1.06 0c-.142-.141-.22-.33-.22-.53s.078-.389.22-.53L10.972.22a.74.74 0 01.245-.163l.025-.009a.737.737 0 01.521.001l.021.007a.74.74 0 01.249.166l3.749 3.749c.142.141.22.33.22.53s-.078.389-.22.53a.749.749 0 01-1.06 0l-2.47-2.47V9a.748.748 0 01-.749.748zM7.003 12.748a.75.75 0 010-1.5h9a.75.75 0 010 1.5h-9z"}})])
          )
        }
      }
    