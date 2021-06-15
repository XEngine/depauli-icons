
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
              attrs: Object.assign({"data-name":"Outline Version","xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24"}, attrs),
              ...rest,
            },
            children.concat([_c('path',{attrs:{"d":"M12.51 0a9.45 9.45 0 00-9.44 9.44v11.25a3.31 3.31 0 006.61 0v-3.85h2.83a8.42 8.42 0 100-16.84zm0 15.34H8.93a.75.75 0 00-.75.75v4.6a1.81 1.81 0 01-3.61 0V9.44a8 8 0 017.94-7.94 6.92 6.92 0 110 13.84z"}}),_c('path',{attrs:{"d":"M12.51 5.11a4.33 4.33 0 00-4.33 4.33V11a.75.75 0 00.75.75h3.58a3.31 3.31 0 100-6.61zm0 5.11H9.68v-.78a2.83 2.83 0 012.83-2.83 1.81 1.81 0 110 3.61z"}})])
          )
        }
      }
    