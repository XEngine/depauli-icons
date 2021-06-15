
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
            children.concat([_c('path',{attrs:{"d":"M3.75 15a2.252 2.252 0 01-2.25-2.25V2.25C1.5 1.01 2.509 0 3.75 0h3a.75.75 0 010 1.5h-3a.75.75 0 00-.75.75v8.25h18V2.25a.75.75 0 00-.75-.75h-4.5a.75.75 0 010-1.5h4.5a2.252 2.252 0 012.25 2.25v10.5A2.252 2.252 0 0120.25 15H3.75zM3 12.75c0 .414.336.75.75.75h16.5a.75.75 0 00.75-.75V12H3v.75zM3.936 24.001a1.46 1.46 0 01-1.034-.437 1.486 1.486 0 01-.395-1.429l1.125-4.498A1.494 1.494 0 015.085 16.5h13.829c.691 0 1.289.468 1.456 1.137l1.125 4.499c.098.387.039.791-.167 1.135a1.492 1.492 0 01-1.286.729l-16.106.001zm.025-1.5H20.04l-1.125-4.5L5.086 18l-1.125 4.501z"}}),_c('path',{attrs:{"d":"M6.75 21a.75.75 0 010-1.5h1.5a.75.75 0 010 1.5h-1.5zM15.75 21a.75.75 0 010-1.5h1.5a.75.75 0 010 1.5h-1.5zM11.25 21a.75.75 0 010-1.5h1.5a.75.75 0 010 1.5h-1.5zM10.561 8.25c-.281 0-.558-.074-.801-.214A1.513 1.513 0 019 6.743V3.016a1.518 1.518 0 01.766-1.305 1.602 1.602 0 011.478-.059l3.49 1.647c.384.167.697.482.872.883.185.423.194.893.026 1.323-.168.43-.494.769-.917.954l-3.469 1.638c-.214.101-.45.153-.685.153zm0-5.25a.1.1 0 00-.051.014l-.01 3.72a.15.15 0 00.062.016.094.094 0 00.043-.01l3.488-1.646c.075-.033.118-.076.141-.135a.227.227 0 00-.121-.293L10.604 3.01a.104.104 0 00-.043-.01z"}})])
          )
        }
      }
    