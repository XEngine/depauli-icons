
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
            children.concat([_c('path',{attrs:{"d":"M5.358 24a3.486 3.486 0 01-3.483-3.48V4.983A3.486 3.486 0 015.358 1.5h3.267a.75.75 0 010 1.5H5.358c-1.093 0-1.983.89-1.983 1.983V18h10.5v-3.75a.75.75 0 011.5 0v6.268A3.486 3.486 0 0111.893 24H5.358zm-1.983-3.482c0 1.093.89 1.982 1.982 1.982h6.535a1.985 1.985 0 001.983-1.982V19.5h-10.5v1.018z"}}),_c('path',{attrs:{"d":"M16.125 12c-3.308 0-6-2.692-6-6s2.692-6 6-6 6 2.692 6 6-2.692 6-6 6zm0-10.5c-2.481 0-4.5 2.019-4.5 4.5s2.019 4.5 4.5 4.5 4.5-2.019 4.5-4.5-2.019-4.5-4.5-4.5z"}}),_c('path',{attrs:{"d":"M16.125 7.125C15.505 7.125 15 6.62 15 6c0-.607.476-1.1 1.084-1.122l.042-.001.043.001A1.117 1.117 0 0117.25 6c0 .62-.505 1.125-1.125 1.125z"}})])
          )
        }
      }
    