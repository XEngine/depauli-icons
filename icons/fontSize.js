
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
            children.concat([_c('path',{attrs:{"d":"M23.25 22.5a.75.75 0 01-.75-.75v-3.751h-6v3.75a.75.75 0 01-1.5 0V13.5c0-2.481 2.019-4.5 4.5-4.5s4.5 2.019 4.5 4.5v8.25a.75.75 0 01-.75.75zm-.75-6.001V13.5c0-1.654-1.346-3-3-3s-3 1.346-3 3v2.999h6zM11.25 22.5a.75.75 0 01-.75-.75v-8.251h-9v8.25a.75.75 0 01-1.5 0V7.5c0-3.308 2.692-6 6-6s6 2.692 6 6v14.25a.75.75 0 01-.75.75zm-.75-10.501V7.5C10.5 5.019 8.481 3 6 3S1.5 5.019 1.5 7.5v4.499h9z"}})])
          )
        }
      }
    