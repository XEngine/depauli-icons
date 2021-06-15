
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
            children.concat([_c('path',{attrs:{"d":"M7.978 21.75c-1.654 0-3-1.346-3-3s1.346-3 3-3h2.511l-7.61-7.607a2.979 2.979 0 01-.88-2.122c0-.801.313-1.554.879-2.12A2.98 2.98 0 015 3.021c.803 0 1.556.313 2.122.88l7.606 7.606V9c0-1.654 1.346-3 3-3s3 1.346 3 3v9.75c0 1.654-1.346 3-3 3h-9.75zm0-4.5c-.827 0-1.5.673-1.5 1.5s.673 1.5 1.5 1.5h9.75c.827 0 1.5-.673 1.5-1.5V9c0-.827-.673-1.5-1.5-1.5s-1.5.673-1.5 1.5v4.318a.75.75 0 01-1.281.53L6.06 4.961A1.491 1.491 0 005 4.521c-.401 0-.777.156-1.06.439a1.498 1.498 0 00-.002 2.121l8.892 8.888a.749.749 0 01-.53 1.281H7.978z"}})])
          )
        }
      }
    