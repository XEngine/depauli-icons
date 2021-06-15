
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
            children.concat([_c('path',{attrs:{"d":"M17.252 24a.753.753 0 01-.541-.231l-5.114-5.335a3.76 3.76 0 01-.695-4.347 3.75 3.75 0 012.182-1.893 3.743 3.743 0 012.882.204c.364.182.695.42.982.708l.304.305.305-.305a3.75 3.75 0 012.669-1.104 3.77 3.77 0 013.376 2.085 3.769 3.769 0 01-.707 4.357l-5.102 5.324a.75.75 0 01-.541.232zM14.28 13.5c-.244 0-.487.04-.722.118a2.26 2.26 0 00-1.315 1.141 2.269 2.269 0 00.425 2.626l4.584 4.781 4.572-4.77a2.282 2.282 0 00.01-3.23 2.258 2.258 0 00-1.607-.664c-.609 0-1.18.236-1.609.665l-.835.835a.744.744 0 01-1.06 0l-.835-.835a2.248 2.248 0 00-.592-.426 2.26 2.26 0 00-1.016-.241z"}}),_c('path',{attrs:{"d":"M3.751 24a.746.746 0 01-.75-.75V19.5h-.75a2.252 2.252 0 01-2.25-2.25v-15C.001 1.009 1.011 0 2.251 0h19.5a2.252 2.252 0 012.25 2.25v7.5a.75.75 0 01-1.5 0v-7.5a.75.75 0 00-.75-.75h-19.5a.75.75 0 00-.75.75v15c0 .414.336.75.75.75h1.5a.75.75 0 01.75.75v3l4.05-3.038a.753.753 0 011.193.706.742.742 0 01-.293.494l-5.25 3.938a.753.753 0 01-.45.15z"}})])
          )
        }
      }
    