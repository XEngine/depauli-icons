
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
            children.concat([_c('path',{attrs:{"d":"M.751 7.623a.75.75 0 01-.75-.75v-4.5a2.252 2.252 0 012.25-2.25h19.5a2.252 2.252 0 012.25 2.25v4.5a.75.75 0 01-.75.75H.751zm21.75-1.5v-3.75a.75.75 0 00-.75-.75h-3.915l-1.125 4.5h5.79zm-7.335 0l1.125-4.5H8.837l-1.125 4.5h7.454zm-9.001 0l1.125-4.5H2.251a.75.75 0 00-.75.75v3.75h4.664zM2.251 22.623a2.252 2.252 0 01-2.25-2.25v-10.5a.75.75 0 011.5 0v10.5c0 .414.336.75.75.75h9.75a.75.75 0 010 1.5h-9.75zM23.251 12.873a.75.75 0 01-.75-.75v-2.25a.75.75 0 011.5 0v2.25a.75.75 0 01-.75.75zM16.459 23.875c-.827 0-1.5-.673-1.5-1.5v-7.25a1.5 1.5 0 012.272-1.286l6.042 3.625a1.5 1.5 0 01.683 1.65c-.097.389-.34.717-.684.923l-6.042 3.625c-.233.139-.5.213-.771.213zm-.001-8.75l.001 7.25 6.042-3.625-6.042-3.625h-.001z"}})])
          )
        }
      }
    