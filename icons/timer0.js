
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
            children.concat([_c('path',{attrs:{"d":"M13.5 22.5a.75.75 0 010-1.5c4.963 0 9-4.037 9-9s-4.037-9-9-9c-4.857 0-8.828 3.867-8.995 8.684L6.22 9.97a.744.744 0 011.06 0c.142.141.22.33.22.53s-.078.389-.22.53l-3 3a.763.763 0 01-.246.164l-.027.01a.738.738 0 01-.517-.001l-.022-.008a.747.747 0 01-.249-.165l-2.999-3C.078 10.889 0 10.7 0 10.5s.078-.389.22-.53c.141-.142.33-.22.53-.22s.389.078.53.22l1.724 1.724C3.167 6.045 7.813 1.5 13.5 1.5 19.29 1.5 24 6.21 24 12s-4.71 10.5-10.5 10.5z"}}),_c('path',{attrs:{"d":"M13.5 16.5c-1.654 0-3-1.346-3-3v-3c0-1.654 1.346-3 3-3s3 1.346 3 3v3c0 1.654-1.346 3-3 3zm0-7.5c-.827 0-1.5.673-1.5 1.5v3c0 .827.673 1.5 1.5 1.5s1.5-.673 1.5-1.5v-3c0-.827-.673-1.5-1.5-1.5z"}})])
          )
        }
      }
    