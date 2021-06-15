
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
            children.concat([_c('path',{attrs:{"d":"M3 23.25a.75.75 0 01-.75-.75v-2.25c0-.179.006-.366.02-.583a.733.733 0 01.034-.444 9.778 9.778 0 013.52-6.51l-1.088-1.632a2.953 2.953 0 01-.986.169c-1.654 0-3-1.346-3-3s1.346-3 3-3 3 1.346 3 3c0 .737-.276 1.449-.767 1.997l1.071 1.606a9.73 9.73 0 014.196-1.322V6.652A3.016 3.016 0 019 3.75c0-1.654 1.346-3 3-3s3 1.346 3 3c0 1.37-.947 2.564-2.25 2.902v3.879a9.71 9.71 0 014.283 1.373l.99-1.65a3.003 3.003 0 01-.773-2.004c0-1.654 1.346-3 3-3s3 1.346 3 3-1.346 3-3 3c-.334 0-.661-.056-.976-.166l-1.018 1.696a9.79 9.79 0 013.439 6.442.735.735 0 01.034.444c.013.219.02.406.02.583v2.25a.75.75 0 01-.75.75H3zm17.25-1.5v-1.5H3.75v1.5h16.5zm-.139-3a8.2 8.2 0 00-2.637-4.665l-.331.551a.755.755 0 01-1.029.257.743.743 0 01-.341-.461.745.745 0 01.085-.568l.405-.674A8.201 8.201 0 0012 12c-1.448 0-2.862.38-4.113 1.103l.987 1.481c.111.167.151.367.111.563a.742.742 0 01-.32.477.747.747 0 01-1.039-.208l-.965-1.448a8.19 8.19 0 00-2.772 4.782h16.222zm.139-12c-.827 0-1.5.673-1.5 1.5s.673 1.5 1.5 1.5 1.5-.673 1.5-1.5-.673-1.5-1.5-1.5zm-16.5 0c-.827 0-1.5.673-1.5 1.5s.673 1.5 1.5 1.5c.297 0 .584-.087.831-.253A1.498 1.498 0 003.75 6.75zM12 2.25c-.827 0-1.5.673-1.5 1.5s.673 1.5 1.5 1.5 1.5-.673 1.5-1.5-.673-1.5-1.5-1.5z"}})])
          )
        }
      }
    