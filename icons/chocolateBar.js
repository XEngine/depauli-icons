
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
            children.concat([_c('path',{attrs:{"d":"M6.054 24a2.334 2.334 0 01-2.331-2.331V14.25a2.25 2.25 0 011.505-2.122V6.812a.421.421 0 01-.001-.124V2.35A2.352 2.352 0 017.577 0h8.804a2.34 2.34 0 011.661.693c.443.445.687 1.036.685 1.663v9.775a2.284 2.284 0 011.022.741c.31.399.474.875.474 1.377v7.419a2.334 2.334 0 01-2.331 2.331H6.054zm-.817-9.891a.702.702 0 00-.014.141v7.419c0 .458.373.831.831.831h11.838a.832.832 0 00.831-.831v-6.276l-1.987 3.216a2.249 2.249 0 01-3.105.727l-8.394-5.227zm9.187 3.954a.744.744 0 00.566.095.744.744 0 00.468-.334l2.662-4.309a.678.678 0 00-.147-.015H7.096l7.328 4.563zM17.227 12V7.5h-4.504V12h4.504zm-6.004 0V7.5H6.727V12h4.496zm6.004-6V2.354a.852.852 0 00-.848-.854h-3.656V6h4.504zm-6.004 0V1.5H7.577a.85.85 0 00-.85.85V6h4.496z"}})])
          )
        }
      }
    