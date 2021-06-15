
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
            children.concat([_c('path',{attrs:{"d":"M12.25 24a3.754 3.754 0 01-3.75-3.75c0-1.659 2.214-5.073 3-6.232V6h-6v4.577c1.732.351 3 1.874 3 3.673C8.5 16.318 6.818 18 4.75 18S1 16.318 1 14.25a3.743 3.743 0 013-3.673V6h-.75a.75.75 0 010-1.5h8.25V.75a.75.75 0 011.5 0V4.5h8.25a.75.75 0 01.001 1.5h-.75v2.841l2.701 6.078a1.124 1.124 0 01-1.025 1.581h-4.849a1.12 1.12 0 01-.798-.333 1.118 1.118 0 01-.232-1.245l2.703-6.081V6h-6v8.018c.786 1.159 3 4.574 3 6.232A3.755 3.755 0 0112.25 24zm0-8.392C11.085 17.429 10 19.46 10 20.25c0 1.241 1.009 2.25 2.25 2.25s2.25-1.009 2.25-2.25c.001-.791-1.084-2.821-2.25-4.642zM4.75 12c-1.24 0-2.25 1.009-2.25 2.25s1.01 2.25 2.25 2.25S7 15.491 7 14.25 5.991 12 4.75 12zm16.846 3l-1.846-4.153L21.596 15z"}})])
          )
        }
      }
    