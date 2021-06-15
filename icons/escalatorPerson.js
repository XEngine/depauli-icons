
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
            children.concat([_c('path',{attrs:{"d":"M3 23.063c-1.654 0-3-1.346-3-3s1.346-3 3-3h3.257l8.121-8.121a2.98 2.98 0 012.121-.879H21c1.654 0 3 1.346 3 3s-1.346 3-3 3h-3.258l-8.121 8.121a2.986 2.986 0 01-2.12.879H3zm0-4.5c-.827 0-1.5.673-1.5 1.5s.673 1.5 1.5 1.5h4.5c.401 0 .777-.157 1.061-.44l8.341-8.34c.14-.14.333-.22.53-.22H21c.827 0 1.5-.673 1.5-1.5s-.673-1.5-1.5-1.5h-4.5a1.49 1.49 0 00-1.061.44l-8.341 8.341a.744.744 0 01-.53.22H3zM8.25 6.938c-1.654 0-3-1.346-3-3s1.346-3 3-3 3 1.346 3 3-1.346 3-3 3zm0-4.5c-.827 0-1.5.673-1.5 1.5s.673 1.5 1.5 1.5 1.5-.673 1.5-1.5-.673-1.5-1.5-1.5z"}}),_c('path',{attrs:{"d":"M6 14.813a.75.75 0 01-.75-.75v-3.75c0-1.654 1.346-3 3-3s3 1.346 3 3a.75.75 0 01-1.5 0c0-.827-.673-1.5-1.5-1.5s-1.5.673-1.5 1.5v3.75a.75.75 0 01-.75.75z"}})])
          )
        }
      }
    