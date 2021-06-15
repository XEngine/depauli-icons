
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
            children.concat([_c('path',{attrs:{"d":"M9.749 13.498a.75.75 0 010-1.5h1.5a.75.75 0 010 1.5h-1.5z"}}),_c('path',{attrs:{"d":"M14.249 24a.75.75 0 01-.75-.75V12c0-1.654-1.346-3-3-3s-3 1.346-3 3v11.248a.75.75 0 01-1.5 0V12c0-2.481 2.019-4.5 4.5-4.5s4.5 2.019 4.5 4.5v11.25a.75.75 0 01-.75.75zM17.249 7.498a.75.75 0 010-1.5h5.25v-.322a17.326 17.326 0 00-11.235-4.177c-3.591 0-7.17 1.15-10.077 3.238a.75.75 0 11-.875-1.218A18.913 18.913 0 0112.251.025a18.907 18.907 0 0110.248 3.726V.748a.75.75 0 011.5 0v6a.75.75 0 01-.75.75h-6z"}})])
          )
        }
      }
    