
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
            children.concat([_c('path',{attrs:{"d":"M4.5 11.25a.75.75 0 010-1.5H6a.75.75 0 010 1.5H4.5zM18 11.25a.75.75 0 010-1.5h1.5a.75.75 0 010 1.5H18zM5.25 20.25a.75.75 0 01-.75-.75V18A.75.75 0 016 18v1.5a.75.75 0 01-.75.75zM18.75 20.25a.75.75 0 01-.75-.75V18a.75.75 0 011.5 0v1.5a.75.75 0 01-.75.75z"}}),_c('path',{attrs:{"d":"M17.25 23.25A2.252 2.252 0 0115 21v-5.25h-.75a.75.75 0 010-1.5H15c0-1.654-1.346-3-3-3s-3 1.346-3 3h.75a.75.75 0 010 1.5H9V21a2.252 2.252 0 01-2.25 2.25h-3A2.252 2.252 0 011.5 21v-5.25H.75a.75.75 0 010-1.5h.75v-6H.75a.75.75 0 010-1.5h.75v-1.5h-.25C.561 5.25 0 4.689 0 4V2C0 1.311.561.75 1.25.75h21.5C23.439.75 24 1.311 24 2v2c0 .689-.561 1.25-1.25 1.25h-.25v1.5h.75a.75.75 0 010 1.5h-.75v6h.75a.75.75 0 010 1.5h-.75V21a2.252 2.252 0 01-2.25 2.25h-3zM16.5 21c0 .414.336.75.75.75h3A.75.75 0 0021 21v-5.25h-4.5V21zM3 21c0 .414.336.75.75.75h3A.75.75 0 007.5 21v-5.25H3V21zm18-6.75v-6H3v6h4.5c0-2.481 2.019-4.5 4.5-4.5s4.5 2.019 4.5 4.5H21zm0-7.5v-1.5H3v1.5h18zm1.5-3v-1.5h-21v1.5h21z"}})])
          )
        }
      }
    