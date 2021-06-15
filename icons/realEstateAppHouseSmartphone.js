
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
            children.concat([_c('path',{attrs:{"d":"M7.5 24a3.754 3.754 0 01-3.75-3.75V3.75A3.754 3.754 0 017.5 0h9a3.754 3.754 0 013.75 3.75v16.5A3.754 3.754 0 0116.5 24h-9zm-2.25-3.75A2.252 2.252 0 007.5 22.5h9a2.252 2.252 0 002.25-2.25v-.75H5.25v.75zM18.75 18V3.75A2.252 2.252 0 0016.5 1.5h-9a2.252 2.252 0 00-2.25 2.25V18h13.5z"}}),_c('path',{attrs:{"d":"M9.75 14.25c-.827 0-1.5-.673-1.5-1.5v-2.649l-.27.225a.747.747 0 01-1.056-.096.75.75 0 01.096-1.056l4.5-3.75a.75.75 0 01.96 0l4.5 3.75a.744.744 0 01.267.508.747.747 0 01-1.227.644l-.27-.225v2.649c0 .827-.673 1.5-1.5 1.5h-4.5zm0-1.5h4.5V8.851L12 6.976 9.75 8.851v3.899z"}})])
          )
        }
      }
    