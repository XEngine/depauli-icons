
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
            children.concat([_c('path',{attrs:{"d":"M6 24c-3.308 0-6-2.692-6-6V9.75C0 4.374 4.374 0 9.75 0h7.5C20.972 0 24 3.028 24 6.75s-3.028 6.75-6.75 6.75h-1.5A3.754 3.754 0 0012 17.25V18a6.008 6.008 0 01-6 6zM9.75 1.5C5.201 1.5 1.5 5.201 1.5 9.75V18A4.506 4.506 0 006 22.5a4.507 4.507 0 004.5-4.5v-.75A5.256 5.256 0 0115.75 12h1.5c2.895 0 5.25-2.355 5.25-5.25S20.145 1.5 17.25 1.5h-7.5z"}}),_c('path',{attrs:{"d":"M6 21c-1.654 0-3-1.346-3-3s1.346-3 3-3 3 1.346 3 3-1.346 3-3 3zm0-4.5c-.827 0-1.5.673-1.5 1.5s.673 1.5 1.5 1.5 1.5-.673 1.5-1.5-.673-1.5-1.5-1.5zM5.25 13.5A2.252 2.252 0 013 11.25v-1.5A6.758 6.758 0 019.75 3h7.5C19.318 3 21 4.682 21 6.75s-1.682 3.75-3.75 3.75h-9a.75.75 0 00-.75.75 2.252 2.252 0 01-2.25 2.25zm4.5-9A5.256 5.256 0 004.5 9.75v1.5a.75.75 0 001.5 0A2.252 2.252 0 018.25 9h9c1.241 0 2.25-1.009 2.25-2.25S18.491 4.5 17.25 4.5h-7.5z"}})])
          )
        }
      }
    