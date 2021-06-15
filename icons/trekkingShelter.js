
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
            children.concat([_c('path',{attrs:{"d":"M17.25 22.25a.75.75 0 01-.75-.75v-8.25h-15v8.25a.75.75 0 01-1.5 0v-9c0-.06.008-.12.024-.185l.012-.042a.712.712 0 01.077-.17l5.998-9.746a.746.746 0 011.032-.246c.23.141.357.387.357.639h14.87l.242-.393a.747.747 0 011.368.22.743.743 0 01-.091.567L18 12.712V21.5a.75.75 0 01-.75.75zm-.419-10.5l4.615-7.5H6.708l-4.615 7.5h14.738z"}}),_c('path',{attrs:{"d":"M8.25 7.25a.75.75 0 010-1.5h7.5a.75.75 0 010 1.5h-7.5zM6.75 10.25a.75.75 0 010-1.5h7.5a.75.75 0 010 1.5h-7.5z"}})])
          )
        }
      }
    