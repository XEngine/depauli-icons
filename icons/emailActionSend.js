
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
            children.concat([_c('path',{attrs:{"d":"M14.25 21.248a2.233 2.233 0 01-1.59-.657c-.42-.419-.66-1-.66-1.593v-1.5H2.25A2.252 2.252 0 010 15.248v-6a2.252 2.252 0 012.25-2.25H12v-1.5c0-1.24 1.008-2.25 2.249-2.251.593 0 1.174.24 1.593.659l6.755 6.884a2.25 2.25 0 01-.005 3.177l-6.754 6.626a2.232 2.232 0 01-1.588.655zm-12-12.749a.75.75 0 00-.75.75v6c0 .414.336.75.75.75h10.5a.75.75 0 01.75.75v2.25a.746.746 0 00.75.75.748.748 0 00.531-.219l6.755-6.627a.75.75 0 00-.005-1.056l-6.755-6.884a.749.749 0 00-1.275.535v2.251a.75.75 0 01-.75.75H2.25z"}})])
          )
        }
      }
    