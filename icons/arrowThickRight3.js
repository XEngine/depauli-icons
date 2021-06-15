
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
            children.concat([_c('path',{attrs:{"d":"M10.757 21.25a1.502 1.502 0 01-1.061-2.559l3.44-3.44H1.5c-.827 0-1.5-.673-1.5-1.5v-3c0-.827.673-1.5 1.5-1.5h11.636l-3.44-3.44a1.502 1.502 0 011.061-2.561h3.933c.593 0 1.173.24 1.591.659l7.28 7.281c.283.284.439.66.439 1.061 0 .401-.156.777-.44 1.06l-7.28 7.281a2.262 2.262 0 01-1.59.659h-3.933zM1.5 13.75h13.447a.75.75 0 01.53 1.28l-4.72 4.72h3.932c.198 0 .391-.08.531-.219l7.28-7.281-7.28-7.281a.758.758 0 00-.53-.219h-3.932l4.72 4.72a.75.75 0 01-.53 1.281H1.5v2.999z"}})])
          )
        }
      }
    