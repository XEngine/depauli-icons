
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
            children.concat([_c('path',{attrs:{"d":"M5.25 18.75a.75.75 0 010-1.5H9a.75.75 0 010 1.5H5.25z"}}),_c('path',{attrs:{"d":"M11.041 24a1.5 1.5 0 01-1.423-1.025L9.21 21.75H5.041l-.409 1.224A1.5 1.5 0 013.21 24H1.5C.673 24 0 23.327 0 22.5v-9.75c0-.827.673-1.5 1.5-1.5h11.25c.827 0 1.5.673 1.5 1.5V18H18a.75.75 0 00.75-.75V13.5h-1.5A2.252 2.252 0 0115 11.25v-9A2.252 2.252 0 0117.25 0h4.5A2.252 2.252 0 0124 2.25v9a2.252 2.252 0 01-2.25 2.25h-1.5v3.75A2.252 2.252 0 0118 19.5h-3.75v3c0 .827-.673 1.5-1.5 1.5h-1.709zm-1.832-3.75a1.5 1.5 0 011.423 1.025l.408 1.225h1.71v-9.75h-.914l-.608 2.432a.75.75 0 01-.728.568H3.75a.749.749 0 01-.728-.568l-.608-2.432H1.5v9.75h1.709l.409-1.224a1.501 1.501 0 011.423-1.026h4.168zm.705-6l.375-1.5H3.961l.375 1.5h5.578zm6.586-3c0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75v-.75h-6v.75zm6-2.25V2.25a.75.75 0 00-.75-.75h-4.5a.75.75 0 00-.75.75V9h6z"}})])
          )
        }
      }
    