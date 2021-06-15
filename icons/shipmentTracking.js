
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
            children.concat([_c('path',{attrs:{"d":"M2.25 24A2.252 2.252 0 010 21.75V2.25A2.252 2.252 0 012.25 0h19.5A2.252 2.252 0 0124 2.25v19.5A2.252 2.252 0 0121.75 24H2.25zm0-22.5a.75.75 0 00-.75.75v19.5c0 .414.336.75.75.75h19.5a.75.75 0 00.75-.75V2.25a.75.75 0 00-.75-.75H16.5v7.663a1.276 1.276 0 01-1.285 1.274c-.216 0-.429-.054-.617-.155L12.007 9.08 9.36 10.366a1.273 1.273 0 01-.573.136c-.232 0-.461-.063-.663-.183A1.279 1.279 0 017.5 9.228V1.5H2.25zM9 8.873l2.672-1.298a.76.76 0 01.643-.006L15 8.815V1.5H9v7.373z"}}),_c('path',{attrs:{"d":"M12.75 21a.75.75 0 01-.75-.75V16.5a.75.75 0 01.75-.75h7.5a.75.75 0 01.75.75v3.75a.75.75 0 01-.75.75h-7.5zm6.75-1.5v-2.25h-6v2.25h6z"}})])
          )
        }
      }
    