
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
            children.concat([_c('path',{attrs:{"d":"M10.566 21.75a5.26 5.26 0 01-4.268-2.198l-1.099-1.534A7.72 7.72 0 013.75 13.5c0-1.8 1.268-3.324 3-3.675V5.25a2.252 2.252 0 013.354-1.96A2.262 2.262 0 0112 2.25c.772 0 1.486.403 1.895 1.038.335-.19.715-.291 1.105-.291 1.036 0 1.91.703 2.171 1.658a2.252 2.252 0 013.079 2.092v9.129a5.88 5.88 0 01-5.871 5.874h-3.813zM6.75 11.382a2.262 2.262 0 00-1.5 2.118c0 1.315.404 2.575 1.168 3.645l1.099 1.534a3.758 3.758 0 003.049 1.571h3.812a4.376 4.376 0 004.371-4.371V6.747a.75.75 0 00-1.5 0v2.25a.75.75 0 01-1.5 0v-3.75a.75.75 0 00-1.5 0v3.75a.75.75 0 01-1.5 0V4.5a.75.75 0 00-1.5 0v4.497a.75.75 0 01-1.5 0V5.25a.749.749 0 10-1.499 0v7.497a.75.75 0 01-1.5 0v-1.365z"}})])
          )
        }
      }
    