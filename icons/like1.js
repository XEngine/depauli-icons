
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
            children.concat([_c('path',{attrs:{"d":"M12.089 24a6.747 6.747 0 01-1.853-.26l-3.634-1.038A5.342 5.342 0 006 22.568v.682a.75.75 0 01-.75.75H.75a.75.75 0 01-.75-.75V9.75A.75.75 0 01.75 9h4.5a.75.75 0 01.75.75v1.512a6.747 6.747 0 006-6.708V3c0-1.654 1.346-3 3-3s3 1.346 3 3v3.382c0 .346.234.645.57.728l1.435.313c2.443.612 4.116 2.867 3.989 5.365l-.301 5.106C23.343 21.382 20.455 24 16.974 24h-4.885zM6 21.053c.342.043.682.112 1.014.207l3.634 1.038c.468.134.953.202 1.441.202h4.885a5.235 5.235 0 005.224-4.725l.298-5.069a3.758 3.758 0 00-2.834-3.823l-1.433-.313A2.253 2.253 0 0116.5 6.382V3c0-.827-.673-1.5-1.5-1.5s-1.5.673-1.5 1.5v1.554A8.236 8.236 0 016 12.77v8.283zM4.5 22.5v-12h-3v12h3z"}})])
          )
        }
      }
    