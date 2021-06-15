
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
            children.concat([_c('path',{attrs:{"d":"M3.75 22.875A3.754 3.754 0 010 19.125a3.743 3.743 0 013-3.673v-5.327c0-4.954 4.031-8.991 8.985-9h.033c4.951.008 8.982 4.046 8.982 9v5.327c1.732.35 3 1.874 3 3.673a3.754 3.754 0 01-3.75 3.75H3.75zm16.5-1.5c1.241 0 2.25-1.009 2.25-2.25s-1.009-2.25-2.25-2.25H18v4.5h2.25zm-3.75 0v-4.5h-3.75v4.5h3.75zm-5.25 0v-4.5H7.5v4.5h3.75zm-7.5-4.5c-1.241 0-2.25 1.009-2.25 2.25s1.009 2.25 2.25 2.25H6v-4.5H3.75zm15.75-1.5v-5.25c0-3.586-2.604-6.677-6.058-7.358l1.121 1.793a12.743 12.743 0 011.937 6.757v4.058h3zm-4.5 0v-4.058a11.24 11.24 0 00-1.71-5.963L12 3.291l-1.29 2.064A11.236 11.236 0 009 11.317v4.058h6zm-7.5 0v-4.058c0-2.392.67-4.729 1.938-6.757l1.12-1.793C7.104 3.448 4.5 6.54 4.5 10.125v5.25h3z"}})])
          )
        }
      }
    