
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
            children.concat([_c('path',{attrs:{"d":"M20.249 22.75a3.754 3.754 0 01-3.75-3.75 3.74 3.74 0 012.281-3.449l-.437-2.139c-.398.212-.753.5-1.043.847l-2.026 2.431a2.24 2.24 0 01-1.728.81h-1.608c-.658 0-1.28-.286-1.708-.786l-.855-.996-2.239 1.679A3.73 3.73 0 017.499 19c0 2.068-1.682 3.75-3.75 3.75S-.001 21.068-.001 19s1.682-3.75 3.75-3.75c.928 0 1.799.334 2.486.948l2.161-1.62-.42-.489a5.244 5.244 0 00-3.987-1.838h-1.74a2.252 2.252 0 01-2.25-2.25 2.256 2.256 0 012.233-2.25L16.973 6.7l-.583-2.859a.75.75 0 00-.732-.591h-1.783a.75.75 0 010-1.5h1.783a2.26 2.26 0 012.202 1.787l1.63 7.988.046-.005a4.927 4.927 0 013.652 1.138c.117.097.231.202.342.312l.255.254a.753.753 0 01.001 1.061.747.747 0 01-1.061.001l-.256-.255a3.447 3.447 0 00-2.677-1.026l.458 2.245c2.068 0 3.75 1.682 3.75 3.75s-1.683 3.75-3.751 3.75zm-1.158-5.675A2.254 2.254 0 0017.999 19c0 1.241 1.009 2.25 2.25 2.25s2.25-1.009 2.25-2.25a2.254 2.254 0 00-1.939-2.229l.424 2.079a.75.75 0 01-1.47.3l-.423-2.075zM3.749 16.75c-1.241 0-2.25 1.009-2.25 2.25s1.009 2.25 2.25 2.25a2.252 2.252 0 002.147-2.922L4.199 19.6a.753.753 0 01-1.05-.15.751.751 0 01.151-1.05l1.697-1.272a2.233 2.233 0 00-1.248-.378zm7.62-1.012c.143.167.35.262.569.262h1.607a.744.744 0 00.576-.27l2.027-2.431a4.985 4.985 0 011.887-1.398l-.759-3.72-2.277.162V10a2.252 2.252 0 01-2.25 2.25H11.12a2.236 2.236 0 01-1.59-.658L6.862 8.923l-4.559.325a.974.974 0 01-.054.002.75.75 0 000 1.5h1.74a6.739 6.739 0 015.126 2.363l.936 1.09a.33.33 0 01.036.04l.007.01 1.275 1.485zm-.778-5.207c.141.141.33.219.53.219h1.629a.75.75 0 00.75-.75V8.45l-4.658.332 1.749 1.749z"}}),_c('path',{attrs:{"d":"M22.124 10c-1.448 0-2.625-1.178-2.625-2.625s1.177-2.625 2.625-2.625h.75a.75.75 0 01.75.75v3.75a.75.75 0 01-.75.75h-.75zm0-3.75c-.62 0-1.125.505-1.125 1.125S21.504 8.5 22.124 8.5V6.25z"}})])
          )
        }
      }
    