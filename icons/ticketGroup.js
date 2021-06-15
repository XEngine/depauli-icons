
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
            children.concat([_c('path',{attrs:{"d":"M5.25 10.5c-.827 0-1.5-.673-1.5-1.5V6.75c0-.414.336-.75.75-.75a.75.75 0 000-1.5.75.75 0 01-.75-.75V1.5c0-.827.673-1.5 1.5-1.5h13.5c.827 0 1.5.673 1.5 1.5v2.25c0 .414-.336.75-.75.75a.75.75 0 000 1.5.75.75 0 01.75.75V9c0 .827-.673 1.5-1.5 1.5H5.25zm0-1.5h13.5V7.371c-.885-.314-1.5-1.162-1.5-2.121s.615-1.808 1.5-2.121V1.5H5.25v1.629a2.26 2.26 0 011.5 2.121c0 .96-.615 1.808-1.5 2.121V9z"}}),_c('path',{attrs:{"d":"M9 7.5a.75.75 0 01-.75-.75v-3a.75.75 0 011.5 0v3A.75.75 0 019 7.5zM19.5 18.75c-1.654 0-3-1.346-3-3s1.346-3 3-3 3 1.346 3 3-1.346 3-3 3zm0-4.5c-.827 0-1.5.673-1.5 1.5s.673 1.5 1.5 1.5 1.5-.673 1.5-1.5-.673-1.5-1.5-1.5zM23.25 24a.75.75 0 01-.75-.75c0-1.654-1.346-3-3-3s-3 1.346-3 3a.75.75 0 01-1.5 0c0-1.654-1.346-3-3-3s-3 1.346-3 3a.75.75 0 01-1.5 0c0-1.654-1.346-3-3-3s-3 1.346-3 3a.75.75 0 01-1.5 0c0-2.481 2.019-4.5 4.5-4.5 1.517 0 2.924.775 3.75 2.022.826-1.247 2.233-2.022 3.75-2.022s2.924.775 3.75 2.022a4.511 4.511 0 013.75-2.022c2.481 0 4.5 2.019 4.5 4.5a.75.75 0 01-.75.75zM12 18.75c-1.654 0-3-1.346-3-3s1.346-3 3-3 3 1.346 3 3-1.346 3-3 3zm0-4.5c-.827 0-1.5.673-1.5 1.5s.673 1.5 1.5 1.5 1.5-.673 1.5-1.5-.673-1.5-1.5-1.5zM4.5 18.75c-1.654 0-3-1.346-3-3s1.346-3 3-3 3 1.346 3 3-1.346 3-3 3zm0-4.5c-.827 0-1.5.673-1.5 1.5s.673 1.5 1.5 1.5 1.5-.673 1.5-1.5-.673-1.5-1.5-1.5z"}})])
          )
        }
      }
    