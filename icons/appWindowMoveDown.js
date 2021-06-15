
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
            children.concat([_c('path',{attrs:{"d":"M3.01 22.503a2.252 2.252 0 01-2.25-2.25v-16.5a2.252 2.252 0 012.25-2.25h18a2.252 2.252 0 012.25 2.25v16.5a2.252 2.252 0 01-2.25 2.25h-18zm-.75-2.25c0 .414.336.75.75.75h18a.75.75 0 00.75-.75v-8.25h-.75a.75.75 0 010-1.5h.75v-3H2.26v3h.75a.75.75 0 010 1.5h-.75v8.25zm19.5-14.25v-2.25a.75.75 0 00-.75-.75h-18a.75.75 0 00-.75.75v2.25h19.5z"}}),_c('path',{attrs:{"d":"M6.01 12.003a.75.75 0 010-1.5h1.5a.75.75 0 010 1.5h-1.5zM16.51 12.003a.75.75 0 010-1.5h1.5a.75.75 0 010 1.5h-1.5zM12.01 19.503a.755.755 0 01-.26-.047l-.022-.008a.732.732 0 01-.249-.165L8.48 16.284a.752.752 0 01.53-1.281c.2 0 .389.078.53.22l1.72 1.72v-5.689a.75.75 0 011.5 0v5.689l1.72-1.72a.744.744 0 011.06 0 .752.752 0 010 1.061l-3 3a.763.763 0 01-.246.164l-.026.01a.77.77 0 01-.258.045z"}})])
          )
        }
      }
    