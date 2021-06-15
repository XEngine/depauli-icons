
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
            children.concat([_c('path',{attrs:{"d":"M5.251 24a2.252 2.252 0 01-2.25-2.25v-9a.75.75 0 011.5 0v9c0 .414.336.75.75.75h13.5a.75.75 0 00.75-.75v-9a.75.75 0 011.5 0v9a2.252 2.252 0 01-2.25 2.25h-13.5z"}}),_c('path',{attrs:{"d":"M23.251 12a.747.747 0 01-.511-.202L12.001 1.776 1.262 11.798a.747.747 0 01-1.059-.036.751.751 0 01.036-1.06l11.25-10.5a.747.747 0 011.024 0l11.25 10.5a.748.748 0 01.037 1.06.76.76 0 01-.549.238z"}}),_c('path',{attrs:{"d":"M11.251 19.5c-.827 0-1.5-.673-1.5-1.5v-1.5h-1.5c-.827 0-1.5-.673-1.5-1.5v-1.5c0-.827.673-1.5 1.5-1.5h1.5v-1.5c0-.827.673-1.5 1.5-1.5h1.5c.827 0 1.5.673 1.5 1.5V12h1.5c.827 0 1.5.673 1.5 1.5V15c0 .827-.673 1.5-1.5 1.5h-1.5V18c0 .827-.673 1.5-1.5 1.5h-1.5zm-3-4.5h2.25a.75.75 0 01.75.75V18h1.5v-2.25a.75.75 0 01.75-.75h2.25v-1.5h-2.25a.75.75 0 01-.75-.75V10.5h-1.5v2.25a.75.75 0 01-.75.75h-2.25V15z"}})])
          )
        }
      }
    