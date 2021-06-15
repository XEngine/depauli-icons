
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
            children.concat([_c('path',{attrs:{"d":"M1.728 23.997A1.736 1.736 0 010 22.271V9.747a1.954 1.954 0 01.617-1.35 1.21 1.21 0 01.057-.048l10.873-8.2a.755.755 0 01.903 0l10.873 8.2a1.926 1.926 0 01.674 1.356L24 22.269a1.736 1.736 0 01-1.726 1.728H1.728zM1.616 9.518a.431.431 0 00-.117.272L1.5 22.269a.23.23 0 00.23.228h20.542a.23.23 0 00.228-.23V9.747a.414.414 0 00-.116-.229L12 1.687 1.616 9.518z"}})])
          )
        }
      }
    