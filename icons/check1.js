
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
            children.concat([_c('path',{attrs:{"d":"M6.347 24.003a2.95 2.95 0 01-2.36-1.187L.15 17.7a.748.748 0 01.6-1.2c.235 0 .459.112.6.3l3.839 5.118a1.442 1.442 0 001.42.562c.381-.068.712-.281.933-.599L22.636.32a.748.748 0 111.228.86L8.772 22.739a2.93 2.93 0 01-1.9 1.217c-.173.031-.35.047-.525.047z"}})])
          )
        }
      }
    