
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
            children.concat([_c('path',{attrs:{"d":"M8.251 19.497a.75.75 0 010-1.5h3V2.247l-4.8 3.6a.753.753 0 01-1.05-.15.75.75 0 01.15-1.05l6-4.5a.734.734 0 01.234-.116.782.782 0 01.19-.033l.026-.001a.726.726 0 01.249.045c.058.02.115.048.167.083l.027.018 6.001 4.403a.75.75 0 01-.887 1.209l-4.806-3.526v15.77h3a.75.75 0 010 1.5H8.251zM8.251 23.997a.75.75 0 010-1.5h7.5a.75.75 0 010 1.5h-7.5z"}})])
          )
        }
      }
    