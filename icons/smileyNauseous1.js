
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
            children.concat([_c('path',{attrs:{"d":"M12 24C5.383 24 0 18.617 0 12S5.383 0 12 0s12 5.383 12 12-5.383 12-12 12zm0-22.5C6.21 1.5 1.5 6.21 1.5 12S6.21 22.5 12 22.5 22.5 17.79 22.5 12 17.79 1.5 12 1.5z"}}),_c('circle',{attrs:{"cx":"16.5","cy":"10.875","r":"1.125"}}),_c('path',{attrs:{"d":"M18.106 8.989a4.485 4.485 0 01-3.958-2.415.746.746 0 01.668-1.092c.283 0 .539.156.668.408a2.968 2.968 0 002.621 1.599c.194 0 .389-.02.58-.058a.753.753 0 01.884.586.748.748 0 01-.586.884 4.378 4.378 0 01-.877.088z"}}),_c('circle',{attrs:{"cx":"7.5","cy":"10.875","r":"1.125"}}),_c('path',{attrs:{"d":"M5.919 8.997c-.307 0-.614-.033-.912-.098a.751.751 0 01.319-1.466 2.808 2.808 0 001.839-.23A2.82 2.82 0 008.511 5.9a.745.745 0 011.005-.34.75.75 0 01.34 1.005 4.305 4.305 0 01-2.04 1.99 4.268 4.268 0 01-1.897.442zM7.5 19.5a.743.743 0 01-.53-.22.748.748 0 01.001-1.062c.458-.458.71-1.069.71-1.719 0-.65-.253-1.261-.711-1.719a.75.75 0 111.06-1.06c.426.425.745.939.937 1.506a7.533 7.533 0 013.135-.689c1.01 0 2.024.21 2.96.611a3.891 3.891 0 01.908-1.428.748.748 0 011.06.001.749.749 0 010 1.061 2.434 2.434 0 00-.001 3.438.749.749 0 01-.53 1.281.744.744 0 01-.529-.219 3.897 3.897 0 01-1.144-2.585 6.036 6.036 0 00-2.725-.656 6.019 6.019 0 00-2.935.769 3.903 3.903 0 01-1.129 2.466.758.758 0 01-.537.224z"}})])
          )
        }
      }
    