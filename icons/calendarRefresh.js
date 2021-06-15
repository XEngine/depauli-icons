
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
            children.concat([_c('path',{attrs:{"d":"M2.25 17.999A2.252 2.252 0 010 15.749v-12a2.252 2.252 0 012.25-2.25H4.5v-.75a.75.75 0 011.5 0v.75h6v-.75a.75.75 0 011.5 0v.75h2.25A2.252 2.252 0 0118 3.749v4.5a.75.75 0 01-1.5 0v-.75h-15v8.25c0 .414.336.75.75.75h6a.75.75 0 010 1.5h-6zm14.25-12v-2.25a.75.75 0 00-.75-.75H13.5v.75a.75.75 0 01-1.5 0v-.75H6v.75a.75.75 0 01-1.5 0v-.75H2.25a.75.75 0 00-.75.75v2.25h15zM17.39 23.998a6.276 6.276 0 01-2.046-.343A6.293 6.293 0 0112 20.97v1.528a.75.75 0 01-1.5 0v-3.75a.75.75 0 01.75-.75H15a.75.75 0 010 1.5h-2.066a4.832 4.832 0 002.897 2.738 4.829 4.829 0 006.127-2.997.75.75 0 111.419.487 6.33 6.33 0 01-5.987 4.272z"}}),_c('path',{attrs:{"d":"M19.5 16.499a.75.75 0 010-1.5h2.067a4.825 4.825 0 00-4.458-3.001 4.827 4.827 0 00-4.567 3.261.75.75 0 11-1.419-.485 6.327 6.327 0 018.029-3.935 6.292 6.292 0 013.348 2.686v-1.526a.75.75 0 011.5 0v3.75a.75.75 0 01-.75.75H19.5z"}})])
          )
        }
      }
    