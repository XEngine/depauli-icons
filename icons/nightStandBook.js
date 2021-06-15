
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
            children.concat([_c('path',{attrs:{"d":"M21.75 24a.748.748 0 01-.711-.513l-1.33-3.987H4.291l-1.329 3.987a.75.75 0 01-1.424-.475L2.709 19.5H2.25A2.252 2.252 0 010 17.25V6.75A2.252 2.252 0 012.25 4.5h11.652A2.974 2.974 0 0113.5 3V.75a.75.75 0 01.75-.75h4.5a.75.75 0 01.75.75V3c0 .536-.14 1.049-.402 1.5h2.652A2.252 2.252 0 0124 6.75v10.5a2.252 2.252 0 01-2.25 2.25h-.459l1.171 3.513a.75.75 0 01-.712.987zm0-6a.75.75 0 00.75-.75V12h-21v5.25c0 .414.336.75.75.75H4.5v-3.75a.75.75 0 01.75-.75h6a.75.75 0 01.75.75V18h3v-3.75a.75.75 0 01.75-.75h3a.75.75 0 01.75.75V18h2.25zM18 18v-3h-1.5v3H18zm-7.5 0v-3H9v3h1.5zm-3 0v-3H6v3h1.5zm15-7.5V6.75a.75.75 0 00-.75-.75H2.25a.75.75 0 00-.75.75v3.75h21zM15 3c0 .827.673 1.5 1.5 1.5S18 3.827 18 3V1.5h-3V3z"}}),_c('path',{attrs:{"d":"M11.25 9a.75.75 0 010-1.5h1.5a.75.75 0 010 1.5h-1.5z"}})])
          )
        }
      }
    