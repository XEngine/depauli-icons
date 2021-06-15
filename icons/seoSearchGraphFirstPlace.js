
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
            children.concat([_c('path',{attrs:{"d":"M14.249 18a.75.75 0 010-1.5h.75v-2.25h-.75a.75.75 0 010-1.5h.75c.827 0 1.5.673 1.5 1.5v2.25h.75a.75.75 0 010 1.5h-3z"}}),_c('path',{attrs:{"d":"M23.249 24a.743.743 0 01-.53-.22l-3.293-3.293a5.99 5.99 0 01-3.677 1.263c-3.308 0-6-2.692-6-6s2.692-6 6-6 6 2.692 6 6a5.992 5.992 0 01-1.263 3.677l3.293 3.293a.752.752 0 010 1.061.744.744 0 01-.53.219zm-7.5-12.75c-2.481 0-4.5 2.019-4.5 4.5s2.019 4.5 4.5 4.5 4.5-2.019 4.5-4.5-2.018-4.5-4.5-4.5zM.749 19.5a.75.75 0 01-.75-.75v-18a.75.75 0 011.5 0V18h1.5V3.75a.75.75 0 01.75-.75h3a.75.75 0 01.75.75V18h.75a.75.75 0 010 1.5h-7.5zm5.25-1.5V4.5h-1.5V18h1.5zM9.749 11.25a.75.75 0 01-.75-.75V6a.75.75 0 01.75-.75h3a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0v-1.5h-1.5v3.75a.75.75 0 01-.75.75z"}})])
          )
        }
      }
    