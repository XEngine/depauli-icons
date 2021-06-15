
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
              attrs: Object.assign({"data-name":"Outline Version","xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24"}, attrs),
              ...rest,
            },
            children.concat([_c('path',{attrs:{"d":"M22.81 6.07c-2.13 0-3.34-.6-5.53-1.78-.72-.39-1.53-.82-2.49-1.3a.75.75 0 00-1.08.67v8c0 .58-.62 3.5-3.54 3.5A3.19 3.19 0 016.72 12a2.86 2.86 0 011-2.18 4.85 4.85 0 013.89-1 .77.77 0 00.59-.18.75.75 0 00.25-.56V2.66a.75.75 0 00-.7-.75h-1.24A10.34 10.34 0 000 12a10.34 10.34 0 0010.51 10.12A10.34 10.34 0 0021 12v-.82a6 6 0 002.26-1.8A2.73 2.73 0 0024 7.53a1.5 1.5 0 00-.47-1.23 1 1 0 00-.72-.23zm-.69 2.32l-.12.1A4.54 4.54 0 0119.94 10a.75.75 0 00-.5.82 8.4 8.4 0 01.09 1.18 8.84 8.84 0 01-9 8.62A8.84 8.84 0 011.5 12a8.84 8.84 0 019-8.63h.5v3.94a6 6 0 00-4.27 1.38A4.34 4.34 0 005.22 12a4.68 4.68 0 004.93 4.68 5.08 5.08 0 005-5V4.89l1.37.73c2.15 1.16 3.61 1.94 5.94 2a1.28 1.28 0 01-.34.77z"}})])
          )
        }
      }
    