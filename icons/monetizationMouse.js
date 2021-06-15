
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
            children.concat([_c('path',{attrs:{"d":"M6.75 19.5a.75.75 0 01-.75-.75h-.75a.75.75 0 010-1.5h2.033a.588.588 0 00.543-.825.584.584 0 00-.324-.316l-2.064-.825a2.084 2.084 0 01-1.313-1.94c0-.558.217-1.083.612-1.479A2.08 2.08 0 016 11.261v-.011a.75.75 0 011.5 0h.75a.75.75 0 010 1.5H6.217a.589.589 0 00-.591.593.59.59 0 00.371.549l2.062.825c.519.207.926.604 1.146 1.118.22.514.227 1.082.019 1.601A2.078 2.078 0 017.5 18.739v.011a.75.75 0 01-.75.75z"}}),_c('path',{attrs:{"d":"M6.754 21.75a6.708 6.708 0 01-4.77-1.974 6.704 6.704 0 01-1.98-4.772 6.757 6.757 0 017.739-6.682.75.75 0 01-.216 1.484 5.255 5.255 0 00-6.023 5.197 5.217 5.217 0 001.54 3.711 5.216 5.216 0 003.71 1.535c.287 0 .571-.023.849-.069a.747.747 0 01.862.619.751.751 0 01-.618.862 6.75 6.75 0 01-1.089.089h-.004zM17.25 24a6.758 6.758 0 01-6.75-6.75V7.5a3.754 3.754 0 013.75-3.75h6A3.754 3.754 0 0124 7.5v9.75A6.758 6.758 0 0117.25 24zm-3-18.75A2.253 2.253 0 0012 7.5v9.75a5.256 5.256 0 005.25 5.25 5.256 5.256 0 005.25-5.25V7.5a2.252 2.252 0 00-2.25-2.25h-6z"}}),_c('path',{attrs:{"d":"M17.25 11.25a.75.75 0 01-.75-.75v-3a.75.75 0 011.5 0v3a.75.75 0 01-.75.75zM9.568 4.371a.743.743 0 01-.53-.22L7.977 3.09a.743.743 0 01-.22-.53c0-.2.078-.389.22-.53.141-.142.33-.22.53-.22s.389.078.53.22l1.061 1.061c.142.141.22.33.22.53s-.078.389-.22.53a.741.741 0 01-.53.22zM12 3a.75.75 0 01-.75-.75V.75a.75.75 0 011.5 0v1.5A.75.75 0 0112 3zM6.697 6.75a.75.75 0 010-1.5h1.5a.75.75 0 010 1.5h-1.5z"}})])
          )
        }
      }
    