
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
            children.concat([_c('path',{attrs:{"d":"M1.5 24C.673 24 0 23.327 0 22.5V12c0-.827.673-1.5 1.5-1.5H6v-.75a5.256 5.256 0 015.25-5.25H15A3.754 3.754 0 0018.75.75a.75.75 0 011.5 0A5.256 5.256 0 0115 6h-3.75A3.754 3.754 0 007.5 9.75v.75h15c.827 0 1.5.673 1.5 1.5v10.5c0 .827-.673 1.5-1.5 1.5h-21zm21-1.5V12h-21v10.5h3v-2.25a.75.75 0 01.75-.75h13.5a.75.75 0 01.75.75v2.25h3zm-4.5 0V21H6v1.5h12z"}}),_c('path',{attrs:{"d":"M4.5 18a.75.75 0 010-1.5h15a.75.75 0 010 1.5h-15zM4.5 15a.75.75 0 010-1.5h15a.75.75 0 010 1.5h-15z"}})])
          )
        }
      }
    