
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
            children.concat([_c('path',{attrs:{"d":"M12 24C5.383 24 0 18.617 0 12S5.383 0 12 0s12 5.383 12 12-5.383 12-12 12zm0-22.5C6.21 1.5 1.5 6.21 1.5 12S6.21 22.5 12 22.5 22.5 17.79 22.5 12 17.79 1.5 12 1.5z"}}),_c('path',{attrs:{"d":"M9.75 16.5a2.252 2.252 0 01-2.25-2.25v-4.5A2.252 2.252 0 019.75 7.5h1.5a2.252 2.252 0 012.25 2.25v4.5a2.252 2.252 0 01-2.25 2.25h-1.5zm0-7.5a.75.75 0 00-.75.75v4.5c0 .414.336.75.75.75h1.5a.75.75 0 00.75-.75v-4.5a.75.75 0 00-.75-.75h-1.5zM15 18a.755.755 0 01-.676-.425.753.753 0 01.09-.793l1.899-2.375a.86.86 0 00.187-.533.375.375 0 00-.75.001.75.75 0 01-1.5 0c0-1.034.841-1.875 1.875-1.875S18 12.841 18 13.875a2.37 2.37 0 01-.515 1.468L16.56 16.5h.69a.75.75 0 010 1.5H15z"}})])
          )
        }
      }
    