
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
            children.concat([_c('path',{attrs:{"d":"M19.5 21.606a.747.747 0 01-.586-.282A8.79 8.79 0 0012.147 18h-.197a8.737 8.737 0 00-5.474 1.935 8.87 8.87 0 00-1.39 1.39.747.747 0 01-1.054.118.751.751 0 01-.118-1.054A10.362 10.362 0 016.632 18H2.247a2.252 2.252 0 01-2.25-2.25v-12a2.252 2.252 0 012.25-2.25h19.5a2.252 2.252 0 012.25 2.25v12a2.252 2.252 0 01-2.25 2.25h-4.382a10.348 10.348 0 012.721 2.388.749.749 0 01-.586 1.218zM2.247 3a.75.75 0 00-.75.75v12c0 .414.336.75.75.75h19.5a.75.75 0 00.75-.75v-12a.75.75 0 00-.75-.75h-19.5z"}})])
          )
        }
      }
    