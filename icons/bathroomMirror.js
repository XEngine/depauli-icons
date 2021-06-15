
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
            children.concat([_c('path',{attrs:{"d":"M18.001 24a.75.75 0 01-.75-.75v-.75h-10.5v.75a.75.75 0 01-1.5 0V10.5h-2.25a.75.75 0 010-1.5h2.271c.265-5.076 3.174-9 6.729-9s6.464 3.924 6.729 9h2.271a.75.75 0 010 1.5h-2.25v12.75a.75.75 0 01-.75.75zm-.75-3v-5.116c-1.266 2.266-3.182 3.616-5.25 3.616s-3.984-1.35-5.25-3.616V21h10.5zm-5.25-19.5c-2.895 0-5.25 3.701-5.25 8.25S9.106 18 12.001 18s5.25-3.701 5.25-8.25-2.355-8.25-5.25-8.25z"}})])
          )
        }
      }
    