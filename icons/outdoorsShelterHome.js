
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
            children.concat([_c('path',{attrs:{"d":"M14.251 24a.75.75 0 01-.75-.75V18h-3v5.25a.75.75 0 01-.75.75h-4.5a2.252 2.252 0 01-2.25-2.25v-8.34L1.22 14.835a.75.75 0 11-.938-1.17l11.25-9a.747.747 0 01.938-.001l4.031 3.225V.75a.75.75 0 01.75-.75h6a.75.75 0 01.75.75v4.5a.75.75 0 01-.75.75h-5.25v3.09l5.719 4.575a.75.75 0 01-.938 1.171l-1.781-1.425v8.34a2.252 2.252 0 01-2.25 2.25h-4.5zm4.5-1.5a.75.75 0 00.75-.75v-9.54l-7.5-6-7.5 6v9.54c0 .414.336.75.75.75h3.75V18c0-.827.673-1.5 1.5-1.5h3c.827 0 1.5.673 1.5 1.5v4.5h3.75zm3.75-18v-3h-4.5v3h4.5z"}})])
          )
        }
      }
    