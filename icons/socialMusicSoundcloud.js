
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
            children.concat([_c('path',{attrs:{"d":"M20.41 17.74a3.58 3.58 0 000-7.16 3.64 3.64 0 00-.49 0 5.71 5.71 0 00-5.58-4.36 5.8 5.8 0 00-2.07.39 1.06 1.06 0 00-.76 1v9a1.09 1.09 0 001 1.08zM13 8a4.29 4.29 0 011.33-.22 4.22 4.22 0 014.22 3.87.75.75 0 001 .63 2.08 2.08 0 11.81 4H13zM10.16 17V8a.75.75 0 10-1.5 0v9a.75.75 0 101.5 0zM7.28 17V9a.75.75 0 00-1.5 0v8a.75.75 0 001.5 0zM4.4 17v-5.52a.75.75 0 10-1.5 0V17a.75.75 0 001.5 0zM1.51 16.48v-4a.75.75 0 00-1.5 0v4a.75.75 0 001.5 0z"}})])
          )
        }
      }
    