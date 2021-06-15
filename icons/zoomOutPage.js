
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
            children.concat([_c('path',{attrs:{"d":"M.751 4.499a.75.75 0 01-.75-.75v-1.5a2.252 2.252 0 012.25-2.25h1.5a.75.75 0 010 1.5h-1.5a.75.75 0 00-.75.75v1.5a.75.75 0 01-.75.75zM2.251 23.999a2.252 2.252 0 01-2.25-2.25v-1.5a.75.75 0 011.5 0v1.5c0 .414.336.75.75.75h1.5a.75.75 0 010 1.5h-1.5zM.751 11.249a.75.75 0 01-.75-.75v-3a.75.75 0 011.5 0v3a.75.75 0 01-.75.75zM.751 17.249a.75.75 0 01-.75-.75v-3a.75.75 0 011.5 0v3a.75.75 0 01-.75.75zM23.251 11.249a.75.75 0 01-.75-.75v-3a.75.75 0 011.5 0v3a.75.75 0 01-.75.75zM7.501 1.499a.75.75 0 010-1.5h3a.75.75 0 010 1.5h-3zM13.501 1.499a.75.75 0 010-1.5h3a.75.75 0 010 1.5h-3zM23.251 4.499a.75.75 0 01-.75-.75v-1.5a.75.75 0 00-.75-.75h-1.5a.75.75 0 010-1.5h1.5a2.252 2.252 0 012.25 2.25v1.5a.75.75 0 01-.75.75zM7.501 23.999a.75.75 0 010-1.5h3a.75.75 0 010 1.5h-3zM12.001 14.999a.75.75 0 010-1.5h4.5a.75.75 0 010 1.5h-4.5z"}}),_c('path',{attrs:{"d":"M23.251 23.999a.743.743 0 01-.53-.22l-4.259-4.259a6.736 6.736 0 01-4.21 1.479c-3.722 0-6.75-3.028-6.75-6.75s3.028-6.75 6.75-6.75 6.75 3.028 6.75 6.75a6.734 6.734 0 01-1.479 4.21l4.259 4.259a.752.752 0 01-.531 1.281zm-9-15a5.256 5.256 0 00-5.25 5.25 5.256 5.256 0 005.25 5.25 5.256 5.256 0 005.25-5.25 5.256 5.256 0 00-5.25-5.25z"}})])
          )
        }
      }
    