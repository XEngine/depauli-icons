
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
            children.concat([_c('path',{attrs:{"d":"M6 24a2.252 2.252 0 01-2.25-2.25v-7.257a7.368 7.368 0 014.5-6.762v-3.36a2.258 2.258 0 01-1.5-2.121A2.252 2.252 0 019 0h6a2.252 2.252 0 012.25 2.25c0 .96-.615 1.808-1.5 2.121V7.73a7.368 7.368 0 014.5 6.762v7.257a2.252 2.252 0 01-2.25 2.25H6zM9.75 8.25a.748.748 0 01-.513.711 5.827 5.827 0 00-3.987 5.532v7.257c0 .414.336.75.75.75h12a.75.75 0 00.75-.75v-7.257a5.824 5.824 0 00-3.987-5.531.75.75 0 01-.513-.712V4.5h-4.5v3.75zM9 1.5A.75.75 0 009 3h6a.75.75 0 000-1.5H9z"}}),_c('path',{attrs:{"d":"M9.75 18c-.827 0-1.5-.673-1.5-1.5v-3c0-.827.673-1.5 1.5-1.5h4.5c.827 0 1.5.673 1.5 1.5v3c0 .827-.673 1.5-1.5 1.5h-4.5zm0-1.5h4.5v-3h-4.5v3z"}})])
          )
        }
      }
    