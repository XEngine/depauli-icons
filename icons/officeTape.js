
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
            children.concat([_c('path',{attrs:{"d":"M5.25 20.623A5.256 5.256 0 010 15.373v-4.5a2.252 2.252 0 012.25-2.25h1.119c.917.002 1.74.568 2.08 1.402l11.08-3.47a.503.503 0 01.038-.01 3.366 3.366 0 011.057-.172C19.486 6.373 21 7.887 21 9.748s-1.514 3.375-3.375 3.375-3.375-1.514-3.375-3.375c0-.323.047-.642.138-.95l-8.515 2.667.177.622a2.484 2.484 0 002.377 1.792h.002a2.478 2.478 0 002.45-2.148.751.751 0 011.488.196 3.983 3.983 0 01-3.937 3.452h-.003A3.99 3.99 0 014.608 12.5l-.521-1.827a.754.754 0 00-.721-.549H2.25a.75.75 0 00-.75.75v4.5a3.754 3.754 0 003.75 3.75h15a2.252 2.252 0 002.25-2.25v-7.1a4.908 4.908 0 00-4.9-4.9 4.86 4.86 0 00-2.904.954.753.753 0 01-1.187-.716.74.74 0 01.297-.491 6.348 6.348 0 013.791-1.246A6.41 6.41 0 0124 9.775v7.1a3.754 3.754 0 01-3.75 3.75h-15zm12.375-12.75c-1.034 0-1.875.841-1.875 1.875s.841 1.875 1.875 1.875 1.875-.841 1.875-1.875-.841-1.875-1.875-1.875z"}})])
          )
        }
      }
    