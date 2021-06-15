
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
            children.concat([_c('path',{attrs:{"d":"M12 24a.75.75 0 01-.75-.75V21h-.75a2.252 2.252 0 01-2.25-2.25v-3h-3A2.252 2.252 0 013 13.5v-.75H.75a.75.75 0 010-1.5H3v-.75a2.252 2.252 0 012.25-2.25h3v-3A2.252 2.252 0 0110.5 3h.75V.75a.75.75 0 011.5 0V3h.75a2.252 2.252 0 012.25 2.25v3h3A2.252 2.252 0 0121 10.5v.75h2.25a.75.75 0 010 1.5H21v.75a2.252 2.252 0 01-2.25 2.25h-3v3A2.252 2.252 0 0113.5 21h-.75v2.25A.75.75 0 0112 24zM5.25 9.75a.75.75 0 00-.75.75v3c0 .414.336.75.75.75H9a.75.75 0 01.75.75v3.75c0 .414.336.75.75.75h3a.75.75 0 00.75-.75V15a.75.75 0 01.75-.75h3.75a.75.75 0 00.75-.75v-3a.75.75 0 00-.75-.75H15a.75.75 0 01-.75-.75V5.25a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V9a.75.75 0 01-.75.75H5.25z"}})])
          )
        }
      }
    