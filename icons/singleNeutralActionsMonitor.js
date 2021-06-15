
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
            children.concat([_c('path',{attrs:{"d":"M7.5 9.75c-2.688 0-4.875-2.187-4.875-4.875S4.812 0 7.5 0s4.875 2.187 4.875 4.875S10.188 9.75 7.5 9.75zm0-8.25c-1.861 0-3.375 1.514-3.375 3.375S5.639 8.25 7.5 8.25s3.375-1.514 3.375-3.375S9.361 1.5 7.5 1.5zM.75 18a.75.75 0 01-.75-.75c0-4.135 3.365-7.5 7.5-7.5.277 0 .557.015.832.045a.75.75 0 01-.082 1.495.732.732 0 01-.081-.004A6.007 6.007 0 001.5 17.25a.75.75 0 01-.75.75zM14.25 24a.75.75 0 010-1.5h2.25V21h-3.75a2.252 2.252 0 01-2.25-2.25v-6a2.252 2.252 0 012.25-2.25h9A2.252 2.252 0 0124 12.75v6A2.252 2.252 0 0121.75 21H18v1.5h2.25a.75.75 0 010 1.5h-6zm-1.5-12a.75.75 0 00-.75.75v6c0 .414.336.75.75.75h9a.75.75 0 00.75-.75v-6a.75.75 0 00-.75-.75h-9z"}})])
          )
        }
      }
    