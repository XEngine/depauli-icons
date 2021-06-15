
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
            children.concat([_c('path',{attrs:{"d":"M4.5 21.501a2.252 2.252 0 01-2.25-2.25v-2.25H.75a.75.75 0 010-1.5h1.5v-6H.75a.75.75 0 010-1.5h1.5v-2.25c0-.136.037-.27.107-.386l1.607-2.678a1.509 1.509 0 011.288-.728 1.495 1.495 0 011.284.728L7.5 4.293l.964-1.606a1.51 1.51 0 011.288-.728 1.495 1.495 0 011.284.728L12 4.293l.964-1.606a1.503 1.503 0 012.572-.002l.964 1.608.964-1.606a1.51 1.51 0 011.288-.728 1.495 1.495 0 011.284.727l1.607 2.679c.07.117.107.25.107.386v2.25h1.5a.75.75 0 010 1.5h-1.5v6h1.5a.75.75 0 010 1.5h-1.5v2.25a2.252 2.252 0 01-2.25 2.25h-15zm15-1.5a.75.75 0 00.75-.75v-2.25h-3v3h2.25zm-3.75 0v-3h-3v3h3zm-4.5 0v-3h-3v3h3zm-7.5-.75c0 .414.336.75.75.75h2.25v-3h-3v2.25zm16.5-3.75v-6h-3v6h3zm-4.5 0v-6h-3v6h3zm-4.5 0v-6h-3v6h3zm-4.5 0v-6h-3v6h3zm13.5-7.5V5.958l-1.5-2.499-1.5 2.499V8h3zm-4.5 0V5.958l-1.5-2.499-1.5 2.499V8h3zm-4.5 0V5.958l-1.5-2.5-1.5 2.5V8h3zm-4.5 0V5.958l-1.5-2.499-1.5 2.499V8h3z"}})])
          )
        }
      }
    