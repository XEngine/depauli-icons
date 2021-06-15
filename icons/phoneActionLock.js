
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
            children.concat([_c('path',{attrs:{"d":"M5.733 24a3.486 3.486 0 01-3.483-3.48V4.983A3.486 3.486 0 015.733 1.5H9A.75.75 0 019 3H5.733C4.64 3 3.75 3.89 3.75 4.983V18h10.5v-2.25a.75.75 0 011.5 0v4.768A3.486 3.486 0 0112.268 24H5.733zM3.75 20.518c0 1.093.89 1.982 1.982 1.982h6.535a1.985 1.985 0 001.983-1.982V19.5H3.75v1.018z"}}),_c('path',{attrs:{"d":"M13.5 13.5a2.252 2.252 0 01-2.25-2.25v-4.5c0-.96.615-1.808 1.5-2.121V3.75C12.75 1.682 14.432 0 16.5 0s3.75 1.682 3.75 3.75v.879a2.26 2.26 0 011.5 2.121v4.5a2.252 2.252 0 01-2.25 2.25h-6zm0-7.5a.75.75 0 00-.75.75v4.5c0 .414.336.75.75.75h6a.75.75 0 00.75-.75v-4.5A.75.75 0 0019.5 6h-6zm5.25-1.5v-.75c0-1.241-1.009-2.25-2.25-2.25s-2.25 1.009-2.25 2.25v.75h4.5z"}}),_c('circle',{attrs:{"cx":"16.5","cy":"9.03","r":"1.125"}})])
          )
        }
      }
    