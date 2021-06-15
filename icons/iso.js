
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
            children.concat([_c('path',{attrs:{"d":"M1.502 4.503a.75.75 0 010-1.5h21a.75.75 0 010 1.5h-21zM1.502 21.003a.75.75 0 010-1.5h21a.75.75 0 010 1.5h-21zM6.002 16.503a.75.75 0 01-.75-.75v-7.5a.75.75 0 011.5 0v7.5a.75.75 0 01-.75.75zM9 16.503a.75.75 0 010-1.5h1.5a.75.75 0 00.75-.75c0-.715-.434-1.075-1.2-1.65-.802-.602-1.8-1.35-1.8-2.85a2.252 2.252 0 012.25-2.25H12a.75.75 0 010 1.5h-1.5a.75.75 0 00-.75.75c0 .715.434 1.075 1.2 1.65.802.602 1.8 1.35 1.8 2.85a2.252 2.252 0 01-2.25 2.25H9zM16.5 16.503a2.252 2.252 0 01-2.25-2.25v-4.5c0-1.241 1.009-2.25 2.25-2.25s2.25 1.009 2.25 2.25v4.5a2.252 2.252 0 01-2.25 2.25zm0-7.5a.75.75 0 00-.75.75v4.5a.75.75 0 001.5 0v-4.5a.75.75 0 00-.75-.75z"}})])
          )
        }
      }
    