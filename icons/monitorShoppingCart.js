
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
            children.concat([_c('path',{attrs:{"d":"M8.25 22.503a.75.75 0 010-1.5h3v-1.5h-9A2.252 2.252 0 010 17.253v-15A2.252 2.252 0 012.25.003h1.5a.75.75 0 010 1.5h-1.5a.75.75 0 00-.75.75v12h21v-12a.75.75 0 00-.75-.75h-1.5a.75.75 0 010-1.5h1.5A2.252 2.252 0 0124 2.253v15a2.252 2.252 0 01-2.25 2.25h-9v1.5h3a.75.75 0 010 1.5h-7.5zm-6.75-5.25c0 .414.336.75.75.75h19.5a.75.75 0 00.75-.75v-1.5h-21v1.5z"}}),_c('path',{attrs:{"d":"M9 9.753a.75.75 0 01-.712-.513l-1.5-4.5a.752.752 0 01.712-.987h8.292l.74-2.466a.754.754 0 01.935-.503.748.748 0 01.502.933l-2.25 7.5a.747.747 0 01-.719.536H9zm5.442-1.5l.9-3H8.541l1 3h4.901z"}}),_c('circle',{attrs:{"cx":"9.375","cy":"11.628","r":"1.125"}}),_c('circle',{attrs:{"cx":"14.625","cy":"11.628","r":"1.125"}})])
          )
        }
      }
    