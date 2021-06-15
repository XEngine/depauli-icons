
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
            children.concat([_c('path',{attrs:{"d":"M20.988 24.004a3.004 3.004 0 01-2.974-3.382l-2.111-.845a3.011 3.011 0 01-2.415 1.226c-1.654 0-3-1.346-3-3s1.346-3 3-3c.793 0 1.544.311 2.103.863l2.52-1.512a3.004 3.004 0 012.877-3.851c1.654 0 3 1.346 3 3s-1.346 3-3 3a2.985 2.985 0 01-2.104-.864l-2.52 1.511a2.976 2.976 0 01.097 1.234l2.111.845a3.011 3.011 0 012.415-1.226c1.654 0 3 1.346 3 3s-1.345 3.001-2.999 3.001zm0-4.5c-.827 0-1.5.673-1.5 1.5s.673 1.5 1.5 1.5 1.5-.673 1.5-1.5-.673-1.5-1.5-1.5zm-7.5-3c-.827 0-1.5.673-1.5 1.5s.673 1.5 1.5 1.5a1.496 1.496 0 001.281-2.268l-.023-.043a1.49 1.49 0 00-1.258-.689zm6.233-2.201c.269.434.745.701 1.267.701.827 0 1.5-.673 1.5-1.5s-.673-1.5-1.5-1.5-1.5.673-1.5 1.5c0 .259.069.515.199.743l.018.027a.188.188 0 01.016.029z"}}),_c('path',{attrs:{"d":"M2.238 21.004a2.252 2.252 0 01-2.25-2.25v-16.5a2.252 2.252 0 012.25-2.25h10.628c.601 0 1.166.234 1.591.658l2.873 2.871c.419.419.66.999.66 1.591v3.129a.75.75 0 01-1.5 0V5.125a.753.753 0 00-.22-.53l-2.873-2.871a.743.743 0 00-.53-.219H2.238a.75.75 0 00-.75.75v16.5c0 .414.336.75.75.75h6a.75.75 0 010 1.5h-6z"}}),_c('path',{attrs:{"d":"M8.988 11.254a.743.743 0 01-.53-.22c-.142-.141-.22-.33-.22-.53s.078-.389.22-.53l1.72-1.72-1.72-1.72c-.142-.141-.22-.33-.22-.53s.078-.389.22-.53c.141-.142.33-.22.53-.22s.389.078.53.22l2.25 2.25c.142.141.22.33.22.53s-.078.389-.22.53l-2.25 2.25a.743.743 0 01-.53.22zM5.988 11.254a.743.743 0 01-.53-.22l-2.25-2.25c-.142-.141-.22-.33-.22-.53s.078-.389.22-.53l2.25-2.25a.744.744 0 011.06 0c.142.141.22.33.22.53s-.078.389-.22.53l-1.72 1.72 1.72 1.72c.142.141.22.33.22.53s-.078.389-.22.53a.743.743 0 01-.53.22z"}})])
          )
        }
      }
    