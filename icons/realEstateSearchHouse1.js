
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
            children.concat([_c('path',{attrs:{"d":"M22.999 23.75a.743.743 0 01-.53-.22l-3.293-3.293a5.99 5.99 0 01-3.677 1.263c-3.308 0-6-2.692-6-6s2.692-6 6-6 6 2.692 6 6a5.992 5.992 0 01-1.263 3.677l3.293 3.293a.752.752 0 010 1.061.744.744 0 01-.53.219zM15.499 11c-2.481 0-4.5 2.019-4.5 4.5s2.019 4.5 4.5 4.5 4.5-2.019 4.5-4.5-2.018-4.5-4.5-4.5zM5.749 20.75a2.252 2.252 0 01-2.25-2.25V11a.75.75 0 011.5 0v7.5c0 .414.336.75.75.75h3a.75.75 0 010 1.5h-3z"}}),_c('path',{attrs:{"d":"M1.249 10.25a.75.75 0 01-.484-1.322l9.75-8.25a.747.747 0 01.969 0l9.75 8.25a.746.746 0 01.088 1.057.75.75 0 01-1.057.088L11 2.233l-9.266 7.84a.756.756 0 01-.485.177zM19.249 5.75a.75.75 0 01-.75-.75V2.75h-2.25a.75.75 0 010-1.5h3a.75.75 0 01.75.75v3a.75.75 0 01-.75.75z"}})])
          )
        }
      }
    