
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
            children.concat([_c('path',{attrs:{"d":"M5.26 19.503a2.252 2.252 0 01-2.25-2.25v-10.5a2.252 2.252 0 012.25-2.25h13.5a2.252 2.252 0 012.25 2.25v10.5a2.252 2.252 0 01-2.25 2.25H5.26zm-.75-2.25c0 .414.336.75.75.75h13.5a.75.75 0 00.75-.75v-6.75h-15v6.75zm15-8.25v-2.25a.75.75 0 00-.75-.75H5.26a.75.75 0 00-.75.75v2.25h15z"}})])
          )
        }
      }
    