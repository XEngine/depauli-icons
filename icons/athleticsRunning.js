
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
            children.concat([_c('path',{attrs:{"d":"M21 4.5A.75.75 0 0121 3h2.25a.75.75 0 010 1.5H21zM19.5 8.25a.75.75 0 010-1.5h3.75a.75.75 0 010 1.5H19.5z"}}),_c('path',{attrs:{"d":"M10.5 24C4.71 24 0 19.29 0 13.5S4.71 3 10.5 3h.75a.75.75 0 010 1.5h-.75c-4.963 0-9 4.037-9 9s4.037 9 9 9h3v-2.25h-3c-3.722 0-6.75-3.028-6.75-6.75s3.028-6.75 6.75-6.75h.75a.75.75 0 010 1.5h-.75a5.256 5.256 0 00-5.25 5.25 5.256 5.256 0 005.25 5.25h3V16.5h-3c-1.654 0-3-1.346-3-3s1.346-3 3-3h3V.75a.753.753 0 01.75-.75.75.75 0 01.48.174l4.5 3.75a.752.752 0 01-.064 1.2L15 7.901V10.5h8.25a.75.75 0 010 1.5H10.5c-.827 0-1.5.673-1.5 1.5s.673 1.5 1.5 1.5h12.75a.75.75 0 010 1.5H15v2.25h8.25a.75.75 0 010 1.5H15v2.25h8.25a.75.75 0 010 1.5H10.5zM15 6.099l2.498-1.666L15 2.351v3.748z"}})])
          )
        }
      }
    