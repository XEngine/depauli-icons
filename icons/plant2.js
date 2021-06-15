
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
            children.concat([_c('path',{attrs:{"d":"M12.245 24.021a.751.751 0 01-.69-1.043c.006-.015.666-1.614.708-3.557.056-2.536-.912-4.487-2.879-5.798-4.68-3.126-4.734-6.831-4.734-6.987-.001-1.77.687-3.433 1.937-4.684s2.912-1.94 4.68-1.94a5.456 5.456 0 015.45 5.45 4.475 4.475 0 01-1.321 3.187 4.478 4.478 0 01-3.185 1.319 3.73 3.73 0 01-2.656-1.103 3.727 3.727 0 01-1.096-2.656 3.153 3.153 0 013.15-3.149.75.75 0 010 1.5c-.91 0-1.65.74-1.65 1.65a2.24 2.24 0 00.658 1.596c.425.427.991.662 1.594.663.803 0 1.557-.312 2.125-.88a2.983 2.983 0 00.881-2.125 3.955 3.955 0 00-3.95-3.951 5.085 5.085 0 00-3.619 1.5 5.08 5.08 0 00-1.498 3.62c.001.025.116 3.104 4.067 5.744 1.467.978 2.49 2.27 3.045 3.845a2.255 2.255 0 001.14-1.955.75.75 0 111.5-.002 3.745 3.745 0 01-2.269 3.445c.156.994.154 2.056-.006 3.166a2.257 2.257 0 002.724-.985.752.752 0 011.025-.274.75.75 0 01.274 1.024 3.765 3.765 0 01-3.253 1.875c-.365 0-.723-.053-1.071-.158a10.07 10.07 0 01-.39 1.205.75.75 0 01-.691.458z"}})])
          )
        }
      }
    