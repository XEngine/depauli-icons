
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
            children.concat([_c('path',{attrs:{"d":"M8.625 12a.75.75 0 01-.712-.513l-1.5-4.5A.752.752 0 017.125 6h8.292l.74-2.466a.755.755 0 01.934-.502.748.748 0 01.502.934l-2.25 7.5a.745.745 0 01-.718.534h-6zm5.442-1.5l.9-3H8.166l1 3h4.901zM9 15a1.127 1.127 0 01-.798-1.919 1.128 1.128 0 011.923.794C10.125 14.495 9.62 15 9 15zM14.25 15a1.127 1.127 0 01-.798-1.919 1.128 1.128 0 011.923.794c0 .62-.505 1.125-1.125 1.125z"}}),_c('path',{attrs:{"d":"M18 24a.747.747 0 01-.431-.136l-7.305-5.114H2.25A2.252 2.252 0 010 16.5V2.25A2.252 2.252 0 012.25 0h19.5A2.252 2.252 0 0124 2.25V16.5a2.252 2.252 0 01-2.25 2.25h-3v4.5A.746.746 0 0118 24zM2.25 1.5a.75.75 0 00-.75.75V16.5c0 .414.336.75.75.75h8.25c.155 0 .303.047.43.136l6.32 4.424V18a.75.75 0 01.75-.75h3.75a.75.75 0 00.75-.75V2.25a.75.75 0 00-.75-.75H2.25z"}})])
          )
        }
      }
    