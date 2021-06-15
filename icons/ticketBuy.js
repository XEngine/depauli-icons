
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
            children.concat([_c('circle',{attrs:{"cx":"12","cy":"9.75","r":"1.125"}}),_c('circle',{attrs:{"cx":"9","cy":"9.75","r":"1.125"}}),_c('circle',{attrs:{"cx":"15","cy":"9.75","r":"1.125"}}),_c('path',{attrs:{"d":"M14.25 16.5a.75.75 0 01-.75-.75c0-.827-.673-1.5-1.5-1.5s-1.5.673-1.5 1.5a.75.75 0 01-.75.75h-1.5A2.252 2.252 0 016 14.25V6H4.5a.75.75 0 010-1.5h15a.75.75 0 010 1.5H18v8.25a2.252 2.252 0 01-2.25 2.25h-1.5zm1.5-1.5a.75.75 0 00.75-.75V6h-9v8.25c0 .414.336.75.75.75h.845A3.018 3.018 0 0112 12.75c1.372 0 2.567.947 2.905 2.25h.845zM9 22.5a.747.747 0 01-.693-.463.745.745 0 01.163-.817l3-3c.141-.142.33-.22.53-.22s.389.078.53.22l3 3A.749.749 0 0115 22.5H9zm4.189-1.5L12 19.811 10.811 21h2.378z"}}),_c('path',{attrs:{"d":"M20.25 9a.75.75 0 010-1.5h1.5a.75.75 0 00.75-.75v-3a.75.75 0 00-.75-.75H2.25a.75.75 0 00-.75.75v3c0 .414.336.75.75.75h1.5a.75.75 0 010 1.5h-1.5A2.252 2.252 0 010 6.75v-3A2.252 2.252 0 012.25 1.5h19.5A2.252 2.252 0 0124 3.75v3A2.252 2.252 0 0121.75 9h-1.5z"}})])
          )
        }
      }
    