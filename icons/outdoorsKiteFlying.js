
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
            children.concat([_c('path',{attrs:{"d":"M1.259 24.002a.752.752 0 01-.53-1.281L2.71 20.74a5.941 5.941 0 014.175-1.72c.845 0 1.661.176 2.426.524a4.343 4.343 0 001.809.393 4.405 4.405 0 004.118-2.848l.039-.089a1.505 1.505 0 01-.279-.321l-5.51-8.994a1.487 1.487 0 01-.182-1.162c.075-.296.232-.557.456-.756L15.236.406a1.536 1.536 0 011.03-.403c.367 0 .72.135.995.38l5.526 5.409c.534.474.64 1.281.239 1.907l-5.496 8.966a1.517 1.517 0 01-.735.602l-.167.385a5.91 5.91 0 01-5.509 3.787 5.815 5.815 0 01-2.428-.528 4.33 4.33 0 00-1.806-.39 4.431 4.431 0 00-3.113 1.281L1.79 23.784a.753.753 0 01-.531.218zm15.75-9.36l4.376-7.14h-4.376v7.14zm-1.5-.001V7.502h-4.373l4.373 7.139zm5.349-8.639l-3.85-3.769v3.769h3.85zm-5.349 0V2.237l-3.845 3.765h3.845z"}})])
          )
        }
      }
    