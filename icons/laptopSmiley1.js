
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
            children.concat([_c('path',{attrs:{"d":"M11.999 12.735a6.308 6.308 0 01-4.255-1.657.75.75 0 111.011-1.109A4.813 4.813 0 0012 11.234a4.81 4.81 0 003.245-1.265.747.747 0 011.059.049.746.746 0 01-.049 1.06 6.308 6.308 0 01-4.256 1.657zM9.749 8.25a.75.75 0 01-.75-.75V6a.75.75 0 011.5 0v1.5a.75.75 0 01-.75.75zM14.249 8.25a.75.75 0 01-.75-.75V6a.75.75 0 011.5 0v1.5a.75.75 0 01-.75.75z"}}),_c('path',{attrs:{"d":"M2.249 22.5a2.252 2.252 0 01-2.056-3.164l2.056-4.5V3.75a2.252 2.252 0 012.25-2.25h15a2.252 2.252 0 012.25 2.25v11.087l2.057 4.5a2.253 2.253 0 01-2.057 3.164h-19.5zm-.689-2.547a.752.752 0 00.689 1.048h19.5a.751.751 0 00.686-1.054l-1.918-4.197H3.481L1.56 19.953zm18.689-5.703V3.75a.75.75 0 00-.75-.75h-15a.75.75 0 00-.75.75v10.5h16.5z"}}),_c('path',{attrs:{"d":"M10.499 19.5a.75.75 0 010-1.5h3a.75.75 0 010 1.5h-3z"}})])
          )
        }
      }
    