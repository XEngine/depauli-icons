
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
            children.concat([_c('path',{attrs:{"d":"M4.983 24A3.486 3.486 0 011.5 20.52V4.983A3.486 3.486 0 014.983 1.5H8.25a.75.75 0 010 1.5H4.983C3.89 3 3 3.89 3 4.983V18h10.5v-5.25a.75.75 0 011.5 0v7.768A3.486 3.486 0 0111.518 24H4.983zM3 20.518c0 1.093.89 1.982 1.982 1.982h6.535a1.985 1.985 0 001.983-1.982V19.5H3v1.018z"}}),_c('path',{attrs:{"d":"M21.75 12.75a.743.743 0 01-.53-.22l-3.08-3.079A5.24 5.24 0 0115 10.5c-2.895 0-5.25-2.355-5.25-5.25S12.105 0 15 0a5.256 5.256 0 015.25 5.25 5.24 5.24 0 01-1.049 3.14l3.08 3.08c.142.141.22.33.22.53s-.078.389-.22.53-.331.22-.531.22zM15 1.5c-2.068 0-3.75 1.682-3.75 3.75S12.932 9 15 9c.992 0 1.927-.385 2.634-1.083l.03-.03a3.726 3.726 0 001.086-2.636A3.754 3.754 0 0015 1.5z"}})])
          )
        }
      }
    