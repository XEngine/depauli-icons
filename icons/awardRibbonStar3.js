
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
            children.concat([_c('path',{attrs:{"d":"M17.25 24a.757.757 0 01-.372-.098L12 21.114l-4.878 2.788a.757.757 0 01-.815-.047.752.752 0 01-.29-.765l1.382-6.359A9.015 9.015 0 013 9c0-4.963 4.037-9 9-9s9 4.037 9 9a9.015 9.015 0 01-4.399 7.731l1.382 6.36a.75.75 0 01-.733.909zM12 19.5c.13 0 .259.034.372.099l3.787 2.164-.947-4.357A8.92 8.92 0 0112 18a8.92 8.92 0 01-3.212-.594l-.947 4.357 3.787-2.164A.748.748 0 0112 19.5zm0-18C7.865 1.5 4.5 4.865 4.5 9s3.365 7.5 7.5 7.5 7.5-3.365 7.5-7.5-3.365-7.5-7.5-7.5z"}}),_c('path',{attrs:{"d":"M9.092 13.72a1.327 1.327 0 01-1.16-.666 1.348 1.348 0 01-.077-1.19l.881-2.022-1.586-1.56a1.323 1.323 0 01-.402-.933 1.322 1.322 0 01.375-.948 1.31 1.31 0 01.949-.406h1.689l1.04-2.044a1.355 1.355 0 011.2-.731 1.348 1.348 0 011.192.72L14.24 6h1.693c.71 0 1.302.583 1.32 1.3.009.371-.139.732-.406.99l-1.58 1.552.875 2.012a1.34 1.34 0 01-1.903 1.685L12 12.28l-2.247 1.264a1.326 1.326 0 01-.661.176zM12 10.669c.129 0 .256.033.368.096l2.204 1.24-.887-2.038a.754.754 0 01.162-.834L15.509 7.5h-1.73a.747.747 0 01-.669-.41L12 4.903l-1.111 2.183a.747.747 0 01-.668.41H8.49l1.664 1.637c.22.216.285.551.162.834l-.887 2.038 2.204-1.24a.745.745 0 01.367-.096z"}})])
          )
        }
      }
    