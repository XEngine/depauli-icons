
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
            children.concat([_c('path',{attrs:{"d":"M15.75 24a2.252 2.252 0 01-2.25-2.25v-4.5c0-.96.615-1.808 1.5-2.121v-.879c0-2.068 1.682-3.75 3.75-3.75s3.75 1.682 3.75 3.75v.879A2.26 2.26 0 0124 17.25v4.5A2.252 2.252 0 0121.75 24h-6zm0-7.5a.75.75 0 00-.75.75v4.5c0 .414.336.75.75.75h6a.75.75 0 00.75-.75v-4.5a.75.75 0 00-.75-.75h-6zM21 15v-.75c0-1.241-1.009-2.25-2.25-2.25s-2.25 1.009-2.25 2.25L21 15z"}}),_c('circle',{attrs:{"cx":"18.75","cy":"19.53","r":"1.125"}}),_c('path',{attrs:{"d":"M2.25 18A2.252 2.252 0 010 15.75V3.765a2.252 2.252 0 012.25-2.25h2.243V.75a.75.75 0 011.5 0v.765h6V.75a.75.75 0 011.5 0v.765h2.257A2.252 2.252 0 0118 3.765V8.25a.75.75 0 01-1.5 0V7.5h-15v8.25c0 .414.336.75.75.75h6a.75.75 0 010 1.5h-6zM16.5 6V3.765a.75.75 0 00-.75-.75h-2.257v.735a.75.75 0 01-1.5 0v-.735h-6v.735a.75.75 0 01-1.5 0v-.735H2.25a.75.75 0 00-.75.75V6h15z"}})])
          )
        }
      }
    