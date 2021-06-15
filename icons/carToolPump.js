
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
            children.concat([_c('path',{attrs:{"d":"M.75 24a.75.75 0 010-1.5h.75V7.75C1.5 6.785 2.285 6 3.25 6H4.5V1.5H.75a.75.75 0 010-1.5h9a.75.75 0 010 1.5H6V6h1.25C8.215 6 9 6.785 9 7.75v11.715a8.23 8.23 0 007.5-8.215v-.768A1.753 1.753 0 0115 8.75v-2.5c0-.965.785-1.75 1.75-1.75h2.75c0-1.241 1.009-2.25 2.25-2.25S24 3.259 24 4.5v6c0 1.241-1.009 2.25-2.25 2.25s-2.25-1.009-2.25-2.25H18v.75a9.718 9.718 0 01-9 9.719V22.5h.75a.75.75 0 010 1.5h-9zm6.75-1.5V7.75a.25.25 0 00-.25-.25h-4a.25.25 0 00-.25.25V22.5h4.5zM21.75 3.75a.75.75 0 00-.75.75v6a.75.75 0 001.5 0v-6a.75.75 0 00-.75-.75zm-5 2.25a.25.25 0 00-.25.25v2.5c0 .138.112.25.25.25h2.75V6h-2.75z"}})])
          )
        }
      }
    