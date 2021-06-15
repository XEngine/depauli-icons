
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
            children.concat([_c('path',{attrs:{"d":"M15.75 21a.75.75 0 01-.75-.75V16.5h-2.25a.75.75 0 010-1.5h3a.75.75 0 01.75.75v2.689l3.22-3.22c.14-.14.333-.22.53-.22h1.494a.757.757 0 00.756-.756V2.25a.75.75 0 00-.75-.75h-12a.75.75 0 00-.75.75v4.5a.75.75 0 01-1.5 0v-4.5C7.5 1.01 8.509 0 9.75 0h12C22.99 0 24 1.01 24 2.25v11.994a2.259 2.259 0 01-2.256 2.256H20.56l-4.28 4.28a.744.744 0 01-.53.22z"}}),_c('circle',{attrs:{"cx":"19.875","cy":"8.25","r":"1.125"}}),_c('path',{attrs:{"d":"M12.375 9.375c-.62 0-1.125-.505-1.125-1.125a1.127 1.127 0 011.172-1.122l.024.002c.583.028 1.054.52 1.054 1.12 0 .621-.505 1.125-1.125 1.125zM16.125 9.375a1.125 1.125 0 010-2.25c.014 0 .032.001.047.003l.024.002c.583.027 1.054.52 1.054 1.12 0 .621-.505 1.125-1.125 1.125zM6.75 17.25a4.13 4.13 0 01-4.125-4.125C2.625 10.851 4.475 9 6.75 9s4.125 1.85 4.125 4.125A4.13 4.13 0 016.75 17.25zm0-6.75a2.629 2.629 0 00-2.625 2.625c0 1.448 1.178 2.625 2.625 2.625s2.625-1.177 2.625-2.625A2.629 2.629 0 006.75 10.5zM.752 24.001a.745.745 0 01-.599-.295.745.745 0 01-.147-.555 6.819 6.819 0 016.756-5.898c1.495 0 2.918.482 4.114 1.396a6.756 6.756 0 012.616 4.502.75.75 0 11-1.486.199 5.273 5.273 0 00-2.039-3.51 5.252 5.252 0 00-3.924-1.04 5.317 5.317 0 00-4.549 4.55.754.754 0 01-.742.651z"}})])
          )
        }
      }
    