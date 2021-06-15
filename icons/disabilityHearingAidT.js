
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
            children.concat([_c('path',{attrs:{"d":"M6.015 24.005c-3.308 0-6-2.692-6-6a.75.75 0 011.5 0c0 2.481 2.019 4.5 4.5 4.5s4.5-2.019 4.5-4.5c0-1.778.776-3.459 2.128-4.613a6.713 6.713 0 002.351-4.601 6.706 6.706 0 00-1.592-4.915A6.744 6.744 0 008.26 1.508a6.746 6.746 0 00-6.745 6.747.75.75 0 01-1.5 0A8.242 8.242 0 018.259.009a8.239 8.239 0 016.284 2.895 8.199 8.199 0 011.945 6.007 8.19 8.19 0 01-2.873 5.623 4.555 4.555 0 00-1.601 3.471 6.006 6.006 0 01-5.999 6z"}}),_c('path',{attrs:{"d":"M6.015 18.005a4.505 4.505 0 01-4.5-4.5c0-1.328.603-2.601 1.625-3.453a4.451 4.451 0 01-.125-1.042 4.503 4.503 0 014.497-4.502c1.204 0 2.333.467 3.183 1.316a4.472 4.472 0 011.32 3.181.75.75 0 11-1.499.001c0-.801-.313-1.555-.88-2.121a2.978 2.978 0 00-2.12-.877 3.004 3.004 0 00-2.988 3.255 4.406 4.406 0 011.488-.257c2.481 0 4.5 2.019 4.5 4.5s-2.02 4.499-4.501 4.499zm0-7.5c-1.654 0-3 1.346-3 3s1.346 3 3 3 3-1.346 3-3-1.346-3-3-3zM21.855 13.914a.751.751 0 01-.656-1.114 10.452 10.452 0 000-10.182.75.75 0 011.312-.727 11.944 11.944 0 010 11.636.749.749 0 01-.656.387z"}}),_c('path',{attrs:{"d":"M19.493 11.597a.753.753 0 01-.665-1.098 6.018 6.018 0 000-5.579.75.75 0 111.329-.694 7.522 7.522 0 010 6.969.744.744 0 01-.664.402zM21.765 24.005a.75.75 0 01-.75-.75v-3.75h-.75a.75.75 0 010-1.5h3a.75.75 0 010 1.5h-.75v3.75a.75.75 0 01-.75.75z"}})])
          )
        }
      }
    