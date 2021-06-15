
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
            children.concat([_c('path',{attrs:{"d":"M6 13.5c-.827 0-1.5-.673-1.5-1.5V7.5C4.5 6.673 5.173 6 6 6h12c.827 0 1.5.673 1.5 1.5V12c0 .827-.673 1.5-1.5 1.5H6zM6 12h12V7.5H6V12z"}}),_c('path',{attrs:{"d":"M8.25 10.5a.75.75 0 010-1.5h7.5a.75.75 0 010 1.5h-7.5z"}}),_c('path',{attrs:{"d":"M12 24C6.21 24 1.5 19.29 1.5 13.5V5.25A5.256 5.256 0 016.75 0h10.5a5.256 5.256 0 015.25 5.25v8.25C22.5 19.29 17.79 24 12 24zM6.75 1.5A3.754 3.754 0 003 5.25v8.25c0 4.963 4.037 9 9 9s9-4.037 9-9V5.25a3.754 3.754 0 00-3.75-3.75H6.75z"}})])
          )
        }
      }
    