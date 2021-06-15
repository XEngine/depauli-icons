
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
            children.concat([_c('path',{attrs:{"d":"M4.5 16.5a.75.75 0 01-.75-.75v-7.5a.75.75 0 01.75-.75h.75c1.654 0 3 1.346 3 3s-1.346 3-3 3v2.25a.75.75 0 01-.75.75zm.75-4.5c.827 0 1.5-.673 1.5-1.5S6.077 9 5.25 9v3zM10.5 16.5a.75.75 0 010-1.5H12a.75.75 0 00.75-.75c0-.715-.434-1.075-1.2-1.65-.802-.602-1.8-1.35-1.8-2.85A2.252 2.252 0 0112 7.5h1.5a.75.75 0 010 1.5H12a.75.75 0 00-.75.75c0 .715.434 1.075 1.2 1.65.802.602 1.8 1.35 1.8 2.85A2.252 2.252 0 0112 16.5h-1.5zM16.5 16.5a.75.75 0 01-.75-.75v-7.5a.75.75 0 01.75-.75 3.754 3.754 0 013.75 3.75v1.5a3.754 3.754 0 01-3.75 3.75zm.75-1.629a2.264 2.264 0 001.5-2.121v-1.5c0-.962-.621-1.808-1.5-2.121v5.742zM1.5 4.5a.75.75 0 010-1.5h21a.75.75 0 010 1.5h-21zM1.5 21a.75.75 0 010-1.5h21a.75.75 0 010 1.5h-21z"}})])
          )
        }
      }
    