
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
            children.concat([_c('path',{attrs:{"d":"M5.733 24a3.486 3.486 0 01-3.483-3.48V4.983A3.486 3.486 0 015.733 1.5H9A.75.75 0 019 3H5.733C4.64 3 3.75 3.89 3.75 4.983V18h10.5v-3a.75.75 0 011.5 0v5.518A3.486 3.486 0 0112.268 24H5.733zM3.75 20.518c0 1.093.89 1.982 1.982 1.982h6.535a1.985 1.985 0 001.983-1.982V19.5H3.75v1.018z"}}),_c('path',{attrs:{"d":"M10.5 9.75a.75.75 0 010-1.5.75.75 0 00.75-.75v-3c0-2.481 2.019-4.5 4.5-4.5s4.5 2.019 4.5 4.5v3c0 .414.336.75.75.75a.75.75 0 010 1.5H10.5zm8.378-1.5a2.226 2.226 0 01-.128-.75v-3c0-1.654-1.346-3-3-3s-3 1.346-3 3v3c0 .259-.043.512-.128.75h6.256zM15.75 12.75a1.123 1.123 0 01-.058-2.246h.004l.026-.003-.019.001a1.127 1.127 0 11.047 2.248z"}})])
          )
        }
      }
    