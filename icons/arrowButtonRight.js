
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
            children.concat([_c('path',{attrs:{"d":"M8.527 24a1.474 1.474 0 01-1.037-.455l-2.686-2.763a1.533 1.533 0 01-.003-2.133L11.265 12 4.804 5.355a1.532 1.532 0 01-.003-2.133l2.723-2.8a1.481 1.481 0 012.108.034l10.186 10.476c.577.6.578 1.536.002 2.133L9.602 23.574A1.488 1.488 0 018.561 24h-.034zM5.879 4.265c-.012.012-.011.033.003.047l6.967 7.165a.747.747 0 010 1.046l-6.97 7.168c-.011.012-.011.033.003.047l2.679 2.756 10.182-10.472c.012-.012.011-.032-.003-.047L8.56 1.505l-2.681 2.76z"}})])
          )
        }
      }
    