
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
            children.concat([_c('path',{attrs:{"d":"M5.997 22.5a.75.75 0 010-1.5h1.615l.5-3H2.247a2.252 2.252 0 01-2.25-2.25v-12a2.252 2.252 0 012.25-2.25h19.5a2.252 2.252 0 012.25 2.25v12a2.252 2.252 0 01-2.25 2.25h-5.865l.5 3h1.615a.75.75 0 010 1.5h-12zm8.865-1.5l-.5-3h-4.73l-.5 3h5.73zM2.247 3a.75.75 0 00-.75.75v12c0 .414.336.75.75.75h19.5a.75.75 0 00.75-.75v-12a.75.75 0 00-.75-.75h-19.5z"}})])
          )
        }
      }
    