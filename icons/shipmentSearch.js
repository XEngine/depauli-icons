
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
            children.concat([_c('path',{attrs:{"d":"M23.249 24a.743.743 0 01-.53-.22l-3.293-3.293a5.99 5.99 0 01-3.677 1.263c-3.308 0-6-2.692-6-6s2.692-6 6-6 6 2.692 6 6a5.992 5.992 0 01-1.263 3.677l3.293 3.293a.752.752 0 010 1.061.744.744 0 01-.53.219zm-7.5-12.75c-2.481 0-4.5 2.019-4.5 4.5s2.019 4.5 4.5 4.5 4.5-2.019 4.5-4.5-2.018-4.5-4.5-4.5z"}}),_c('path',{attrs:{"d":"M2.249 19.5a2.252 2.252 0 01-2.25-2.25V6.75c0-.596.231-1.156.651-1.58l2.777-4.168A2.249 2.249 0 015.299 0h8.9a2.248 2.248 0 011.869 1.002l2.781 4.168c.42.425.65.984.65 1.58v1.5a.75.75 0 01-1.5 0v-1.5a.75.75 0 00-.75-.75h-15a.75.75 0 00-.75.75v10.5c0 .414.336.75.75.75h6a.75.75 0 010 1.5h-6zm14.35-15L14.82 1.834a.747.747 0 00-.623-.334h-3.698v3h6.1zm-7.6 0v-3h-3.7a.749.749 0 00-.624.334L2.899 4.5h6.1z"}})])
          )
        }
      }
    