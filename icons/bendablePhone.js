
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
            children.concat([_c('path',{attrs:{"d":"M14.25 24A2.252 2.252 0 0112 21.75v-15C12 3.855 9.645 1.5 6.75 1.5S1.5 3.855 1.5 6.75v1.5c0 .414.336.75.75.75h7.5a.75.75 0 010 1.5h-7.5A2.252 2.252 0 010 8.25v-1.5A6.758 6.758 0 016.75 0h10.5A6.758 6.758 0 0124 6.75v15A2.252 2.252 0 0121.75 24h-7.5zM10.99 1.5a6.74 6.74 0 012.51 5.25v15c0 .414.336.75.75.75h7.5a.75.75 0 00.75-.75v-15a5.256 5.256 0 00-5.25-5.25h-6.26z"}}),_c('path',{attrs:{"d":"M15.75 18a.75.75 0 01-.75-.75V6.75c0-1.824-.545-2.484-.55-2.491a.753.753 0 01.553-1.258.74.74 0 01.527.219c.162.161.97 1.092.97 3.53v9.75h3V6.75l.002-.057a2.494 2.494 0 00-1.154-2.309.747.747 0 01-.233-1.035.75.75 0 011.036-.233A3.995 3.995 0 0121 6.778V17.25a.75.75 0 01-.75.75h-4.5z"}}),_c('circle',{attrs:{"cx":"18","cy":"20.25","r":"1.125"}})])
          )
        }
      }
    