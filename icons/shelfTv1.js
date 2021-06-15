
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
            children.concat([_c('path',{attrs:{"d":"M3 24a2.252 2.252 0 01-2.25-2.25v-9A2.252 2.252 0 013 10.5h8.25V9H7.5a2.252 2.252 0 01-2.25-2.25v-4.5A2.252 2.252 0 017.5 0h9a2.252 2.252 0 012.25 2.25v4.5A2.252 2.252 0 0116.5 9h-3.75v1.5H21a2.252 2.252 0 012.25 2.25v9A2.252 2.252 0 0121 24H3zm18-1.5a.75.75 0 00.75-.75V16.5h-9v6H21zm-18.75-.75c0 .414.336.75.75.75h8.25v-6h-9v5.25zM21.75 15v-2.25A.75.75 0 0021 12H3a.75.75 0 00-.75.75V15h19.5zM7.5 1.5a.75.75 0 00-.75.75v4.5c0 .414.336.75.75.75h9a.75.75 0 00.75-.75v-4.5a.75.75 0 00-.75-.75h-9z"}}),_c('circle',{attrs:{"cx":"9","cy":"19.5","r":"1.125"}}),_c('circle',{attrs:{"cx":"15","cy":"19.5","r":"1.125"}})])
          )
        }
      }
    