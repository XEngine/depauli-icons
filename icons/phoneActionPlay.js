
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
            children.concat([_c('path',{attrs:{"d":"M4.983 24A3.486 3.486 0 011.5 20.52V4.983A3.486 3.486 0 014.983 1.5H6.75a.75.75 0 010 1.5H4.983C3.89 3 3 3.89 3 4.983V18h10.5v-2.25a.75.75 0 011.5 0v4.768A3.486 3.486 0 0111.518 24H4.983zM3 20.518c0 1.093.89 1.982 1.982 1.982h6.535a1.985 1.985 0 001.983-1.982V19.5H3v1.018z"}}),_c('path',{attrs:{"d":"M11.25 13.5A2.252 2.252 0 019 11.25v-9A2.252 2.252 0 0111.25 0h9a2.252 2.252 0 012.25 2.25v9a2.252 2.252 0 01-2.25 2.25h-9zm0-12a.75.75 0 00-.75.75v9c0 .414.336.75.75.75h9a.75.75 0 00.75-.75v-9a.75.75 0 00-.75-.75h-9z"}}),_c('path',{attrs:{"d":"M14.68 9.75a1.177 1.177 0 01-1.013-.574 1.178 1.178 0 01-.168-.607L13.5 4.93a1.18 1.18 0 011.787-1.012l3.034 1.821a1.177 1.177 0 01.002 2.021l-3.037 1.821a1.172 1.172 0 01-.606.169zm.319-1.745l2.092-1.255L15 5.495l-.001 2.51z"}})])
          )
        }
      }
    