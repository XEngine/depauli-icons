
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
            children.concat([_c('path',{attrs:{"d":"M2.25 19.5A2.252 2.252 0 010 17.25v-15A2.252 2.252 0 012.25 0h16.5A2.252 2.252 0 0121 2.25v6a.75.75 0 01-1.5 0v-6a.75.75 0 00-.75-.75H2.25a.75.75 0 00-.75.75v15c0 .414.336.75.75.75h6a.75.75 0 010 1.5h-6z"}}),_c('path',{attrs:{"d":"M6.375 15.75a2.628 2.628 0 01-2.625-2.625A2.629 2.629 0 016.375 10.5c.392 0 .776.089 1.125.255V6.331c0-.97.618-1.828 1.539-2.135l4.536-1.261c.206-.069.44-.107.676-.107A2.247 2.247 0 0116.5 5.081V8.25a.75.75 0 01-1.5 0V5.081a.752.752 0 00-.751-.75.73.73 0 00-.236.039L9.477 5.631c-.273.091-.477.382-.477.7v6.794a2.628 2.628 0 01-2.625 2.625zm0-3.75c-.62 0-1.125.505-1.125 1.125s.505 1.125 1.125 1.125S7.5 13.745 7.5 13.125 6.995 12 6.375 12z"}}),_c('path',{attrs:{"d":"M17.25 24c-3.722 0-6.75-3.028-6.75-6.75s3.028-6.75 6.75-6.75S24 13.528 24 17.25 20.972 24 17.25 24zm0-12C14.355 12 12 14.355 12 17.25s2.355 5.25 5.25 5.25 5.25-2.355 5.25-5.25S20.145 12 17.25 12z"}}),_c('path',{attrs:{"d":"M17.25 21a.767.767 0 01-.258-.046l-.017-.006a.748.748 0 01-.256-.167l-2.25-2.25a.752.752 0 01.53-1.281c.2 0 .389.078.53.22l.97.97v-4.19a.75.75 0 011.501 0v4.189l.97-.97a.744.744 0 011.06 0 .752.752 0 010 1.061l-2.25 2.25a.74.74 0 01-.245.163l-.026.01a.73.73 0 01-.259.047z"}})])
          )
        }
      }
    