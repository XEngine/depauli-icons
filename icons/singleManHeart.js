
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
            children.concat([_c('path',{attrs:{"d":"M17.252 12.001a.753.753 0 01-.541-.231l-5.114-5.335a3.76 3.76 0 01-.695-4.347A3.758 3.758 0 0114.284.001a3.73 3.73 0 011.682.398c.365.182.695.42.982.708l.304.305.305-.305A3.75 3.75 0 0120.226.003c1.01 0 1.958.392 2.67 1.105a3.77 3.77 0 01-.001 5.339l-5.103 5.323a.749.749 0 01-.54.231zm-2.97-10.5c-.87 0-1.652.482-2.04 1.258a2.27 2.27 0 00.425 2.626l4.584 4.782 4.573-4.77a2.281 2.281 0 00.012-3.229 2.262 2.262 0 00-1.61-.666c-.609 0-1.18.236-1.609.665l-.835.835a.743.743 0 01-.53.219.743.743 0 01-.53-.22l-.835-.835a2.262 2.262 0 00-1.605-.665zM5.252 7.501c-2.068 0-3.75-1.682-3.75-3.75S3.184.001 5.252.001s3.75 1.682 3.75 3.75-1.683 3.75-3.75 3.75zm0-6c-1.241 0-2.25 1.009-2.25 2.25s1.009 2.25 2.25 2.25 2.25-1.009 2.25-2.25-1.01-2.25-2.25-2.25zM3.002 24.001a.747.747 0 01-.746-.675l-.682-6.825H.752a.75.75 0 01-.75-.75v-3c0-2.895 2.355-5.25 5.25-5.25s5.25 2.355 5.25 5.25v3a.75.75 0 01-.75.75H8.93l-.682 6.825a.747.747 0 01-.746.675h-4.5zm3.821-1.5l.682-6.825a.747.747 0 01.746-.675h.75v-2.25c0-1.781-1.288-3.32-3-3.672v5.172a.75.75 0 01-1.5 0V9.079c-1.712.352-3 1.892-3 3.672v2.25h.75c.387 0 .708.29.746.675l.682 6.825h3.144z"}})])
          )
        }
      }
    