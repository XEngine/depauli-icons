
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
            children.concat([_c('path',{attrs:{"d":"M18.75 20.25a.75.75 0 010-1.5h3a.75.75 0 00.75-.75V6.75h-21V18c0 .414.336.75.75.75H6a.75.75 0 010 1.5H2.25A2.252 2.252 0 010 18V3A2.252 2.252 0 012.25.75h19.5A2.252 2.252 0 0124 3v15a2.252 2.252 0 01-2.25 2.25h-3zm3.75-15V3a.75.75 0 00-.75-.75H2.25A.75.75 0 001.5 3v2.25h21z"}}),_c('path',{attrs:{"d":"M13.5 23.25a.75.75 0 01-.75-.75V21h-1.5v1.5a.75.75 0 01-1.5 0V21H9a.75.75 0 01-.75-.75v-9A.75.75 0 019 10.5h.75V9a.75.75 0 011.5 0v1.5h1.5V9a.75.75 0 011.5 0v1.598A3.016 3.016 0 0116.5 13.5c0 .863-.38 1.685-1.019 2.25A3.017 3.017 0 0116.5 18c0 1.37-.947 2.564-2.25 2.902V22.5a.75.75 0 01-.75.75zm0-3.75c.827 0 1.5-.673 1.5-1.5s-.673-1.5-1.5-1.5H9.75v3h3.75zm0-4.5c.827 0 1.5-.673 1.5-1.5s-.673-1.5-1.5-1.5H9.75l3.75 3z"}})])
          )
        }
      }
    