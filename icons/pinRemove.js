
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
            children.concat([_c('path',{attrs:{"d":"M8.574 22.557a.745.745 0 01-.588-.285C5.283 18.857.75 12.591.75 9 .745 4.038 4.778-.003 9.74-.009a8.96 8.96 0 018.971 8.172.746.746 0 01-.745.819.755.755 0 01-.748-.681 7.466 7.466 0 00-7.468-6.81c-4.144.005-7.505 3.373-7.5 7.508 0 3.346 5.291 10.293 6.912 12.342a.75.75 0 01-.588 1.216z"}}),_c('path',{attrs:{"d":"M16.5 24c-3.722 0-6.75-3.028-6.75-6.75s3.028-6.75 6.75-6.75 6.75 3.028 6.75 6.75S20.222 24 16.5 24zm0-12a5.256 5.256 0 00-5.25 5.25c0 2.895 2.355 5.25 5.25 5.25s5.25-2.355 5.25-5.25A5.256 5.256 0 0016.5 12z"}}),_c('path',{attrs:{"d":"M13.5 18a.75.75 0 010-1.5h6a.75.75 0 010 1.5h-6z"}})])
          )
        }
      }
    