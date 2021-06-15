
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
            children.concat([_c('path',{attrs:{"d":"M3.013 24a.75.75 0 010-1.5h.75V11.25A8.24 8.24 0 0110 3.251a2.23 2.23 0 01-.237-1.001c0-1.241 1.009-2.25 2.25-2.25s2.25 1.009 2.25 2.25c0 .35-.082.692-.237 1.001a8.24 8.24 0 016.237 7.999V22.5h.75a.75.75 0 010 1.5h-18zm15.75-1.5V12h-3v10.5h3zm-4.5 0V12h-4.5v10.5h4.5zm-6 0V12h-3v10.5h3zm10.458-12a6.79 6.79 0 00-4.217-5.521c.713 1.367 1.161 3.332 1.244 5.521h2.973zm-4.476 0c-.147-3.187-1.177-6-2.232-6-1.055 0-2.085 2.813-2.232 6h4.464zm-5.967 0c.083-2.189.532-4.154 1.244-5.521A6.787 6.787 0 005.305 10.5h2.973zm3.735-9a.75.75 0 100 1.5.75.75 0 000-1.5z"}})])
          )
        }
      }
    