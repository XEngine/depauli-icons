
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
            children.concat([_c('path',{attrs:{"d":"M21.75 22.75a.743.743 0 01-.53-.22l-2.78-2.78H5.561l-2.78 2.78a.744.744 0 01-1.06 0A.74.74 0 011.5 22c0-.2.078-.389.22-.53l1.72-1.72H2.25A2.252 2.252 0 010 17.5V4a2.252 2.252 0 012.25-2.25h19.5A2.252 2.252 0 0124 4v13.5a2.252 2.252 0 01-2.25 2.25h-1.189l1.72 1.72a.744.744 0 010 1.06.75.75 0 01-.531.22zm0-4.5a.75.75 0 00.75-.75V4a.75.75 0 00-.75-.75H16.5v15h5.25zm-19.5-15A.75.75 0 001.5 4v13.5c0 .414.336.75.75.75H15v-15H2.25z"}}),_c('path',{attrs:{"d":"M18.75 12.25a.75.75 0 010-1.5h1.5a.75.75 0 010 1.5h-1.5zM18.75 15.25a.75.75 0 010-1.5h1.5a.75.75 0 010 1.5h-1.5z"}}),_c('circle',{attrs:{"cx":"19.5","cy":"7.75","r":"1.125"}})])
          )
        }
      }
    