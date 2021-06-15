
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
            children.concat([_c('path',{attrs:{"d":"M18.75 23.25c-.827 0-1.5-.673-1.5-1.5v-1.5H6.75v1.5c0 .827-.673 1.5-1.5 1.5h-3c-.827 0-1.5-.673-1.5-1.5v-6c0-.827.673-1.5 1.5-1.5h6.914l.375-1.5H6a2.252 2.252 0 01-2.25-2.25V3A2.252 2.252 0 016 .75h12A2.252 2.252 0 0120.25 3v7.5A2.252 2.252 0 0118 12.75h-3.54l.375 1.5h6.915c.827 0 1.5.673 1.5 1.5v6c0 .827-.673 1.5-1.5 1.5h-3zm-1.5-4.5c.827 0 1.5.673 1.5 1.5v1.5h3v-6H2.25v6h3v-1.5c0-.827.673-1.5 1.5-1.5h10.5zm-3.96-4.5l-.375-1.5h-1.829l-.375 1.5h2.579zM6 2.25a.75.75 0 00-.75.75v7.5c0 .414.336.75.75.75h12a.75.75 0 00.75-.75V3a.75.75 0 00-.75-.75H6z"}})])
          )
        }
      }
    