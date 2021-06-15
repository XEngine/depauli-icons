
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
            children.concat([_c('path',{attrs:{"d":"M12 24C5.383 24 0 18.617 0 12S5.383 0 12 0s12 5.383 12 12-5.383 12-12 12zm0-22.5C6.21 1.5 1.5 6.21 1.5 12S6.21 22.5 12 22.5 22.5 17.79 22.5 12 17.79 1.5 12 1.5z"}}),_c('path',{attrs:{"d":"M11.25 19.5A2.252 2.252 0 019 17.25V15H6.75a2.252 2.252 0 01-2.25-2.25v-1.5A2.252 2.252 0 016.75 9H9V6.75a2.252 2.252 0 012.25-2.25h1.5A2.252 2.252 0 0115 6.75V9h2.25a2.252 2.252 0 012.25 2.25v1.5A2.252 2.252 0 0117.25 15H15v2.25a2.252 2.252 0 01-2.25 2.25h-1.5zm-4.5-9a.75.75 0 00-.75.75v1.5c0 .414.336.75.75.75h3a.75.75 0 01.75.75v3c0 .414.336.75.75.75h1.5a.75.75 0 00.75-.75v-3a.75.75 0 01.75-.75h3a.75.75 0 00.75-.75v-1.5a.75.75 0 00-.75-.75h-3a.75.75 0 01-.75-.75v-3a.75.75 0 00-.75-.75h-1.5a.75.75 0 00-.75.75v3a.75.75 0 01-.75.75h-3z"}})])
          )
        }
      }
    