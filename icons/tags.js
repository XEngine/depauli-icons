
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
            children.concat([_c('path',{attrs:{"d":"M14.559 23.687a2.238 2.238 0 01-1.591-.658L1.407 11.467A3.727 3.727 0 01.309 8.816V2.559a2.252 2.252 0 012.25-2.25h6.257c1.001 0 1.943.39 2.651 1.098l11.561 11.561a2.253 2.253 0 010 3.182l-6.879 6.88a2.233 2.233 0 01-1.59.657zm-12-21.878a.75.75 0 00-.75.75v6.257c0 .601.234 1.166.659 1.591l11.561 11.562c.141.141.329.219.53.219s.389-.078.53-.219l6.879-6.88a.752.752 0 000-1.061L10.407 2.467a2.238 2.238 0 00-1.59-.658H2.559z"}}),_c('path',{attrs:{"d":"M6.309 8.559c-1.241 0-2.25-1.009-2.25-2.25s1.009-2.25 2.25-2.25 2.25 1.009 2.25 2.25-1.009 2.25-2.25 2.25zm0-3a.75.75 0 100 1.5.75.75 0 000-1.5z"}})])
          )
        }
      }
    