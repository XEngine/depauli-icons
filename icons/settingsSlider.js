
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
            children.concat([_c('path',{attrs:{"d":"M2.251 24a2.252 2.252 0 01-2.25-2.25V2.25A2.252 2.252 0 012.251 0h19.5a2.252 2.252 0 012.25 2.25v19.5a2.252 2.252 0 01-2.25 2.25h-19.5zm0-22.5a.75.75 0 00-.75.75v19.5c0 .414.336.75.75.75h19.5a.75.75 0 00.75-.75V2.25a.75.75 0 00-.75-.75h-19.5z"}}),_c('path',{attrs:{"d":"M10.501 18.75a3.016 3.016 0 01-2.902-2.25H5.251a.75.75 0 010-1.5H7.6a3.014 3.014 0 012.9-2.25c1.371 0 2.565.947 2.903 2.25h5.348a.75.75 0 010 1.5h-5.348a3.016 3.016 0 01-2.902 2.25zm-.001-4.5a1.501 1.501 0 00.001 3c.827 0 1.5-.673 1.5-1.5s-.673-1.5-1.501-1.5v-.375.375zM16.5 11.25A3.017 3.017 0 0113.6 9H5.251a.75.75 0 010-1.5h8.348a3.016 3.016 0 012.902-2.25c1.654 0 3 1.346 3 3a3.005 3.005 0 01-3.001 3zm.001-4.5c-.827 0-1.5.673-1.5 1.5s.673 1.5 1.5 1.5 1.5-.673 1.5-1.5-.673-1.5-1.5-1.5z"}})])
          )
        }
      }
    