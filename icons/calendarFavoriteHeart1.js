
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
            children.concat([_c('path',{attrs:{"d":"M17.251 24a.753.753 0 01-.541-.231l-5.114-5.334a3.76 3.76 0 01-.695-4.348 3.75 3.75 0 012.182-1.893 3.743 3.743 0 012.882.204c.364.182.694.42.981.708l.305.305.305-.305c.712-.712 1.66-1.104 2.67-1.104s1.958.392 2.67 1.104a3.773 3.773 0 010 5.34l-5.103 5.323a.755.755 0 01-.542.231zM14.28 13.5c-.244 0-.487.04-.722.118a2.254 2.254 0 00-1.315 1.141 2.27 2.27 0 00.425 2.627l4.584 4.781 4.573-4.77a2.285 2.285 0 00.012-3.23c-.429-.429-1.001-.665-1.609-.665s-1.18.236-1.609.665l-.835.835a.744.744 0 01-1.06 0l-.835-.835a2.281 2.281 0 00-1.609-.667z"}}),_c('path',{attrs:{"d":"M2.251 18a2.252 2.252 0 01-2.25-2.25V3.765a2.252 2.252 0 012.25-2.25h2.243V.75a.75.75 0 011.5 0v.765h6V.75a.75.75 0 011.5 0v.765h2.257a2.252 2.252 0 012.25 2.25V8.25a.75.75 0 01-1.5 0V7.5h-15v8.25c0 .414.336.75.75.75h6a.75.75 0 010 1.5h-6zm14.25-12V3.765a.75.75 0 00-.75-.75h-2.257v.735a.75.75 0 01-1.5 0v-.735h-6v.735a.75.75 0 01-1.5 0v-.735H2.251a.75.75 0 00-.75.75V6h15z"}})])
          )
        }
      }
    