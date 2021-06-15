
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
            children.concat([_c('path',{attrs:{"d":"M.75 15a.75.75 0 01-.75-.75v-1.5a.75.75 0 011.5 0v.75h.75c.414 0 .75.336.75.75S.75 15 .75 15zM.75 7.5A.75.75 0 010 6.75v-6A.75.75 0 01.75 0h6a.75.75 0 01.75.75v6a.75.75 0 01-.75.75h-6zM6 6V1.5H1.5V6H6zM17.25 7.5a.75.75 0 01-.75-.75v-6a.75.75 0 01.75-.75h6a.75.75 0 01.75.75v6a.75.75 0 01-.75.75h-6zM22.5 6V1.5H18V6h4.5zM.75 24a.75.75 0 01-.75-.75v-6a.75.75 0 01.75-.75h6a.75.75 0 01.75.75v6a.75.75 0 01-.75.75h-6zM6 22.5V18H1.5v4.5H6zM12 1.5A.75.75 0 0112 0h2.25a.75.75 0 010 1.5H12zM9.75 4.5A.75.75 0 019 3.75v-3a.75.75 0 011.5 0V3H12a.75.75 0 010 1.5H9.75z"}}),_c('path',{attrs:{"d":"M9.75 7.5a.75.75 0 010-1.5h3.75V3.75a.75.75 0 011.5 0v3a.75.75 0 01-.75.75h-4.5zM6.75 12a.75.75 0 01-.75-.75v-.75H.75a.75.75 0 010-1.5h6a.75.75 0 01.75.75v1.5a.75.75 0 01-.75.75zM5.25 15a.75.75 0 010-1.5h1.5c.414 0 .75.336.75.75S5.25 15 5.25 15zM20.25 24a.75.75 0 01-.75-.75v-3a.75.75 0 01.75-.75h2.25V18h-2.25a.75.75 0 010-1.5h3a.75.75 0 01.75.75v3a.75.75 0 01-.75.75H21v1.5h2.25a.75.75 0 010 1.5h-3zM9.75 24a.75.75 0 01-.75-.75v-6a.75.75 0 011.5 0v5.25h3.75a.75.75 0 010 1.5h-4.5zM17.25 24a.75.75 0 01-.75-.75v-6a.75.75 0 011.5 0v6a.75.75 0 01-.75.75z"}}),_c('path',{attrs:{"d":"M12.75 21a.75.75 0 010-1.5h.75V18h-.75a.75.75 0 010-1.5h1.5a.75.75 0 01.75.75v3a.75.75 0 01-.75.75h-1.5zM9.75 15a.75.75 0 01-.75-.75v-1.5a.75.75 0 011.5 0v.75h.75a.75.75 0 010 1.5h-1.5zM14.25 15a.75.75 0 010-1.5H15v-2.25a.75.75 0 011.5 0v2.25h.75a.75.75 0 010 1.5h-3zM12.75 12a.75.75 0 01-.75-.75v-.75H9.75a.75.75 0 010-1.5h3a.75.75 0 01.75.75v1.5a.75.75 0 01-.75.75zM23.25 12a.75.75 0 01-.75-.75v-1.5a.75.75 0 011.5 0v1.5a.75.75 0 01-.75.75zM23.25 15a.75.75 0 01-.75-.75v-.75a.75.75 0 011.5 0v.75a.75.75 0 01-.75.75zM20.25 14.25a.75.75 0 01-.75-.75V12h-.75a.75.75 0 01-.75-.75v-1.5a.75.75 0 011.5 0v.75h.75a.75.75 0 01.75.75v2.25a.75.75 0 01-.75.75z"}})])
          )
        }
      }
    