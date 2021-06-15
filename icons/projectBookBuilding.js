
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
            children.concat([_c('path',{attrs:{"d":"M7.5 21a.75.75 0 010-1.5h.75v-9c0-.827.673-1.5 1.5-1.5h4.5c.827 0 1.5.673 1.5 1.5v9h.75a.75.75 0 010 1.5h-9zm6.75-1.5v-3H12a.75.75 0 010-1.5h2.25v-1.5H12a.75.75 0 010-1.5h2.25v-1.5h-4.5v9h4.5z"}}),_c('path',{attrs:{"d":"M6.75 24A3.754 3.754 0 013 20.25V3.844a3.753 3.753 0 01.051-.719C3.42 1.28 4.98-.001 6.845-.001L6.926 0H20.25a.75.75 0 010 1.5L6.845 1.499a2.37 2.37 0 00-2.319 1.898 2.334 2.334 0 00-.028.3l.002.053v.124c.047 1.031.836 1.92 1.874 2.095.123.021.249.031.374.031H19.5c.827 0 1.5.673 1.5 1.5v15c0 .827-.673 1.5-1.5 1.5H6.75zM4.5 20.25a2.252 2.252 0 002.25 2.25H19.5v-15H6.75a4.69 4.69 0 01-.626-.052A3.75 3.75 0 014.5 6.75v13.5z"}}),_c('path',{attrs:{"d":"M6.75 4.5a.75.75 0 010-1.5h12a.75.75 0 010 1.5h-12z"}})])
          )
        }
      }
    