
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
            children.concat([_c('path',{attrs:{"d":"M10.5 16.5a.75.75 0 010-1.5h3a.75.75 0 010 1.5h-3z"}}),_c('path',{attrs:{"d":"M21.75 21a.75.75 0 01-.75-.75v-.75H3v.75a.75.75 0 01-1.5 0V7.5C.673 7.5 0 6.827 0 6V4.5C0 3.673.673 3 1.5 3h21c.827 0 1.5.673 1.5 1.5V6c0 .827-.673 1.5-1.5 1.5v12.75a.75.75 0 01-.75.75zM21 18v-4.5H3V18h18zm0-6V7.5h-8.25V12H21zm-9.75 0V7.5H3V12h8.25zM1.5 6h21V4.5h-21V6z"}}),_c('path',{attrs:{"d":"M6 10.5A.75.75 0 016 9h2.25a.75.75 0 010 1.5H6zM15.75 10.5a.75.75 0 010-1.5H18a.75.75 0 010 1.5h-2.25z"}})])
          )
        }
      }
    