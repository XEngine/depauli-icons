
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
            children.concat([_c('path',{attrs:{"d":"M4.287 19.502a1.53 1.53 0 01-1.065-.431L.424 16.35a1.486 1.486 0 01.032-2.11L10.932 4.054a1.534 1.534 0 012.134-.002l10.482 10.192-.003-.003.027.027c.286.297.437.676.429 1.073-.008.397-.17.767-.456 1.042l-2.763 2.686a1.533 1.533 0 01-2.133.003L12 12.607l-6.648 6.464a1.53 1.53 0 01-1.065.431zm-.022-1.509a.031.031 0 00.022.008c.01 0 .018-.003.025-.01l7.165-6.967a.745.745 0 01.523-.212c.196 0 .382.075.522.212l7.168 6.969a.116.116 0 00.028.004c.01 0 .015-.003.019-.007l2.756-2.679L12.022 5.129 12 5.121a.032.032 0 00-.025.011L1.506 15.311l2.759 2.682z"}})])
          )
        }
      }
    