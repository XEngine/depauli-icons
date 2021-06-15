
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
            children.concat([_c('path',{attrs:{"d":"M.75 23.998a.75.75 0 010-1.5h18c2.068 0 3.75-1.682 3.75-3.75s-1.682-3.75-3.75-3.75H5.25A5.256 5.256 0 010 9.748a5.256 5.256 0 015.25-5.25h16.189l-3.22-3.22a.746.746 0 01.001-1.06.749.749 0 011.06 0l4.5 4.5a.74.74 0 01.163.245l.01.026a.73.73 0 010 .517l-.006.016a.764.764 0 01-.168.257l-4.499 4.499a.744.744 0 01-1.06 0c-.142-.141-.22-.33-.22-.53s.078-.389.22-.53l3.22-3.22H5.25c-2.068 0-3.75 1.682-3.75 3.75s1.682 3.75 3.75 3.75h13.5c2.895 0 5.25 2.355 5.25 5.25s-2.355 5.25-5.25 5.25h-18z"}})])
          )
        }
      }
    