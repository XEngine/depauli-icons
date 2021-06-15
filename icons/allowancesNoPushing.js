
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
            children.concat([_c('path',{attrs:{"d":"M20.25 22.438a.743.743 0 01-.53-.22L.22 2.718a.744.744 0 010-1.06c.141-.142.33-.22.53-.22s.389.078.53.22l19.5 19.5a.744.744 0 010 1.06.749.749 0 01-.53.22zM12 7.813c-1.861 0-3.375-1.514-3.375-3.375S10.139 1.063 12 1.063s3.375 1.514 3.375 3.375S13.861 7.813 12 7.813zm0-5.25c-1.034 0-1.875.841-1.875 1.875S10.966 6.313 12 6.313s1.875-.841 1.875-1.875S13.034 2.563 12 2.563zM2.983 22.46a2.24 2.24 0 01-1.21-.356c-.506-.323-.856-.825-.984-1.413s-.021-1.189.303-1.695l4.124-6.701a.747.747 0 011.368.22.748.748 0 01-.091.567l-4.131 6.713a.747.747 0 00.22 1.047.746.746 0 001.036-.227l1.889-3.069a.755.755 0 01.639-.357h2.1a3.006 3.006 0 013 3 .75.75 0 001.5 0 4.513 4.513 0 00-4.501-4.5h-.253a.75.75 0 010-1.5h.254a6.016 6.016 0 016 5.999c0 1.241-1.01 2.251-2.25 2.251s-2.25-1.009-2.25-2.25a1.504 1.504 0 00-1.5-1.5H6.565l-1.683 2.735a2.239 2.239 0 01-1.899 1.036z"}}),_c('path',{attrs:{"d":"M23.25 17.938a.75.75 0 01-.75-.75v-12a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75v9a.75.75 0 01-1.5 0v-1.5h-2.25a.75.75 0 010-1.5h2.25v-1.5H12a.75.75 0 010-1.5h4.5v-3a2.252 2.252 0 012.25-2.25h3A2.252 2.252 0 0124 5.188v12a.75.75 0 01-.75.75z"}})])
          )
        }
      }
    