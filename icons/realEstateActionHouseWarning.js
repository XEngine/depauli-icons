
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
            children.concat([_c('path',{attrs:{"d":"M5.251 20.248a2.252 2.252 0 01-2.25-2.25v-7.5a.75.75 0 011.5 0v7.5c0 .414.336.75.75.75h3a.75.75 0 010 1.5h-3zM.752 9.748a.75.75 0 01-.485-1.323L9.048.995a2.255 2.255 0 011.453-.534c.53 0 1.046.19 1.454.534l7.284 6.164a.746.746 0 01.088 1.057.751.751 0 01-1.057.088L10.986 2.14a.749.749 0 00-.969-.001L1.236 9.57a.747.747 0 01-.484.178zM18.751 5.248a.75.75 0 01-.75-.75v-2.25h-2.25a.75.75 0 010-1.5h3a.75.75 0 01.75.75v3a.75.75 0 01-.75.75z"}}),_c('circle',{attrs:{"cx":"17.251","cy":"19.873","r":"1.125"}}),_c('path',{attrs:{"d":"M17.251 17.998a.75.75 0 01-.75-.75v-3a.75.75 0 011.5 0v3a.75.75 0 01-.75.75z"}}),_c('path',{attrs:{"d":"M13.025 23.248a2.528 2.528 0 01-2.258-3.654l4.226-8.451a2.513 2.513 0 012.262-1.396c.393 0 .771.089 1.124.266.485.242.887.644 1.13 1.13l4.226 8.451a2.51 2.51 0 01.138 1.927 2.51 2.51 0 01-1.265 1.46c-.349.175-.74.267-1.13.267h-8.453zm4.229-12.001a1.02 1.02 0 00-.918.566l-4.226 8.451a1.025 1.025 0 00.915 1.483h8.452a1.025 1.025 0 00.916-1.482l-4.226-8.451a1.032 1.032 0 00-.913-.567z"}})])
          )
        }
      }
    