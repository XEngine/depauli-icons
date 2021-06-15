
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
            children.concat([_c('path',{attrs:{"d":"M4.409 24a2.23 2.23 0 01-.783-.141 2.23 2.23 0 01-1.262-1.172 2.238 2.238 0 01-.064-1.721c.282-.759.531-1.435.753-2.038l.018-.048c.349-.947.641-1.739.888-2.381h-.213a2.252 2.252 0 01-2.25-2.25V13.5h-.75a.75.75 0 010-1.5h.75v-.75A2.252 2.252 0 013.746 9h.75V1.5c0-.827.673-1.5 1.5-1.5H18c.827 0 1.5.673 1.5 1.5V9h.746a2.252 2.252 0 012.25 2.25V12h.75a.75.75 0 010 1.5h-.75v.75a2.252 2.252 0 01-2.25 2.25h-.212c.245.636.533 1.418.877 2.353l.067.182.714 1.931a2.254 2.254 0 01-.518 2.374 2.23 2.23 0 01-1.59.66H4.409zm2.207-9c-.478 0-.517 0-2.138 4.4-.227.616-.482 1.309-.772 2.089a.744.744 0 00.442.963.731.731 0 00.261.048h15.175a.748.748 0 00.702-1.011c-.293-.788-.551-1.488-.779-2.108C17.893 15 17.854 15 17.377 15h-2.476a3.018 3.018 0 01-2.905 2.25A3.018 3.018 0 019.091 15H6.616zm3.13-1.5a.75.75 0 01.75.75c0 .827.673 1.5 1.5 1.5s1.5-.673 1.5-1.5a.75.75 0 01.75-.75h3.131c.974 0 1.431.224 2.035 1.5h.834a.75.75 0 00.75-.75v-3a.75.75 0 00-.75-.75h-16.5a.75.75 0 00-.75.75v3c0 .414.336.75.75.75h.834c.604-1.277 1.062-1.5 2.036-1.5h3.13zM18 9V1.5H6l-.005.001V9H18z"}}),_c('circle',{attrs:{"cx":"7.916","cy":"19.875","r":"1.125"}}),_c('path',{attrs:{"d":"M12 21a1.123 1.123 0 01-.139-2.238.662.662 0 01.125-.012H12c.62 0 1.125.505 1.125 1.125S12.62 21 12 21zM16.076 21a1.123 1.123 0 01-.058-2.246.386.386 0 01.058-.004 1.126 1.126 0 010 2.25zM8.996 7.5a.75.75 0 010-1.5h6a.75.75 0 010 1.5h-6zM8.996 4.5a.75.75 0 010-1.5h3.75a.75.75 0 010 1.5h-3.75z"}})])
          )
        }
      }
    