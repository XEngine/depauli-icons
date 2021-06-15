
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
            children.concat([_c('path',{attrs:{"d":"M11.5 24a.747.747 0 01-.731-.583c-.28-1.222-1.216-4.618-2.18-5.647-.269-.288-.55-.577-.835-.871C5.643 14.722 3.25 12.256 3.25 8.25 3.25 3.701 6.951 0 11.5 0s8.25 3.701 8.25 8.25c0 4.002-2.39 6.467-4.499 8.641-.291.301-.569.586-.835.871-.968 1.035-1.906 4.433-2.186 5.655a.745.745 0 01-.73.583zm0-22.5a6.758 6.758 0 00-6.75 6.75c0 3.398 2.075 5.536 4.081 7.604.291.3.578.596.854.89.723.772 1.348 2.293 1.816 3.728.469-1.437 1.096-2.959 1.82-3.734.272-.292.556-.584.844-.882 2.012-2.075 4.084-4.212 4.084-7.606A6.756 6.756 0 0011.5 1.5z"}}),_c('path',{attrs:{"d":"M9.25 9a.75.75 0 010-1.5h4.5a.75.75 0 010 1.5h-4.5z"}})])
          )
        }
      }
    