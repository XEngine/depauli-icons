
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
            children.concat([_c('path',{attrs:{"d":"M17.642 24a2.411 2.411 0 01-1.932-.965l-1.501-2.004-2.587 1.763A2.416 2.416 0 017.85 20.8v-4.42H2.759a2.417 2.417 0 01-2.414-2.414c0-.838.424-1.603 1.135-2.047L19.963.365c.383-.24.825-.367 1.276-.367.839 0 1.605.423 2.049 1.132.323.517.439 1.131.325 1.73l-3.6 19.171A2.414 2.414 0 0117.642 24zm-.732-1.865a.909.909 0 00.73.364c.44 0 .818-.313.899-.745l3.6-19.172a.908.908 0 00.012-.265L12.039 15.632l4.871 6.503zm-7.56-1.334a.915.915 0 001.428.754l2.53-1.725-2.583-3.451H9.35v4.422zM20.758 1.637L2.275 13.191a.915.915 0 00.485 1.689h7.968L20.805 1.609l-.047.028z"}})])
          )
        }
      }
    