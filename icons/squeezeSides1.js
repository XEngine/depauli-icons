
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
            children.concat([_c('path',{attrs:{"d":"M8.25 24a3.754 3.754 0 01-3.75-3.75V3.75A3.754 3.754 0 018.25 0h7.5a3.754 3.754 0 013.75 3.75v16.5A3.754 3.754 0 0115.75 24h-7.5zM6 20.25a2.252 2.252 0 002.25 2.25h7.5A2.252 2.252 0 0018 20.25v-.75H6v.75zM18 18V3.75a2.252 2.252 0 00-2.25-2.25h-7.5A2.252 2.252 0 006 3.75V18h12z"}}),_c('path',{attrs:{"d":"M8.546 15a.75.75 0 01-.649-1.125 8.285 8.285 0 000-8.251.745.745 0 01-.074-.569.743.743 0 01.723-.555.75.75 0 01.65.376 9.79 9.79 0 010 9.749.754.754 0 01-.65.375zM15.454 15a.754.754 0 01-.65-.375 9.792 9.792 0 010-9.75.753.753 0 011.024-.276.752.752 0 01.276 1.024 8.285 8.285 0 000 8.251.751.751 0 01-.65 1.126z"}})])
          )
        }
      }
    