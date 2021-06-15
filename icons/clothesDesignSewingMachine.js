
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
            children.concat([_c('path',{attrs:{"d":"M3 24c-1.654 0-3-1.346-3-3s1.346-3 3-3h9.75A2.252 2.252 0 0015 15.75v-4.5A2.252 2.252 0 0012.75 9h-1.273l-2.061 1.374A.745.745 0 019 10.5H7.5v3H9A.75.75 0 019 15H7.5v.75a.75.75 0 01-1.5 0V10.5H3.75A2.252 2.252 0 011.5 8.25v-6A2.252 2.252 0 013.75 0h16.5A3.754 3.754 0 0124 3.75v16.5A3.754 3.754 0 0120.25 24H3zm0-4.5c-.827 0-1.5.673-1.5 1.5s.673 1.5 1.5 1.5h17.25a2.252 2.252 0 002.25-2.25V3.75a2.252 2.252 0 00-2.25-2.25H7.5v5.25a.75.75 0 01-1.5 0V1.5H3.75a.75.75 0 00-.75.75v6c0 .414.336.75.75.75h5.023l2.061-1.374a.745.745 0 01.416-.126h1.5a3.754 3.754 0 013.75 3.75v4.5a3.754 3.754 0 01-3.75 3.75H3z"}}),_c('path',{attrs:{"d":"M18.75 7.5c-1.241 0-2.25-1.009-2.25-2.25S17.509 3 18.75 3 21 4.009 21 5.25 19.991 7.5 18.75 7.5zm0-3a.75.75 0 100 1.5.75.75 0 000-1.5z"}})])
          )
        }
      }
    