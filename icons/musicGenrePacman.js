
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
            children.concat([_c('path',{attrs:{"d":"M8.819 24.007a8.147 8.147 0 01-2.337-.344c-2.066-.619-3.769-2.009-4.794-3.913s-1.249-4.09-.63-6.156c1.018-3.395 4.205-5.766 7.75-5.766a8.08 8.08 0 012.318.341 1.72 1.72 0 011.131 1.079c.154.436.129.906-.07 1.322l-2.384 4.991 4.992 2.384a1.72 1.72 0 01.954 1.239c.086.454-.01.914-.27 1.295a8.065 8.065 0 01-6.66 3.528zM8.808 9.328c-2.888 0-5.484 1.931-6.313 4.696a6.542 6.542 0 00.513 5.014 6.543 6.543 0 003.905 3.188 6.572 6.572 0 007.328-2.591c.035-.051.047-.11.035-.171a.228.228 0 00-.125-.164l-5.67-2.708a.754.754 0 01-.354-1l2.707-5.668a.222.222 0 00.009-.175.227.227 0 00-.118-.131c-.01-.005-.022-.009-.034-.013a6.578 6.578 0 00-1.883-.277z"}}),_c('circle',{attrs:{"cx":"5.871","cy":"12.979","r":"1.125"}}),_c('path',{attrs:{"d":"M21.03 18.755c-1.241 0-2.25-1.009-2.25-2.25a2.252 2.252 0 013-2.121v-2.379a.75.75 0 011.5 0v4.5c0 1.24-1.009 2.25-2.25 2.25zm0-3a.75.75 0 100 1.5.75.75 0 000-1.5zM17.655 10.559c-1.448 0-2.625-1.178-2.625-2.625s1.177-2.625 2.625-2.625c.392 0 .776.089 1.125.255V1.505a1.502 1.502 0 012.4-1.2l1.801 1.351a.75.75 0 01-.9 1.2l-1.8-1.35v6.429a2.63 2.63 0 01-2.626 2.624zm0-3.75c-.62 0-1.125.505-1.125 1.125s.505 1.125 1.125 1.125 1.125-.505 1.125-1.125-.504-1.125-1.125-1.125z"}})])
          )
        }
      }
    