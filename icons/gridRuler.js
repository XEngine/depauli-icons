
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
            children.concat([_c('path',{attrs:{"d":"M2.25 24A2.252 2.252 0 010 21.75V2.25A2.252 2.252 0 012.25 0h19.5A2.252 2.252 0 0124 2.25v13.629c0 .6-.234 1.165-.658 1.59l-5.873 5.872c-.425.425-.99.659-1.59.659H2.25zM15 22.5v-5.25A2.252 2.252 0 0117.25 15h5.25V7.5h-15v15H15zm-13.5-.75c0 .414.336.75.75.75H6V18H4.5a.75.75 0 010-1.5H6V12H4.5a.75.75 0 010-1.5H6v-3H1.5v14.25zm15.75-5.25a.75.75 0 00-.75.75v4.939l5.689-5.689H17.25zM22.5 6V2.25a.75.75 0 00-.75-.75H7.5V6h3V4.5a.75.75 0 011.5 0V6h4.5V4.5a.75.75 0 011.5 0V6h4.5zM6 6V1.5H2.25a.75.75 0 00-.75.75V6H6z"}})])
          )
        }
      }
    