
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
            children.concat([_c('path',{attrs:{"d":"M14.25 21.002a.75.75 0 01-.75-.75v-3.75h-2.25a.75.75 0 010-1.5h3a.75.75 0 01.75.75v2.689l3.22-3.22c.14-.14.333-.22.53-.22h3a.75.75 0 00.75-.75v-12a.75.75 0 00-.75-.75h-12c-.414.001-.75.337-.75.751a.75.75 0 01-1.5 0A2.252 2.252 0 019.75.002h12A2.252 2.252 0 0124 2.252v12a2.252 2.252 0 01-2.25 2.25h-2.689l-4.28 4.28a.747.747 0 01-.531.22z"}}),_c('path',{attrs:{"d":"M4.5 10.5C2.432 10.5.75 8.818.75 6.75S2.432 3 4.5 3s3.75 1.682 3.75 3.75S6.568 10.5 4.5 10.5zm0-6c-1.241 0-2.25 1.009-2.25 2.25S3.259 9 4.5 9s2.25-1.009 2.25-2.25S5.741 4.5 4.5 4.5zM3 24a.751.751 0 01-.744-.657L1.588 18H.75a.75.75 0 01-.75-.75V15c0-2.481 2.019-4.5 4.5-4.5S9 12.519 9 15v2.25a.75.75 0 01-.75.75h-.838l-.668 5.343A.751.751 0 016 24H3zm2.338-1.5l.668-5.343a.751.751 0 01.744-.657h.75V15c0-1.654-1.346-3-3-3s-3 1.346-3 3v1.5h.75c.377 0 .697.282.744.657l.668 5.343h1.676zM15.749 13.502c-2.895 0-5.25-2.355-5.25-5.25s2.355-5.25 5.25-5.25 5.25 2.355 5.25 5.25-2.355 5.25-5.25 5.25zm0-9c-2.068 0-3.75 1.682-3.75 3.75s1.682 3.75 3.75 3.75 3.75-1.682 3.75-3.75-1.682-3.75-3.75-3.75z"}}),_c('path',{attrs:{"d":"M15.75 9.002a.75.75 0 01-.75-.75v-1.5a.75.75 0 011.5 0v.75h.749a.75.75 0 010 1.5H15.75z"}})])
          )
        }
      }
    