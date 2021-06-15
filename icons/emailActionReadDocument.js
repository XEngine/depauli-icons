
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
            children.concat([_c('path',{attrs:{"d":"M3 24.002a2.252 2.252 0 01-2.25-2.25v-9.7a1.502 1.502 0 011.5-1.499h.029c.313 0 .643.119.903.325l.568.451V2.25A2.252 2.252 0 016 0h12a2.252 2.252 0 012.25 2.25v9.078l.568-.45c.264-.209.595-.324.931-.324.462 0 .89.207 1.177.568.209.264.324.594.325.93v9.701a2.252 2.252 0 01-2.25 2.25H3zm-.75-2.25c0 .414.336.75.75.75h18a.75.75 0 00.75-.75v-9.7l-7.431 5.894a3.771 3.771 0 01-2.32.805 3.768 3.768 0 01-2.316-.803L2.25 12.053v9.699zm8.363-4.981c.4.313.88.48 1.386.48.508 0 .989-.167 1.39-.482l5.36-4.251V2.25a.75.75 0 00-.75-.75H6a.75.75 0 00-.75.75v10.268l5.363 4.253z"}}),_c('path',{attrs:{"d":"M8.25 6a.75.75 0 010-1.5h3a.75.75 0 010 1.5h-3zM8.25 9a.75.75 0 010-1.5h7.5a.75.75 0 010 1.5h-7.5zM8.25 12a.75.75 0 010-1.5h7.5a.75.75 0 010 1.5h-7.5z"}})])
          )
        }
      }
    