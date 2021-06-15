
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
            children.concat([_c('path',{attrs:{"d":"M17.248 23.998a.75.75 0 01-.75-.75v-6a.75.75 0 011.5 0v5.25h.322a17.328 17.328 0 004.153-10.328A17.313 17.313 0 0019.26 1.186a.751.751 0 011.219-.875 18.817 18.817 0 013.493 11.939 18.92 18.92 0 01-3.727 10.248h3.003a.75.75 0 010 1.5h-6zM6.748 8.998a.75.75 0 01-.75-.75v-1.5a.75.75 0 011.5 0v1.5a.75.75 0 01-.75.75zM8.248 16.498a.75.75 0 01-.75-.75v-1.5a.75.75 0 011.5 0v1.5a.75.75 0 01-.75.75z"}}),_c('path',{attrs:{"d":"M.748 19.498a.75.75 0 010-1.5H9c1.654 0 3-1.346 3-3s-1.346-3-3-3H.748a.75.75 0 010-1.5H7.5c1.654 0 3-1.346 3-3s-1.346-3-3-3H.748a.75.75 0 010-1.5H7.5c2.481 0 4.5 2.019 4.5 4.5a4.481 4.481 0 01-1.43 3.285 4.501 4.501 0 012.93 4.215c0 2.481-2.019 4.5-4.5 4.5H.748z"}})])
          )
        }
      }
    