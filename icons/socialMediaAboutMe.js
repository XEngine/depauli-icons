
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
            children.concat([_c('path',{attrs:{"d":"M1 17.74a.75.75 0 00.75-.74v-6.84a1.87 1.87 0 013.75 0V17A.75.75 0 007 17v-6.84a1.87 1.87 0 113.75 0V17a.75.75 0 001.5 0v-6.84a3.36 3.36 0 00-6-2.09 3.34 3.34 0 00-4.5-.71V7a.75.75 0 10-1.5 0v10a.75.75 0 00.75.74zM18.82 17.74a4.87 4.87 0 004.45-3.11.75.75 0 00-1.38-.63 3.4 3.4 0 01-3.08 2.2 3.71 3.71 0 01-3.43-3.76H23a.75.75 0 00.74-.84c-.28-2.32-2.24-4.82-4.91-4.82a5.15 5.15 0 00-4.92 4.8V12.22a5.24 5.24 0 004.91 5.52zm0-9.42A3.71 3.71 0 0122.06 11h-6.49a3.53 3.53 0 013.26-2.68z"}})])
          )
        }
      }
    