
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
            children.concat([_c('circle',{attrs:{"cx":"18.75","cy":"8.25","r":"1.125"}}),_c('path',{attrs:{"d":"M14.5 12c-.552 0-1-.449-1-1V5.5c0-.551.448-1 1-1h.5v-.75C15 1.682 16.682 0 18.75 0s3.75 1.682 3.75 3.75v.75h.5c.552 0 1 .449 1 1V11c0 .551-.448 1-1 1h-8.5zm8-1.5V6H15v4.5h7.5zm-1.5-6v-.75c0-1.241-1.009-2.25-2.25-2.25S16.5 2.509 16.5 3.75v.75H21z"}}),_c('path',{attrs:{"d":"M2.25 24A2.252 2.252 0 010 21.75v-9a2.252 2.252 0 012.25-2.25H6V2.25A2.252 2.252 0 018.25 0h4.5a.75.75 0 010 1.5h-4.5a.75.75 0 00-.75.75v8.379A2.258 2.258 0 019 12.75v.75h8.25a2.252 2.252 0 012.25 2.25v3.75h2.25a.75.75 0 00.75-.75v-4.5a.75.75 0 011.5 0v4.5A2.252 2.252 0 0121.75 21H19.5v.75A2.252 2.252 0 0117.25 24h-15zm0-12a.75.75 0 00-.75.75v9c0 .414.336.75.75.75h15a.75.75 0 00.75-.75v-6a.75.75 0 00-.75-.75h-9a.75.75 0 01-.75-.75v-1.5a.75.75 0 00-.75-.75h-4.5z"}})])
          )
        }
      }
    