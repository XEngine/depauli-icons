
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
            children.concat([_c('path',{attrs:{"d":"M11.999 9.002c-1.241 0-2.25-1.009-2.25-2.25s1.009-2.25 2.25-2.25 2.25 1.009 2.25 2.25-1.009 2.25-2.25 2.25zm0-3a.75.75 0 100 1.5.75.75 0 000-1.5zM11.999 21.002c-1.241 0-2.25-1.009-2.25-2.25s1.009-2.25 2.25-2.25 2.25 1.009 2.25 2.25-1.009 2.25-2.25 2.25zm0-3a.75.75 0 100 1.5.75.75 0 000-1.5zM5.999 21.002c-1.241 0-2.25-1.009-2.25-2.25s1.009-2.25 2.25-2.25 2.25 1.009 2.25 2.25-1.009 2.25-2.25 2.25zm0-3a.75.75 0 100 1.5.75.75 0 000-1.5zM17.999 21.002c-1.241 0-2.25-1.009-2.25-2.25s1.009-2.25 2.25-2.25 2.25 1.009 2.25 2.25-1.009 2.25-2.25 2.25zm0-3a.75.75 0 100 1.5.75.75 0 000-1.5zM8.999 15.002c-1.241 0-2.25-1.009-2.25-2.25s1.009-2.25 2.25-2.25 2.25 1.009 2.25 2.25-1.009 2.25-2.25 2.25zm0-3a.75.75 0 10.002 1.502.75.75 0 00-.002-1.502zM14.999 15.002c-1.241 0-2.25-1.009-2.25-2.25s1.009-2.25 2.25-2.25 2.25 1.009 2.25 2.25-1.009 2.25-2.25 2.25zm0-3a.75.75 0 10.002 1.502.75.75 0 00-.002-1.502z"}}),_c('path',{attrs:{"d":"M3.749 24.002a3.77 3.77 0 01-1.678-.396 3.724 3.724 0 01-1.88-2.169 3.725 3.725 0 01.204-2.863L8.657 2.05A3.742 3.742 0 0111.993.003a3.74 3.74 0 013.344 2.041l8.266 16.53a3.754 3.754 0 01-3.354 5.427h-16.5zm8.246-22.499c-.358 0-.701.083-1.021.247a2.233 2.233 0 00-.978.978l-8.26 16.518a2.24 2.24 0 00-.123 1.718 2.256 2.256 0 002.135 1.539h16.5a2.253 2.253 0 002.012-3.256L13.998 2.721a2.24 2.24 0 00-2.003-1.218z"}})])
          )
        }
      }
    