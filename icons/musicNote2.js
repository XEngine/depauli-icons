
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
            children.concat([_c('path',{attrs:{"d":"M4.5 24.001c-2.481 0-4.5-2.019-4.5-4.5s2.019-4.5 4.5-4.5a4.5 4.5 0 013 1.152V6.72a3.745 3.745 0 012.562-3.557L21.147.084a2.258 2.258 0 012.851 2.167V4.17a.769.769 0 01-.001.096l.001 10.696a4.505 4.505 0 01-4.498 4.539 4.505 4.505 0 01-4.5-4.5c0-2.481 2.019-4.5 4.5-4.5 1.115 0 2.18.418 2.998 1.151V5.228L9 9.278v10.223c0 2.481-2.019 4.5-4.5 4.5zm0-7.5c-1.654 0-3 1.346-3 3s1.346 3 3 3 3-1.346 3-3-1.346-3-3-3zm15-4.5c-1.654 0-3 1.346-3 3s1.346 3 3 3a3.005 3.005 0 002.999-2.972l-.001-.066a3.008 3.008 0 00-2.998-2.962zm2.247-10.5a.746.746 0 00-.199.027L10.501 4.596C9.61 4.895 9 5.75 9 6.72v.992l13.498-4.049V2.251a.754.754 0 00-.751-.75z"}})])
          )
        }
      }
    