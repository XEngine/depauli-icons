
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
            children.concat([_c('path',{attrs:{"d":"M12.132 12c-.9 0-1.632-.732-1.632-1.632V1.632c0-.9.732-1.632 1.632-1.632h10.236C23.268 0 24 .732 24 1.632v8.736c0 .9-.732 1.632-1.632 1.632H12.132zm0-10.5a.132.132 0 00-.132.132v8.736c0 .073.059.132.132.132h10.236a.132.132 0 00.132-.132V1.632a.132.132 0 00-.132-.132H19.5V6a.75.75 0 01-.75.75h-3A.75.75 0 0115 6V1.5h-2.868zM18 5.25V1.5h-1.5v3.75H18z"}}),_c('path',{attrs:{"d":"M6.75 24a.75.75 0 010-1.5h1.5V21H2.4A2.321 2.321 0 010 18.787V9.75a2.344 2.344 0 012.433-2.249L8.25 7.5a.75.75 0 010 1.5H2.4l-.064-.002a.834.834 0 00-.837.789L1.5 15.75h15v-1.5a.75.75 0 011.5 0v4.5A2.252 2.252 0 0115.75 21h-6v1.5h1.5a.75.75 0 010 1.5h-4.5zM1.5 18.75c.021.406.394.752.832.751L15.75 19.5a.75.75 0 00.75-.75v-1.5h-15v1.5z"}})])
          )
        }
      }
    