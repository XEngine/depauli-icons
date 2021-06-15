
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
            children.concat([_c('path',{attrs:{"d":"M18.75 22.5a.75.75 0 01-.75-.75v-8.413L6.782 20.193a1.498 1.498 0 01-2.282-1.28V12.75H.75a.75.75 0 010-1.5H4.5V5.087a1.502 1.502 0 012.282-1.28L18 10.663V2.25a.75.75 0 011.5 0v9h3.75a.75.75 0 010 1.5H19.5v9a.75.75 0 01-.75.75zM6 18.913L17.312 12 6 5.087v13.826z"}})])
          )
        }
      }
    