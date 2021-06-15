
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
            children.concat([_c('path',{attrs:{"d":"M6.034 18.716a.754.754 0 01-.742-.856l.53-3.713a.754.754 0 01.212-.424l7.561-7.561a2.98 2.98 0 012.121-.878 2.98 2.98 0 012.121.878 2.98 2.98 0 01.879 2.121c0 .801-.312 1.555-.879 2.121l-7.561 7.561a.754.754 0 01-.423.212l-3.713.532a.765.765 0 01-.106.007zm.884-1.634l2.475-.354 7.384-7.384a1.49 1.49 0 00.439-1.061c0-.401-.156-.777-.439-1.061a1.49 1.49 0 00-1.061-.439c-.401 0-.778.156-1.061.438l-7.384 7.384-.353 2.477z"}}),_c('path',{attrs:{"d":"M12 24C5.383 24 0 18.617 0 12S5.383 0 12 0s12 5.383 12 12-5.383 12-12 12zm0-22.5C6.21 1.5 1.5 6.21 1.5 12S6.21 22.5 12 22.5 22.5 17.79 22.5 12 17.79 1.5 12 1.5z"}})])
          )
        }
      }
    