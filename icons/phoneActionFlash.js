
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
            children.concat([_c('path',{attrs:{"d":"M7.232 24a3.486 3.486 0 01-3.483-3.48V4.983A3.486 3.486 0 017.232 1.5h4.017a.75.75 0 010 1.5H7.232c-1.093 0-1.983.89-1.983 1.983V18h10.5v-2.25a.75.75 0 011.5 0v4.768A3.486 3.486 0 0113.767 24H7.232zm-1.983-3.482c0 1.093.89 1.982 1.982 1.982h6.535a1.985 1.985 0 001.983-1.982V19.5h-10.5v1.018z"}}),_c('path',{attrs:{"d":"M13.499 15a.753.753 0 01-.75-.75V9h-1.875a1.125 1.125 0 01-.857-1.854L15.931.261a.746.746 0 01.828-.215c.293.109.49.392.49.704V6h1.875a1.126 1.126 0 01.86 1.85l-5.917 6.888a.742.742 0 01-.568.262zm0-7.5a.75.75 0 01.75.75v3.976l4.06-4.727L16.5 7.5a.75.75 0 01-.75-.75V2.774l-4.06 4.727 1.809-.001z"}})])
          )
        }
      }
    