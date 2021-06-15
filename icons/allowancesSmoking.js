
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
            children.concat([_c('path',{attrs:{"d":"M3.75 22.5a.75.75 0 01-.75-.75v-6a.75.75 0 01.75-.75h18A2.252 2.252 0 0124 17.25v3a2.252 2.252 0 01-2.25 2.25h-18zm18-1.5a.75.75 0 00.75-.75v-3a.75.75 0 00-.75-.75H16.5V21h5.25zM15 21v-4.5H4.5V21H15zM.75 22.5a.75.75 0 01-.75-.75v-6a.75.75 0 011.5 0v6a.75.75 0 01-.75.75zM.75 10.5A.75.75 0 010 9.75C0 7.682 1.682 6 3.75 6S7.5 4.318 7.5 2.25a.75.75 0 011.5 0A5.256 5.256 0 013.75 7.5 2.252 2.252 0 001.5 9.75a.75.75 0 01-.75.75z"}}),_c('path',{attrs:{"d":"M3.75 12a.75.75 0 010-1.5C8.299 10.5 12 6.799 12 2.25a.75.75 0 011.5 0C13.5 7.626 9.126 12 3.75 12z"}})])
          )
        }
      }
    