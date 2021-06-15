
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
            children.concat([_c('path',{attrs:{"d":"M4.5 9C2.019 9 0 6.981 0 4.5S2.019 0 4.5 0 9 2.019 9 4.5 6.981 9 4.5 9zm0-7.5c-1.654 0-3 1.346-3 3s1.346 3 3 3 3-1.346 3-3-1.346-3-3-3zM11.25 16.5c-1.654 0-3-1.346-3-3s1.346-3 3-3 3 1.346 3 3-1.346 3-3 3zm0-4.5c-.827 0-1.5.673-1.5 1.5s.673 1.5 1.5 1.5 1.5-.673 1.5-1.5-.673-1.5-1.5-1.5zM11.25 2.25a.75.75 0 010-1.5h12a.75.75 0 010 1.5h-12zM11.25 5.25a.75.75 0 010-1.5H18a.75.75 0 010 1.5h-6.75zM16.5 12.75a.75.75 0 010-1.5h6.75a.75.75 0 010 1.5H16.5zM16.5 15.75a.75.75 0 010-1.5h3a.75.75 0 010 1.5h-3zM11.25 24c-1.654 0-3-1.346-3-3s1.346-3 3-3 3 1.346 3 3-1.346 3-3 3zm0-4.5c-.827 0-1.5.673-1.5 1.5s.673 1.5 1.5 1.5 1.5-.673 1.5-1.5-.673-1.5-1.5-1.5zM16.5 20.25a.75.75 0 010-1.5h6.75a.75.75 0 010 1.5H16.5zM16.5 23.25a.75.75 0 010-1.5h3a.75.75 0 010 1.5h-3zM11.25 8.25a.75.75 0 010-1.5H21a.75.75 0 010 1.5h-9.75zM6 13.5a.75.75 0 01-.75-.75v-1.5a.75.75 0 011.5 0v1.5a.75.75 0 01-.75.75zM6 18a.75.75 0 01-.75-.75v-1.5a.75.75 0 011.5 0v1.5A.75.75 0 016 18zM6 22.5a.75.75 0 01-.75-.75v-1.5a.75.75 0 011.5 0v1.5a.75.75 0 01-.75.75z"}})])
          )
        }
      }
    