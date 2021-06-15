
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
            children.concat([_c('path',{attrs:{"d":"M12 24a.75.75 0 01-.75-.75v-.75h-1.5a.75.75 0 01-.75-.75v-9a.75.75 0 01.75-.75h1.5v-.75a.75.75 0 011.5 0V12c1.654 0 3 1.346 3 3 0 .863-.38 1.685-1.019 2.25a3.02 3.02 0 011.019 2.25c0 1.654-1.346 3-3 3v.75A.75.75 0 0112 24zm.75-3c.827 0 1.5-.673 1.5-1.5s-.673-1.5-1.5-1.5H10.5v3h2.25zm0-4.5c.827 0 1.5-.673 1.5-1.5s-.673-1.5-1.5-1.5H10.5v3h2.25z"}}),_c('path',{attrs:{"d":"M16.5 24a.75.75 0 010-1.5h3.75a.75.75 0 00.75-.75v-12a.75.75 0 00-.75-.75H3.75a.75.75 0 00-.75.75v12c0 .414.336.75.75.75h3a.75.75 0 010 1.5h-3a2.252 2.252 0 01-2.25-2.25v-12A2.252 2.252 0 013.75 7.5H6V6c0-3.308 2.692-6 6-6s6 2.692 6 6v1.5h2.25a2.252 2.252 0 012.25 2.25v12A2.252 2.252 0 0120.25 24H16.5zm0-16.5V6c0-2.481-2.019-4.5-4.5-4.5A4.505 4.505 0 007.5 6v1.5h9z"}})])
          )
        }
      }
    