
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
            children.concat([_c('path',{attrs:{"d":"M.764 22.933a.743.743 0 01-.53-.22.744.744 0 010-1.06l1.323-1.323a20.993 20.993 0 019.054-14.362C11.444 2.96 13 2.103 13.177 2.014a.747.747 0 01.866.141l2.844 2.844 3.27-3.27a2.252 2.252 0 011.572-.637 2.23 2.23 0 011.62.688 2.242 2.242 0 01-.006 3.127l-.538.538a.744.744 0 01-1.06 0 .744.744 0 010-1.06l.53-.53a.744.744 0 00-.006-1.034.741.741 0 00-.54-.229.746.746 0 00-.52.209l-3.26 3.26 2.845 2.845a.75.75 0 01.141.866c-.088.177-.941 1.733-3.953 2.567a20.989 20.989 0 01-14.364 9.054l-1.322 1.322a.756.756 0 01-.532.218zM11.175 7.406a19.555 19.555 0 00-8.007 12.373 19.55 19.55 0 0012.374-8.007l-1.654-1.654-6.595 6.595a.744.744 0 01-1.06 0 .752.752 0 010-1.061l6.595-6.595-1.653-1.651zm5.561 3.439c1.392-.41 2.151-.976 2.528-1.348l-5.809-5.809c-.375.383-.945 1.148-1.352 2.524l4.633 4.633z"}})])
          )
        }
      }
    