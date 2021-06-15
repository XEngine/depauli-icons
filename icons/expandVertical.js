
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
            children.concat([_c('path',{attrs:{"d":"M12 23.998a.755.755 0 01-.26-.047l-.022-.008a.732.732 0 01-.249-.165l-3.749-3.75a.744.744 0 010-1.06.744.744 0 011.06 0l2.47 2.47V2.559l-2.47 2.47a.744.744 0 01-1.06-.001c-.142-.141-.22-.33-.22-.53s.078-.389.22-.53L11.469.219a.74.74 0 01.245-.163l.025-.009a.733.733 0 01.521.001l.021.007c.097.04.179.095.25.166L16.28 3.97c.142.141.22.33.22.53s-.078.389-.22.53a.749.749 0 01-1.06 0l-2.47-2.47v18.879l2.47-2.47a.744.744 0 011.06 0 .749.749 0 010 1.06l-3.75 3.75a.763.763 0 01-.246.164l-.027.01a.769.769 0 01-.257.045z"}})])
          )
        }
      }
    