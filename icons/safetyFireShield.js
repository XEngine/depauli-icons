
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
            children.concat([_c('path',{attrs:{"d":"M12.005 18.001a5.22 5.22 0 01-3.714-1.537 5.208 5.208 0 01-1.534-3.709c-.118-1.787.843-3.525 2.45-4.402a.752.752 0 01.694-.013.75.75 0 01.407.563c.056.385.331.698.689.814a4.17 4.17 0 00-.634-4.341.747.747 0 01-.059-.883.747.747 0 01.824-.324 8.2 8.2 0 016.114 8.626 5.28 5.28 0 01-5.232 5.206h-.005zm-2.768-7.825a3.259 3.259 0 00-.982 2.53c.001 1.041.391 1.99 1.097 2.697a3.72 3.72 0 002.647 1.098 3.782 3.782 0 003.744-3.753c.001-.024.001-.043.004-.062a6.7 6.7 0 00-3.158-6.281 5.736 5.736 0 01-.5 4.479.749.749 0 01-.593.375 2.508 2.508 0 01-2.259-1.083z"}}),_c('path',{attrs:{"d":"M12 24.001a3.74 3.74 0 01-1.346-.25l-1.041-.4C4.76 21.484 1.5 16.737 1.5 11.538V3.925A2.24 2.24 0 012.806 1.88 22.356 22.356 0 0111.807 0l.199.001.187-.001c3.113 0 6.137.631 8.988 1.874a2.248 2.248 0 011.318 2.055v7.609c0 5.199-3.26 9.946-8.113 11.813l-1.041.4a3.73 3.73 0 01-1.345.25zM11.805 1.5a20.85 20.85 0 00-8.387 1.75.727.727 0 00-.418.669v7.619c0 4.583 2.874 8.768 7.151 10.413l1.041.4a2.24 2.24 0 001.616.001l1.041-.4C18.126 20.305 21 16.121 21 11.538V3.924a.742.742 0 00-.43-.68A20.772 20.772 0 0012.215 1.5l-.208.001-.202-.001z"}})])
          )
        }
      }
    