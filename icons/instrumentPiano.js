
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
            children.concat([_c('path',{attrs:{"d":"M21 24a.75.75 0 01-.75-.75v-6H3.75v6a.75.75 0 01-1.5 0v-6.311a1.724 1.724 0 01-.75-1.449V9H.75a.75.75 0 010-1.5h4.5a.75.75 0 010 1.5H3v3.75h4.5V5c0-.689.561-1.25 1.25-1.25h6.5c.689 0 1.25.561 1.25 1.25v7.75H21V9h-2.25a.75.75 0 010-1.5h.925l-3.818-6.364A.747.747 0 0116.5 0c.262 0 .509.14.644.364L21.425 7.5h1.825a.75.75 0 010 1.5h-.75v6.5a1.74 1.74 0 01-.75 1.439v6.311A.75.75 0 0121 24zM3 15.5a.242.242 0 00.235.25h17.54a.238.238 0 00.225-.241V14.25H3v1.25zm12-2.75v-7.5H9v7.5h6z"}}),_c('path',{attrs:{"d":"M11.25 8.25a.75.75 0 010-1.5h1.5a.75.75 0 010 1.5h-1.5zM11.25 11.25a.75.75 0 010-1.5h1.5a.75.75 0 010 1.5h-1.5zM10.5 24a.75.75 0 010-1.5h.75v-2.25h-1.5a.75.75 0 010-1.5h4.5a.75.75 0 010 1.5h-1.5v2.25h.75a.75.75 0 010 1.5h-3z"}})])
          )
        }
      }
    