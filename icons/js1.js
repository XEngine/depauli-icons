
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
            children.concat([_c('path',{attrs:{"d":"M2.249 24.004a2.252 2.252 0 01-2.25-2.25v-19.5a2.252 2.252 0 012.25-2.25h19.5a2.252 2.252 0 012.25 2.25v19.5a2.252 2.252 0 01-2.25 2.25h-19.5zm0-22.5a.75.75 0 00-.75.75v19.5c0 .414.336.75.75.75h19.5a.75.75 0 00.75-.75v-19.5a.75.75 0 00-.75-.75h-19.5z"}}),_c('path',{attrs:{"d":"M7.5 18.75a.75.75 0 010-1.5H9a.75.75 0 00.75-.75v-6a.75.75 0 011.5 0v6A2.252 2.252 0 019 18.75H7.5zM13.5 18.75a.75.75 0 010-1.5H15a.75.75 0 00.75-.75c0-.715-.434-1.075-1.2-1.65-.802-.602-1.8-1.35-1.8-2.85A2.252 2.252 0 0115 9.75h1.5a.75.75 0 010 1.5H15a.75.75 0 00-.75.75c0 .715.434 1.075 1.2 1.65.802.602 1.8 1.35 1.8 2.85A2.252 2.252 0 0115 18.75h-1.5z"}})])
          )
        }
      }
    