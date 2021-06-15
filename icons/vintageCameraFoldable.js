
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
            children.concat([_c('path',{attrs:{"d":"M15 24a.746.746 0 01-.435-.139L9.75 20.422 4.936 23.86a.752.752 0 01-1.047-.174.751.751 0 01.174-1.046L8.46 19.5l-4.2-3H2.25A2.252 2.252 0 010 14.25v-12A2.252 2.252 0 012.25 0h6c1.023 0 1.897.677 2.165 1.643L18 3.539V2.25a.75.75 0 011.5 0v2.709l2.526-.842a1.503 1.503 0 011.975 1.424v3.918a1.5 1.5 0 01-1.974 1.424l-2.527-.842v5.709a.75.75 0 01-.75.75h-3.51l-4.2 3 4.396 3.14A.75.75 0 0115 24zm-5.25-5.422l2.91-2.078H6.84l2.91 2.078zM18 15v-3.539l-7.5 1.875L18 15zM2.25 1.5a.75.75 0 00-.75.75v12c0 .414.336.75.75.75H9V2.25a.75.75 0 00-.75-.75h-6zm8.25 10.289l3-.75V3.961l-3-.75v8.578zm4.5-1.125l3-.75V5.086l-3-.75v6.328zm7.5-1.204V5.541l-3 1V8.46l3 1z"}})])
          )
        }
      }
    