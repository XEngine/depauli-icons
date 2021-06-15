
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
            children.concat([_c('path',{attrs:{"d":"M6.5 24a3.754 3.754 0 01-3.75-3.75V3.844a3.753 3.753 0 01.051-.719C3.17 1.28 4.729-.001 6.595-.001L6.676 0H20a.75.75 0 010 1.5L6.595 1.499a2.37 2.37 0 00-2.319 1.898 2.334 2.334 0 00-.028.3l.002.053v.124c.047 1.031.836 1.92 1.874 2.095.123.021.249.031.374.031H19.25c.827 0 1.5.673 1.5 1.5v15c0 .827-.673 1.5-1.5 1.5H6.5zm-2.25-3.75A2.252 2.252 0 006.5 22.5h12.75v-15H6.5a4.69 4.69 0 01-.626-.052A3.75 3.75 0 014.25 6.75v13.5z"}}),_c('path',{attrs:{"d":"M6.5 4.5a.75.75 0 010-1.5h12a.75.75 0 010 1.5h-12zM9.5 19.5a.75.75 0 01-.75-.75V16.5a.75.75 0 011.5 0V18h4.5v-1.5a.75.75 0 011.5 0v2.25a.75.75 0 01-.75.75h-6zM17 15a.753.753 0 01-.48-.174l-4.02-3.35-4.02 3.35a.75.75 0 11-.96-1.152l4.5-3.75a.75.75 0 01.96 0l4.5 3.75a.744.744 0 01.267.508A.747.747 0 0117 15z"}})])
          )
        }
      }
    