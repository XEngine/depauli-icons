
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
            children.concat([_c('path',{attrs:{"d":"M3.375 24c-1.654 0-3-1.346-3-3V3.75A3.754 3.754 0 014.125 0h14.25c.827 0 1.5.673 1.5 1.5v6.75a.75.75 0 01-1.5 0V1.5H4.125a2.252 2.252 0 00-2.25 2.25v14.651a2.983 2.983 0 011.5-.401h7.5a.75.75 0 010 1.5h-7.5c-.827 0-1.5.673-1.5 1.5s.673 1.5 1.5 1.5h10.5a.75.75 0 010 1.5h-10.5z"}}),_c('circle',{attrs:{"cx":"18.375","cy":"15.824","r":"1.125"}}),_c('path',{attrs:{"d":"M18.373 24a1.483 1.483 0 01-1.179-.576c-1.856-2.373-4.068-5.618-4.068-7.6 0-2.895 2.355-5.25 5.25-5.25s5.25 2.355 5.25 5.25c0 1.979-2.212 5.225-4.068 7.6a1.493 1.493 0 01-1.185.576zm.002-11.926a3.754 3.754 0 00-3.75 3.75c0 1.161 1.437 3.719 3.75 6.676 2.313-2.959 3.75-5.517 3.75-6.676a3.754 3.754 0 00-3.75-3.75z"}})])
          )
        }
      }
    