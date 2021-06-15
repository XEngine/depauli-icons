
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
            children.concat([_c('path',{attrs:{"d":"M15 11.25c-1.861 0-3.375-1.514-3.375-3.375S13.139 4.5 15 4.5s3.375 1.514 3.375 3.375S16.861 11.25 15 11.25zM15 6c-1.034 0-1.875.841-1.875 1.875S13.966 9.75 15 9.75s1.875-.841 1.875-1.875S16.034 6 15 6z"}}),_c('path',{attrs:{"d":"M19.5 16.5a.75.75 0 01-.75-.75c0-2.068-1.682-3.75-3.75-3.75s-3.75 1.682-3.75 3.75a.75.75 0 01-1.5 0A5.256 5.256 0 0115 10.5a5.256 5.256 0 015.25 5.25.75.75 0 01-.75.75z"}}),_c('path',{attrs:{"d":"M4.5 22.5a.75.75 0 010-1.5h6.75v-1.5H3a2.252 2.252 0 01-2.25-2.25V3.75A2.252 2.252 0 013 1.5h18a2.252 2.252 0 012.25 2.25v13.5A2.252 2.252 0 0121 19.5h-8.25V21h6.75a.75.75 0 010 1.5h-15zM3 3a.75.75 0 00-.75.75v13.5c0 .414.336.75.75.75h18a.75.75 0 00.75-.75V3.75A.75.75 0 0021 3H3z"}}),_c('path',{attrs:{"d":"M4.5 10.5a.75.75 0 01-.75-.75v-4.5a.75.75 0 01.75-.75H9a.75.75 0 01.75.75v4.5a.75.75 0 01-.75.75H4.5zM8.25 9V6h-3v3h3z"}})])
          )
        }
      }
    