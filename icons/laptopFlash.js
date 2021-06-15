
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
            children.concat([_c('path',{attrs:{"d":"M17.249 24a.753.753 0 01-.75-.75V18h-1.875a1.134 1.134 0 01-.722-.263 1.12 1.12 0 01-.398-.766 1.12 1.12 0 01.26-.822l5.916-6.888a.748.748 0 01.829-.215c.294.109.49.392.49.704V15h1.875a1.128 1.128 0 01.861 1.85l-5.917 6.888a.747.747 0 01-.569.262zm0-7.5a.75.75 0 01.75.75v3.976l4.06-4.727-1.81.001a.75.75 0 01-.75-.75v-3.976l-4.06 4.727 1.81-.001zM4.499 16.5a4.505 4.505 0 01-4.5-4.5.75.75 0 01.75-.75h1.5v-9A2.252 2.252 0 014.499 0h15a2.252 2.252 0 012.25 2.25v4.5a.75.75 0 01-1.5 0v-4.5a.75.75 0 00-.75-.75h-15a.75.75 0 00-.75.75v9h9a.75.75 0 010 1.5H1.593A2.997 2.997 0 004.499 15h6.75a.75.75 0 010 1.5h-6.75z"}})])
          )
        }
      }
    