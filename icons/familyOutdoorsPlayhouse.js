
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
            children.concat([_c('path',{attrs:{"d":"M23.25 24a.75.75 0 01-.75-.75V12h-6v2.348a3.016 3.016 0 012.25 2.902c0 1.654-1.346 3-3 3s-3-1.346-3-3c0-1.37.947-2.564 2.25-2.902V12h-4.5v11.25a.75.75 0 01-1.5 0v-1.5H3v1.5a.75.75 0 01-1.5 0V7.5A1.502 1.502 0 01.004 6.099a1.486 1.486 0 01.42-1.141L5.487.203a.746.746 0 011.026 0l5.064 4.756A1.498 1.498 0 0110.5 7.5v3h12c.827 0 1.5.673 1.5 1.5v11.25a.75.75 0 01-.75.75zM9 20.25V18H3v2.25h6zm6.75-4.5c-.827 0-1.5.673-1.5 1.5s.673 1.5 1.5 1.5 1.5-.673 1.5-1.5-.673-1.5-1.5-1.5zM9 16.5v-9H3v9h6zM1.505 6h8.989L6 1.779 1.505 6z"}})])
          )
        }
      }
    