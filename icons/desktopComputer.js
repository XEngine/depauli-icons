
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
            children.concat([_c('path',{attrs:{"d":"M3.75 15a2.252 2.252 0 01-2.25-2.25V2.25C1.5 1.01 2.509 0 3.75 0h16.5a2.252 2.252 0 012.25 2.25v10.5A2.252 2.252 0 0120.25 15H3.75zM3 12.75c0 .414.336.75.75.75h16.5a.75.75 0 00.75-.75V12H3v.75zm18-2.25V2.25a.75.75 0 00-.75-.75H3.75a.75.75 0 00-.75.75v8.25h18zM3.936 24.001a1.46 1.46 0 01-1.034-.437 1.486 1.486 0 01-.395-1.429l1.125-4.498A1.494 1.494 0 015.085 16.5h13.829a1.502 1.502 0 011.456 1.135l1.125 4.501c.098.387.039.79-.167 1.134a1.492 1.492 0 01-1.286.73l-16.106.001zm.025-1.5H20.04l-1.125-4.5L5.086 18l-1.125 4.501z"}}),_c('path',{attrs:{"d":"M6.75 21a.75.75 0 010-1.5h1.5a.75.75 0 010 1.5h-1.5zM15.75 21a.75.75 0 010-1.5h1.5a.75.75 0 010 1.5h-1.5zM11.25 21a.75.75 0 010-1.5h1.5a.75.75 0 010 1.5h-1.5z"}})])
          )
        }
      }
    