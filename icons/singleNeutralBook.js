
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
            children.concat([_c('path',{attrs:{"d":"M5.25 24c-1.654 0-3-1.346-3-3V3.75A3.754 3.754 0 016 0h13.5a2.252 2.252 0 012.25 2.25v15c0 .96-.615 1.808-1.5 2.121V22.5H21a.75.75 0 010 1.5H5.25zm0-4.5c-.827 0-1.5.673-1.5 1.5s.673 1.5 1.5 1.5h13.5v-3H5.25zM6 1.5a2.252 2.252 0 00-2.25 2.25v14.651A2.973 2.973 0 015.25 18H19.5a.75.75 0 00.75-.75v-15a.75.75 0 00-.75-.75H6z"}}),_c('path',{attrs:{"d":"M12 11.25c-1.861 0-3.375-1.514-3.375-3.375S10.139 4.5 12 4.5s3.375 1.514 3.375 3.375S13.861 11.25 12 11.25zM12 6c-1.034 0-1.875.841-1.875 1.875S10.966 9.75 12 9.75s1.875-.841 1.875-1.875S13.034 6 12 6z"}}),_c('path',{attrs:{"d":"M16.5 16.5a.75.75 0 01-.75-.75A3.754 3.754 0 0012 12a3.754 3.754 0 00-3.75 3.75.75.75 0 01-1.5 0A5.256 5.256 0 0112 10.5a5.256 5.256 0 015.25 5.25.75.75 0 01-.75.75z"}})])
          )
        }
      }
    