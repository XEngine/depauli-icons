
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
            children.concat([_c('path',{attrs:{"d":"M11.858 8.193a.748.748 0 01-.745-.849l.78-5.846H5.25a.75.75 0 010-1.5H21c1.654 0 3 1.346 3 3v.752a.75.75 0 01-1.5 0V3c0-.828-.673-1.502-1.5-1.502h-7.593l-.806 6.044a.753.753 0 01-.743.651zM5.25 23.998a.75.75 0 010-1.5h3.843l.908-6.81a.753.753 0 01.841-.645c.411.055.7.433.646.843l-.882 6.612h3.643a.75.75 0 010 1.5H5.25zM23.25 23.998a.743.743 0 01-.53-.22L.22 1.278C.078 1.137 0 .948 0 .748S.078.359.22.218c.141-.142.33-.22.53-.22s.389.078.53.22l22.5 22.5a.752.752 0 010 1.061.746.746 0 01-.53.219z"}})])
          )
        }
      }
    