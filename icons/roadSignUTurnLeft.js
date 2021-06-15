
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
            children.concat([_c('path',{attrs:{"d":"M12 24C5.383 24 0 18.617 0 12S5.383 0 12 0s12 5.383 12 12-5.383 12-12 12zm0-22.5C6.21 1.5 1.5 6.21 1.5 12S6.21 22.5 12 22.5 22.5 17.79 22.5 12 17.79 1.5 12 1.5z"}}),_c('path',{attrs:{"d":"M15.75 17.25a.75.75 0 01-.75-.75v-5.25c0-1.654-1.346-3-3-3s-3 1.346-3 3v1.189l.97-.97a.744.744 0 011.06 0 .747.747 0 010 1.061l-2.25 2.25a.763.763 0 01-.246.164l-.026.01a.747.747 0 01-.518-.001l-.022-.008a.732.732 0 01-.249-.165L5.47 12.53c-.142-.141-.22-.33-.22-.53s.078-.389.22-.53c.141-.142.33-.22.53-.22s.389.078.53.22l.97.97v-1.19c0-2.481 2.019-4.5 4.5-4.5s4.5 2.019 4.5 4.5v5.25a.75.75 0 01-.75.75z"}})])
          )
        }
      }
    