
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
            children.concat([_c('path',{attrs:{"d":"M18 23.25a.75.75 0 01-.75-.75v-3.75h-4.5v3.75a.75.75 0 01-1.5 0v-3.75h-4.5v3.75a.75.75 0 01-1.5 0v-3.75H1.5a.75.75 0 010-1.5h3.75v-4.5H1.5a.75.75 0 010-1.5h3.75v-4.5H1.5a.75.75 0 010-1.5h3.75V1.5a.75.75 0 011.5 0v3.75h4.5V1.5a.75.75 0 011.5 0v3.75h4.5V1.5a.75.75 0 011.5 0v3.75h3.75a.75.75 0 010 1.5h-3.75v4.5h3.75a.75.75 0 010 1.5h-3.75v4.5h3.75a.75.75 0 010 1.5h-3.75v3.75a.75.75 0 01-.75.75zm-.75-6v-4.5h-4.5v4.5h4.5zm-6 0v-4.5h-4.5v4.5h4.5zm6-6v-4.5h-4.5v4.5h4.5zm-6 0v-4.5h-4.5v4.5h4.5z"}})])
          )
        }
      }
    