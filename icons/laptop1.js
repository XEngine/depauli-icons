
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
            children.concat([_c('path',{attrs:{"d":"M9.75 15a.75.75 0 010-1.5h3a.75.75 0 010 1.5h-3z"}}),_c('path',{attrs:{"d":"M.75 22.5a.75.75 0 010-1.5h9.75v-3H3.751a2.254 2.254 0 01-2.102-3.039l1.125-3c.132-.352.354-.666.643-.911A2.25 2.25 0 013 9.75v-6A2.252 2.252 0 015.25 1.5h12a2.252 2.252 0 012.25 2.25v6c0 .453-.133.885-.382 1.253.313.251.554.581.695.958l.966 3.027c.421 1.142-.172 2.437-1.327 2.869a2.235 2.235 0 01-.789.143H12v3h11.25a.75.75 0 010 1.5H.75zM4.876 12a.753.753 0 00-.698.487l-1.125 3a.744.744 0 00.171.791.746.746 0 00.529.222h14.91a.75.75 0 00.702-1.013l-.969-3.035c-.097-.258-.383-.451-.688-.452H4.876zm.374-9a.75.75 0 00-.75.75v6c0 .414.336.75.75.75h12a.75.75 0 00.75-.75v-6a.75.75 0 00-.75-.75h-12z"}})])
          )
        }
      }
    