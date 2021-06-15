
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
            children.concat([_c('path',{attrs:{"d":"M3.284 16.5a.75.75 0 01-.726-.563 9.733 9.733 0 01-.275-3.248.755.755 0 01.748-.689l.061.002a.75.75 0 01.687.808 8.244 8.244 0 00.231 2.753.747.747 0 01-.726.937zM3.877 10.371a.746.746 0 01-.707-.501.745.745 0 01.03-.573 9.688 9.688 0 011.332-2.065.75.75 0 111.148.966 8.258 8.258 0 00-1.127 1.746.75.75 0 01-.676.427zM7.428 22.004a.749.749 0 01-.38-.104 9.708 9.708 0 01-2.493-2.104.745.745 0 01-.174-.547.751.751 0 011.32-.421 8.239 8.239 0 002.108 1.779.751.751 0 01-.381 1.397zM12 23.25c-.265 0-.538-.011-.811-.033a.752.752 0 01-.687-.808.746.746 0 01.751-.689l.053.002c.238.019.47.029.694.029 4.549 0 8.25-3.701 8.25-8.25S16.549 5.25 12 5.25h-.439l1.72 1.72a.746.746 0 01-.001 1.06.749.749 0 01-1.06 0l-3-3A.74.74 0 019 4.5c0-.089.016-.176.048-.261l.007-.02a.744.744 0 01.166-.25L12.22.97a.744.744 0 011.06 0c.142.141.22.33.22.53s-.078.389-.22.53l-1.72 1.72H12c5.376 0 9.75 4.374 9.75 9.75s-4.374 9.75-9.75 9.75z"}})])
          )
        }
      }
    