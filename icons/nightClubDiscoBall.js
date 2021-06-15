
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
            children.concat([_c('path',{attrs:{"d":"M9.75 24C4.374 24 0 19.626 0 14.25a9.727 9.727 0 019-9.72V.75a.75.75 0 011.5 0v3.781c5.075.384 9 4.586 9 9.719 0 5.376-4.374 9.75-9.75 9.75zm-.133-1.503a2.918 2.918 0 00.266 0c1.4-.921 2.517-2.603 3.12-4.682A27.15 27.15 0 019.75 18a27.15 27.15 0 01-3.253-.185c.602 2.079 1.719 3.761 3.12 4.682zm-7.798-5.982a8.312 8.312 0 005.113 5.487c-.941-1.206-1.652-2.74-2.054-4.448-1.22-.252-2.257-.605-3.059-1.039zm12.803 1.039c-.401 1.708-1.113 3.242-2.053 4.448a8.31 8.31 0 005.113-5.487c-.803.434-1.84.787-3.06 1.039zm-8.469-1.309c1.124.169 2.333.255 3.597.255 1.264 0 2.473-.086 3.597-.255a13.16 13.16 0 000-3.99C12.223 12.086 11.014 12 9.75 12s-2.473.086-3.597.255a13.17 13.17 0 000 3.99zm-1.555-3.686C2.352 13.108 1.5 13.872 1.5 14.25c0 .379.852 1.142 3.098 1.691a14.724 14.724 0 010-3.382zm10.304 0a14.724 14.724 0 010 3.382C17.148 15.392 18 14.629 18 14.25c0-.378-.852-1.142-3.098-1.691zM6.931 6.498a8.31 8.31 0 00-5.112 5.487c.802-.434 1.838-.787 3.058-1.039.401-1.708 1.113-3.242 2.054-4.448zm7.692 4.448c1.22.252 2.257.605 3.059 1.039a8.312 8.312 0 00-5.112-5.487c.94 1.206 1.651 2.74 2.053 4.448zM9.618 6.003c-1.401.92-2.52 2.603-3.122 4.682 1.015-.123 2.106-.185 3.254-.185s2.239.062 3.253.185c-.602-2.079-1.72-3.762-3.121-4.682a2.907 2.907 0 00-.264 0zM17.25 4.5a.75.75 0 01-.75-.75V3h-.75a.75.75 0 010-1.5h.75V.75a.75.75 0 011.5 0v.75h.75a.75.75 0 010 1.5H18v.75a.75.75 0 01-.75.75zM21.75 9a.75.75 0 01-.75-.75V7.5h-.75a.75.75 0 010-1.5H21v-.75a.75.75 0 011.5 0V6h.75a.75.75 0 010 1.5h-.75v.75a.75.75 0 01-.75.75z"}})])
          )
        }
      }
    