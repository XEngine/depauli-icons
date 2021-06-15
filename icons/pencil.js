
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
            children.concat([_c('path',{attrs:{"d":"M.748 24a.755.755 0 01-.531-.22.754.754 0 01-.196-.716l1.77-6.905a.84.84 0 01.045-.121.73.73 0 01.151-.223L16.513 1.289A4.355 4.355 0 0119.611 0c1.178 0 2.277.454 3.106 1.279l.029.029a4.367 4.367 0 011.251 3.121 4.356 4.356 0 01-1.32 3.087L8.183 22.01a.735.735 0 01-.231.154.784.784 0 01-.111.042L.933 23.978A.773.773 0 01.748 24zm1.041-1.791l4.41-1.131-3.281-3.275-1.129 4.406zm5.868-1.795l13.02-13.02-4.074-4.074L3.58 16.344l4.077 4.07zM21.736 6.332a2.893 2.893 0 00-.059-3.972l-.02-.02a2.872 2.872 0 00-2.037-.84v-.375l-.001.375a2.873 2.873 0 00-1.954.762l4.071 4.07z"}})])
          )
        }
      }
    