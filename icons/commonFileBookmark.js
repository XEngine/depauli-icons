
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
            children.concat([_c('path',{attrs:{"d":"M3.023 24a2.252 2.252 0 01-2.25-2.25V2.25A2.252 2.252 0 013.023 0h15c.59 0 1.147.227 1.571.639l2.955 2.883c.431.422.678 1.009.678 1.611V21.75a2.252 2.252 0 01-2.25 2.25H3.023zm0-22.5a.75.75 0 00-.75.75v19.5c0 .414.336.75.75.75h17.954a.75.75 0 00.75-.75V5.133a.753.753 0 00-.226-.537l-2.955-2.883a.744.744 0 00-.523-.213h-5.25v9.75a.747.747 0 01-.75.75.753.753 0 01-.45-.15l-2.55-1.913-2.55 1.913a.753.753 0 01-.785.071.746.746 0 01-.415-.671V1.5h-2.25zm3.75 8.25l1.8-1.35a.745.745 0 01.9 0l1.8 1.35V1.5h-4.5v8.25z"}})])
          )
        }
      }
    