
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
            children.concat([_c('path',{attrs:{"d":"M3.75 24a2.252 2.252 0 01-2.25-2.25v-9a2.252 2.252 0 012.25-2.25h.75V2.25A2.252 2.252 0 016.75 0h10.5a2.252 2.252 0 012.25 2.25v8.25h.75a2.252 2.252 0 012.25 2.25v9A2.252 2.252 0 0120.25 24H3.75zm0-12a.75.75 0 00-.75.75v9c0 .414.336.75.75.75h16.5a.75.75 0 00.75-.75v-9a.75.75 0 00-.75-.75H3.75zM18 10.5V2.25a.75.75 0 00-.75-.75H6.75a.75.75 0 00-.75.75v8.25h12z"}}),_c('path',{attrs:{"d":"M8.25 4.5a.75.75 0 010-1.5h4.5a.75.75 0 010 1.5h-4.5zM8.25 7.5a.75.75 0 010-1.5h7.5a.75.75 0 010 1.5h-7.5zM15.75 18a.75.75 0 01-.75-.75v-3a.75.75 0 01.75-.75h3a.75.75 0 01.75.75v3a.75.75 0 01-.75.75h-3zM18 16.5V15h-1.5v1.5H18zM5.25 15a.75.75 0 010-1.5h3c.414 0 .75.336.75.75S5.25 15 5.25 15zM5.25 21a.75.75 0 010-1.5h6a.75.75 0 010 1.5h-6z"}})])
          )
        }
      }
    