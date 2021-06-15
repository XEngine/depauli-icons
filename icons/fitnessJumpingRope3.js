
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
            children.concat([_c('path',{attrs:{"d":"M16.5 24a5.256 5.256 0 01-5.25-5.25V5.25c0-2.068-1.682-3.75-3.75-3.75S3.75 3.182 3.75 5.25V12h.75c.827 0 1.5.673 1.5 1.5V21c0 1.654-1.346 3-3 3s-3-1.346-3-3v-7.5c0-.827.673-1.5 1.5-1.5h.75V5.25C2.25 2.355 4.605 0 7.5 0s5.25 2.355 5.25 5.25v13.5c0 2.068 1.682 3.75 3.75 3.75s3.75-1.682 3.75-3.75V12h-.75c-.827 0-1.5-.673-1.5-1.5V3c0-1.654 1.346-3 3-3s3 1.346 3 3v7.5c0 .827-.673 1.5-1.5 1.5h-.75v6.75A5.256 5.256 0 0116.5 24zm-15-3c0 .827.673 1.5 1.5 1.5s1.5-.673 1.5-1.5v-4.5h-3V21zm3-6v-1.5h-3V15h3zm15-4.5h3V9h-3v1.5zm3-3V3c0-.827-.673-1.5-1.5-1.5s-1.5.673-1.5 1.5v4.5h3z"}})])
          )
        }
      }
    