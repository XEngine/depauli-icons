
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
            children.concat([_c('path',{attrs:{"d":"M14.996 19.875c-.477 0-.933-.149-1.321-.431l-3.262-2.076a.75.75 0 01.805-1.265l3.284 2.09.041.028a.746.746 0 001.055-.145.753.753 0 00.15-.45v-5.25a.75.75 0 011.5 0v5.25c0 .484-.16.963-.45 1.35a2.23 2.23 0 01-1.802.899zM4.5 15.375a2.252 2.252 0 01-2.25-2.25v-3a2.252 2.252 0 012.25-2.25h2.781l6.394-4.069a2.252 2.252 0 013.575 1.819.75.75 0 01-1.5 0 .75.75 0 00-1.2-.6.838.838 0 01-.044.031L7.903 9.258a.748.748 0 01-.403.117h-3a.75.75 0 00-.75.75v3c0 .414.336.75.75.75h.625a.75.75 0 010 1.5H4.5zM3 20.625a.745.745 0 01-.576-.27.746.746 0 01.096-1.056l18-15a.75.75 0 01.96 1.152l-18 15a.753.753 0 01-.48.174z"}})])
          )
        }
      }
    