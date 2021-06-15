
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
            children.concat([_c('path',{attrs:{"d":"M.75 23.25a.75.75 0 010-1.5h.75v-3H.75a.75.75 0 010-1.5h22.5a.75.75 0 010 1.5h-.75v3h.75a.75.75 0 010 1.5H.75zM21 21.75v-3h-1.5v3H21zm-3 0v-3h-3.75v3H18zm-5.25 0v-3h-1.5v3h1.5zm-3 0v-3H6v3h3.75zm-5.25 0v-3H3v3h1.5zM2.25 15.75A2.252 2.252 0 010 13.5V3A2.252 2.252 0 012.25.75h19.5A2.252 2.252 0 0124 3v10.5a2.252 2.252 0 01-2.25 2.25H2.25zm19.5-1.5a.75.75 0 00.75-.75v-2.25h-3v3h2.25zm-3.75 0v-3h-4.5v3H18zm-6 0v-3H7.5v3H12zM1.5 13.5c0 .414.336.75.75.75H6v-3H1.5v2.25zm21-3.75v-3H18v3h4.5zm-6 0v-3H12v3h4.5zm-6 0v-3H6v3h4.5zm-6 0v-3h-3v3h3zm18-4.5V3a.75.75 0 00-.75-.75H19.5v3h3zm-4.5 0v-3h-4.5v3H18zm-6 0v-3H7.5v3H12zm-6 0v-3H2.25A.75.75 0 001.5 3v2.25H6z"}})])
          )
        }
      }
    