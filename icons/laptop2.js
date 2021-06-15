
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
            children.concat([_c('path',{attrs:{"d":"M3.75 21.75A3.754 3.754 0 010 18v-1.5a.648.648 0 01.008-.095.653.653 0 01.032-.145L3.855 4.814A3.744 3.744 0 017.412 2.25h10.757a2.24 2.24 0 012.013 1.243c.269.537.312 1.147.122 1.718L16.791 15.75h6.459a.75.75 0 01.75.75V18a3.754 3.754 0 01-3.75 3.75H3.75zM1.5 18a2.252 2.252 0 002.25 2.25h16.5A2.252 2.252 0 0022.5 18v-.75h-21V18zm13.709-2.25L18.88 4.737a.746.746 0 00-.475-.949.752.752 0 00-.236-.038H7.412c-.97 0-1.828.618-2.135 1.538L1.791 15.75h13.418z"}}),_c('path',{attrs:{"d":"M9.508 12c-1.241 0-2.25-1.009-2.25-2.25S8.267 7.5 9.508 7.5s2.25 1.009 2.25 2.25S10.749 12 9.508 12zm0-3a.75.75 0 100 1.5.75.75 0 000-1.5z"}})])
          )
        }
      }
    