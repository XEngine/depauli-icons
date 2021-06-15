
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
            children.concat([_c('path',{attrs:{"d":"M2.25 21A2.252 2.252 0 010 18.75V5.25A2.252 2.252 0 012.25 3h19.5A2.252 2.252 0 0124 5.25v13.5A2.252 2.252 0 0121.75 21H2.25zm-.75-2.25c0 .414.336.75.75.75h19.5a.75.75 0 00.75-.75V9h-21v9.75zm21-11.25V5.25a.75.75 0 00-.75-.75H2.25a.75.75 0 00-.75.75V7.5h21z"}}),_c('path',{attrs:{"d":"M8.25 18a3.754 3.754 0 01-3.75-3.75 3.754 3.754 0 013.75-3.75 3.743 3.743 0 013.673 3h6.827a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V15h-1.5v.75a.75.75 0 01-1.5 0V15h-3.077a3.743 3.743 0 01-3.673 3zm0-6C7.009 12 6 13.009 6 14.25s1.009 2.25 2.25 2.25 2.25-1.009 2.25-2.25S9.491 12 8.25 12z"}})])
          )
        }
      }
    