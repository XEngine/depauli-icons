
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
            children.concat([_c('path',{attrs:{"d":"M.75 24a.75.75 0 010-1.5H3v-6H.75a.75.75 0 01-.75-.75v-1.5C0 9.701 3.701 6 8.25 6a.75.75 0 01.75.75v9a.75.75 0 01-.75.75h-.286l.75 1.5h2.073l.75-1.5h-.287a.75.75 0 01-.75-.75v-9a.75.75 0 01.75-.75c4.549 0 8.25 3.701 8.25 8.25v1.5a.75.75 0 01-.75.75H16.5V18h3.75V5.902A3.016 3.016 0 0118 3c0-1.654 1.346-3 3-3s3 1.346 3 3c0 1.37-.947 2.564-2.25 2.902V18h1.5a.75.75 0 010 1.5h-1.5v.75a.75.75 0 01-1.5 0v-.75H16.5v3h2.25a.75.75 0 010 1.5h-18zM15 22.5v-6h-1.787l-1.292 2.585a.746.746 0 01-.671.415h-3a.747.747 0 01-.671-.414L6.286 16.5H4.5v6H15zm3-7.5v-.75a6.747 6.747 0 00-6-6.709L18 15zM7.5 15V7.541a6.747 6.747 0 00-6 6.709V15h6zM21 1.5c-.827 0-1.5.673-1.5 1.5s.673 1.5 1.5 1.5 1.5-.673 1.5-1.5-.673-1.5-1.5-1.5z"}})])
          )
        }
      }
    