
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
            children.concat([_c('path',{attrs:{"d":"M6.75 18a.75.75 0 01-.75-.75V6.75A.75.75 0 016.75 6h10.5a.75.75 0 01.75.75v10.5a.75.75 0 01-.75.75H6.75zm9.75-1.5v-9h-9v9h9z"}}),_c('path',{attrs:{"d":"M18 24c-.827 0-1.5-.673-1.5-1.5V21H5.25A2.252 2.252 0 013 18.75V7.5H1.5C.673 7.5 0 6.827 0 6V4.5C0 3.673.673 3 1.5 3H3V1.5C3 .673 3.673 0 4.5 0H6c.827 0 1.5.673 1.5 1.5V3h11.25A2.252 2.252 0 0121 5.25V16.5h1.5c.827 0 1.5.673 1.5 1.5v1.5c0 .827-.673 1.5-1.5 1.5H21v1.5c0 .827-.673 1.5-1.5 1.5H18zM1.5 6h2.25a.75.75 0 01.75.75v12c0 .414.336.75.75.75h12a.75.75 0 01.75.75v2.25h1.5v-2.25a.75.75 0 01.75-.75h2.25V18h-2.25a.75.75 0 01-.75-.75v-12a.75.75 0 00-.75-.75h-12A.75.75 0 016 3.75V1.5H4.5v2.25a.75.75 0 01-.75.75H1.5V6z"}}),_c('path',{attrs:{"d":"M12 15c-1.654 0-3-1.346-3-3s1.346-3 3-3 3 1.346 3 3-1.346 3-3 3zm0-4.5c-.827 0-1.5.673-1.5 1.5s.673 1.5 1.5 1.5 1.5-.673 1.5-1.5-.673-1.5-1.5-1.5z"}})])
          )
        }
      }
    