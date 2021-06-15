
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
            children.concat([_c('path',{attrs:{"d":"M3.75 23.998a.75.75 0 010-1.5H6v-21H3.75a.75.75 0 010-1.5h10.5a5.256 5.256 0 015.25 5.25 5.282 5.282 0 01-2.633 4.549A7.54 7.54 0 0121 16.498c0 4.135-3.365 7.5-7.5 7.5H3.75zm9.75-1.5c3.308 0 6-2.692 6-6s-2.692-6-6-6h-6v12h6zm.75-13.5c2.068 0 3.75-1.682 3.75-3.75s-1.682-3.75-3.75-3.75H7.5v7.5h6.75z"}})])
          )
        }
      }
    