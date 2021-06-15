
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
            children.concat([_c('path',{attrs:{"d":"M12 12.75c-1.861 0-3.375-1.514-3.375-3.375S10.139 6 12 6s3.375 1.514 3.375 3.375S13.861 12.75 12 12.75zm0-5.25c-1.034 0-1.875.841-1.875 1.875S10.966 11.25 12 11.25s1.875-.841 1.875-1.875S13.034 7.5 12 7.5z"}}),_c('path',{attrs:{"d":"M7.5 18a.75.75 0 01-.75-.75A5.256 5.256 0 0112 12a5.256 5.256 0 015.25 5.25.75.75 0 01-.75.75h-9zm8.174-1.5c-.352-1.712-1.892-3-3.674-3s-3.322 1.288-3.674 3h7.348z"}}),_c('path',{attrs:{"d":"M3.75 21A3.754 3.754 0 010 17.25V6.75A3.754 3.754 0 013.75 3h16.5A3.754 3.754 0 0124 6.75v10.5A3.754 3.754 0 0120.25 21H3.75zm0-16.5A2.252 2.252 0 001.5 6.75v10.5a2.252 2.252 0 002.25 2.25h16.5a2.252 2.252 0 002.25-2.25V6.75a2.252 2.252 0 00-2.25-2.25H3.75z"}})])
          )
        }
      }
    