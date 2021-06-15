
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
            children.concat([_c('path',{attrs:{"d":"M1.5 24C.673 24 0 23.327 0 22.5V18c0-.827.673-1.5 1.5-1.5H6c.131 0 .26.018.387.053L16.553 6.387A1.45 1.45 0 0116.5 6V1.5c0-.827.673-1.5 1.5-1.5h4.5c.827 0 1.5.673 1.5 1.5V6c0 .827-.673 1.5-1.5 1.5H18a1.45 1.45 0 01-.387-.053L7.447 17.613c.035.127.053.256.053.387v4.5c0 .827-.673 1.5-1.5 1.5H1.5zm0-1.5H6V18H1.5v4.5zM22.5 6V1.5H18V6h4.5z"}})])
          )
        }
      }
    