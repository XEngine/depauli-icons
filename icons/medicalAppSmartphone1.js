
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
            children.concat([_c('path',{attrs:{"d":"M4.233 24A3.486 3.486 0 01.75 20.52V4.983c0-.928.362-1.803 1.02-2.461S3.302 1.5 4.231 1.5H9A.75.75 0 019 3H4.233a1.97 1.97 0 00-1.402.582 1.968 1.968 0 00-.581 1.401v13.036h10.5v-.769a.75.75 0 011.5 0v3.267c0 .93-.362 1.804-1.019 2.462A3.458 3.458 0 0110.769 24H4.233zM2.25 20.517c0 1.093.89 1.983 1.982 1.983h6.535a1.97 1.97 0 001.402-.582 1.97 1.97 0 00.581-1.401v-.998H2.25v.998z"}}),_c('path',{attrs:{"d":"M14.25 15c-.827 0-1.5-.673-1.5-1.5v-3h-3c-.827 0-1.5-.673-1.5-1.5V6c0-.827.673-1.5 1.5-1.5h3v-3c0-.827.673-1.5 1.5-1.5h3c.827 0 1.5.673 1.5 1.5v3h3c.827 0 1.5.673 1.5 1.5v3c0 .827-.673 1.5-1.5 1.5h-3v3c0 .827-.673 1.5-1.5 1.5h-3zm-4.5-6h3.75a.75.75 0 01.75.75v3.75h3V9.75A.75.75 0 0118 9h3.75V6H18a.75.75 0 01-.75-.75V1.5h-3v3.75a.75.75 0 01-.75.75H9.75v3z"}})])
          )
        }
      }
    