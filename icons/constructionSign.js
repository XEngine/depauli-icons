
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
            children.concat([_c('path',{attrs:{"d":"M20.25 24a.75.75 0 01-.75-.75V16.5h-15v6.75a.75.75 0 01-1.5 0V16.5H1.75C.785 16.5 0 15.715 0 14.75v-8.5C0 5.285.785 4.5 1.75 4.5h20.5c.965 0 1.75.785 1.75 1.75v8.5c0 .965-.785 1.75-1.75 1.75H21v6.75a.75.75 0 01-.75.75zm2-9a.25.25 0 00.25-.25v-4.689L22.25 15zm-6.811 0L22.5 7.939V6.25a.25.25 0 00-.25-.25h-1.689l-5.122 9zm-6 0l9-9H14.56l-9 9h3.879zM1.5 14.75c0 .138.112.25.25.25h1.689l9-9H8.561L1.5 13.061v1.689zM1.75 6a.25.25 0 00-.25.25v4.689L6.439 6H1.75zM6 4.5c-1.241 0-2.25-1.009-2.25-2.25S4.759 0 6 0s2.25 1.009 2.25 2.25S7.241 4.5 6 4.5zm0-3A.75.75 0 106 3a.75.75 0 000-1.5zM18 4.5c-1.241 0-2.25-1.009-2.25-2.25S16.759 0 18 0s2.25 1.009 2.25 2.25S19.241 4.5 18 4.5zm0-3A.75.75 0 1018 3a.75.75 0 000-1.5z"}})])
          )
        }
      }
    