
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
            children.concat([_c('path',{attrs:{"d":"M8.25 23.25a.75.75 0 010-1.5h3v-1.5h-9.5C.785 20.25 0 19.465 0 18.5v-16C0 1.535.785.75 1.75.75h20.5c.965 0 1.75.785 1.75 1.75v16c0 .965-.785 1.75-1.75 1.75h-9.5v1.5h3a.75.75 0 010 1.5h-7.5zM1.5 18.5c0 .138.112.25.25.25h20.5a.25.25 0 00.25-.25v-2h-21v2zm21-3.5V2.5a.25.25 0 00-.25-.25H1.75a.25.25 0 00-.25.25V15h6.75v-4.5a.729.729 0 01.058-.288l2.315-5.555a1.515 1.515 0 011.38-.906 1.498 1.498 0 011.367.889l2.332 5.599a.628.628 0 01.011.035.762.762 0 01.037.227L22.5 15zm-8.25 0v-3.75h-4.5l4.5 3.75zm-.375-5.25L12 5.252 10.125 9.75h3.75z"}})])
          )
        }
      }
    