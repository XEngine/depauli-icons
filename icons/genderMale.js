
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
            children.concat([_c('path',{attrs:{"d":"M8.267 23.991a8.191 8.191 0 01-5.833-2.413c-3.217-3.217-3.217-8.45 0-11.667l.006-.006a8.19 8.19 0 015.827-2.411c1.939 0 3.8.676 5.279 1.909l7.892-7.909h-4.942a.75.75 0 010-1.5h6.749a.74.74 0 01.294.06.747.747 0 01.415.443.723.723 0 01.043.247v6.75a.75.75 0 01-1.5 0V2.558l-7.889 7.906a8.236 8.236 0 01-.505 11.114 8.203 8.203 0 01-5.836 2.413zM3.489 10.977a6.758 6.758 0 00.006 9.541c1.273 1.272 2.968 1.973 4.773 1.973s3.5-.701 4.773-1.973a6.758 6.758 0 00.001-9.546 6.706 6.706 0 00-4.773-1.978 6.706 6.706 0 00-4.78 1.983z"}})])
          )
        }
      }
    