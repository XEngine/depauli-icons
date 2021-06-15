
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
            children.concat([_c('path',{attrs:{"d":"M2.193 15.752a1.451 1.451 0 01-1.141-2.325l9.764-12.118a1.538 1.538 0 012.357-.013l9.762 12.117c.219.294.321.625.302.969a1.448 1.448 0 01-1.527 1.368H2.251a.572.572 0 01-.058.002zm9.808-13.501a.036.036 0 00-.024.008L2.313 14.252l19.371-.001L12.016 2.25l-.015.001zM1.75 23.25C.785 23.25 0 22.465 0 21.5V19c0-.965.785-1.75 1.75-1.75h20.5c.965 0 1.75.785 1.75 1.75v2.5c0 .965-.785 1.75-1.75 1.75H1.75zm0-4.5a.25.25 0 00-.25.25v2.5c0 .138.112.25.25.25h20.5a.25.25 0 00.25-.25V19a.25.25 0 00-.25-.25H1.75z"}})])
          )
        }
      }
    