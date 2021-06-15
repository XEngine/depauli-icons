
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
            children.concat([_c('path',{attrs:{"d":"M5.25 24a.747.747 0 01-.75-.75V19.5H2.25A2.252 2.252 0 010 17.25v-15A2.252 2.252 0 012.25 0h19.5A2.252 2.252 0 0124 2.25v15a2.252 2.252 0 01-2.25 2.25H11.5l-5.8 4.35a.753.753 0 01-.45.15zm-3-22.5a.75.75 0 00-.75.75v15c0 .414.336.75.75.75h3a.75.75 0 01.75.75v3l4.8-3.6a.753.753 0 01.45-.15h10.5a.75.75 0 00.75-.75v-15a.75.75 0 00-.75-.75H2.25z"}}),_c('path',{attrs:{"d":"M9.75 14.25c-.827 0-1.5-.673-1.5-1.5V9.351l-.27.225a.75.75 0 01-.96-1.152l4.5-3.75a.75.75 0 01.96 0l4.5 3.75a.744.744 0 01.267.508.747.747 0 01-1.227.644l-.27-.225v3.399c0 .827-.673 1.5-1.5 1.5h-4.5zm0-1.5h4.5V8.101L12 6.226 9.75 8.101v4.649z"}})])
          )
        }
      }
    