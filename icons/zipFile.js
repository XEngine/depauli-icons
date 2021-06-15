
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
            children.concat([_c('circle',{attrs:{"cx":"9.75","cy":"10.125","r":"1.125"}}),_c('circle',{attrs:{"cx":"9.75","cy":"14.625","r":"1.125"}}),_c('circle',{attrs:{"cx":"9.75","cy":"19.125","r":"1.125"}}),_c('path',{attrs:{"d":"M3.75 24a2.252 2.252 0 01-2.25-2.25V2.25A2.252 2.252 0 013.75 0h13.629c.601 0 1.165.234 1.59.658l2.872 2.872c.425.425.659.99.659 1.59v16.63A2.252 2.252 0 0120.25 24H3.75zm0-22.5a.75.75 0 00-.75.75v19.5c0 .414.336.75.75.75h16.5a.75.75 0 00.75-.75V5.121c0-.197-.08-.39-.219-.53l-2.872-2.872a.748.748 0 00-.53-.219H12.1l.371 2.964a2.705 2.705 0 01-.656 2.123 2.785 2.785 0 01-1.947.909l-.118.002a2.783 2.783 0 01-2.05-.9 2.714 2.714 0 01-.666-2.134L7.401 1.5H3.75zm4.772 3.149c-.042.342.064.686.292.944a1.29 1.29 0 00.941.404l.052-.001c.343-.014.661-.161.894-.415.22-.249.324-.591.282-.932L10.588 1.5H8.913l-.391 3.149z"}})])
          )
        }
      }
    