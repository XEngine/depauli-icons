
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
            children.concat([_c('path',{attrs:{"d":"M12.001 21.999a1.488 1.488 0 01-1.163-.551 1.5 1.5 0 01-.338-.963V17.5h-9a1.49 1.49 0 01-1.063-.445A1.491 1.491 0 010 15.991V8.506a1.485 1.485 0 01.437-1.061A1.494 1.494 0 011.497 7H10.5V4.008a1.478 1.478 0 01.43-1.057 1.49 1.49 0 011.055-.449c.359.002.699.123.963.339l10.488 8.233a1.515 1.515 0 01.218 2.139c-.062.074-.13.143-.204.204L12.936 21.67c-.257.21-.591.329-.935.329zM1.5 15.994l9.75.006a.75.75 0 01.75.75v3.742l10.51-8.245-10.5-8.236L12 7.75a.75.75 0 01-.75.75H1.503L1.5 15.994z"}})])
          )
        }
      }
    