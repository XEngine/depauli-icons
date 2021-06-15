
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
            children.concat([_c('path',{attrs:{"d":"M14.999 5.99c-1.654 0-3-1.346-3-3s1.346-3 3-3 3 1.346 3 3-1.346 3-3 3zm0-4.5c-.827 0-1.5.673-1.5 1.5s.673 1.5 1.5 1.5 1.5-.673 1.5-1.5-.673-1.5-1.5-1.5zM15.002 23.99c-.86 0-1.632-.477-2.016-1.244L11.4 19.573l-1.029 2.916A2.255 2.255 0 017.5 23.861a2.236 2.236 0 01-1.281-1.152 2.233 2.233 0 01-.091-1.72l4.5-12.75c.2-.567.609-1.022 1.152-1.281a2.238 2.238 0 011.72-.091c.567.2 1.021.609 1.281 1.152.259.542.292 1.153.091 1.72l-1.067 3.037a2.264 2.264 0 00.108 1.757l3.1 6.2c.269.538.312 1.148.122 1.718a2.238 2.238 0 01-1.128 1.301 2.23 2.23 0 01-1.005.238zm-3.721-7.083c.286 0 .543.159.671.414l2.376 4.754a.748.748 0 001.007.336.74.74 0 00.376-.434.746.746 0 00-.041-.573l-3.1-6.2a3.766 3.766 0 01-.181-2.927l1.067-3.037a.75.75 0 10-1.415-.501l-4.5 12.75a.748.748 0 00.457.958.751.751 0 00.957-.457l1.617-4.582a.748.748 0 01.709-.501z"}})])
          )
        }
      }
    