
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
            children.concat([_c('path',{attrs:{"d":"M7.5 24c-1.654 0-3-1.346-3-3V9h-3v.75a.75.75 0 01-1.5 0v-7.5a.75.75 0 011.5 0V3h3v-.75A2.252 2.252 0 016.75 0h10.5a2.252 2.252 0 012.25 2.25v1.5h.573l2.842-1.421a.753.753 0 01.729.033A.745.745 0 0124 3v7.5a.746.746 0 01-.75.75.753.753 0 01-.335-.079L20.073 9.75H19.5A2.252 2.252 0 0117.25 12H15v2.25a2.252 2.252 0 01-2.25 2.25h-1.5a.75.75 0 00-.75.75V21c0 1.654-1.346 3-3 3zM6 21c0 .827.673 1.5 1.5 1.5S9 21.827 9 21v-3.75A2.252 2.252 0 0111.25 15h1.5a.75.75 0 00.75-.75V12H6v9zm11.25-10.5a.75.75 0 00.75-.75v-7.5a.75.75 0 00-.75-.75H6.75a.75.75 0 00-.75.75v8.25h11.25zm3-2.25c.116 0 .232.027.335.079l1.915.957V4.214l-1.915.957a.747.747 0 01-.335.079h-.75v3h.75zM4.5 7.5v-3h-3v3h3z"}}),_c('path',{attrs:{"d":"M12 9a.75.75 0 010-1.5h3.75a.75.75 0 010 1.5H12z"}}),_c('circle',{attrs:{"cx":"9","cy":"4.5","r":"1.125"}})])
          )
        }
      }
    