
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
            children.concat([_c('path',{attrs:{"d":"M11.993 23.998c-6.613 0-11.996-5.38-12-11.993a11.92 11.92 0 013.514-8.484 11.92 11.92 0 018.479-3.523c4.389 0 8.426 2.438 10.514 6.21V.748a.75.75 0 011.5 0v7.5a.75.75 0 01-.75.75h-7.5a.75.75 0 010-1.5h5.729a10.46 10.46 0 00-9.486-6 10.435 10.435 0 00-7.425 3.083 10.434 10.434 0 00-3.075 7.423c.003 5.786 4.714 10.494 10.5 10.494.42 0 .757.336.757.75 0 .413-.339.75-.757.75z"}})])
          )
        }
      }
    