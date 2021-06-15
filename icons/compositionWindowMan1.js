
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
            children.concat([_c('path',{attrs:{"d":"M6 24a3.754 3.754 0 01-3.75-3.75V3.75A3.754 3.754 0 016 0h12a3.754 3.754 0 013.75 3.75v16.5A3.754 3.754 0 0118 24H6zM6 1.5a2.252 2.252 0 00-2.25 2.25v16.5A2.252 2.252 0 006 22.5h12a2.252 2.252 0 002.25-2.25V3.75A2.252 2.252 0 0018 1.5H6z"}}),_c('path',{attrs:{"d":"M10.5 21a.75.75 0 01-.75-.75v-3H9a.75.75 0 01-.75-.75v-3A3.754 3.754 0 0112 9.75a3.754 3.754 0 013.75 3.75v3a.75.75 0 01-.75.75h-.75v3a.75.75 0 01-.75.75h-3zm2.25-1.5v-3a.75.75 0 01.75-.75h.75V13.5A2.252 2.252 0 0012 11.25a2.252 2.252 0 00-2.25 2.25v2.25h.75a.75.75 0 01.75.75v3h1.5zM12 9c-1.654 0-3-1.346-3-3s1.346-3 3-3 3 1.346 3 3-1.346 3-3 3zm0-4.5c-.827 0-1.5.673-1.5 1.5s.673 1.5 1.5 1.5 1.5-.673 1.5-1.5-.673-1.5-1.5-1.5z"}})])
          )
        }
      }
    