
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
            children.concat([_c('path',{attrs:{"d":"M12 23.999a.755.755 0 01-.548-.238c-.017-.017-2.491-2.398-10.212-2.494A1.26 1.26 0 010 20.025V4.249c0-.334.137-.659.375-.892.242-.232.557-.358.89-.358 5.718.073 8.778 1.302 10.258 2.199a6.773 6.773 0 011.572-2.664A8.513 8.513 0 0117.071.055a1.346 1.346 0 011.1.153c.353.218.57.6.579 1.02v2.053A31.709 31.709 0 0122.727 3 1.259 1.259 0 0124 4.245v15.772a1.265 1.265 0 01-1.243 1.25c-7.724.096-10.193 2.478-10.217 2.502l-.031.03a.742.742 0 01-.509.2zM1.5 19.771c5.263.097 8.233 1.194 9.75 2.037V6.826c-.72-.546-3.417-2.201-9.75-2.323v15.268zm17.25-2.926a.751.751 0 01-.598.734 7.44 7.44 0 00-3.967 2.238 5.3 5.3 0 00-1.15 1.838c1.58-.81 4.502-1.794 9.464-1.885V4.502a30.64 30.64 0 00-3.75.292v12.051zm-6 2.334c.11-.135.225-.266.345-.39a8.92 8.92 0 014.155-2.533V1.569a7.055 7.055 0 00-3.057 1.986 5.343 5.343 0 00-1.443 2.997v12.627z"}})])
          )
        }
      }
    