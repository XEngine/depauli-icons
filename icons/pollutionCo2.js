
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
            children.concat([_c('path',{attrs:{"d":"M12 24C5.383 24 0 18.617 0 12S5.383 0 12 0s12 5.383 12 12-5.383 12-12 12zm0-22.5C6.21 1.5 1.5 6.21 1.5 12S6.21 22.5 12 22.5 22.5 17.79 22.5 12 17.79 1.5 12 1.5z"}}),_c('path',{attrs:{"d":"M9 16.5a3.754 3.754 0 01-3.75-3.75v-1.5A3.754 3.754 0 019 7.5.75.75 0 019 9a2.252 2.252 0 00-2.25 2.25v1.5A2.252 2.252 0 009 15a.75.75 0 010 1.5zM12.75 16.5a2.252 2.252 0 01-2.25-2.25v-4.5a2.252 2.252 0 012.25-2.25A2.252 2.252 0 0115 9.75v4.5a2.252 2.252 0 01-2.25 2.25zm0-7.5a.75.75 0 00-.75.75v4.5a.75.75 0 001.5 0v-4.5a.75.75 0 00-.75-.75zM16.5 18a.755.755 0 01-.676-.425.753.753 0 01.09-.793l1.899-2.375a.86.86 0 00.187-.533.375.375 0 00-.75.001.75.75 0 01-1.5 0c0-1.034.841-1.875 1.875-1.875s1.875.841 1.875 1.875a2.37 2.37 0 01-.515 1.468L18.06 16.5h.69a.75.75 0 010 1.5H16.5z"}})])
          )
        }
      }
    