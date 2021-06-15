
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
            children.concat([_c('path',{attrs:{"d":"M2.25 21.727A2.252 2.252 0 010 19.477V4.523a2.252 2.252 0 012.25-2.25h16.617c.603 0 1.189.247 1.611.678l2.883 2.956c.412.422.639.98.639 1.57v12a2.252 2.252 0 01-2.25 2.25H2.25zm0-17.954a.75.75 0 00-.75.75v14.954c0 .414.336.75.75.75h19.5a.75.75 0 00.75-.75v-12a.744.744 0 00-.213-.523l-2.883-2.955a.757.757 0 00-.537-.226H2.25z"}})])
          )
        }
      }
    