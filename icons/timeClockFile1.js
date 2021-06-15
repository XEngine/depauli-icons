
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
            children.concat([_c('path',{attrs:{"d":"M12 19.5c-3.722 0-6.75-3.028-6.75-6.75S8.278 6 12 6s6.75 3.028 6.75 6.75S15.722 19.5 12 19.5zm0-12a5.256 5.256 0 00-5.25 5.25A5.256 5.256 0 0012 18a5.256 5.256 0 005.25-5.25A5.256 5.256 0 0012 7.5z"}}),_c('path',{attrs:{"d":"M12 13.5a.75.75 0 01-.75-.75v-2.651a.75.75 0 011.5 0V12h1.902a.75.75 0 010 1.5H12z"}}),_c('path',{attrs:{"d":"M3 24a2.252 2.252 0 01-2.25-2.25V2.25A2.252 2.252 0 013 0h15a2.242 2.242 0 011.571.64l2.996 2.878c.435.424.683 1.012.683 1.615V21.75A2.252 2.252 0 0121 24H3zM3 1.5a.75.75 0 00-.75.75v19.5c0 .414.336.75.75.75h18a.75.75 0 00.75-.75V5.133a.754.754 0 00-.227-.537l-2.996-2.878A.75.75 0 0018 1.5H3z"}})])
          )
        }
      }
    