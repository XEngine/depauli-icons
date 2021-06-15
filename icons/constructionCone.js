
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
            children.concat([_c('path',{attrs:{"d":"M2.25 24a.75.75 0 010-1.5h1.692l6.374-21.248A1.772 1.772 0 0112.001 0a1.757 1.757 0 011.683 1.251L20.058 22.5h1.692a.75.75 0 010 1.5H2.25zm16.242-1.5l-.9-3H6.408l-.9 3h12.984zm-1.35-4.5l-.45-1.5H7.308l-.45 1.5h10.284zm-.9-3l-.9-3H8.658l-.9 3h8.484zm-1.349-4.5L14.442 9H9.558l-.45 1.5h5.785zm-.9-3l-1.745-5.817a.26.26 0 00-.496.001L10.008 7.5h3.985z"}})])
          )
        }
      }
    