
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
            children.concat([_c('path',{attrs:{"d":"M6 24a.75.75 0 010-1.5h1.615l.5-3H2.25A2.252 2.252 0 010 17.25v-15A2.252 2.252 0 012.25 0h19.5A2.252 2.252 0 0124 2.25v15a2.252 2.252 0 01-2.25 2.25h-5.865l.5 3H18a.75.75 0 010 1.5H6zm8.865-1.5l-.5-3h-4.73l-.5 3h5.73zM2.25 1.5a.75.75 0 00-.75.75v15c0 .414.336.75.75.75h19.5a.75.75 0 00.75-.75v-15a.75.75 0 00-.75-.75H2.25z"}}),_c('path',{attrs:{"d":"M9.75 14.25c-.827 0-1.5-.673-1.5-1.5v-2.649l-.27.225a.75.75 0 01-.96-1.152l4.5-3.75a.75.75 0 01.96 0l4.5 3.75a.744.744 0 01.267.508.747.747 0 01-1.227.644l-.27-.225v2.649c0 .827-.673 1.5-1.5 1.5h-4.5zm0-1.5h4.5V8.851L12 6.976 9.75 8.851v3.899z"}})])
          )
        }
      }
    