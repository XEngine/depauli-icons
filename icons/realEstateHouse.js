
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
            children.concat([_c('path',{attrs:{"d":"M2.25 20.25A2.252 2.252 0 010 18V3A2.252 2.252 0 012.25.75h16.5A2.252 2.252 0 0121 3v15a2.252 2.252 0 01-2.25 2.25H2.25zm0-18A.75.75 0 001.5 3v15c0 .414.336.75.75.75h16.5a.75.75 0 00.75-.75V3a.75.75 0 00-.75-.75H2.25z"}}),_c('path',{attrs:{"d":"M5.25 23.25a.75.75 0 010-1.5h16.5a.75.75 0 00.75-.75V5.8a.75.75 0 011.5 0V21a2.252 2.252 0 01-2.25 2.25H5.25z"}}),_c('path',{attrs:{"d":"M8.25 15.75c-.827 0-1.5-.673-1.5-1.5v-4.149l-.27.225a.75.75 0 01-.96-1.152l4.5-3.75a.753.753 0 01.96 0l4.5 3.75a.744.744 0 01.267.508.747.747 0 01-1.227.644l-.27-.225v4.149c0 .827-.673 1.5-1.5 1.5h-4.5zm0-1.5h4.5V8.851L10.5 6.976 8.25 8.851v5.399z"}})])
          )
        }
      }
    