
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
            children.concat([_c('path',{attrs:{"d":"M10.247 24a2.252 2.252 0 01-2.25-2.25V8.25H5.258c-.645 0-.881-.426-.938-.557-.057-.131-.208-.594.231-1.066L10.664.461a1.478 1.478 0 011.08-.462 1.494 1.494 0 011.105.484l6.08 6.128c.456.491.304.954.248 1.085-.057.13-.293.556-.938.556h-2.742v13.5a2.252 2.252 0 01-2.25 2.25h-3zm-1.5-17.251a.75.75 0 01.75.75v14.25c0 .414.336.75.75.75h3a.75.75 0 00.75-.75V7.499a.75.75 0 01.75-.75h2.209l-5.219-5.261.01.01-5.206 5.251h2.206z"}})])
          )
        }
      }
    