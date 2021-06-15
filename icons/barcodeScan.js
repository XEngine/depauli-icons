
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
            children.concat([_c('path',{attrs:{"d":"M6 18a.75.75 0 01-.75-.75v-9a.75.75 0 011.5 0v9A.75.75 0 016 18zM9 13.5a.75.75 0 01-.75-.75v-4.5a.75.75 0 011.5 0v4.5a.75.75 0 01-.75.75zM18 18a.75.75 0 01-.75-.75v-9a.75.75 0 011.5 0v9A.75.75 0 0118 18zM15 13.5a.75.75 0 01-.75-.75v-4.5a.75.75 0 011.5 0v4.5a.75.75 0 01-.75.75zM12 13.5a.75.75 0 01-.75-.75v-4.5a.75.75 0 011.5 0v4.5a.75.75 0 01-.75.75zM9 16.5A.75.75 0 019 15h6a.75.75 0 010 1.5H9zM1.5 4.5a.75.75 0 01-.75-.75v-3A.75.75 0 011.5 0h3a.75.75 0 010 1.5H2.25v2.25a.75.75 0 01-.75.75zM22.5 4.5a.75.75 0 01-.75-.75V1.5H19.5a.75.75 0 010-1.5h3a.75.75 0 01.75.75v3a.75.75 0 01-.75.75zM1.5 24a.75.75 0 01-.75-.75v-3a.75.75 0 011.5 0v2.25H4.5a.75.75 0 010 1.5h-3zM19.5 24a.75.75 0 010-1.5h2.25v-2.25a.75.75 0 011.5 0v3a.75.75 0 01-.75.75h-3z"}})])
          )
        }
      }
    