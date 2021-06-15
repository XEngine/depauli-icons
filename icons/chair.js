
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
            children.concat([_c('path',{attrs:{"d":"M18.75 24a.75.75 0 01-.75-.75V18H6v5.25a.75.75 0 01-1.5 0v-5.379C3.615 17.558 3 16.71 3 15.75s.615-1.808 1.5-2.121V.75a.75.75 0 011.5 0v.75h12V.75a.75.75 0 011.5 0v12.879c.885.314 1.5 1.162 1.5 2.121s-.615 1.808-1.5 2.121v5.379a.75.75 0 01-.75.75zm-13.5-9a.75.75 0 000 1.5h13.5a.75.75 0 000-1.5H5.25zM18 13.5V12H6v1.5h12zm0-3V9H6v1.5h12zm0-3V6H6v1.5h12zm0-3V3H6v1.5h12z"}})])
          )
        }
      }
    