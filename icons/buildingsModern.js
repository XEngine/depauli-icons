
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
            children.concat([_c('path',{attrs:{"d":"M.75 24a.75.75 0 010-1.5h.75V6a1.497 1.497 0 01.789-1.321l1.461-.786V.75a.75.75 0 011.5 0v2.336L10.539.24a1.501 1.501 0 012.211 1.317V22.5h1.5V9a1.493 1.493 0 011.5-1.5c.337 0 .656.11.921.317l2.828 2.2V8.25a.75.75 0 011.501 0v2.933l.92.716c.368.286.58.718.58 1.184V22.5h.75a.75.75 0 010 1.5H.75zM21 22.5v-9.417L15.75 9v3.75h1.5a.75.75 0 010 1.5h-1.5v1.5h3a.75.75 0 010 1.5h-3v5.25H21zm-9.75 0V12H6a.75.75 0 010-1.5h5.25V9H7.5a.75.75 0 010-1.5h3.75V1.558L3 6v16.5h2.25v-2.25C5.25 19.009 6.259 18 7.5 18s2.25 1.009 2.25 2.25v2.25h1.5zm-3 0v-2.25a.75.75 0 00-1.5 0v2.25h1.5z"}})])
          )
        }
      }
    