
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
            children.concat([_c('path',{attrs:{"d":"M4.75 24a2.252 2.252 0 01-2.25-2.25v-12c0-2.384.873-4.678 2.459-6.465a.472.472 0 01.098-.11A9.771 9.771 0 0112.25 0a9.768 9.768 0 017.199 3.182.373.373 0 01.089.101A9.724 9.724 0 0122 9.75v12A2.252 2.252 0 0119.75 24h-15zm15-1.5a.75.75 0 00.75-.75V16.5H16v6h3.75zm-5.25 0v-6H10v6h4.5zM4 21.75c0 .414.336.75.75.75H8.5v-6H4v5.25zM20.5 15v-4.5H16l4.5 4.5zm-6 0v-4.5H10l4.5 4.5zm-6 0v-4.5H4V15h4.5zm11.965-6a8.15 8.15 0 00-1.609-4.187L14.205 9h6.26zM10.296 9L5.644 4.813A8.15 8.15 0 004.035 9h6.261zM13 8.066L17.851 3.7A8.208 8.208 0 0013 1.535v6.531zm-1.5 0V1.535A8.208 8.208 0 006.649 3.7L11.5 8.066z"}})])
          )
        }
      }
    