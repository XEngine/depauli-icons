
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
            children.concat([_c('path',{attrs:{"d":"M3 18a2.252 2.252 0 01-2.25-2.25v-12A2.252 2.252 0 013 1.5h2.25V.75a.75.75 0 011.5 0v.75h6V.75a.75.75 0 011.5 0v.75h2.25a2.252 2.252 0 012.25 2.25v4.5a.75.75 0 01-1.5 0V7.5h-15v8.25c0 .414.336.75.75.75h9a.75.75 0 010 1.5H3zM17.25 6V3.75A.75.75 0 0016.5 3h-2.25v.75a.75.75 0 01-1.5 0V3h-6v.75a.75.75 0 01-1.5 0V3H3a.75.75 0 00-.75.75V6h15z"}}),_c('path',{attrs:{"d":"M18.75 24a4.505 4.505 0 01-4.5-4.5 4.482 4.482 0 012.735-4.136L15.3 14.1a.75.75 0 01-.174-1.016l1.5-2.25a.749.749 0 01.624-.334h3c.251 0 .485.125.624.334l1.5 2.25A.75.75 0 0122.2 14.1l-1.685 1.264A4.482 4.482 0 0123.25 19.5c0 2.481-2.019 4.5-4.5 4.5zm0-7.5c-1.654 0-3 1.346-3 3s1.346 3 3 3 3-1.346 3-3-1.346-3-3-3zm0-1.688l1.982-1.487L19.849 12h-2.197l-.884 1.326 1.982 1.486z"}})])
          )
        }
      }
    