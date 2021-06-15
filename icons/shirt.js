
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
            children.concat([_c('path',{attrs:{"d":"M6.75 24c-.827 0-1.5-.673-1.5-1.5v-9h-3c-.827 0-1.5-.673-1.5-1.5V6.75A6.758 6.758 0 017.5 0H9a.75.75 0 01.75.75A2.252 2.252 0 0012 3 2.252 2.252 0 0014.25.75.75.75 0 0115 0h1.5a6.758 6.758 0 016.75 6.75V12c0 .827-.673 1.5-1.5 1.5h-3v9c0 .827-.673 1.5-1.5 1.5H6.75zM6 7.5a.75.75 0 01.75.75V22.5h10.5V8.25a.75.75 0 011.5 0V12h3V6.75A5.256 5.256 0 0016.5 1.5h-.826a3.782 3.782 0 01-2.924 2.922V6.75a.75.75 0 01-1.5 0V4.422A3.78 3.78 0 018.326 1.5H7.5a5.256 5.256 0 00-5.25 5.25V12h3V8.25A.75.75 0 016 7.5z"}}),_c('path',{attrs:{"d":"M13.5 10.5a.75.75 0 010-1.5H15a.75.75 0 010 1.5h-1.5z"}})])
          )
        }
      }
    