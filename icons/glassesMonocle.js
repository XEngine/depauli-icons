
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
            children.concat([_c('path',{attrs:{"d":"M7.5 10.5a.75.75 0 010-1.5 2.252 2.252 0 002.25-2.25.75.75 0 011.5 0A3.754 3.754 0 017.5 10.5z"}}),_c('path',{attrs:{"d":"M15.75 24c-1.654 0-3-1.346-3-3V10.989A6.739 6.739 0 017.5 13.5C3.778 13.5.75 10.472.75 6.75S3.778 0 7.5 0s6.75 3.028 6.75 6.75V21c0 .827.673 1.5 1.5 1.5s1.5-.673 1.5-1.5v-9c0-1.654 1.346-3 3-3s3 1.346 3 3v1.5a.75.75 0 01-1.5 0V12c0-.827-.673-1.5-1.5-1.5s-1.5.673-1.5 1.5v9c0 1.654-1.346 3-3 3zM7.5 1.5c-2.895 0-5.25 2.355-5.25 5.25S4.605 12 7.5 12s5.25-2.355 5.25-5.25S10.395 1.5 7.5 1.5z"}})])
          )
        }
      }
    