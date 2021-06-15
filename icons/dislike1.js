
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
            children.concat([_c('path',{attrs:{"d":"M9 24c-1.654 0-3-1.346-3-3v-3.383a.748.748 0 00-.569-.727l-1.435-.313C1.553 15.965-.12 13.71.007 11.212l.3-5.106C.657 2.618 3.545 0 7.026 0h4.885c.627 0 1.251.088 1.853.26l3.634 1.038c.197.056.399.101.602.134V.75a.75.75 0 01.75-.75h4.5a.75.75 0 01.75.75v13.5a.75.75 0 01-.75.75h-4.5a.75.75 0 01-.75-.75v-1.512a6.746 6.746 0 00-6 6.708V21c0 1.654-1.346 3-3 3zM7.026 1.5a5.235 5.235 0 00-5.224 4.725l-.297 5.069a3.757 3.757 0 002.834 3.823l1.433.313a2.257 2.257 0 011.729 2.187V21c0 .827.673 1.5 1.5 1.5s1.5-.673 1.5-1.5v-1.554a8.236 8.236 0 017.5-8.216V2.947a6.702 6.702 0 01-1.014-.207l-3.634-1.038a5.258 5.258 0 00-1.442-.202H7.026zm15.474 12v-12h-3v12h3z"}})])
          )
        }
      }
    