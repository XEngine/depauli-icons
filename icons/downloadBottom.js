
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
            children.concat([_c('path',{attrs:{"d":"M12.001 16.5a.755.755 0 01-.26-.047l-.022-.008a.732.732 0 01-.249-.165l-4.499-4.5c-.142-.141-.22-.33-.22-.53s.078-.389.22-.53c.141-.142.33-.22.53-.22s.389.078.53.22l3.22 3.22V3.75a.75.75 0 011.5 0v10.189l3.22-3.22a.744.744 0 011.06 0c.142.141.22.33.22.53s-.078.389-.22.53l-4.5 4.5a.763.763 0 01-.246.164l-.026.01a.726.726 0 01-.258.047z"}}),_c('path',{attrs:{"d":"M3.751 21a3.754 3.754 0 01-3.75-3.75v-1.5a.75.75 0 011.5 0v1.5a2.252 2.252 0 002.25 2.25h16.5a2.252 2.252 0 002.25-2.25v-1.5a.75.75 0 011.5 0v1.5a3.754 3.754 0 01-3.75 3.75h-16.5z"}})])
          )
        }
      }
    