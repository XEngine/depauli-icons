
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
            children.concat([_c('path',{attrs:{"d":"M2.247 21.003a2.252 2.252 0 01-2.25-2.25v-16.5a2.252 2.252 0 012.25-2.25h10.629a2.239 2.239 0 011.591.66l2.872 2.87c.425.425.659.991.659 1.592v1.628a.75.75 0 01-1.5 0V5.125a.748.748 0 00-.219-.531l-2.872-2.871a.75.75 0 00-.53-.221H2.247a.75.75 0 00-.75.75v16.5c0 .414.336.75.75.75H7.5a.75.75 0 010 1.5H2.247z"}}),_c('path',{attrs:{"d":"M7.497 10.503c-.827 0-1.5-.673-1.5-1.5v-3c0-.827.673-1.5 1.5-1.5h1.5c.827 0 1.5.673 1.5 1.5v3c0 .827-.673 1.5-1.5 1.5h-1.5zm0-1.5h1.5v-3h-1.5v3zM3.747 10.503a.75.75 0 01-.75-.75v-4.5a.75.75 0 011.5 0v4.5a.75.75 0 01-.75.75zM12.747 9.003a.75.75 0 01-.75-.75v-3a.75.75 0 011.5 0v3a.75.75 0 01-.75.75zM4.497 18.003c-.827 0-1.5-.673-1.5-1.5v-3c0-.827.673-1.5 1.5-1.5h1.5c.827 0 1.5.673 1.5 1.5v3c0 .827-.673 1.5-1.5 1.5h-1.5zm0-1.5h1.5v-3h-1.5v3zM23.247 24.003a.743.743 0 01-.53-.22l-3.294-3.293a5.994 5.994 0 01-3.676 1.262c-3.308 0-6-2.692-6-6s2.692-6 6-6 6 2.692 6 6a5.984 5.984 0 01-1.264 3.677l3.294 3.293c.142.141.22.33.22.53s-.078.389-.22.53-.33.221-.53.221zm-7.5-12.75c-2.481 0-4.5 2.019-4.5 4.5s2.019 4.5 4.5 4.5 4.5-2.019 4.5-4.5-2.019-4.5-4.5-4.5z"}})])
          )
        }
      }
    