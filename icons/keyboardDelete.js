
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
            children.concat([_c('path',{attrs:{"d":"M4.5 23.247a3.754 3.754 0 01-3.75-3.75v-15A3.754 3.754 0 014.5.747h15a3.754 3.754 0 013.75 3.75v15a3.754 3.754 0 01-3.75 3.75h-15zm0-21a2.252 2.252 0 00-2.25 2.25v15a2.252 2.252 0 002.25 2.25h15a2.252 2.252 0 002.25-2.25v-15a2.252 2.252 0 00-2.25-2.25h-15z"}}),_c('path',{attrs:{"d":"M16.5 14.997a.743.743 0 01-.53-.22l-1.72-1.72-1.72 1.72a.744.744 0 01-1.06 0 .752.752 0 010-1.061l1.72-1.72-1.72-1.72c-.142-.141-.22-.33-.22-.53s.078-.389.22-.53c.141-.142.33-.22.53-.22s.389.078.53.22l1.72 1.72 1.72-1.72a.744.744 0 011.06 0c.142.141.22.33.22.53s-.078.389-.22.53l-1.72 1.72 1.72 1.72a.752.752 0 01-.53 1.281z"}}),_c('path',{attrs:{"d":"M11.121 18.75a2.231 2.231 0 01-1.59-.659l-5.325-5.018A1.507 1.507 0 013.752 12a1.483 1.483 0 01.437-1.062L9.547 5.89c.412-.41.973-.64 1.572-.64H18a2.252 2.252 0 012.25 2.25v9A2.252 2.252 0 0118 18.75h-6.879zm-.546-1.735a.776.776 0 00.546.235H18a.75.75 0 00.75-.75v-9a.75.75 0 00-.75-.75h-6.889a.757.757 0 00-.521.218l-5.339 5.029 5.324 5.018z"}})])
          )
        }
      }
    