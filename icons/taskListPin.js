
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
            children.concat([_c('path',{attrs:{"d":"M4.5 24.011a2.252 2.252 0 01-2.25-2.25v-13.5a2.252 2.252 0 012.25-2.25h3.75a.75.75 0 010 1.5H4.5a.75.75 0 00-.75.75v13.5c0 .414.336.75.75.75h9.75v-3.75a2.252 2.252 0 012.25-2.25h3.75v-8.25a.75.75 0 00-.75-.75h-3.75a.75.75 0 010-1.5h3.75a2.252 2.252 0 012.25 2.25v9.879c0 .601-.234 1.166-.659 1.59l-3.622 3.622c-.425.425-.99.659-1.59.659H4.5zm11.379-1.5c.2 0 .388-.078.53-.219l3.622-3.622a.754.754 0 00.219-.53v-.129H16.5a.75.75 0 00-.75.75v3.75h.129z"}}),_c('path',{attrs:{"d":"M12 11.261a.75.75 0 01-.75-.75V5.913A3.016 3.016 0 019 3.011c0-1.654 1.346-3 3-3s3 1.346 3 3c0 1.37-.947 2.564-2.25 2.902v4.598a.75.75 0 01-.75.75zm0-9.75c-.827 0-1.5.673-1.5 1.5s.673 1.5 1.5 1.5 1.5-.673 1.5-1.5-.673-1.5-1.5-1.5zM6.75 15.011a.75.75 0 010-1.5h10.5a.75.75 0 010 1.5H6.75zM6.75 19.511a.75.75 0 010-1.5h4.5a.75.75 0 010 1.5h-4.5z"}})])
          )
        }
      }
    