
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
              attrs: Object.assign({"data-name":"Outline Version","xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24"}, attrs),
              ...rest,
            },
            children.concat([_c('path',{attrs:{"d":"M15.37 3.11c.22-.19.56-.4 1.92-.47a.75.75 0 00.71-.75V.75a.75.75 0 00-.75-.75H6.75A.75.75 0 006 .75v1.14a.75.75 0 00.71.75c1.35.07 1.7.28 1.92.47.06.05.37.4.37 1.91V19c0 1.62-.33 1.89-.33 1.9-.23.18-.6.38-2 .48a.75.75 0 00-.7.75v1.15a.75.75 0 00.75.75h10.5a.75.75 0 00.75-.75V22.1a.75.75 0 00-.7-.75c-1.38-.1-1.74-.3-2-.48 0 0-.33-.27-.33-1.89V5c.06-1.49.37-1.83.43-1.89zm-1 19a2.94 2.94 0 00.79.44H8.8a2.93 2.93 0 00.79-.43c.63-.48.92-1.46.92-3.08V5c0-1.54-.28-2.5-.88-3a2.71 2.71 0 00-.79-.49h6.33a2.71 2.71 0 00-.79.49c-.6.53-.88 1.49-.88 3v14c0 1.61.29 2.59.91 3.06z"}})])
          )
        }
      }
    