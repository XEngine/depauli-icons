
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
            children.concat([_c('path',{attrs:{"d":"M6.75 23.25a2.24 2.24 0 01-1.591-.655 2.24 2.24 0 01-.658-1.746l1.023-8.099H2.25a.75.75 0 010-1.5h15.029l.975-5.396-5.905-1.066-.868 4.81a.749.749 0 01-.871.605.75.75 0 01-.605-.871l.868-4.81a1.5 1.5 0 011.742-1.21l.51.092V2.25h-6v6.813a.75.75 0 01-1.5 0V2.25c0-.827.673-1.5 1.5-1.5h6c.827 0 1.5.673 1.5 1.5v1.425l3.895.704a1.5 1.5 0 011.21 1.739l-.927 5.132h2.946a.75.75 0 010 1.5h-3.274l1.016 8.056a2.267 2.267 0 01-.547 1.675 2.234 2.234 0 01-1.697.769H6.75zM5.997 21c0 .201.079.39.221.531a.743.743 0 00.529.218h10.501c.017 0 .034 0 .052-.002a.746.746 0 00.7-.798l-.562-4.45H6.562l-.565 4.472V21zm11.251-6l-.284-2.25H7.036L6.752 15h10.496z"}})])
          )
        }
      }
    