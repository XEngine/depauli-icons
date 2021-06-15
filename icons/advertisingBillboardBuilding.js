
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
            children.concat([_c('path',{attrs:{"d":"M18.75 24a.75.75 0 01-.75-.75V16.5H6v6.75a.75.75 0 01-1.5 0V16.5H3a2.252 2.252 0 01-2.25-2.25v-12A2.252 2.252 0 013 0h18a2.252 2.252 0 012.25 2.25v12A2.252 2.252 0 0121 16.5h-1.5v6.75a.75.75 0 01-.75.75zM3 1.5a.75.75 0 00-.75.75v12c0 .414.336.75.75.75h18a.75.75 0 00.75-.75v-12A.75.75 0 0021 1.5H3z"}}),_c('path',{attrs:{"d":"M7.5 13.5a.75.75 0 010-1.5h.75V4.5c0-.827.673-1.5 1.5-1.5h4.5c.827 0 1.5.673 1.5 1.5V12h.75a.75.75 0 010 1.5h-9zm6.75-1.5v-1.5H12A.75.75 0 0112 9h2.25V7.5H12A.75.75 0 0112 6h2.25V4.5h-4.5V12h4.5z"}})])
          )
        }
      }
    