
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
            children.concat([_c('path',{attrs:{"d":"M21.75 24a.75.75 0 01-.75-.75v-.75H3v.75a.75.75 0 01-1.5 0V4.371A2.258 2.258 0 010 2.25 2.252 2.252 0 012.25 0h19.5A2.252 2.252 0 0124 2.25c0 .96-.615 1.808-1.5 2.121V23.25a.75.75 0 01-.75.75zM21 21v-4.5H3V21h18zm0-6v-4.5h-8.25L21 15zm-9.75 0v-4.5H3V15h8.25zM21 9V4.5H3V9h18zM2.25 1.5a.75.75 0 000 1.5h19.5a.75.75 0 000-1.5H2.25z"}}),_c('path',{attrs:{"d":"M11.25 7.5a.75.75 0 010-1.5h1.5a.75.75 0 010 1.5h-1.5zM11.25 19.5a.75.75 0 010-1.5h1.5a.75.75 0 010 1.5h-1.5z"}})])
          )
        }
      }
    