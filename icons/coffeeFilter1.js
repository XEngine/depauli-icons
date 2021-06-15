
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
            children.concat([_c('path',{attrs:{"d":"M3 23.625a.75.75 0 010-1.5h.75v-6.75A2.252 2.252 0 016 13.125h.506L5.279 8.831A.752.752 0 016 7.875h3.75v-3A2.252 2.252 0 0112 2.625h3.848A3.016 3.016 0 0118.75.375c1.654 0 3 1.346 3 3s-1.346 3-3 3a3.016 3.016 0 01-2.902-2.25H12a.75.75 0 00-.75.75v3H15a.75.75 0 01.721.956l-1.227 4.294H15a2.252 2.252 0 012.25 2.25v6.75H18a.75.75 0 010 1.5H3zm12.75-1.5v-3h-4.5v.75a.75.75 0 01-1.5 0v-.75h-4.5v3h10.5zm0-4.5v-2.25a.75.75 0 00-.75-.75H6a.75.75 0 00-.75.75v2.25h10.5zm-2.816-4.5l1.072-3.75H6.994l1.071 3.75h4.869zm5.816-11.25c-.827 0-1.5.673-1.5 1.5s.673 1.5 1.5 1.5 1.5-.673 1.5-1.5-.673-1.5-1.5-1.5z"}})])
          )
        }
      }
    