
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
            children.concat([_c('path',{attrs:{"d":"M5.25 22.5a3.754 3.754 0 01-3.75-3.75v-9a.75.75 0 011.5 0v9A2.252 2.252 0 005.25 21h13.5A2.252 2.252 0 0021 18.75v-9a.75.75 0 011.5 0v9a3.754 3.754 0 01-3.75 3.75H5.25zM.75 7.5A.75.75 0 010 6.75v-3A2.252 2.252 0 012.25 1.5h19.5A2.252 2.252 0 0124 3.75v3a.75.75 0 01-.75.75H.75zM22.5 6V3.75a.75.75 0 00-.75-.75H2.25a.75.75 0 00-.75.75V6h21z"}}),_c('path',{attrs:{"d":"M10.5 13.5a2.252 2.252 0 01-2.25-2.25A2.252 2.252 0 0110.5 9h3a2.252 2.252 0 012.25 2.25 2.252 2.252 0 01-2.25 2.25h-3zm0-3a.75.75 0 000 1.5h3a.75.75 0 000-1.5h-3z"}})])
          )
        }
      }
    