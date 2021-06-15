
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
            children.concat([_c('path',{attrs:{"d":"M23.249 9.75a.743.743 0 01-.53-.22l-1.688-1.689a3.88 3.88 0 01-2.157.659c-2.137 0-3.875-1.738-3.875-3.875S16.737.75 18.874.75s3.875 1.738 3.875 3.875a3.88 3.88 0 01-.658 2.155l1.689 1.69a.748.748 0 01-.531 1.28zm-4.375-7.5c-1.31 0-2.375 1.065-2.375 2.375S17.565 7 18.874 7s2.375-1.065 2.375-2.375-1.065-2.375-2.375-2.375zM2.249 8.25A2.252 2.252 0 01-.001 6V4.5a2.252 2.252 0 012.25-2.25h10.5a.75.75 0 010 1.5h-10.5a.75.75 0 00-.75.75V6c0 .414.336.75.75.75h10.5a.75.75 0 010 1.5h-10.5z"}}),_c('circle',{attrs:{"cx":"2.624","cy":"11.625","r":"1.125"}}),_c('path',{attrs:{"d":"M5.999 12.75a.75.75 0 010-1.5h12a.75.75 0 010 1.5h-12z"}}),_c('circle',{attrs:{"cx":"2.624","cy":"16.875","r":"1.125"}}),_c('path',{attrs:{"d":"M5.999 18a.75.75 0 010-1.5h12a.75.75 0 010 1.5h-12z"}}),_c('circle',{attrs:{"cx":"2.624","cy":"22.125","r":"1.125"}}),_c('path',{attrs:{"d":"M5.999 23.25a.75.75 0 010-1.5h12a.75.75 0 010 1.5h-12z"}})])
          )
        }
      }
    