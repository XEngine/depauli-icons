
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
            children.concat([_c('circle',{attrs:{"cx":"19.875","cy":"16.125","r":"1.125"}}),_c('path',{attrs:{"d":"M5.25 20.25a.75.75 0 010-1.5H7.5v-1.5H2.25A2.252 2.252 0 010 15V6a2.252 2.252 0 012.25-2.25h12A2.252 2.252 0 0116.5 6v9a2.252 2.252 0 01-2.25 2.25H9v1.5h2.25a.75.75 0 010 1.5h-6zm-3-15A.75.75 0 001.5 6v9c0 .414.336.75.75.75h12A.75.75 0 0015 15V6a.75.75 0 00-.75-.75h-12zM17.25 20.25a.75.75 0 010-1.5h4.5a.75.75 0 00.75-.75v-4.5h-3.75a.75.75 0 010-1.5h3.75v-1.5h-3.75a.75.75 0 010-1.5h3.75v-.75a.75.75 0 00-.75-.75h-3a.75.75 0 010-1.5h3A2.252 2.252 0 0124 8.25V18a2.252 2.252 0 01-2.25 2.25h-4.5z"}})])
          )
        }
      }
    