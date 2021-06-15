
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
            children.concat([_c('path',{attrs:{"d":"M17.249 24.004c-3.722 0-6.75-3.028-6.75-6.75s3.028-6.75 6.75-6.75 6.75 3.028 6.75 6.75-3.028 6.75-6.75 6.75zm0-12c-2.895 0-5.25 2.355-5.25 5.25s2.355 5.25 5.25 5.25 5.25-2.355 5.25-5.25-2.355-5.25-5.25-5.25z"}}),_c('path',{attrs:{"d":"M19.499 20.253a.743.743 0 01-.53-.22l-1.72-1.72-1.72 1.72a.744.744 0 01-1.06 0 .752.752 0 010-1.061l1.72-1.72-1.72-1.72a.752.752 0 01.53-1.281c.2 0 .389.078.53.22l1.72 1.72 1.72-1.72a.744.744 0 011.06 0 .752.752 0 010 1.061l-1.72 1.72 1.72 1.72a.752.752 0 01-.53 1.281zM2.249 21.004a2.252 2.252 0 01-2.25-2.25v-16.5a2.252 2.252 0 012.25-2.25h10.629c.601 0 1.165.234 1.59.658l2.872 2.871c.425.425.659.991.659 1.592v3.129a.75.75 0 01-1.5 0V5.125a.758.758 0 00-.219-.531l-2.872-2.871a.748.748 0 00-.53-.219H2.249a.75.75 0 00-.75.75v16.5c0 .414.336.75.75.75h6a.75.75 0 010 1.5h-6z"}}),_c('path',{attrs:{"d":"M7.499 10.504c-.827 0-1.5-.673-1.5-1.5v-3c0-.827.673-1.5 1.5-1.5h1.5c.827 0 1.5.673 1.5 1.5v3c0 .827-.673 1.5-1.5 1.5h-1.5zm0-1.5h1.5v-3h-1.5v3zM3.749 10.504a.75.75 0 01-.75-.75v-4.5a.75.75 0 011.5 0v4.5a.75.75 0 01-.75.75zM12.749 10.504a.75.75 0 01-.75-.75v-4.5a.75.75 0 011.5 0v4.5a.75.75 0 01-.75.75zM4.499 18.004c-.827 0-1.5-.673-1.5-1.5v-3c0-.827.673-1.5 1.5-1.5h1.5c.827 0 1.5.673 1.5 1.5v3c0 .827-.673 1.5-1.5 1.5h-1.5zm0-1.5h1.5v-3h-1.5v3z"}})])
          )
        }
      }
    