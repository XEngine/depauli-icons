
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
            children.concat([_c('path',{attrs:{"d":"M19.5 21c-.827 0-1.5-.673-1.5-1.5V18h-3v1.5c0 .827-.673 1.5-1.5 1.5h-3c-.827 0-1.5-.673-1.5-1.5V18H6v1.5c0 .827-.673 1.5-1.5 1.5h-3C.673 21 0 20.327 0 19.5V5.25c0-1.654 1.346-3 3-3s3 1.346 3 3V7.5h3V5.25c0-1.654 1.346-3 3-3s3 1.346 3 3V7.5h3V5.25c0-1.654 1.346-3 3-3s3 1.346 3 3V19.5c0 .827-.673 1.5-1.5 1.5h-3zM21 3.75c-.827 0-1.5.673-1.5 1.5V19.5h3V5.25c0-.827-.673-1.5-1.5-1.5zm-9 0c-.827 0-1.5.673-1.5 1.5V19.5h3V5.25c0-.827-.673-1.5-1.5-1.5zm-9 0c-.827 0-1.5.673-1.5 1.5V19.5h3V5.25c0-.827-.673-1.5-1.5-1.5zM18 16.5V9h-3v7.5h3zm-9 0V9H6v7.5h3z"}})])
          )
        }
      }
    