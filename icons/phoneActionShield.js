
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
            children.concat([_c('path',{attrs:{"d":"M4.983 24A3.487 3.487 0 011.5 20.519V4.983A3.487 3.487 0 014.983 1.5H6.75a.75.75 0 010 1.5H4.983C3.89 3 3 3.89 3 4.983V18h10.5v-3a.75.75 0 011.5 0v5.518A3.486 3.486 0 0111.518 24H4.983zM3 20.518c0 1.093.89 1.982 1.982 1.982h6.535a1.985 1.985 0 001.983-1.982V19.5H3v1.018z"}}),_c('path',{attrs:{"d":"M15.75 13.5a.758.758 0 01-.165-.018A8.367 8.367 0 019 5.249V2.25A2.252 2.252 0 0111.25 0h9a2.252 2.252 0 012.25 2.25v2.999a8.367 8.367 0 01-6.587 8.233.727.727 0 01-.163.018zm-4.5-12a.75.75 0 00-.75.75v3a6.887 6.887 0 005.25 6.729A6.886 6.886 0 0021 5.251V2.25a.75.75 0 00-.75-.75h-9z"}}),_c('path',{attrs:{"d":"M15.75 9.792a.75.75 0 01-.75-.75v-2.25h-2.25a.75.75 0 010-1.5H15v-2.25a.75.75 0 011.5 0v2.25h2.25a.75.75 0 010 1.5H16.5v2.25a.75.75 0 01-.75.75z"}})])
          )
        }
      }
    