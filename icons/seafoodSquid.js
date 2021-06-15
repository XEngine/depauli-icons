
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
            children.concat([_c('path',{attrs:{"d":"M19.5 24.002a3.768 3.768 0 01-3.75-3.748v-2.252h-1.5v3.75a.75.75 0 01-1.5 0v-3.75h-1.5v3.75a.75.75 0 01-1.5 0v-3.75h-1.5v2.25a3.768 3.768 0 01-3.748 3.75A3.769 3.769 0 01.75 20.254a.75.75 0 011.5-.004 2.263 2.263 0 002.252 2.252A2.263 2.263 0 006.75 20.25v-6.51c0-2.159.414-4.254 1.233-6.237H4.332a1.508 1.508 0 01-1.298-.752 1.485 1.485 0 01-.148-1.138 1.49 1.49 0 01.7-.91L10.873.311A2.25 2.25 0 0113.12.302l7.315 4.409c.452.26.737.755.739 1.288a1.495 1.495 0 01-1.496 1.504h-3.661a16.243 16.243 0 011.233 6.237v6.513a2.264 2.264 0 002.252 2.25 2.263 2.263 0 002.248-2.252.751.751 0 011.5.004 3.767 3.767 0 01-3.748 3.748l-.002-.001c.001 0 0 0 0 0zm-3.75-7.5v-2.763c0-2.951-.865-5.808-2.502-8.263a1.499 1.499 0 00-2.496.001 14.843 14.843 0 00-2.502 8.262v2.763h7.5zm3.926-10.5l-7.315-4.408a.753.753 0 00-.729.009L4.347 5.995l4.343.007c.249-.464.522-.919.814-1.358.22-.331.5-.611.832-.832a2.984 2.984 0 012.253-.446 2.98 2.98 0 011.908 1.278c.292.438.566.894.814 1.358h4.365z"}})])
          )
        }
      }
    