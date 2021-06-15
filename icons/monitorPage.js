
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
            children.concat([_c('path',{attrs:{"d":"M8.25 24a.75.75 0 010-1.5h3V21h-9A2.252 2.252 0 010 18.75V4.5a2.252 2.252 0 012.25-2.25.75.75 0 010 1.5.75.75 0 00-.75.75v11.25h21V4.5c0-.414-.336-.75-.75-.75a.75.75 0 010-1.5A2.252 2.252 0 0124 4.5v14.25A2.252 2.252 0 0121.75 21h-9v1.5h3a.75.75 0 010 1.5h-7.5zM1.5 18.75c0 .414.336.75.75.75h19.5a.75.75 0 00.75-.75v-1.5h-21v1.5z"}}),_c('path',{attrs:{"d":"M18.75 14.25a.75.75 0 01-.75-.75v-9H6v9a.75.75 0 01-1.5 0V2.25A2.252 2.252 0 016.75 0h10.5a2.252 2.252 0 012.25 2.25V13.5a.75.75 0 01-.75.75zM18 3v-.75a.75.75 0 00-.75-.75H6.75a.75.75 0 00-.75.75V3h12z"}}),_c('path',{attrs:{"d":"M8.25 10.5a.75.75 0 01-.75-.75v-3A.75.75 0 018.25 6h3a.75.75 0 01.75.75v3a.75.75 0 01-.75.75h-3zM10.5 9V7.5H9V9h1.5zM14.25 7.5a.75.75 0 010-1.5h1.5a.75.75 0 010 1.5h-1.5zM14.25 9.75a.75.75 0 010-1.5h1.5a.75.75 0 010 1.5h-1.5zM8.25 13.5a.75.75 0 010-1.5h7.5a.75.75 0 010 1.5h-7.5z"}})])
          )
        }
      }
    