
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
            children.concat([_c('path',{attrs:{"d":"M8.17 19.12c.95 0 2.71 0 2.71-1.73V10l5-3v3.77h-1.24a2.54 2.54 0 00-2.71 2.71 2.54 2.54 0 002.71 2.71c.95 0 2.71 0 2.71-1.73v-8.8A.75.75 0 0016.21 5L9.74 8.93a.75.75 0 00-.36.64v4.13H8.17a2.54 2.54 0 00-2.71 2.71 2.54 2.54 0 002.71 2.71zm7.68-4.66v.1a3.19 3.19 0 01-1.2.13 1.07 1.07 0 01-1.21-1.21 1.07 1.07 0 011.21-1.21h1.21zm-7.68.74h1.21V17.5a3.19 3.19 0 01-1.2.13A1.06 1.06 0 017 16.41a1.06 1.06 0 011.17-1.21z"}}),_c('path',{attrs:{"d":"M12 24A12 12 0 100 12a12 12 0 0012 12zm0-22.5A10.5 10.5 0 111.49 12 10.51 10.51 0 0112 1.5z"}})])
          )
        }
      }
    