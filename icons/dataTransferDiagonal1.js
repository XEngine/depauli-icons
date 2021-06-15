
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
            children.concat([_c('path',{attrs:{"d":"M5.25 24a.755.755 0 01-.26-.047l-.022-.008a.756.756 0 01-.468-.695v-4.5a.75.75 0 011.5 0v2.689l9.22-9.22a.744.744 0 011.06 0 .744.744 0 010 1.06l-9.22 9.22h2.69a.75.75 0 010 1.501h-4.5zM8.25 12a.743.743 0 01-.53-.22c-.142-.141-.22-.33-.22-.53s.078-.389.22-.53l9.22-9.22h-2.69a.75.75 0 010-1.5h4.5a.735.735 0 01.293.06.75.75 0 01.4.404l.01.026a.73.73 0 01.047.26v4.5a.75.75 0 01-1.5 0V2.561l-9.22 9.22a.746.746 0 01-.53.219z"}})])
          )
        }
      }
    