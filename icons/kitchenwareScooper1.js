
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
            children.concat([_c('path',{attrs:{"d":"M3.744 23.723a3.715 3.715 0 01-2.647-1.096A3.725 3.725 0 010 19.974c0-1.002.391-1.944 1.1-2.652L9.498 9.91A7.517 7.517 0 019 7.225v-.039a2.265 2.265 0 012.079-2.235 7.513 7.513 0 005.839-3.593A2.271 2.271 0 0118.851.277c.344 0 .687.081.993.233.199.099.402.214.634.359.05.024.097.055.143.091A7.463 7.463 0 0124 7.222a7.451 7.451 0 01-2.196 5.304 7.453 7.453 0 01-5.303 2.198 7.452 7.452 0 01-2.684-.496l-7.384 8.368a3.767 3.767 0 01-2.689 1.127zm-1.618-5.308c-.397.399-.626.959-.626 1.56s.233 1.166.658 1.591c.425.426.99.66 1.591.66h.013a2.235 2.235 0 001.579-.658l7.097-8.044a7.547 7.547 0 01-2.236-2.234l-8.076 7.125zm8.968-8.587a5.978 5.978 0 005.406 3.396 5.96 5.96 0 004.243-1.758 5.956 5.956 0 001.756-4.243 5.975 5.975 0 00-1.514-3.986 7.48 7.48 0 01-1.172 3.543 7.478 7.478 0 01-6.322 3.445 7.376 7.376 0 01-2.397-.397zm-.551-1.883c.9.51 1.916.779 2.951.779a5.993 5.993 0 005.964-6.719 4.726 4.726 0 00-.282-.151.757.757 0 00-.975.283 9.015 9.015 0 01-7.007 4.311.754.754 0 00-.693.744v.035c-.001.237.013.478.042.718z"}})])
          )
        }
      }
    