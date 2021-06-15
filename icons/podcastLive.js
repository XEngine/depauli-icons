
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
            children.concat([_c('circle',{attrs:{"cx":"1.125","cy":"5.25","r":"1.125"}}),_c('path',{attrs:{"d":"M9.125 16.875a.75.75 0 01-.75-.75v-7.5a.75.75 0 011.5 0v7.5a.75.75 0 01-.75.75zM13.625 16.875a.75.75 0 01-.624-.334 9.65 9.65 0 01-1.626-5.37V8.625a.75.75 0 011.5 0v2.546a8.2 8.2 0 00.75 3.423 8.197 8.197 0 00.75-3.423V8.625a.75.75 0 011.5 0v2.546a9.646 9.646 0 01-1.626 5.37.75.75 0 01-.624.334zM4.625 16.875a2.252 2.252 0 01-2.25-2.25v-6a.75.75 0 011.5 0v6c0 .414.336.75.75.75h1.5a.75.75 0 010 1.5h-1.5zM19.625 16.875a2.252 2.252 0 01-2.25-2.25v-4.5a2.252 2.252 0 012.25-2.25h1.5a.75.75 0 010 1.5h-1.5a.75.75 0 00-.75.75v2.25h2.25a.75.75 0 010 1.5h-2.25v.75c0 .414.336.75.75.75h1.5a.75.75 0 010 1.5h-1.5zM4.625 6.375a.75.75 0 010-1.5H23.25a.75.75 0 010 1.5H4.625zM.75 19.875a.75.75 0 010-1.5h22.5a.75.75 0 010 1.5H.75z"}})])
          )
        }
      }
    