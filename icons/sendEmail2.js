
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
            children.concat([_c('path',{attrs:{"d":"M2.709 23.241A2.24 2.24 0 01.69 21.985a2.25 2.25 0 01.054-2.093l4.833-7.898L.744 4.11A2.234 2.234 0 01.543 2.4 2.237 2.237 0 011.61 1.048 2.259 2.259 0 013.703.994l19.022 9.663c.461.235.77.701.811 1.222.006.038.01.076.01.115 0 .026-.002.05-.006.075-.006.202-.06.413-.157.606a1.496 1.496 0 01-.656.656L3.712 23.004a2.26 2.26 0 01-1.003.237zm-.671-2.591a.746.746 0 00-.003.672.748.748 0 001.005.341l17.533-8.919H6.877L2.038 20.65zm18.53-9.406L3.032 2.336a.736.736 0 00-.69.022.751.751 0 00-.291 1.016l4.825 7.87h13.692z"}})])
          )
        }
      }
    