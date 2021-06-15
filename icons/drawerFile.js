
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
            children.concat([_c('path',{attrs:{"d":"M3 24a2.252 2.252 0 01-2.25-2.25v-4.5A2.252 2.252 0 013 15h3.832c.268 0 .518.145.651.378A5.202 5.202 0 0011.991 18a5.22 5.22 0 004.526-2.622.752.752 0 01.651-.378H21a2.252 2.252 0 012.25 2.25v4.5A2.252 2.252 0 0121 24H3zm0-7.5a.75.75 0 00-.75.75v4.5c0 .414.336.75.75.75h18a.75.75 0 00.75-.75v-4.5a.75.75 0 00-.75-.75h-3.413a6.663 6.663 0 01-5.597 2.999A6.691 6.691 0 016.414 16.5H3zM19.5 13.5a.75.75 0 01-.75-.75V2.25A.75.75 0 0018 1.5H6a.75.75 0 00-.75.75v10.5a.75.75 0 01-1.5 0V2.25A2.252 2.252 0 016 0h12a2.252 2.252 0 012.25 2.25v10.5a.75.75 0 01-.75.75z"}}),_c('path',{attrs:{"d":"M8.25 6a.75.75 0 010-1.5h3a.75.75 0 010 1.5h-3zM8.25 9a.75.75 0 010-1.5h7.5a.75.75 0 010 1.5h-7.5zM8.25 12a.75.75 0 010-1.5h7.5a.75.75 0 010 1.5h-7.5z"}})])
          )
        }
      }
    