
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
            children.concat([_c('path',{attrs:{"d":"M15.747 24.004a2.252 2.252 0 01-2.25-2.25v-4.5c0-.96.615-1.808 1.5-2.121v-.879c0-2.068 1.682-3.75 3.75-3.75s3.75 1.682 3.75 3.75v.879a2.26 2.26 0 011.5 2.121v4.5a2.252 2.252 0 01-2.25 2.25h-6zm0-7.5a.75.75 0 00-.75.75v4.5c0 .414.336.75.75.75h6a.75.75 0 00.75-.75v-4.5a.75.75 0 00-.75-.75h-6zm5.25-1.5v-.75c0-1.241-1.009-2.25-2.25-2.25s-2.25 1.009-2.25 2.25l4.5.75z"}}),_c('circle',{attrs:{"cx":"18.747","cy":"19.533","r":"1.125"}}),_c('path',{attrs:{"d":"M2.247 21.004a2.252 2.252 0 01-2.25-2.25v-16.5a2.252 2.252 0 012.25-2.25h10.629c.601 0 1.165.234 1.59.658l2.872 2.871c.425.425.659.991.659 1.592v3.129a.75.75 0 01-1.5 0V5.125a.758.758 0 00-.219-.531l-2.872-2.871a.748.748 0 00-.53-.219H2.247a.75.75 0 00-.75.75v16.5c0 .414.336.75.75.75H10.5a.75.75 0 010 1.5H2.247z"}}),_c('path',{attrs:{"d":"M7.497 10.504c-.827 0-1.5-.673-1.5-1.5v-3c0-.827.673-1.5 1.5-1.5h1.5c.827 0 1.5.673 1.5 1.5v3c0 .827-.673 1.5-1.5 1.5h-1.5zm0-1.5h1.5v-3h-1.5v3zM3.747 10.504a.75.75 0 01-.75-.75v-4.5a.75.75 0 011.5 0v4.5a.75.75 0 01-.75.75zM12.747 10.504a.75.75 0 01-.75-.75v-4.5a.75.75 0 011.5 0v4.5a.75.75 0 01-.75.75zM4.497 18.004c-.827 0-1.5-.673-1.5-1.5v-3c0-.827.673-1.5 1.5-1.5h1.5c.827 0 1.5.673 1.5 1.5v3c0 .827-.673 1.5-1.5 1.5h-1.5zm0-1.5h1.5v-3h-1.5v3zM9.747 18.004a.75.75 0 01-.75-.75v-4.5a.75.75 0 011.5 0v4.5a.75.75 0 01-.75.75z"}})])
          )
        }
      }
    