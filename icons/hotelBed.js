
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
            children.concat([_c('path',{attrs:{"d":"M23.25 19.125a.75.75 0 01-.75-.75v-3h-21v3a.75.75 0 01-1.5 0V5.625a.75.75 0 011.5 0v8.25h21v-4.5a.75.75 0 011.5 0v9a.75.75 0 01-.75.75z"}}),_c('path',{attrs:{"d":"M6 12.375c-1.654 0-3-1.346-3-3s1.346-3 3-3 3 1.346 3 3-1.346 3-3 3zm0-4.5c-.827 0-1.5.673-1.5 1.5s.673 1.5 1.5 1.5 1.5-.673 1.5-1.5-.673-1.5-1.5-1.5zM11.25 12.375a.752.752 0 01-.75-.75V8.086c0-.4.156-.777.439-1.061a1.515 1.515 0 011.426-.394l5.883 1.471A3.625 3.625 0 0121 11.63a.75.75 0 01-.75.749l-9-.004zm8.116-1.496a2.123 2.123 0 00-1.481-1.322l-5.883-1.471-.003.001.001 2.788 7.366.004z"}})])
          )
        }
      }
    