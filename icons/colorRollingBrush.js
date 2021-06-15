
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
            children.concat([_c('path',{attrs:{"d":"M11.625 24a2.252 2.252 0 01-2.25-2.25V16.5c0-1.37.947-2.564 2.25-2.902v-.848a.75.75 0 00-.75-.75h-8.25a2.252 2.252 0 01-2.25-2.25V6a2.252 2.252 0 012.25-2.25h.75v-1.5A2.252 2.252 0 015.625 0h13.5a2.252 2.252 0 012.25 2.25v1.5h1.5a.75.75 0 010 1.5h-1.5v1.5A2.252 2.252 0 0119.125 9h-13.5a2.252 2.252 0 01-2.25-2.25v-1.5h-.75a.75.75 0 00-.75.75v3.75c0 .414.336.75.75.75h8.25a2.252 2.252 0 012.25 2.25v.848a3.016 3.016 0 012.25 2.902v5.25a2.252 2.252 0 01-2.25 2.25h-1.5zm.75-9c-.827 0-1.5.673-1.5 1.5v5.25c0 .414.336.75.75.75h1.5a.75.75 0 00.75-.75V16.5c0-.827-.673-1.5-1.5-1.5zM5.625 1.5a.75.75 0 00-.75.75v4.5c0 .414.336.75.75.75h13.5a.75.75 0 00.75-.75v-4.5a.75.75 0 00-.75-.75h-13.5z"}})])
          )
        }
      }
    