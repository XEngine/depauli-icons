
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
            children.concat([_c('path',{attrs:{"d":"M1.75 24C.785 24 0 23.215 0 22.25V1.75C0 .785.785 0 1.75 0h20.5C23.215 0 24 .785 24 1.75v20.5c0 .965-.785 1.75-1.75 1.75H1.75zm20.5-1.5a.25.25 0 00.25-.25V1.75a.25.25 0 00-.25-.25H1.75a.25.25 0 00-.25.25v20.5c0 .138.112.25.25.25h3.5v-12c0-.827.673-1.5 1.5-1.5h10.5c.827 0 1.5.673 1.5 1.5v12h3.5zm-5 0v-12h-4.5v12h4.5zm-6 0v-12h-4.5v12h4.5z"}}),_c('path',{attrs:{"d":"M5.25 7.5a.75.75 0 01-.6-1.2l2.25-3c.137-.183.361-.292.6-.292s.463.109.6.292l2.25 3a.75.75 0 01-1.2.9L7.5 5 5.85 7.2a.753.753 0 01-.6.3zM15.75 7.5a.753.753 0 01-.6-.3l-2.25-3a.75.75 0 011.2-.9l1.65 2.2 1.65-2.2a.753.753 0 011.049-.15.75.75 0 01.151 1.05l-2.25 3a.753.753 0 01-.6.3z"}})])
          )
        }
      }
    