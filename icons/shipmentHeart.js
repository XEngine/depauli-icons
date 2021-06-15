
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
            children.concat([_c('path',{attrs:{"d":"M17.251 24a.753.753 0 01-.541-.231l-5.114-5.335a3.761 3.761 0 01-.696-4.346 3.752 3.752 0 012.184-1.893 3.738 3.738 0 012.883.206c.363.182.693.42.981.707l.305.305.305-.305a3.75 3.75 0 012.67-1.105c1.01 0 1.958.392 2.67 1.105a3.769 3.769 0 01-.001 5.339l-5.103 5.324a.764.764 0 01-.543.229zM14.28 13.499c-.244 0-.487.04-.722.118a2.272 2.272 0 00-.889 3.767l4.584 4.781 4.573-4.77a2.28 2.28 0 00.012-3.228c-.429-.429-1.001-.666-1.609-.666s-1.18.236-1.609.666l-.835.835a.744.744 0 01-1.06 0l-.835-.835a2.276 2.276 0 00-1.61-.668z"}}),_c('path',{attrs:{"d":"M2.252 19.5a2.252 2.252 0 01-2.25-2.25V6.75c0-.596.231-1.156.651-1.58L3.43 1.002A2.246 2.246 0 015.301 0h8.9a2.248 2.248 0 011.869 1.002l2.781 4.168c.42.425.65.984.65 1.58v1.5a.75.75 0 01-1.5 0v-1.5a.75.75 0 00-.75-.75h-15a.75.75 0 00-.75.75v10.5c0 .414.336.75.75.75h6a.75.75 0 010 1.5H2.252zm14.349-15l-1.778-2.666A.75.75 0 0014.2 1.5h-3.699v3h6.1zm-7.599 0v-3h-3.7a.75.75 0 00-.624.334L2.901 4.5h6.101z"}})])
          )
        }
      }
    