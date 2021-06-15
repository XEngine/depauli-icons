
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
            children.concat([_c('path',{attrs:{"d":"M3.749 24c-1.654 0-3-1.346-3-3V3.75A3.755 3.755 0 014.499 0h14.25c.827 0 1.5.673 1.5 1.5v6.75a.75.75 0 01-1.5 0V1.5H4.499a2.252 2.252 0 00-2.25 2.25v14.651a2.976 2.976 0 011.5-.401h3.75a.75.75 0 010 1.5h-3.75c-.827 0-1.5.673-1.5 1.5s.673 1.5 1.5 1.5h7.5a.75.75 0 010 1.5h-7.5z"}}),_c('path',{attrs:{"d":"M22.499 24a.743.743 0 01-.53-.22l-3.293-3.293a5.99 5.99 0 01-3.677 1.263c-3.308 0-6-2.692-6-6s2.692-6 6-6 6 2.692 6 6a5.992 5.992 0 01-1.263 3.677l3.293 3.293a.752.752 0 010 1.061.744.744 0 01-.53.219zm-7.5-12.75c-2.481 0-4.5 2.019-4.5 4.5s2.019 4.5 4.5 4.5 4.5-2.019 4.5-4.5-2.018-4.5-4.5-4.5z"}})])
          )
        }
      }
    