
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
            children.concat([_c('path',{attrs:{"d":"M18 4.5a.743.743 0 01-.533-.223l-1.5-1.518a.737.737 0 01-.174-.292.75.75 0 01-.036-.19c-.002-.031-.003-.057-.002-.083a.75.75 0 01.222-.499L17.474.216a.746.746 0 011.059.006.751.751 0 01-.006 1.061l-.201.199h3.424a.75.75 0 010 1.5h-3.454l.238.241A.751.751 0 0118 4.5zM6 24a.75.75 0 01-.534-1.277l.238-.241H2.25a.75.75 0 010-1.5h3.424l-.201-.198a.751.751 0 011.054-1.068l1.5 1.482a.415.415 0 01.038.044.712.712 0 01.127.2l.013.036a.754.754 0 01-.022.556.727.727 0 01-.15.224l-1.5 1.518A.74.74 0 016 24z"}}),_c('path',{attrs:{"d":"M12 24a.75.75 0 01-.75-.75V18h-4C6.561 18 6 17.439 6 16.75V14c0-.689.561-1.25 1.25-1.25h4v-1.5H5c-.689 0-1.25-.561-1.25-1.25V7.25C3.75 6.561 4.311 6 5 6h6.25V.75a.75.75 0 011.5 0V6H19c.689 0 1.25.561 1.25 1.25V10c0 .689-.561 1.25-1.25 1.25h-6.25v1.5h4c.689 0 1.25.561 1.25 1.25v2.75c0 .689-.561 1.25-1.25 1.25h-4v5.25A.75.75 0 0112 24zm4.5-7.5v-2.25h-9v2.25h9zm2.25-6.75V7.5H5.25v2.25h13.5z"}})])
          )
        }
      }
    