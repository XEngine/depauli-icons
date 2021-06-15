
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
            children.concat([_c('path',{attrs:{"d":"M.744 22.877a.747.747 0 01-.693-.463.745.745 0 01.163-.817l3.619-3.619a.748.748 0 01-.048-.587l1.508-4.522a.36.36 0 01.199-.298l7.691-7.694-.659-.659a.748.748 0 00-1.061 0L7.275 8.407a.744.744 0 01-1.06 0 .744.744 0 010-1.06l4.189-4.189a2.235 2.235 0 011.591-.658c.601 0 1.166.234 1.591.658l.659.659 2.03-2.031c.424-.425.99-.658 1.591-.658.598 0 1.16.231 1.584.651l3.885 3.886a2.253 2.253 0 010 3.182l-10.807 10.81a.744.744 0 01-.238.158.327.327 0 01-.051.022l-4.505 1.501a.755.755 0 01-.591-.049l-1.369 1.369a.744.744 0 01-.53.22h-4.5zm4.19-1.5L6.06 20.25l-1.189-1.189-2.316 2.316h2.379zM7.7 19.769l2.907-.969-4.282-4.282-.969 2.907L7.7 19.769zm4.296-1.702l7.188-7.191-4.94-4.939-7.188 7.19 4.94 4.94zm8.248-8.251l2.03-2.031a.752.752 0 000-1.061L18.401 2.85a.748.748 0 00-1.066-.005l-2.03 2.031 4.939 4.94z"}})])
          )
        }
      }
    