
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
              attrs: Object.assign({"data-name":"Outline Version","xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24"}, attrs),
              ...rest,
            },
            children.concat([_c('ellipse',{attrs:{"cx":"16.4","cy":"10.38","rx":"1.26","ry":"1.25"}}),_c('path',{attrs:{"d":"M16.85 0c-5.46 0-7 4.62-7.07 7.08v6.39a.75.75 0 00.75.75h6.06A7.19 7.19 0 0024 7.11 7 7 0 0016.85 0zm-.27 12.72h-5.3V7.1c0-.23.2-5.6 5.57-5.6a5.5 5.5 0 015.65 5.61 5.7 5.7 0 01-5.91 5.61z"}}),_c('path',{attrs:{"d":"M7.6 9.34A7.48 7.48 0 000 16.67 7.43 7.43 0 007.52 24 7.66 7.66 0 0015 16.4a.75.75 0 00-.75-.75h-5.9v-5.56a.75.75 0 00-.75-.75zm5.89 7.81a6.14 6.14 0 01-6 5.35 5.93 5.93 0 01-6-5.83 5.94 5.94 0 015.35-5.79v5.52a.75.75 0 00.75.75zM16.4 8.09a.75.75 0 00.75-.75V3.2a.75.75 0 00-1.5 0v4.14a.75.75 0 00.75.75z"}})])
          )
        }
      }
    