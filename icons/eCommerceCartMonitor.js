
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
            children.concat([_c('path',{attrs:{"d":"M8.625 9a.75.75 0 01-.712-.513l-1.5-4.5A.752.752 0 017.125 3h8.292l.74-2.466a.755.755 0 01.933-.502.748.748 0 01.503.934l-2.25 7.5a.745.745 0 01-.718.534h-6zm5.442-1.5l.9-3H8.166l1 3h4.901z"}}),_c('circle',{attrs:{"cx":"9","cy":"10.875","r":"1.125"}}),_c('circle',{attrs:{"cx":"14.25","cy":"10.875","r":"1.125"}}),_c('path',{attrs:{"d":"M7.5 24a.75.75 0 010-1.5h3.75v-3h-9A2.252 2.252 0 010 17.25v-12A2.252 2.252 0 012.25 3h1.5a.75.75 0 010 1.5h-1.5a.75.75 0 00-.75.75v9h21v-9a.75.75 0 00-.75-.75H19.5a.75.75 0 010-1.5h2.25A2.252 2.252 0 0124 5.25v12a2.252 2.252 0 01-2.25 2.25h-9v3h3.75a.75.75 0 010 1.5h-9zm-6-6.75c0 .414.336.75.75.75h19.5a.75.75 0 00.75-.75v-1.5h-21v1.5z"}})])
          )
        }
      }
    