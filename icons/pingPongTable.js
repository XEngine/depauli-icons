
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
            children.concat([_c('path',{attrs:{"d":"M1.75 21C.785 21 0 20.215 0 19.25V4.75C0 3.785.785 3 1.75 3h20.5c.965 0 1.75.785 1.75 1.75v14.5c0 .965-.785 1.75-1.75 1.75H1.75zm20.5-1.5a.25.25 0 00.25-.25V18h-9.75v1.5h9.5zM1.5 19.25c0 .138.112.25.25.25h9.5V18H1.5v1.25zm21-2.75v-9h-5.25v9h5.25zm-6.75 0v-3.75h-3v3.75h3zm-4.5 0v-3.75h-3v3.75h3zm-4.5 0v-9H1.5v9h5.25zm9-5.25V7.5h-3v3.75h3zm-4.5 0V7.5h-3v3.75h3zM22.5 6V4.75a.25.25 0 00-.25-.25h-9.5V6h9.75zM11.25 6V4.5h-9.5a.25.25 0 00-.25.25V6h9.75z"}})])
          )
        }
      }
    