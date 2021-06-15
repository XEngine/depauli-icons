
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
            children.concat([_c('path',{attrs:{"d":"M6.75 6.75c-1.861 0-3.375-1.514-3.375-3.375S4.889 0 6.75 0s3.375 1.514 3.375 3.375S8.611 6.75 6.75 6.75zm0-5.25c-1.034 0-1.875.841-1.875 1.875S5.716 5.25 6.75 5.25s1.875-.841 1.875-1.875S7.784 1.5 6.75 1.5zM8.25 24.002c-.555 0-1.09-.209-1.5-.575-.41.365-.945.575-1.5.575A2.252 2.252 0 013 21.752v-4.63A2.251 2.251 0 010 15v-3a5.256 5.256 0 015.25-5.25H7.9a5.255 5.255 0 013.909 1.75.75.75 0 01-1.118 1 3.751 3.751 0 00-2.792-1.25H5.25A3.754 3.754 0 001.5 12v3A.75.75 0 003 15v-3a.75.75 0 011.5 0v9.752a.75.75 0 001.5 0V16.5a.75.75 0 011.5 0v5.25a.75.75 0 101.5.002v-9.5a.755.755 0 01.75-.75c.257 0 .493.129.631.345a5.23 5.23 0 001.474 1.512.746.746 0 01.2 1.041.748.748 0 01-1.041.2 6.66 6.66 0 01-.513-.385v7.537a2.254 2.254 0 01-2.251 2.25zM17.577 23.999a2.24 2.24 0 01-2.145-1.573 41.674 41.674 0 01-1.776-8.864.736.736 0 01-.019-.253 42.12 42.12 0 01-.14-2.797A12.877 12.877 0 0117.76.576l.027-.023c.256-.221.603-.349.964-.349.36 0 .708.128.978.361a12.895 12.895 0 014.261 10.253.745.745 0 01-.005.156 41.556 41.556 0 01-1.92 11.452 2.242 2.242 0 01-2.145 1.573h-2.343zm-1.502-4.888c.234.988.498 1.95.787 2.863a.75.75 0 00.716.526h2.343a.747.747 0 00.715-.524 40.093 40.093 0 001.762-9.185l-6.323 6.32zm-.904-5.471c.116 1.23.294 2.479.531 3.722l6.796-6.796.002-.078a11.414 11.414 0 00-.497-3.681l-6.832 6.833zM18.75 1.702a11.385 11.385 0 00-3.754 8.777c.006.371.019.754.039 1.175l6.372-6.372a11.321 11.321 0 00-2.657-3.58z"}})])
          )
        }
      }
    