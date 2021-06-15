
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
            children.concat([_c('path',{attrs:{"d":"M5.522 22c-1.654 0-3-1.346-3-3V9.25c0-1.654 1.346-3 3-3s3 1.346 3 3v2.507l7.607-7.607a2.981 2.981 0 012.121-.879c.8 0 1.551.311 2.116.874.573.573.884 1.326.884 2.127 0 .801-.312 1.554-.879 2.12L12.764 16h2.508c1.654 0 3 1.346 3 3s-1.346 3-3 3h-9.75zm0-14.25c-.827 0-1.5.673-1.5 1.5V19c0 .827.673 1.5 1.5 1.5h9.75c.827 0 1.5-.673 1.5-1.5s-.673-1.5-1.5-1.5h-4.318a.747.747 0 01-.693-.463.745.745 0 01.163-.817l8.887-8.887a1.495 1.495 0 00.008-2.113l-.004-.004a1.497 1.497 0 00-2.124-.005l-8.889 8.888a.743.743 0 01-.818.162.746.746 0 01-.462-.693V9.25c0-.827-.673-1.5-1.5-1.5z"}})])
          )
        }
      }
    