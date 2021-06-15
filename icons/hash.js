
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
            children.concat([_c('path',{attrs:{"d":"M12 23.998a.747.747 0 01-.712-.988l1.671-5.013H7.041l-1.829 5.487a.748.748 0 01-1.382.098.746.746 0 01-.041-.573l1.671-5.013H.75a.75.75 0 010-1.5h5.209l2.5-7.5H3.75a.748.748 0 110-1.498h5.209L11.288.511a.75.75 0 011.424.473l-2.171 6.513h5.919L18.789.51a.747.747 0 01.949-.474.748.748 0 01.474.948l-2.171 6.513h5.209a.75.75 0 010 1.5h-5.709l-2.5 7.5h5.209a.75.75 0 010 1.5h-5.709l-1.829 5.487a.75.75 0 01-.712.514zm1.459-7.5l2.5-7.5H10.04l-2.5 7.5h5.919z"}})])
          )
        }
      }
    