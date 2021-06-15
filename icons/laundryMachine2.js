
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
            children.concat([_c('path',{attrs:{"d":"M3.75 24a2.252 2.252 0 01-2.25-2.25V2.25A2.252 2.252 0 013.75 0h16.5a2.252 2.252 0 012.25 2.25v19.5A2.252 2.252 0 0120.25 24H3.75zM3 21.75c0 .414.336.75.75.75h16.5a.75.75 0 00.75-.75V7.5H3v14.25zM21 6V2.25a.75.75 0 00-.75-.75H3.75a.75.75 0 00-.75.75V6h18z"}}),_c('path',{attrs:{"d":"M5.25 4.5a.75.75 0 010-1.5h3a.75.75 0 010 1.5h-3zM12 21c-3.308 0-6-2.692-6-6s2.692-6 6-6 6 2.692 6 6-2.692 6-6 6zm0-10.5c-2.481 0-4.5 2.019-4.5 4.5s2.019 4.5 4.5 4.5 4.5-2.019 4.5-4.5-2.019-4.5-4.5-4.5z"}}),_c('circle',{attrs:{"cx":"18","cy":"3.75","r":"1.125"}}),_c('circle',{attrs:{"cx":"13.5","cy":"3.75","r":"1.125"}}),_c('path',{attrs:{"d":"M9.75 15.75A.75.75 0 019 15c0-1.654 1.346-3 3-3a.75.75 0 010 1.5c-.827 0-1.5.673-1.5 1.5a.75.75 0 01-.75.75z"}})])
          )
        }
      }
    