
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
            children.concat([_c('path',{attrs:{"d":"M7.5 24a.75.75 0 010-1.5h3.75v-3.02c-5.481-.266-9-3.466-9-8.23 0-2.491 1.197-5.266 3.283-7.612C7.558 1.36 9.976 0 12 0c1.961 0 4.42 1.376 6.418 3.592 2.117 2.348 3.332 5.139 3.332 7.658 0 4.764-3.519 7.964-9 8.23v3.02h3.75a.75.75 0 010 1.5h-9zm-2.067-8.346C6.888 17.17 9.202 18 12 18s5.111-.83 6.567-2.346a9.84 9.84 0 00-6.536-2.155l-.03.001-.033-.001a9.85 9.85 0 00-6.535 2.155zM12 1.5c-1.568 0-3.614 1.203-5.339 3.14C4.838 6.687 3.75 9.158 3.75 11.25c0 1.188.265 2.261.79 3.198A11.342 11.342 0 0112 12a11.347 11.347 0 017.461 2.448c.524-.936.79-2.01.79-3.198C20.25 7.4 15.825 1.5 12 1.5z"}})])
          )
        }
      }
    