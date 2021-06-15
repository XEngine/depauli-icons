
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
            children.concat([_c('path',{attrs:{"d":"M11.998 22.597a.751.751 0 01-.541-.231l-9.588-10A6.404 6.404 0 01.677 4.96a6.396 6.396 0 015.754-3.549c1.001 0 1.964.228 2.863.677.619.309 1.18.714 1.669 1.203l1.036 1.035 1.036-1.035a6.38 6.38 0 014.542-1.878c1.718 0 3.33.667 4.542 1.878a6.415 6.415 0 010 9.082l-9.578 9.992a.756.756 0 01-.543.232zM6.426 2.908c-.528 0-1.053.086-1.561.255a4.89 4.89 0 00-2.847 2.468 4.915 4.915 0 00.922 5.685l9.058 9.447 9.047-9.438a4.925 4.925 0 00.011-6.972c-.928-.928-2.165-1.439-3.481-1.439s-2.553.511-3.481 1.439l-1.566 1.565a.748.748 0 01-1.06 0L9.902 4.352a4.93 4.93 0 00-1.279-.921 4.872 4.872 0 00-2.197-.523z"}})])
          )
        }
      }
    