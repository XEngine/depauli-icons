
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
            children.concat([_c('path',{attrs:{"d":"M9.75 12.753c-.827 0-1.5-.673-1.5-1.5V7.854l-.27.225a.75.75 0 01-.96-1.152L8.48 5.71a.71.71 0 01.085-.071l2.955-2.462a.753.753 0 01.96 0l4.5 3.75a.744.744 0 01.267.508.747.747 0 01-1.227.644l-.27-.225v3.399c0 .827-.673 1.5-1.5 1.5h-4.5zm0-1.503l4.5.003V6.604L12 4.729 9.75 6.604v4.646z"}}),_c('path',{attrs:{"d":"M18.75 24a.75.75 0 01-.75-.75V16.5H6v6.75a.75.75 0 01-1.5 0V16.5H3a2.252 2.252 0 01-2.25-2.25v-12A2.252 2.252 0 013 0h18a2.252 2.252 0 012.25 2.25v12A2.252 2.252 0 0121 16.5h-1.5v6.75a.75.75 0 01-.75.75zM3 1.5a.75.75 0 00-.75.75v12c0 .414.336.75.75.75h18a.75.75 0 00.75-.75v-12A.75.75 0 0021 1.5H3z"}})])
          )
        }
      }
    