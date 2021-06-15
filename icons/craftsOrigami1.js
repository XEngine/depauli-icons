
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
            children.concat([_c('path',{attrs:{"d":"M9.022 24c-.396 0-.782-.161-1.061-.441L1.05 16.651a1.503 1.503 0 01-.298-1.696L5.9 3.923 3.698 1.966A1.126 1.126 0 014.444 0h7.596a1.49 1.49 0 011.402.97c.141.375.128.783-.037 1.147L11.069 7.22 8.877 12h2.64l7.157-3.903a1.504 1.504 0 011.141-.123 1.49 1.49 0 011.059 1.194L21.345 12h.907a1.502 1.502 0 011.22 2.372l-6.428 9a1.512 1.512 0 01-1.222.628h-6.8zm0-1.5h5.613l-6.751-8.333-2.261 4.934L9.022 22.5zm7.149-.487l6.08-8.513H9.274l6.897 8.513zm-14.06-6.422l2.38 2.379 2.502-5.459a.497.497 0 01.067-.146L9.473 7.1 7.07 4.964 2.111 15.591zM19.824 12l-.431-2.587L14.65 12h5.174zm-9.698-6.326l1.913-4.178-6.608.003 4.695 4.175z"}})])
          )
        }
      }
    