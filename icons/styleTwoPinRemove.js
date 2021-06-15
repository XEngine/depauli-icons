
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
            children.concat([_c('path',{attrs:{"d":"M14.652 13.905a.743.743 0 01-.53-.22L12 11.564l-2.122 2.122a.744.744 0 01-1.06 0 .752.752 0 010-1.061l2.122-2.122-2.122-2.122a.743.743 0 01-.22-.53c0-.2.078-.389.22-.53a.744.744 0 011.06 0L12 9.443l2.122-2.122a.744.744 0 011.06 0 .744.744 0 010 1.06l-2.122 2.122 2.122 2.122a.752.752 0 010 1.061.746.746 0 01-.53.219z"}}),_c('path',{attrs:{"d":"M11.999 23.901c-.261 0-.518-.068-.743-.197a21.007 21.007 0 01-5.142-4.209c-2.564-2.922-3.864-6.2-3.864-9.743 0-5.376 4.374-9.75 9.75-9.75s9.75 4.374 9.75 9.75c0 3.544-1.3 6.822-3.865 9.744a21.008 21.008 0 01-5.142 4.208 1.5 1.5 0 01-.744.197zM12 1.503c-4.549 0-8.25 3.701-8.25 8.25 0 1.861.595 8.272 8.25 12.649 7.655-4.372 8.25-10.787 8.25-12.649 0-4.549-3.701-8.25-8.25-8.25z"}})])
          )
        }
      }
    