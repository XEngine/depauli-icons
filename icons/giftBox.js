
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
            children.concat([_c('path',{attrs:{"d":"M3.75 24a2.252 2.252 0 01-2.25-2.25V12C.673 12 0 11.327 0 10.5V8.25A2.252 2.252 0 012.25 6h4.459C4.856 4.7 3.75 2.78 3.75.75A.75.75 0 014.5 0c3.222 0 6.975 2.446 7.449 6h.102c.474-3.554 4.227-6 7.449-6a.75.75 0 01.75.75c0 2.03-1.106 3.95-2.959 5.25h4.459A2.252 2.252 0 0124 8.25v2.25c0 .827-.673 1.5-1.5 1.5v9.75A2.252 2.252 0 0120.25 24H3.75zm16.5-1.5a.75.75 0 00.75-.75V12h-6v10.5h5.25zm-6.75 0V12h-3v10.5h3zM3 21.75c0 .414.336.75.75.75H9V12H3v9.75zM22.5 10.5V8.25a.75.75 0 00-.75-.75H15v3h7.5zm-9 0v-3h-3v3h3zm-11.25-3a.75.75 0 00-.75.75v2.25H9v-3H2.25zm16.409-5.943c-2.724.363-4.644 2.419-5.068 4.386 2.724-.363 4.644-2.419 5.068-4.386zm-13.318 0c.425 1.967 2.345 4.022 5.069 4.386-.425-1.967-2.345-4.023-5.069-4.386z"}})])
          )
        }
      }
    