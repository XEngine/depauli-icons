
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
            children.concat([_c('path',{attrs:{"d":"M21.75 24a.75.75 0 01-.75-.75V6.75a5.256 5.256 0 00-5.25-5.25H9v3h3.75A2.252 2.252 0 0115 6.75v12A2.252 2.252 0 0112.75 21H9v2.25a.75.75 0 01-1.5 0V21H3.75a2.252 2.252 0 01-2.25-2.25v-12A2.252 2.252 0 013.75 4.5H7.5v-3H5.25a.75.75 0 010-1.5h10.5a6.758 6.758 0 016.75 6.75v16.5a.75.75 0 01-.75.75zM3 18.75c0 .414.336.75.75.75h9a.75.75 0 00.75-.75V9H3v9.75zM13.5 7.5v-.75a.75.75 0 00-.75-.75h-9a.75.75 0 00-.75.75v.75h10.5z"}}),_c('path',{attrs:{"d":"M8.25 18c-1.654 0-3-1.346-3-3 0-1.456 2.034-3.797 2.442-4.251.139-.155.342-.243.558-.243s.419.089.558.243c.408.454 2.442 2.795 2.442 4.251 0 1.654-1.346 3-3 3zm0-5.587c-.885 1.107-1.5 2.159-1.5 2.587 0 .827.673 1.5 1.5 1.5s1.5-.673 1.5-1.5c0-.429-.615-1.481-1.5-2.587z"}})])
          )
        }
      }
    