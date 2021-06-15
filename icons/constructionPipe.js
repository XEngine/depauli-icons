
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
            children.concat([_c('path',{attrs:{"d":"M20.25 9a.75.75 0 01-.75-.75V7.5H12A.75.75 0 0112 6h7.5V3H12a.75.75 0 010-1.5h7.5V.75a.75.75 0 011.5 0v7.5a.75.75 0 01-.75.75z"}}),_c('path',{attrs:{"d":"M20.655 17.25a.746.746 0 01-.715-.524A6.738 6.738 0 0013.499 12H8.25c-1.654 0-3-1.346-3-3s1.346-3 3-3V3c-3.308 0-6 2.692-6 6s2.692 6 6 6h5.25c.916 0 1.795.333 2.479.938.15.133.239.316.251.516s-.054.393-.187.543a.75.75 0 01-1.059.064 2.233 2.233 0 00-1.482-.561H8.25C4.115 16.5.75 13.135.75 9s3.365-7.5 7.5-7.5V.75a.75.75 0 011.5 0v7.5a.75.75 0 01-1.5 0V7.5c-.827 0-1.5.673-1.5 1.5s.673 1.5 1.5 1.5h5.25a8.233 8.233 0 017.87 5.774.75.75 0 01-.715.976zM21 24a.75.75 0 01-.75-.75v-3h-3v3a.75.75 0 01-1.5 0v-3H15a.75.75 0 010-1.5h7.5a.75.75 0 010 1.5h-.75v3A.75.75 0 0121 24z"}})])
          )
        }
      }
    