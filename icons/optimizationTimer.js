
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
            children.concat([_c('path',{attrs:{"d":"M17.25 24a6.758 6.758 0 01-6.75-6.75 6.756 6.756 0 016-6.708V9.75H15a.75.75 0 010-1.5h4.5a.75.75 0 010 1.5H18v.792c3.392.376 6 3.256 6 6.708A6.758 6.758 0 0117.25 24zm0-12C14.355 12 12 14.355 12 17.25s2.355 5.25 5.25 5.25 5.25-2.355 5.25-5.25S20.145 12 17.25 12z"}}),_c('path',{attrs:{"d":"M17.25 18.75a.75.75 0 01-.75-.75v-3.75a.75.75 0 011.5 0v3h1.286a.75.75 0 010 1.5H17.25zM1.881 17.25A1.885 1.885 0 010 15.388V1.862A1.879 1.879 0 011.871 0h16.498c1.03 0 1.872.835 1.881 1.861V6a.75.75 0 01-1.5 0v-.75H1.5v10.131a.378.378 0 00.379.369H8.25a.75.75 0 010 1.5H1.881zM18.75 3.75V1.868a.377.377 0 00-.378-.368h-16.5a.373.373 0 00-.372.368V3.75h17.25z"}})])
          )
        }
      }
    