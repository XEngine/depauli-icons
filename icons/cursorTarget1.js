
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
            children.concat([_c('path',{attrs:{"d":"M12.002 23.997a.75.75 0 01-.75-.75v-2.282c-4.34-.363-7.855-3.879-8.217-8.218H.752a.75.75 0 010-1.5h2.283c.364-4.339 3.879-7.853 8.217-8.216V.747a.75.75 0 011.5 0v2.284c4.339.363 7.854 3.878 8.217 8.216h2.283a.75.75 0 010 1.5H20.97c-.363 4.34-3.878 7.855-8.218 8.218v2.282a.75.75 0 01-.75.75zM4.54 12.747c.354 3.51 3.202 6.358 6.712 6.713v-2.213a.75.75 0 011.5 0v2.213c3.51-.355 6.357-3.202 6.712-6.713h-2.212a.75.75 0 010-1.5h2.212c-.355-3.51-3.202-6.356-6.712-6.711v2.211a.75.75 0 01-1.5 0V4.536c-3.51.355-6.357 3.201-6.712 6.711h2.212a.75.75 0 010 1.5H4.54z"}})])
          )
        }
      }
    