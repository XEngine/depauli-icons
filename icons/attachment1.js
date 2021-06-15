
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
            children.concat([_c('path',{attrs:{"d":"M9.75 24a5.256 5.256 0 01-5.25-5.25V7.5C4.5 3.365 7.865 0 12 0s7.5 3.365 7.5 7.5v8.249a.75.75 0 01-1.5 0V7.5c0-3.308-2.692-6-6-6s-6 2.692-6 6v11.25c0 2.068 1.682 3.75 3.75 3.75s3.75-1.682 3.75-3.75V7.5c0-.827-.673-1.5-1.5-1.5s-1.5.673-1.5 1.5v9.75a.75.75 0 01-1.5 0V7.5c0-1.654 1.346-3 3-3s3 1.346 3 3v11.25A5.256 5.256 0 019.75 24z"}})])
          )
        }
      }
    