
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
            children.concat([_c('path',{attrs:{"d":"M6 21a.75.75 0 010-1.5h1.615l.5-3H3.75A3.754 3.754 0 010 12.75v-9A3.754 3.754 0 013.75 0h16.5A3.754 3.754 0 0124 3.75v9a.75.75 0 01-1.5 0v-9a2.252 2.252 0 00-2.25-2.25H3.75A2.252 2.252 0 001.5 3.75V12h11.25a.75.75 0 010 1.5H1.632A2.262 2.262 0 003.75 15h6.75a.75.75 0 010 1.5h-.865l-.5 3h3.615a.75.75 0 010 1.5H6z"}}),_c('path',{attrs:{"d":"M17.25 24a.753.753 0 01-.75-.75V18h-1.875a1.134 1.134 0 01-.722-.263 1.12 1.12 0 01-.398-.766 1.12 1.12 0 01.26-.822l5.916-6.888a.748.748 0 01.829-.215c.293.109.49.392.49.704V15h1.875c.265.001.521.095.722.263.231.195.373.467.398.766a1.12 1.12 0 01-.26.822l-5.916 6.888a.748.748 0 01-.569.261zm0-7.5a.75.75 0 01.75.75v3.976l4.06-4.727-1.81.001a.75.75 0 01-.75-.75v-3.976l-4.06 4.727 1.81-.001z"}})])
          )
        }
      }
    