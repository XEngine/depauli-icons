
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
            children.concat([_c('path',{attrs:{"d":"M8.25 23.253a.75.75 0 010-1.5h3V20.25h-9A2.252 2.252 0 010 18V3C0 1.76 1.009.75 2.25.75h3a.75.75 0 010 1.5h-3A.75.75 0 001.5 3v12.003h21V3a.75.75 0 00-.75-.75H19.5a.75.75 0 010-1.5h2.25C22.991.75 24 1.76 24 3v15a2.252 2.252 0 01-2.25 2.25h-9v1.503h3a.75.75 0 010 1.5h-7.5zM1.5 18c0 .414.336.75.75.75h19.5a.75.75 0 00.75-.75v-1.497h-21V18z"}}),_c('path',{attrs:{"d":"M7.5 12.75a.75.75 0 01-.75-.75c0-2.292 1.486-4.253 3.545-4.964a3.38 3.38 0 01-1.67-2.908A3.379 3.379 0 0112 .753a3.379 3.379 0 013.375 3.375c0 1.234-.673 2.32-1.67 2.908 2.059.712 3.545 2.672 3.545 4.964a.75.75 0 01-.75.75h-9zm8.174-1.5c-.352-1.712-1.892-3-3.674-3s-3.322 1.288-3.674 3h7.348zM12 2.253c-1.034 0-1.875.841-1.875 1.875S10.966 6.003 12 6.003s1.875-.841 1.875-1.875S13.034 2.253 12 2.253z"}})])
          )
        }
      }
    