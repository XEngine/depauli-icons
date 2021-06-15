
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
            children.concat([_c('path',{attrs:{"d":"M.75 24a.75.75 0 010-1.5h.75v-12C1.5 9.673 2.173 9 3 9h3c.827 0 1.5.673 1.5 1.5v12H9v-9c0-.827.673-1.5 1.5-1.5h3c.827 0 1.5.673 1.5 1.5v9h1.5V18c0-.827.673-1.5 1.5-1.5h3c.827 0 1.5.673 1.5 1.5v4.5h.75a.75.75 0 010 1.5H.75zM21 22.5V18h-3v4.5h3zm-7.5 0v-9h-3v9h3zm-7.5 0v-12H3v12h3zM17.387 9.991a.75.75 0 01-.264-1.452l1.486-.558L4.19 1.433A.747.747 0 013.817.44.754.754 0 014.81.067l14.42 6.548-.558-1.485a.752.752 0 01.701-1.014c.311 0 .593.196.702.487l1.194 3.181a.737.737 0 01.029.432.744.744 0 01-.201.359.776.776 0 01-.199.142.355.355 0 01-.065.032l-3.182 1.194a.747.747 0 01-.264.048z"}})])
          )
        }
      }
    