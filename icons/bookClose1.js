
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
            children.concat([_c('path',{attrs:{"d":"M6.753 23.523a3.005 3.005 0 01-3.003-3V5.947a2.994 2.994 0 01.486-2.1 2.981 2.981 0 011.917-1.265L17.84.489a.75.75 0 01.265 1.477l-.615.11 1.557 3.112a2.006 2.006 0 011.204 1.836v10.5a4.33 4.33 0 01-3.57 4.266l-9.406 1.682a2.932 2.932 0 01-.517.051h-.005zm-1.503-3c0 .827.673 1.5 1.5 1.5.079-.001.167-.01.251-.026l9.415-1.683a2.832 2.832 0 002.334-2.79v-10.5a.506.506 0 00-.595-.497L7.279 8.476a2.988 2.988 0 01-2.03-.332v12.379zm0-14.701a1.508 1.508 0 001.755 1.18l10.343-1.854-1.398-2.797-9.518 1.706A1.505 1.505 0 005.23 5.352c.013.056.02.113.02.171v.299z"}})])
          )
        }
      }
    