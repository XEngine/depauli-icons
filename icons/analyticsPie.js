
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
            children.concat([_c('path',{attrs:{"d":"M12 24C5.383 24 0 18.617 0 12S5.383 0 12 0s12 5.383 12 12-5.383 12-12 12zm0-22.5C6.21 1.5 1.5 6.21 1.5 12S6.21 22.5 12 22.5 22.5 17.79 22.5 12 17.79 1.5 12 1.5z"}}),_c('path',{attrs:{"d":"M12 19.5c-4.135 0-7.5-3.365-7.5-7.5a7.464 7.464 0 012.831-5.863.702.702 0 01.13-.101A7.417 7.417 0 0112 4.5c4.135 0 7.5 3.365 7.5 7.5s-3.365 7.5-7.5 7.5zm.75-1.548a5.995 5.995 0 005.202-5.202H12.75v5.202zM7.756 7.765A6.001 6.001 0 006 12a6.004 6.004 0 005.25 5.952v-5.695L7.756 7.765zm10.196 3.485A6.004 6.004 0 0012 6c-1.085 0-2.135.29-3.061.842l3.428 4.408h5.585z"}})])
          )
        }
      }
    