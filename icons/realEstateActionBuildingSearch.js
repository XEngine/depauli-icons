
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
            children.concat([_c('path',{attrs:{"d":"M.749 24a.75.75 0 01-.75-.75v-12A2.252 2.252 0 012.249 9h3V5.77a1.514 1.514 0 01.925-1.383l1.325-.686V.751a.75.75 0 011.5 0v2.174L14.391.134a.587.587 0 01.081-.036 1.498 1.498 0 012.027 1.4V8.25a.75.75 0 01-.75.75h-3.75a.75.75 0 010-1.5h3V6h-1.5a.75.75 0 010-1.5h1.5V1.508L6.831 5.736a.658.658 0 01-.082.036V9a2.252 2.252 0 012.25 2.25V22.5h.75a.75.75 0 010 1.5h-9zm6.75-1.5V11.25a.75.75 0 00-.75-.75h-4.5a.75.75 0 00-.75.75V12h1.5a.75.75 0 010 1.5h-1.5V15h3a.75.75 0 010 1.5h-3v6h6z"}}),_c('path',{attrs:{"d":"M23.249 24a.743.743 0 01-.53-.22l-3.293-3.293a5.99 5.99 0 01-3.677 1.263c-3.308 0-6-2.692-6-6s2.692-6 6-6 6 2.692 6 6a5.992 5.992 0 01-1.263 3.677l3.293 3.293a.752.752 0 010 1.061.744.744 0 01-.53.219zm-7.5-12.75c-2.481 0-4.5 2.019-4.5 4.5s2.019 4.5 4.5 4.5 4.5-2.019 4.5-4.5-2.018-4.5-4.5-4.5z"}})])
          )
        }
      }
    