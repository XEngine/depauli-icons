
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
            children.concat([_c('path',{attrs:{"d":"M21.75 21a.75.75 0 01-.75-.75v-.75H3v.75a.75.75 0 01-1.5 0v-.879A2.258 2.258 0 010 17.25v-6a.38.38 0 01.003-.046l.003-.033a.733.733 0 01.028-.138l.016-.05a.75.75 0 01.073-.144L5.385 3.32c.141-.2.37-.32.615-.32h12c.245 0 .474.12.615.32l5.25 7.5a.744.744 0 01.086.166l.013.04a.797.797 0 01.036.224v6c0 .96-.615 1.808-1.5 2.121v.879a.75.75 0 01-.75.75zM1.5 17.25c0 .414.336.75.75.75h19.5a.75.75 0 00.75-.75V12h-21v5.25zm20.31-6.75l-4.2-6H6.39l-4.2 6h19.62z"}}),_c('path',{attrs:{"d":"M3.75 15.75a.75.75 0 010-1.5h3a.75.75 0 010 1.5h-3zM15 16.125a1.125 1.125 0 01-.058-2.246l.058-.004c.62 0 1.125.505 1.125 1.125S15.62 16.125 15 16.125z"}}),_c('circle',{attrs:{"cx":"19.5","cy":"15","r":"1.125"}})])
          )
        }
      }
    