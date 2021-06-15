
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
            children.concat([_c('path',{attrs:{"d":"M8.25 24A2.252 2.252 0 016 21.75v-.827a3.743 3.743 0 01-3-3.673V6.75a3.743 3.743 0 013-3.673V2.25A2.252 2.252 0 018.25 0h7.5A2.252 2.252 0 0118 2.25v.827c1.732.351 3 1.874 3 3.673v10.5a3.743 3.743 0 01-3 3.673v.827A2.252 2.252 0 0115.75 24h-7.5zm-.75-2.25c0 .414.336.75.75.75h7.5a.75.75 0 00.75-.75V21h-9v.75zM6.75 4.5A2.252 2.252 0 004.5 6.75v10.5a2.252 2.252 0 002.25 2.25h10.5a2.252 2.252 0 002.25-2.25V6.75a2.252 2.252 0 00-2.25-2.25H6.75zM16.5 3v-.75a.75.75 0 00-.75-.75h-7.5a.75.75 0 00-.75.75V3h9z"}}),_c('path',{attrs:{"d":"M9 15.75a.747.747 0 01-.693-.463.745.745 0 01.163-.817l4.72-4.719H9A.75.75 0 019 8.25h6a.75.75 0 01.53 1.281l-4.72 4.72H15a.75.75 0 010 1.5H9z"}})])
          )
        }
      }
    