
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
            children.concat([_c('path',{attrs:{"d":"M5.25 20.996A2.252 2.252 0 013 18.746v-16.5a2.252 2.252 0 012.25-2.25h16.5A2.252 2.252 0 0124 2.246v16.5a2.252 2.252 0 01-2.25 2.25H5.25zm0-19.5a.75.75 0 00-.75.75v16.5c0 .414.336.75.75.75h16.5a.75.75 0 00.75-.75v-16.5a.75.75 0 00-.75-.75H5.25z"}}),_c('path',{attrs:{"d":"M2.25 23.996A2.252 2.252 0 010 21.746v-18a.75.75 0 011.5 0v18c0 .414.336.75.75.75h18a.75.75 0 010 1.5h-18z"}}),_c('path',{attrs:{"d":"M9.75 14.996a.75.75 0 010-1.5h.75V7.5L8.7 8.85a.753.753 0 01-1.193-.706.75.75 0 01.293-.494L9.6 6.3c.258-.192.575-.298.895-.299.403 0 .779.155 1.062.437.284.283.441.659.443 1.06v5.998h.75a.75.75 0 010 1.5h-3zM16.5 15c-1.654 0-3-1.346-3-3V9c0-1.654 1.346-3 3-3s3 1.346 3 3v3c0 1.654-1.346 3-3 3zm0-7.5c-.827 0-1.5.673-1.5 1.5v3c0 .827.673 1.5 1.5 1.5S18 12.827 18 12V9c0-.827-.673-1.5-1.5-1.5z"}})])
          )
        }
      }
    