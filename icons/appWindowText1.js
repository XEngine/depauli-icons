
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
            children.concat([_c('path',{attrs:{"d":"M3.01 22.503a2.252 2.252 0 01-2.25-2.25v-16.5a2.252 2.252 0 012.25-2.25h18a2.252 2.252 0 012.25 2.25v16.5a2.252 2.252 0 01-2.25 2.25h-18zm-.75-2.25c0 .414.336.75.75.75h18a.75.75 0 00.75-.75V7.503H2.26v12.75zm19.5-14.25v-2.25a.75.75 0 00-.75-.75h-18a.75.75 0 00-.75.75v2.25h19.5z"}}),_c('path',{attrs:{"d":"M6.01 12.003a.75.75 0 010-1.5h1.5a.75.75 0 010 1.5h-1.5zM6.01 15.003a.75.75 0 010-1.5h1.5c.414 0 .75.336.75.75s-2.25.75-2.25.75zM6.01 18.003a.75.75 0 010-1.5h1.5a.75.75 0 010 1.5h-1.5zM10.51 12.003a.75.75 0 010-1.5h7.5a.75.75 0 010 1.5h-7.5zM10.51 15.003a.75.75 0 010-1.5h7.5a.75.75 0 010 1.5h-7.5zM10.51 18.003a.75.75 0 010-1.5h7.5a.75.75 0 010 1.5h-7.5z"}})])
          )
        }
      }
    