
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
            children.concat([_c('path',{attrs:{"d":"M18 24a.747.747 0 01-.635-.35l-3.664-5.813a8.979 8.979 0 01-3.403-.001L6.634 23.65a.746.746 0 01-.721.345.754.754 0 01-.624-.508L3.926 19.4l-3.323-.665a.754.754 0 01-.559-.482.757.757 0 01.125-.728l3.746-4.578A9.008 9.008 0 013 9c0-4.963 4.037-9 9-9s9 4.037 9 9a9.015 9.015 0 01-.915 3.948l3.746 4.577a.752.752 0 01-.434 1.21l-3.323.665-1.362 4.087A.75.75 0 0118 24zm-.21-2.49l.999-2.997a.75.75 0 01.564-.498l2.526-.505-2.619-3.2a9.063 9.063 0 01-4.056 3.1l2.586 4.1zM4.647 18.015a.75.75 0 01.564.498l.999 2.996 2.584-4.101a9.064 9.064 0 01-4.056-3.099l-2.619 3.2 2.528.506zM12 1.5C7.864 1.5 4.5 4.865 4.5 9s3.365 7.5 7.5 7.5 7.5-3.365 7.5-7.5-3.365-7.5-7.5-7.5z"}}),_c('path',{attrs:{"d":"M9.092 13.72a1.327 1.327 0 01-1.16-.666 1.348 1.348 0 01-.077-1.19l.881-2.022-1.586-1.56a1.323 1.323 0 01-.402-.933 1.322 1.322 0 01.375-.948 1.31 1.31 0 01.949-.406h1.689l1.04-2.044a1.355 1.355 0 011.2-.731 1.348 1.348 0 011.192.72L14.239 6h1.693c.71 0 1.302.583 1.32 1.3.009.371-.139.732-.406.99l-1.581 1.552.876 2.012a1.344 1.344 0 01-.713 1.762 1.34 1.34 0 01-1.19-.077L12 12.28l-2.247 1.264a1.326 1.326 0 01-.661.176zM12 10.669c.129 0 .256.033.368.096l2.204 1.24-.887-2.038a.754.754 0 01.162-.834L15.509 7.5h-1.73a.747.747 0 01-.669-.41L12 4.903l-1.111 2.183a.747.747 0 01-.668.41H8.49l1.664 1.637c.22.216.285.551.162.834l-.887 2.038 2.204-1.24a.745.745 0 01.367-.096z"}})])
          )
        }
      }
    