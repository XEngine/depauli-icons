
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
            children.concat([_c('path',{attrs:{"d":"M12 24A12 12 0 100 12a12 12 0 0012 12zm0-1.5a10.51 10.51 0 01-10.12-7.73 3.52 3.52 0 00.45.17 6 6 0 005.82-2.07 7 7 0 00.93-7.3c1.83-.47 3.07 1.13 5 3.83s4.05 5.77 7.79 6.22A10.51 10.51 0 0112 22.5zm0-21a10.5 10.5 0 0110.27 12.66c-3.23-.25-5.14-3-7-5.62-2-2.83-4-5.76-7.52-4.06a.75.75 0 00-.35 1c1.6 3.34.44 5.45-.4 6.41a4.47 4.47 0 01-4.25 1.61 1.74 1.74 0 01-1.25-1.56A10.51 10.51 0 0112 1.5z"}})])
          )
        }
      }
    