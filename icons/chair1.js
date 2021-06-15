
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
            children.concat([_c('path',{attrs:{"d":"M18.75 24a.75.75 0 01-.75-.75V18H6v5.25a.75.75 0 01-1.5 0V18c-.827 0-1.5-.673-1.5-1.5V15c0-.827.673-1.5 1.5-1.5H6V8.871A2.258 2.258 0 014.5 6.75v-3c0-.96.615-1.808 1.5-2.121V.75a.75.75 0 011.5 0v.75h9V.75a.75.75 0 011.5 0v.879a2.26 2.26 0 011.5 2.121v3c0 .96-.615 1.808-1.5 2.121V13.5h1.5c.827 0 1.5.673 1.5 1.5v1.5c0 .827-.673 1.5-1.5 1.5v5.25a.75.75 0 01-.75.75zM4.5 16.5h15V15h-15v1.5zm12-3V9h-9v4.5h9zM6.75 3a.75.75 0 00-.75.75v3c0 .414.336.75.75.75h10.5a.75.75 0 00.75-.75v-3a.75.75 0 00-.75-.75H6.75z"}})])
          )
        }
      }
    