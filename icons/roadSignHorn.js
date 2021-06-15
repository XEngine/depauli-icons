
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
            children.concat([_c('path',{attrs:{"d":"M12 24C5.383 24 0 18.617 0 12S5.383 0 12 0s12 5.383 12 12-5.383 12-12 12zm0-22.5C6.21 1.5 1.5 6.21 1.5 12S6.21 22.5 12 22.5 22.5 17.79 22.5 12 17.79 1.5 12 1.5z"}}),_c('path',{attrs:{"d":"M11.625 16.5a2.607 2.607 0 01-1.857-.77 2.606 2.606 0 01-.732-2.288L5.545 14.94a.745.745 0 01-.708-.064.747.747 0 01-.337-.626v-4.5a.747.747 0 011.044-.69l5.114 2.19H12v-.75a.75.75 0 011.5 0v.749H15V10.5a.75.75 0 011.5 0v.749l3-.001a.75.75 0 010 1.5h-1.756c.167.35.256.734.256 1.127a2.627 2.627 0 01-2.625 2.625h-3.75zm-.001-3.75a1.125 1.125 0 000 2.251h3.752c.62 0 1.125-.505 1.125-1.125s-.505-1.125-1.125-1.125h-3.752zM6 13.112l2.596-1.114L6 10.887v2.225z"}})])
          )
        }
      }
    