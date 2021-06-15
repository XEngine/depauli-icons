
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
            children.concat([_c('path',{attrs:{"d":"M21.071 22.373c-.056 0-.113-.003-.17-.01l-9.65-1.072a3.761 3.761 0 01-3.019-2.224l-2.39-5.464H2.215c-.4 0-.777-.156-1.06-.44s-.439-.66-.439-1.06c0-.35.123-.691.348-.959l2.725-3.27a.781.781 0 01.086-.086.7.7 0 01.136-.095.732.732 0 01.353-.089h5.03l8.922-5.734a1.497 1.497 0 012.294 1.483l-.636 4.248h1.778a1.504 1.504 0 011.267 2.304l-4.197 6.597 3.308 3.309a1.502 1.502 0 01-1.059 2.562zM9.606 18.466a2.256 2.256 0 001.811 1.334l9.651 1.072L9.304 9.104H5.511l4.095 9.362zm7.74-3.439L18.35 8.32a.702.702 0 01.024-.159l.753-5.029-8.324 5.35 6.543 6.545zm1.787-1.808l2.619-4.117h-2.003l-.616 4.117zM2.215 12.104h2.971L4.163 9.767l-1.948 2.337z"}})])
          )
        }
      }
    