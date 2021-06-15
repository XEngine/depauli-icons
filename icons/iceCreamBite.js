
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
            children.concat([_c('path',{attrs:{"d":"M12 24.002a.75.75 0 01-.75-.75v-5.25H7.5a2.252 2.252 0 01-2.25-2.25v-9c0-.718.114-1.429.338-2.111A6.74 6.74 0 0112.005 0c.714 0 1.421.114 2.104.338a.75.75 0 01.461.992 4.447 4.447 0 00-.321 1.671 4.525 4.525 0 003.857 4.459.754.754 0 01.643.742v7.55a2.252 2.252 0 01-2.25 2.25h-3.75v5.25a.749.749 0 01-.749.75zM12.004 1.5A5.243 5.243 0 006.75 6.752v9c0 .414.336.75.75.75h9a.75.75 0 00.75-.75V8.815a6.025 6.025 0 01-4.5-5.813c0-.48.056-.957.169-1.421a5.205 5.205 0 00-.915-.081z"}})])
          )
        }
      }
    