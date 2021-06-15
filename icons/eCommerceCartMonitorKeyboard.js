
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
            children.concat([_c('path',{attrs:{"d":"M3.75 15a2.252 2.252 0 01-2.25-2.25V2.25A2.252 2.252 0 013.75 0H6a.75.75 0 010 1.5H3.75a.75.75 0 00-.75.75v10.5c0 .414.336.75.75.75h16.5a.75.75 0 00.75-.75V2.25a.75.75 0 00-.75-.75h-.75a.75.75 0 010-1.5h.75a2.252 2.252 0 012.25 2.25v10.5A2.252 2.252 0 0120.25 15H3.75zM3.96 24c-.401 0-.778-.156-1.061-.44a1.49 1.49 0 01-.394-1.424l1.125-4.5A1.497 1.497 0 015.085 16.5h13.829a1.502 1.502 0 011.456 1.135l1.125 4.501a1.49 1.49 0 01-.171 1.137 1.489 1.489 0 01-1.285.727H3.96zm.001-1.5h16.078L18.915 18H5.085l-1.124 4.5z"}}),_c('path',{attrs:{"d":"M6.75 21a.75.75 0 010-1.5h1.5a.75.75 0 010 1.5h-1.5zM15.75 21a.75.75 0 010-1.5h1.5a.75.75 0 010 1.5h-1.5zM11.25 21a.75.75 0 010-1.5h1.5a.75.75 0 010 1.5h-1.5zM8.25 9a.75.75 0 01-.712-.513l-1.5-4.5A.752.752 0 016.75 3h8.292l.74-2.466a.754.754 0 01.933-.502.748.748 0 01.503.934l-2.25 7.5A.745.745 0 0114.25 9h-6zm5.442-1.5l.9-3H7.791l1 3h4.901z"}}),_c('circle',{attrs:{"cx":"8.625","cy":"10.875","r":"1.125"}}),_c('circle',{attrs:{"cx":"13.875","cy":"10.875","r":"1.125"}})])
          )
        }
      }
    