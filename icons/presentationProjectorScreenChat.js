
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
            children.concat([_c('path',{attrs:{"d":"M.75 18a.75.75 0 010-1.5h.75v-12C.673 4.5 0 3.827 0 3V1.5C0 .673.673 0 1.5 0H21c.827 0 1.5.673 1.5 1.5V3c0 .827-.673 1.5-1.5 1.5v3.75a.75.75 0 01-1.5 0V4.5H3v12h5.25a.75.75 0 010 1.5H.75zM1.5 3H21V1.5H1.5V3z"}}),_c('path',{attrs:{"d":"M14.25 24a.75.75 0 01-.75-.75V21h-.75a2.252 2.252 0 01-2.25-2.25v-6a2.252 2.252 0 012.25-2.25h9A2.252 2.252 0 0124 12.75v6A2.252 2.252 0 0121.75 21h-2.773l-4.311 2.874a.745.745 0 01-.416.126zm-1.5-12a.75.75 0 00-.75.75v6c0 .414.336.75.75.75h1.5a.75.75 0 01.75.75v1.599l3.334-2.223a.745.745 0 01.416-.126h3a.75.75 0 00.75-.75v-6a.75.75 0 00-.75-.75h-9z"}}),_c('path',{attrs:{"d":"M14.25 15a.75.75 0 010-1.5h6a.75.75 0 010 1.5h-6zM14.25 18a.75.75 0 010-1.5h6a.75.75 0 010 1.5h-6z"}})])
          )
        }
      }
    