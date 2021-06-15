
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
            children.concat([_c('path',{attrs:{"d":"M11.25 24a.753.753 0 01-.33-.076.756.756 0 01-.42-.674v-8.689l-4.72 4.72a.744.744 0 01-1.06 0 .744.744 0 010-1.06l5.78-5.78v-.468L4.736 6.546a.744.744 0 01-.236-.523.752.752 0 011.264-.569L10.5 9.911V.75c0-.284.165-.549.42-.674a.751.751 0 01.79.082l6.75 5.25a.749.749 0 01.069 1.123l-5.635 5.635 5.619 5.288a.752.752 0 01-.054 1.139l-6.75 5.25a.752.752 0 01-.459.157zm.75-2.284l4.848-3.771L12 13.383v8.333zm0-10.777l4.869-4.869L12 2.283v8.656z"}}),_c('path',{attrs:{"d":"M3 15.75c-1.654 0-3-1.346-3-3s1.346-3 3-3 3 1.346 3 3-1.346 3-3 3zm0-4.5c-.827 0-1.5.673-1.5 1.5s.673 1.5 1.5 1.5 1.5-.673 1.5-1.5-.673-1.5-1.5-1.5zM21 15.75c-1.654 0-3-1.346-3-3s1.346-3 3-3 3 1.346 3 3-1.346 3-3 3zm0-4.5c-.827 0-1.5.673-1.5 1.5s.673 1.5 1.5 1.5 1.5-.673 1.5-1.5-.673-1.5-1.5-1.5z"}})])
          )
        }
      }
    