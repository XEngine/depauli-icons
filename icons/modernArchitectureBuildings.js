
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
            children.concat([_c('path',{attrs:{"d":"M.75 24a.75.75 0 010-1.5h.75V9.116a2.256 2.256 0 011.116-1.948L10.5 2.569V.75a.75.75 0 011.5 0v9a.75.75 0 01-.75.75h-.75v3h.75a.75.75 0 01.75.75v8.25h3v-5.25a.75.75 0 01.75-.75h.75v-2.25h-.75a.75.75 0 01-.75-.75V5.25a.75.75 0 011.5 0v1.877l5.234 4.592a2.25 2.25 0 01.766 1.692V22.5h.75a.75.75 0 010 1.5H.75zM21 22.5v-9.089a.748.748 0 00-.256-.564L16.5 9.123v3.627h.75a.75.75 0 01.75.75v3.75a.75.75 0 01-.75.75h-.75v1.5h2.25a.75.75 0 010 1.5H16.5v1.5H21zm-10.5 0V21H6.75a.75.75 0 010-1.5h3.75V18H6.75a.75.75 0 010-1.5h3.75V15h-.75a.75.75 0 01-.75-.75v-4.5A.75.75 0 019.75 9h.75V4.306L3.372 8.464a.751.751 0 00-.372.65V22.5h7.5z"}})])
          )
        }
      }
    