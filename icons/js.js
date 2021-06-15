
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
            children.concat([_c('path',{attrs:{"d":"M1.491 4.504a.75.75 0 010-1.5h21a.75.75 0 010 1.5h-21zM1.491 21.004a.75.75 0 010-1.5h21a.75.75 0 010 1.5h-21zM7.491 16.504a.75.75 0 010-1.5h1.5a.75.75 0 00.75-.75v-6a.75.75 0 011.5 0v6a2.252 2.252 0 01-2.25 2.25h-1.5zM13.491 16.504a.75.75 0 010-1.5h1.5a.75.75 0 00.75-.75c0-.715-.434-1.075-1.2-1.65-.802-.602-1.8-1.35-1.8-2.85a2.252 2.252 0 012.25-2.25h1.5a.75.75 0 010 1.5h-1.5a.75.75 0 00-.75.75c0 .715.434 1.075 1.2 1.65.802.602 1.8 1.35 1.8 2.85a2.252 2.252 0 01-2.25 2.25h-1.5z"}})])
          )
        }
      }
    