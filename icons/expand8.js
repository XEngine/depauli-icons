
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
            children.concat([_c('path',{attrs:{"d":"M.751 8.998a.75.75 0 01-.75-.75v-6a2.252 2.252 0 012.25-2.25h6a.75.75 0 010 1.5h-6a.75.75 0 00-.75.75v6a.75.75 0 01-.75.75zM23.251 8.998a.75.75 0 01-.75-.75v-6a.75.75 0 00-.75-.75h-6a.75.75 0 010-1.5h6a2.252 2.252 0 012.25 2.25v6a.75.75 0 01-.75.75zM15.751 23.998a.75.75 0 010-1.5h6a.75.75 0 00.75-.75v-6a.75.75 0 011.5 0v6a2.252 2.252 0 01-2.25 2.25h-6zM2.251 23.998a2.252 2.252 0 01-2.25-2.25v-9a2.252 2.252 0 012.25-2.25h9a2.252 2.252 0 012.25 2.25v9a2.252 2.252 0 01-2.25 2.25h-9zm0-12a.75.75 0 00-.75.75v9c0 .414.336.75.75.75h9a.75.75 0 00.75-.75v-9a.75.75 0 00-.75-.75h-9z"}})])
          )
        }
      }
    