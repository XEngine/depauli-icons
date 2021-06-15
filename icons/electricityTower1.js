
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
            children.concat([_c('path',{attrs:{"d":"M.75 24a.75.75 0 010-1.5H9v-6H4.655a1.126 1.126 0 01-.795-1.92l3.421-3.421a2.231 2.231 0 011.59-.659H9v-3H5.25a.75.75 0 010-1.5H9V3H5.25a.75.75 0 010-1.5h13.5a.75.75 0 010 1.5H15v3h3.75a.75.75 0 010 1.5H15v3h.129c.601 0 1.165.234 1.59.658l3.421 3.421a1.127 1.127 0 010 1.591 1.132 1.132 0 01-.795.329H15v6h8.25a.75.75 0 010 1.501H.75zm12.75-1.5v-6h-3v6h3zM8.871 12c-.2 0-.388.078-.53.219L5.561 15H9v-3h-.129zm9.569 3l-2.781-2.781a.748.748 0 00-.53-.219H15v3h3.44zm-4.94 0v-3h-3v3h3zm0-4.5v-3h-3v3h3zm0-4.5V3h-3v3h3z"}})])
          )
        }
      }
    