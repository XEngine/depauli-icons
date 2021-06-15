
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
            children.concat([_c('path',{attrs:{"d":"M1.75 24C.785 24 0 23.215 0 22.25V1.75C0 .785.785 0 1.75 0h20.5C23.215 0 24 .785 24 1.75v20.5c0 .965-.785 1.75-1.75 1.75H1.75zm0-22.5a.25.25 0 00-.25.25v20.5c0 .138.112.25.25.25h20.5a.25.25 0 00.25-.25V1.75a.25.25 0 00-.25-.25H1.75z"}}),_c('path',{attrs:{"d":"M18.75 21c-1.241 0-2.25-1.009-2.25-2.25s1.009-2.25 2.25-2.25S21 17.509 21 18.75 19.991 21 18.75 21zm0-3a.75.75 0 100 1.5.75.75 0 000-1.5zM18.75 7.5c-1.241 0-2.25-1.009-2.25-2.25S17.509 3 18.75 3 21 4.009 21 5.25 19.991 7.5 18.75 7.5zm0-3a.75.75 0 100 1.5.75.75 0 000-1.5zM5.25 21C4.009 21 3 19.991 3 18.75s1.009-2.25 2.25-2.25 2.25 1.009 2.25 2.25S6.491 21 5.25 21zm0-3a.75.75 0 100 1.5.75.75 0 000-1.5zM5.25 7.5C4.009 7.5 3 6.491 3 5.25S4.009 3 5.25 3 7.5 4.009 7.5 5.25 6.491 7.5 5.25 7.5zm0-3a.75.75 0 100 1.5.75.75 0 000-1.5zM9.75 15a.75.75 0 01-.75-.75v-4.5A.75.75 0 019.75 9h4.5a.75.75 0 01.75.75v4.5a.75.75 0 01-.75.75h-4.5zm3.75-1.5v-3h-3v3h3zM10.5 7.5a.75.75 0 010-1.5h3a.75.75 0 010 1.5h-3zM10.5 4.5a.75.75 0 010-1.5h3a.75.75 0 010 1.5h-3zM10.5 21a.75.75 0 010-1.5h3a.75.75 0 010 1.5h-3zM10.5 18a.75.75 0 010-1.5h3a.75.75 0 010 1.5h-3zM17.25 14.25a.75.75 0 01-.75-.75v-3a.75.75 0 011.5 0v3a.75.75 0 01-.75.75zM20.25 14.25a.75.75 0 01-.75-.75v-3a.75.75 0 011.5 0v3a.75.75 0 01-.75.75zM3.75 14.25A.75.75 0 013 13.5v-3a.75.75 0 011.5 0v3a.75.75 0 01-.75.75zM6.75 14.25A.75.75 0 016 13.5v-3a.75.75 0 011.5 0v3a.75.75 0 01-.75.75z"}})])
          )
        }
      }
    