
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
            children.concat([_c('path',{attrs:{"d":"M20.48 10.25c-.07-3.33-2-6.62-6.33-6.62a5.57 5.57 0 00-5.43 3.43 3.55 3.55 0 00-5 3.13 5.2 5.2 0 001.45 10.19h13.66a5.21 5.21 0 001.65-10.13zm-1.65 8.63H5.17a3.7 3.7 0 01-.58-7.35.75.75 0 00.62-.87A2.08 2.08 0 015.67 9a2 2 0 012.88-.24.74.74 0 00.65.16.75.75 0 00.52-.43c.8-1.82 1.69-3.33 4.42-3.33C17.72 5.13 19 8 19 10.43v.33a.75.75 0 00.6.79 3.7 3.7 0 01-.74 7.33z"}})])
          )
        }
      }
    