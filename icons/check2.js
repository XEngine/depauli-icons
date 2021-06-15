
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
            children.concat([_c('path',{attrs:{"d":"M9.325 17.916a1.79 1.79 0 01-1.498-.799l-2.44-3.462a.75.75 0 011.227-.864l2.45 3.477a.306.306 0 00.261.148.294.294 0 00.236-.119l7.852-9.935a.75.75 0 011.175.93l-7.843 9.923a1.781 1.781 0 01-.423.396 1.78 1.78 0 01-.997.305z"}}),_c('path',{attrs:{"d":"M2.25 23.999A2.252 2.252 0 010 21.749v-19.5a2.252 2.252 0 012.25-2.25h19.5A2.252 2.252 0 0124 2.249v19.5a2.252 2.252 0 01-2.25 2.25H2.25zm0-22.5a.75.75 0 00-.75.75v19.5c0 .414.336.75.75.75h19.5a.75.75 0 00.75-.75v-19.5a.75.75 0 00-.75-.75H2.25z"}})])
          )
        }
      }
    