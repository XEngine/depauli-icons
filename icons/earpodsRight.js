
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
            children.concat([_c('circle',{attrs:{"cx":"6.75","cy":"6","r":"1.125"}}),_c('path',{attrs:{"d":"M1.5 24C.673 24 0 23.328 0 22.5V6c0-1.602.656-3.164 1.801-4.285A5.976 5.976 0 016.007.001h.054a5.96 5.96 0 014.225 1.801c.138.14.214.327.214.524v7.348a.742.742 0 01-.215.525A6.042 6.042 0 015.995 12a5.952 5.952 0 01-1.494-.189V22.5A1.503 1.503 0 013 24H1.5zM6 1.503a4.476 4.476 0 00-3.149 1.283A4.525 4.525 0 001.5 6v16.5H3V9a.75.75 0 011.5 0v1.24c.482.171.985.257 1.5.257a4.48 4.48 0 003-1.143V2.646a4.478 4.478 0 00-3-1.143zM16.5 24C12.365 24 9 20.636 9 16.5S12.365 9 16.5 9s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5zm0-13.5c-3.308 0-6 2.692-6 6s2.692 6 6 6 6-2.692 6-6-2.692-6-6-6z"}}),_c('path',{attrs:{"d":"M18 21a.754.754 0 01-.643-.364l-1.607-2.678v2.292a.75.75 0 01-1.5 0v-7.5A.75.75 0 0115 12h1.125a2.627 2.627 0 012.625 2.625 2.627 2.627 0 01-1.763 2.478l1.656 2.761A.748.748 0 0118 21zm-1.875-5.25c.62 0 1.125-.505 1.125-1.125s-.505-1.125-1.125-1.125h-.375v2.25h.375z"}})])
          )
        }
      }
    