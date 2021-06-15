
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
            children.concat([_c('path',{attrs:{"d":"M7.629 20.25a.743.743 0 01-.53-.22l-6.44-6.44a2.253 2.253 0 010-3.182l6.44-6.439a.744.744 0 011.06 0 .747.747 0 010 1.061l-6.44 6.439a.752.752 0 000 1.061l6.44 6.44a.752.752 0 010 1.061.746.746 0 01-.53.219zM16.371 20.25a.749.749 0 01-.53-1.28l6.44-6.44a.752.752 0 000-1.061l-6.44-6.439a.743.743 0 01-.22-.53c0-.2.078-.389.22-.53a.744.744 0 011.06 0l6.44 6.439a2.253 2.253 0 010 3.182l-6.44 6.44a.746.746 0 01-.53.219z"}})])
          )
        }
      }
    