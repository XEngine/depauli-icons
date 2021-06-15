
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
            children.concat([_c('path',{attrs:{"d":"M21.75 24a.75.75 0 01-.75-.75V3.75h-4.5v5.348A3.016 3.016 0 0118.75 12c0 1.654-1.346 3-3 3s-3-1.346-3-3c0-1.37.947-2.564 2.25-2.902V3.75H9v5.348A3.016 3.016 0 0111.25 12c0 1.654-1.346 3-3 3s-3-1.346-3-3c0-1.37.947-2.564 2.25-2.902V3.75H3v19.5a.75.75 0 01-1.5 0V.75a.75.75 0 011.5 0v1.5h18V.75a.75.75 0 011.5 0v22.5a.75.75 0 01-.75.75zm-6-13.5c-.827 0-1.5.673-1.5 1.5s.673 1.5 1.5 1.5 1.5-.673 1.5-1.5-.673-1.5-1.5-1.5zm-7.5 0c-.827 0-1.5.673-1.5 1.5s.673 1.5 1.5 1.5 1.5-.673 1.5-1.5-.673-1.5-1.5-1.5z"}})])
          )
        }
      }
    