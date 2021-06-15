
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
            children.concat([_c('path',{attrs:{"d":"M0 12.41a.75.75 0 00.32.6L4.6 16v2.81a.75.75 0 00.36.64l6.65 4.09a.75.75 0 00.79 0l6.6-4.13a.75.75 0 00.36-.64V16l4.28-3a.75.75 0 000-1.21l-3.84-3 3.84-3a.75.75 0 00-.07-1.23L17 .5a.75.75 0 00-.85 0L12 3.77 7.86.54A.75.75 0 007 .5L.36 4.59a.75.75 0 00-.07 1.23l3.84 3-3.84 3a.75.75 0 00-.29.59zm17.9 5.95L12 22l-5.9-3.65V17l.87.6a.75.75 0 00.92-.06L12 13.9l4.1 3.65a.75.75 0 00.92.06l.87-.6zM12 5.6l5.22 3.21L12 12 6.78 8.81zM16.66 16l-3.41-3 5.35-3.28 3.4 2.63zm0-14l5.28 3.3-3.34 2.6-5.29-3.26zM7.35 2l3.34 2.6L5.4 7.9 2.06 5.3zM5.4 9.72L10.75 13l-3.41 3L2 12.35z"}})])
          )
        }
      }
    