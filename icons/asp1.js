
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
            children.concat([_c('path',{attrs:{"d":"M2.238 24.004a2.252 2.252 0 01-2.25-2.25v-19.5a2.252 2.252 0 012.25-2.25h19.5a2.252 2.252 0 012.25 2.25v19.5a2.252 2.252 0 01-2.25 2.25h-19.5zm0-22.5a.75.75 0 00-.75.75v19.5c0 .414.336.75.75.75h19.5a.75.75 0 00.75-.75v-19.5a.75.75 0 00-.75-.75h-19.5z"}}),_c('path',{attrs:{"d":"M7.488 18.75a.75.75 0 01-.75-.75v-2.246h-1.5V18a.75.75 0 01-1.5 0v-6c0-1.241 1.009-2.25 2.25-2.25s2.25 1.009 2.25 2.25v6a.75.75 0 01-.75.75zm-.75-4.496V12a.75.75 0 00-1.5 0v2.254h1.5zM10.488 18.75a.75.75 0 010-1.5h1.5a.75.75 0 00.75-.75c0-.715-.434-1.075-1.2-1.65-.802-.602-1.8-1.35-1.8-2.85a2.252 2.252 0 012.25-2.25h1.5a.75.75 0 010 1.5h-1.5a.75.75 0 00-.75.75c0 .715.434 1.075 1.2 1.65.802.602 1.8 1.35 1.8 2.85 0 1.241-1.01 2.25-2.25 2.25h-1.5zM16.488 18.754a.75.75 0 01-.75-.75V10.5a.75.75 0 01.75-.75h.75c1.654 0 3 1.346 3 3s-1.346 3-3 3v2.254a.75.75 0 01-.75.75zm.75-4.504c.827 0 1.5-.673 1.5-1.5s-.673-1.5-1.5-1.5v3z"}})])
          )
        }
      }
    