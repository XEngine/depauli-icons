
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
            children.concat([_c('path',{attrs:{"d":"M1.75 24C.785 24 0 23.215 0 22.25v-7c0-.965.785-1.75 1.75-1.75H12v-6H6.75A.75.75 0 016 6.75C6 3.028 9.028 0 12.75 0s6.75 3.028 6.75 6.75a.75.75 0 01-.75.75H16.5V9A.75.75 0 0115 9V7.5h-1.5v6h8.75c.965 0 1.75.785 1.75 1.75v7c0 .965-.785 1.75-1.75 1.75H1.75zm20.5-1.5a.25.25 0 00.25-.25v-7a.25.25 0 00-.25-.25H19.5v7.5h2.75zm-4.25 0V15H6v7.5h12zM1.75 15a.25.25 0 00-.25.25v7c0 .138.112.25.25.25H4.5V15H1.75zm16.197-9a5.263 5.263 0 00-5.197-4.5A5.264 5.264 0 007.553 6h10.394z"}}),_c('path',{attrs:{"d":"M10.5 18a.75.75 0 010-1.5h3a.75.75 0 010 1.5h-3z"}})])
          )
        }
      }
    