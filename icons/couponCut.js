
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
            children.concat([_c('path',{attrs:{"d":"M4.5 24A4.505 4.505 0 010 19.5c0-1.703.946-3.237 2.47-4.011L8.217 12 2.478 8.514A4.474 4.474 0 010 4.5C0 2.019 2.019 0 4.5 0S9 2.019 9 4.5c0 1.997-1.331 3.723-3.171 4.295l3.833 2.327 13.199-8.013a.751.751 0 011.031.252.75.75 0 01-.252 1.03L11.107 12l2.278 1.383a.75.75 0 01-.778 1.282l-2.945-1.788-3.834 2.328C7.669 15.777 9 17.502 9 19.5 9 21.981 6.981 24 4.5 24zm0-7.5c-1.654 0-3 1.346-3 3s1.346 3 3 3 3-1.346 3-3-1.346-3-3-3zm0-15c-1.654 0-3 1.346-3 3s1.346 3 3 3 3-1.346 3-3-1.346-3-3-3zM21.75 18a.75.75 0 010-1.5h1.5a.75.75 0 010 1.5h-1.5zM17.25 18a.75.75 0 010-1.5h1.5a.75.75 0 010 1.5h-1.5z"}}),_c('path',{attrs:{"d":"M12.75 18a.75.75 0 010-1.5h1.5a.75.75 0 010 1.5h-1.5z"}})])
          )
        }
      }
    