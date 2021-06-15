
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
            children.concat([_c('path',{attrs:{"d":"M4.983 24A3.486 3.486 0 011.5 20.52V4.983A3.486 3.486 0 014.983 1.5H6.75a.75.75 0 010 1.5H4.983C3.89 3 3 3.89 3 4.983V18h10.5v-3a.75.75 0 011.5 0v5.518A3.486 3.486 0 0111.518 24H4.983zM3 20.518c0 1.093.89 1.982 1.982 1.982h6.535a1.985 1.985 0 001.983-1.982V19.5H3v1.018z"}}),_c('path',{attrs:{"d":"M15.75 13.5a6.702 6.702 0 01-4.732-1.942c-.015-.011-.029-.024-.041-.035a.365.365 0 01-.039-.045A6.69 6.69 0 019 6.75 6.758 6.758 0 0115.75 0c1.784 0 3.465.691 4.738 1.947a.455.455 0 01.04.035l.028.032A6.703 6.703 0 0122.5 6.75a6.758 6.758 0 01-6.75 6.75zm-3.141-2.548A5.239 5.239 0 0015.75 12 5.256 5.256 0 0021 6.75c0-1.135-.37-2.235-1.048-3.141l-7.343 7.343zM15.75 1.5a5.256 5.256 0 00-5.25 5.25c0 1.135.37 2.236 1.048 3.141l7.344-7.343A5.244 5.244 0 0015.75 1.5z"}})])
          )
        }
      }
    