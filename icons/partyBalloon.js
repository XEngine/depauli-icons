
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
            children.concat([_c('path',{attrs:{"d":"M18.75 24a.75.75 0 01-.75-.75v-3a.75.75 0 00-1.5 0 2.252 2.252 0 01-2.25 2.25h-1.5a2.252 2.252 0 01-2.25-2.25v-.755H9.466a1.496 1.496 0 01-1.342-2.17l.312-.625A8.504 8.504 0 013 8.614C2.893 3.99 6.585.12 11.23.001c4.671.119 8.372 3.993 8.269 8.635a8.502 8.502 0 01-5.433 8.065l.312.625a1.5 1.5 0 01-1.342 2.17H12v.755c0 .414.336.75.75.75h1.5a.75.75 0 00.75-.75C15 19.01 16.009 18 17.25 18s2.25 1.009 2.25 2.25v3a.75.75 0 01-.75.75zM11.24 1.5c-3.806.104-6.829 3.29-6.741 7.108a7.055 7.055 0 005.192 6.929.748.748 0 01.474 1.059l-.7 1.4h3.572l-.7-1.4a.748.748 0 01.473-1.059 7.038 7.038 0 005.188-6.9v-.029c.09-3.818-2.942-7.004-6.758-7.108z"}})])
          )
        }
      }
    